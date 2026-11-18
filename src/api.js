import axios from 'axios';

/*
|--------------------------------------------------------------------------
| API BASE URL (FROM ENV)
|-------------------------------------------------------------------------- 
*/

// Keep the API host in one place. VITE_API_URL can override this per
// deployment; the default is the production backend used by blog media.
export const BASE_URL = (
  import.meta.env.VITE_API_URL ||
  'https://api.shardulraojadhavarcollegeoflaw.com/api'
).replace(/\/+$/, '');
export const API_ORIGIN = BASE_URL.replace(/\/api$/, '');

export const apiAssetUrl = (path) => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_ORIGIN}${path.startsWith('/') ? '' : '/'}${path}`;
};

// Create axios instance
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Video uploads can take several minutes on slower connections.
  timeout: 0,
});
/*
|--------------------------------------------------------------------------
| REQUEST INTERCEPTOR – ADD JWT TOKEN
|--------------------------------------------------------------------------
*/
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/*
|--------------------------------------------------------------------------
| RESPONSE INTERCEPTOR – ERROR HANDLING
|--------------------------------------------------------------------------
*/
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Network error
    if (!error.response) {
      console.error('Network error:', error.message);
      alert('Network error. Please check your internet connection.');
      return Promise.reject(error);
    }

    // Unauthorized
    if (error.response.status === 401) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminInfo');
      window.location.href = '/admin/login';
    }

    const errorMessage =
      error.response?.data?.error ||
      error.response?.data?.message ||
      'An unexpected error occurred';

    console.error('API Error:', {
      status: error.response.status,
      message: errorMessage,
      url: error.config.url,
    });

    return Promise.reject(error);
  }
);

/*
|--------------------------------------------------------------------------
| ADMIN API
|--------------------------------------------------------------------------
*/
export const adminAPI = {
  login: (credentials) => API.post('/admin/login', credentials),
  getProfile: () => API.get('/admin/profile'),
  createAdmin: (data) => API.post('/admin/create', data),
};

/*
|--------------------------------------------------------------------------
| ADMISSION API
|--------------------------------------------------------------------------
*/
export const admissionAPI = {
  submit: (formData) => API.post('/admission/submit', formData),
  getAll: () => API.get('/admission/all'),
  getById: (id) => API.get(`/admission/${id}`),
  getExcelData: () => API.get('/admission/excel-data'),
  downloadExcel: () => API.get('/admission/download-excel', { responseType: 'blob' }),
};

/*
|--------------------------------------------------------------------------
| CAREER API
|--------------------------------------------------------------------------
*/
export const careerAPI = {
  getAll: () => API.get("/careers"),
  getById: (id) => API.get(`/careers/${id}`),
  create: (data) => API.post("/careers", data),
  update: (id, data) => API.put(`/careers/${id}`, data),
  delete: (id) => API.delete(`/careers/${id}`),
  getAllAdmin: () => API.get("/careers/admin/all"),
};

/*
|--------------------------------------------------------------------------
| GALLERY API
|--------------------------------------------------------------------------
*/
export const galleryAPI = {
  getAll: () => API.get('/gallery'),
  getById: (id) => API.get(`/gallery/${id}`),
  create: (formData) =>
    API.post('/gallery', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  update: (id, formData) =>
    API.put(`/gallery/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  delete: (id) => API.delete(`/gallery/${id}`),
  getAllAdmin: () => API.get('/gallery/admin/all'),
};

/* VIDEO API */
export const videoAPI = {
  getAll: () => API.get('/videos'),
  getById: (id) => API.get(`/videos/${id}`),
  getAllAdmin: () => API.get('/videos/admin/all'),
  create: (formData, onUploadProgress) =>
    API.post('/videos', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress,
    }),
  update: (id, formData, onUploadProgress) =>
    API.put(`/videos/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress,
    }),
  delete: (id) => API.delete(`/videos/${id}`),
};

/*
|--------------------------------------------------------------------------
| ANNOUNCEMENT API
|--------------------------------------------------------------------------
*/
export const announcementAPI = {
  getAll: () => API.get('/announcements'),
  getById: (id) => API.get(`/announcements/${id}`),
  create: (data) => API.post('/announcements', data),
  update: (id, data) => API.put(`/announcements/${id}`, data),
  delete: (id) => API.delete(`/announcements/${id}`),
  getAllAdmin: () => API.get('/announcements/admin/all'),
};
// Add this to your api.js file after the galleryAPI section


/*
|--------------------------------------------------------------------------
| BLOG API
|--------------------------------------------------------------------------
*/
export const blogAPI = {
  getAll: () => API.get('/blogs'),
  getById: (id) => API.get(`/blogs/${id}`),

  create: (formData) =>
    API.post('/blogs', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  update: (id, formData) =>
    API.put(`/blogs/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  // ✅ FIXED ADMIN DELETE ROUTE
  remove: (id) => API.delete(`/blogs/admin/${id}`),

  getAllAdmin: () => API.get('/blogs/admin/all'),
};

/*
|--------------------------------------------------------------------------
| CONTACT API
|--------------------------------------------------------------------------
*/
export const contactAPI = {
  send: (data) => API.post("/contact", data),
};

/*
|--------------------------------------------------------------------------
| MERIT LIST API
|--------------------------------------------------------------------------
*/
export const meritListAPI = {
  getAll: () => API.get('/merit-lists'),
  pdfUrl: (id) => `${BASE_URL}/merit-lists/${id}/pdf`,
  create: (formData) => API.post('/merit-lists', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  update: (id, formData) => API.put(`/merit-lists/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  delete: (id) => API.delete(`/merit-lists/${id}`),
};

/*
|--------------------------------------------------------------------------
| HEALTH CHECK
|--------------------------------------------------------------------------
*/
// The backend has no /test route. HEAD checks a known public route without
// downloading the full blogs response.
export const checkAPIHealth = () => API.head('/blogs');

export default API;
