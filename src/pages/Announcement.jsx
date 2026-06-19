import React, { useState, useEffect } from 'react';
import { announcementAPI } from '../api';

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await announcementAPI.getAll();
      
      // Robust data extraction - handle different response structures
      let announcementData = [];
      
      if (response && response.data) {
        // If response.data is directly an array
        if (Array.isArray(response.data)) {
          announcementData = response.data;
        } 
        // If response.data has a data property that's an array
        else if (response.data.data && Array.isArray(response.data.data)) {
          announcementData = response.data.data;
        }
        // If response.data has an announcements property that's an array
        else if (response.data.announcements && Array.isArray(response.data.announcements)) {
          announcementData = response.data.announcements;
        }
        // If response.data is an object, try to find any array property
        else if (typeof response.data === 'object' && response.data !== null) {
          const arrayProps = Object.values(response.data).filter(val => Array.isArray(val));
          if (arrayProps.length > 0) {
            announcementData = arrayProps[0];
          } else {
            console.warn('No array found in response data:', response.data);
            announcementData = [];
          }
        } else {
          console.warn('Unexpected response format:', response);
          announcementData = [];
        }
      } else {
        console.warn('No data received from API');
        announcementData = [];
      }
      
      setAnnouncements(announcementData);
    } catch (error) {
      console.error('Error fetching announcements:', error);
      setError('Failed to load announcements. Please try again later.');
      setAnnouncements([]);
    } finally {
      setLoading(false);
    }
  };

  // Safely filter announcements - ensure announcements is an array
  const filteredAnnouncements = Array.isArray(announcements) 
    ? filter === 'all' 
      ? announcements 
      : announcements.filter(announcement => announcement && announcement.type === filter)
    : [];

  const getTypeBadgeClass = (type) => {
    if (!type) return 'bg-gray-100 text-gray-800';
    switch (type.toLowerCase()) {
      case 'important':
        return 'bg-red-100 text-red-800';
      case 'event':
        return 'bg-blue-100 text-blue-800';
      case 'general':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Loading state with better UI
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading announcements...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => {
              setError(null);
              fetchAnnouncements();
            }} 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800">Announcements</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {['all', 'general', 'important', 'event'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 py-2 rounded transition ${
                filter === filterType 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </div>

        {/* Announcements List */}
        {!Array.isArray(filteredAnnouncements) || filteredAnnouncements.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500 text-lg">
              {filter === 'all' 
                ? 'No announcements found.' 
                : `No ${filter} announcements found.`}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredAnnouncements.map((announcement) => (
              <div key={announcement._id || announcement.id || Math.random().toString()} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {announcement.title || 'Untitled Announcement'}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      {announcement.type && (
                        <span className={`px-2 py-1 rounded text-sm font-medium ${getTypeBadgeClass(announcement.type)}`}>
                          {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                        </span>
                      )}
                      <span className="text-gray-500 text-sm">
                        Posted: {announcement.createdAt 
                          ? new Date(announcement.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })
                          : 'Recent'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-line">
                    {announcement.content || 'No content available.'}
                  </p>
                </div>

                {(announcement.startDate || announcement.endDate) && (
                  <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                    <div className="flex flex-wrap justify-between gap-2">
                      {announcement.startDate && (
                        <span>
                          Valid from: {new Date(announcement.startDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      )}
                      {announcement.endDate && (
                        <span>
                          Until: {new Date(announcement.endDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Announcement;