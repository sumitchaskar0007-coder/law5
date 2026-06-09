import React, { useState } from 'react';
import { CheckCircle, X, Loader2 } from 'lucide-react';
import { admissionAPI } from '../api';

const EnquiryModal = ({ isOpen, onClose, onSubmit, type }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: 'BA_LLB',
    year: '2026',
    message: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    tenthPercentage: '',
    twelfthPercentage: '',
    twelfthStream: 'Science',
    board: 'State Board',
    category: 'General',
    dateOfBirth: '',
    gender: 'Male',
    guardianName: '',
    guardianPhone: '',
    howDidYouHear: 'Website'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formType, setFormType] = useState(type || 'enquiry');
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (submitError) setSubmitError(null);
  };

  const validateForm = () => {
    // Basic validation
    if (!formData.firstName || !formData.lastName) {
      setSubmitError('Please enter your full name');
      return false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitError('Please enter a valid email address');
      return false;
    }
    if (!formData.phone || formData.phone.length < 10) {
      setSubmitError('Please enter a valid phone number');
      return false;
    }
    if (formType === 'enquiry' && !formData.message) {
      setSubmitError('Please enter your enquiry');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Add form type to data
      const submitData = {
        ...formData,
        formType: formType,
        // Convert empty strings to undefined for optional fields
        dateOfBirth: formData.dateOfBirth || undefined,
        tenthPercentage: formData.tenthPercentage ? parseFloat(formData.tenthPercentage) : undefined,
        twelfthPercentage: formData.twelfthPercentage ? parseFloat(formData.twelfthPercentage) : undefined,
        address: formData.address || undefined,
        city: formData.city || undefined,
        state: formData.state || undefined,
        pincode: formData.pincode || undefined,
        guardianName: formData.guardianName || undefined,
        guardianPhone: formData.guardianPhone || undefined,
        howDidYouHear: formData.howDidYouHear || undefined
      };
      
      // Send to backend
      const response = await admissionAPI.submit(submitData);
      
      if (response.data.success) {
        // Call the onSubmit prop if provided (for parent component)
        if (onSubmit) onSubmit(submitData);
        
        // Show success message
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          course: 'BA_LLB',
          year: '2026',
          message: '',
          address: '',
          city: '',
          state: '',
          pincode: '',
          tenthPercentage: '',
          twelfthPercentage: '',
          twelfthStream: 'Science',
          board: 'State Board',
          category: 'General',
          dateOfBirth: '',
          gender: 'Male',
          guardianName: '',
          guardianPhone: '',
          howDidYouHear: 'Website'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Handle different types of errors
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setSubmitError(
          error.response.data.error || 
          error.response.data.message || 
          'Server error. Please try again later.'
        );
      } else if (error.request) {
        // The request was made but no response was received
        setSubmitError('Network error. Please check your internet connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setSubmitError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    onClose();
  };

  const handleSwitchForm = (newType) => {
    setFormType(newType);
    setIsSubmitted(false);
    setSubmitError(null);
    // Reset form when switching
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: 'BA_LLB',
      year: '2026',
      message: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      tenthPercentage: '',
      twelfthPercentage: '',
      twelfthStream: 'Science',
      board: 'State Board',
      category: 'General',
      dateOfBirth: '',
      gender: 'Male',
      guardianName: '',
      guardianPhone: '',
      howDidYouHear: 'Website'
    });
  };

  if (!isOpen) return null;

  // Success View
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full mx-auto animate-fadeIn">
          <div className="p-8 text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Thank You for Your {formType === 'admission' ? 'Application' : 'Enquiry'}!
            </h3>
            <p className="text-gray-600 mb-6">
              {formType === 'admission' 
                ? 'Your application for the 5-Year B.A. LL.B program has been successfully submitted. Our admission team will review your details and contact you within 2-3 working days.'
                : 'Your enquiry has been received. Our team will get back to you within 24 hours.'
              }
            </p>
            <div className="space-y-4">
              <button
                onClick={handleClose}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  handleSwitchForm(formType === 'admission' ? 'enquiry' : 'admission');
                }}
                className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit {formType === 'admission' ? 'Another Enquiry' : 'Admission Application'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Form View
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full mx-auto my-8 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {formType === 'admission' ? 'Apply Now - 5-Year B.A. LL.B Program' : 'Admission Enquiry'}
            </h3>
            <p className="text-gray-600 mt-1">
              {formType === 'admission' 
                ? 'Fill out the application form for 2026 admissions'
                : 'Get detailed information about our 5-Year Integrated Law Program'
              }
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form Type Switcher */}
        <div className="border-b">
          <div className="flex">
            <button
              onClick={() => handleSwitchForm('enquiry')}
              className={`flex-1 py-4 text-center font-medium transition-colors focus:outline-none ${
                formType === 'enquiry'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
              aria-pressed={formType === 'enquiry'}
            >
              Quick Enquiry
            </button>
            <button
              onClick={() => handleSwitchForm('admission')}
              className={`flex-1 py-4 text-center font-medium transition-colors focus:outline-none ${
                formType === 'admission'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
              aria-pressed={formType === 'admission'}
            >
              Full Application
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 max-h-[70vh] overflow-y-auto">
          {/* Error Message */}
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-600 text-sm">{submitError}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Personal Information</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter first name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter last name"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="+91 9876543210"
                  disabled={isSubmitting}
                />
              </div>

              {formType === 'admission' && (
                <>
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      disabled={isSubmitting}
                      max={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      disabled={isSubmitting}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            {/* Academic Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Academic Information</h4>
              
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                  Program Interested <span className="text-red-500">*</span>
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  disabled={isSubmitting}
                >
                  <option value="BA_LLB">5-Year B.A. LL.B Integrated Program</option>
                  <option value="BBA_LLB">5-Year B.B.A. LL.B Integrated Program</option>
                  <option value="BCom_LLB">5-Year B.Com LL.B Integrated Program</option>
                </select>
              </div>

              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                  Admission Year <span className="text-red-500">*</span>
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  disabled={isSubmitting}
                >
                  <option value="2026">2026-27</option>
                  <option value="2025">2025-26</option>
                </select>
              </div>

              {formType === 'admission' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="tenthPercentage" className="block text-sm font-medium text-gray-700 mb-1">
                        10th Percentage <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="tenthPercentage"
                        name="tenthPercentage"
                        value={formData.tenthPercentage}
                        onChange={handleInputChange}
                        required
                        min="0"
                        max="100"
                        step="0.01"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="e.g., 85.5"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="twelfthPercentage" className="block text-sm font-medium text-gray-700 mb-1">
                        12th Percentage <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="twelfthPercentage"
                        name="twelfthPercentage"
                        value={formData.twelfthPercentage}
                        onChange={handleInputChange}
                        required
                        min="0"
                        max="100"
                        step="0.01"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="e.g., 78.2"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="twelfthStream" className="block text-sm font-medium text-gray-700 mb-1">
                        12th Stream <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="twelfthStream"
                        name="twelfthStream"
                        value={formData.twelfthStream}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        disabled={isSubmitting}
                      >
                        <option value="Science">Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Arts">Arts</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        disabled={isSubmitting}
                      >
                        <option value="General">General</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="OBC">OBC</option>
                        <option value="EWS">EWS</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="board" className="block text-sm font-medium text-gray-700 mb-1">
                      Board/University <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="board"
                      name="board"
                      value={formData.board}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      disabled={isSubmitting}
                    >
                      <option value="State Board">State Board</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="NIOS">NIOS</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            {/* Additional Fields for Admission Form */}
            {formType === 'admission' && (
              <>
                {/* Address Information */}
                <div className="space-y-4 md:col-span-2">
                  <h4 className="font-semibold text-gray-900">Address Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows="2"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Enter complete address"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="City"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="State"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                        Pincode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Pincode"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                {/* Guardian Information */}
                <div className="space-y-4 md:col-span-2">
                  <h4 className="font-semibold text-gray-900">Guardian Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guardianName" className="block text-sm font-medium text-gray-700 mb-1">
                        Guardian Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="guardianName"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Guardian's full name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="guardianPhone" className="block text-sm font-medium text-gray-700 mb-1">
                        Guardian Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="guardianPhone"
                        name="guardianPhone"
                        value={formData.guardianPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Guardian's phone number"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Message/Enquiry */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {formType === 'admission' ? 'Additional Information' : 'Your Enquiry '}
                {formType === 'enquiry' && <span className="text-red-500">*</span>}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required={formType === 'enquiry'}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder={
                  formType === 'admission'
                    ? 'Any additional information or questions...'
                    : 'Please describe your enquiry in detail...'
                }
                disabled={isSubmitting}
              />
            </div>

            {/* How did you hear about us */}
            {formType === 'admission' && (
              <div className="md:col-span-2">
                <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-1">
                  How did you hear about us? <span className="text-red-500">*</span>
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  disabled={isSubmitting}
                >
                  <option value="Website">College Website</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Newspaper">Newspaper Advertisement</option>
                  <option value="Friend">Friend/Relative</option>
                  <option value="Seminar">Educational Seminar</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            )}
          </div>

          {/* Form Footer */}
          <div className="mt-8 space-y-4">
            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  `Submit ${formType === 'admission' ? 'Application' : 'Enquiry'}`
                )}
              </button>
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>

            {/* Privacy Policy */}
            <p className="text-sm text-gray-500 text-center">
              By submitting this form, you agree to our Privacy Policy and consent to being contacted by our admission team.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;