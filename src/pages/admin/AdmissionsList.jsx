import React, { useState, useEffect } from 'react';
import { admissionAPI } from '../../api';
import { Download, Filter, Calendar, PieChart } from 'lucide-react';

const AdmissionsList = () => {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [filters, setFilters] = useState({
    formType: '',
    startDate: '',
    endDate: '',
    page: 1
  });
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0,
    pages: 1
  });

  useEffect(() => {
    fetchAdmissions();
    fetchStats();
  }, [filters.page, filters.formType]);

  const fetchAdmissions = async () => {
    setLoading(true);
    try {
      const response = await admissionAPI.getAll({
        formType: filters.formType || undefined,
        startDate: filters.startDate || undefined,
        endDate: filters.endDate || undefined,
        page: filters.page,
        limit: 20
      });
      
      setAdmissions(response.data.data);
      setPagination(response.data.pagination);
    } catch (error) {
      console.error('Error fetching admissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await admissionAPI.getStats();
      setStats(response.data.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleDownloadExcel = async () => {
    try {
      const response = await admissionAPI.downloadExcel();
      
      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `admissions_${new Date().toISOString().split('T')[0]}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading Excel:', error);
      alert('Failed to download Excel file');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading && !admissions.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admissions & Enquiries</h1>
        <p className="text-gray-600 mt-2">Manage all form submissions</p>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Submissions</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <PieChart className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Applications</p>
                <p className="text-2xl font-bold text-gray-900">{stats.applications}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <PieChart className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Enquiries</p>
                <p className="text-2xl font-bold text-gray-900">{stats.enquiries}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <PieChart className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Today's Submissions</p>
                <p className="text-2xl font-bold text-gray-900">{stats.today}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters and Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            <select
              value={filters.formType}
              onChange={(e) => setFilters({ ...filters, formType: e.target.value, page: 1 })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Types</option>
              <option value="admission">Full Applications</option>
              <option value="enquiry">Quick Enquiries</option>
            </select>
            
            <input
              type="date"
              value={filters.startDate}
              onChange={(e) => setFilters({ ...filters, startDate: e.target.value, page: 1 })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Start Date"
            />
            
            <input
              type="date"
              value={filters.endDate}
              onChange={(e) => setFilters({ ...filters, endDate: e.target.value, page: 1 })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="End Date"
            />
            
            <button
              onClick={() => {
                setFilters({ formType: '', startDate: '', endDate: '', page: 1 });
                fetchAdmissions();
              }}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Clear Filters
            </button>
          </div>
          
          <button
            onClick={handleDownloadExcel}
            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download className="h-5 w-5" />
            Download Excel
          </button>
        </div>
      </div>

      {/* Admissions Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {admissions.map((admission) => (
                <tr key={admission._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(admission.submittedAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      admission.formType === 'admission'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {admission.formType === 'admission' ? 'Application' : 'Enquiry'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {admission.firstName} {admission.lastName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{admission.email}</div>
                    <div className="text-sm text-gray-500">{admission.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admission.course.replace('_', ' ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admission.formType === 'admission' && (
                      <div>
                        10th: {admission.tenthPercentage}% | 12th: {admission.twelfthPercentage}%
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {((pagination.page - 1) * 20) + 1} to {Math.min(pagination.page * 20, pagination.total)} of {pagination.total} results
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilters({ ...filters, page: filters.page - 1 })}
                disabled={filters.page === 1}
                className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-50"
              >
                Previous
              </button>
              <button
                onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
                disabled={filters.page === pagination.pages}
                className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionsList;