import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
// import AdmissionForm from "./components/ApplicationForm1.jsx";
import Addmission from "./pages/Admission.jsx";
import Application from './pages/Application';

// Components
import Header from './components/Header1.jsx';
import Footer from './components/Footer.jsx';
import FloatingEnquiryButton from './components/FloatingEnquiryButton.jsx';
// import EnquiryModal from './components/EnquiryModal.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import Blog from './pages/Blog.jsx';
import BlogAdmin from './pages/admin/BlogAdmin.jsx';
import BlogDetail from './pages/BlogDetail.jsx';

// Public pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Admission from './pages/Admission.jsx';
import Academics from './pages/Academics.jsx';
import Gallery from './pages/Gallery.jsx';
import Videos from './pages/Videos.jsx';
import Announcement from './pages/Announcement.jsx';
import Career from './pages/Career.jsx';
import LegalAid from './pages/LegalAid.jsx';
import Library from './pages/Library.jsx';
import MootCourt from './pages/MootCourt.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Facilities from './pages/Facilities.jsx';
import Udan from './pages/Udan.jsx';
import UdanBook from "./pages/UdanBook";
import MeritList from './pages/MeritList.jsx';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import GalleryAdmin from './pages/admin/GalleryAdmin.jsx';
import VideoAdmin from './pages/admin/VideoAdmin.jsx';
import AnnouncementAdmin from './pages/admin/AnnouncementAdmin.jsx';
import CareerAdmin from './pages/admin/CareerAdmin.jsx';
import MeritListAdmin from './pages/admin/MeritListAdmin.jsx';
import Cells from './pages/Cells.jsx';
import ApplicationForm from './components/ApplicationForm1.jsx';
import { ImageOff } from 'lucide-react';
// ... other imports remain the same ...

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = React.useState(false);

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        
        {/* Header */}
        <Header onEnquiryClick={() => setEnquiryOpen(true)} />

        {/* Main Routes */}
        <main className="flex-1">
          <Routes>
            {/* ---------------- PUBLIC ROUTES ---------------- */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admission />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/legalaid" element={<LegalAid />} />
            <Route path="/library" element={<Library />} />
            <Route path="/moot" element={<MootCourt />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cells" element={<Cells />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/udan" element={<Udan />} />
            <Route path="/udan/:id" element={<UdanBook />} />
            <Route path="/merit-list" element={<MeritList />} />
            
            {/* FIXED: Blog routes - using slug instead of id */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            
            <Route path="/addmission" element={<Addmission />} />
            <Route path="/apply" element={<Application />} />

            {/* ---------------- ADMIN ROUTES ---------------- */}
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/gallery"
              element={
                <ProtectedRoute>
                  <GalleryAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/videos"
              element={
                <ProtectedRoute>
                  <VideoAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/announcements"
              element={
                <ProtectedRoute>
                  <AnnouncementAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/careers"
              element={
                <ProtectedRoute>
                  <CareerAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/merit-lists"
              element={
                <ProtectedRoute>
                  <MeritListAdmin />
                </ProtectedRoute>
              }
            />
            
           <Route
              path="/admin/blogs"
              element={
                <ProtectedRoute>
                  <BlogAdmin />
                </ProtectedRoute>
              }
            />

            {/* ---------------- REDIRECTS ---------------- */}
            <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Enquiry Button */}
        <FloatingEnquiryButton onClick={() => setEnquiryOpen(true)} />
      </div>
    </AuthProvider>
  );
}
