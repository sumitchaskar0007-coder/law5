import React, { useState } from "react";
import { admissionAPI } from '../api';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    // Academic
    academicYearFrom: "",
    academicYearTo: "",
    course: "",
    medium: "",
    
    // Personal
    surname: "",
    firstName: "",
    fatherName: "",
    nameDevnagari: "",
    motherName: "",
    sex: "",
    nameChange: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    maritalStatus: "",
    bloodGroup: "",
    motherTongue: "",
    nationality: "",
    religion: "",
    region: "",
    aadhar: "",
    cast: "",
    category: "",
    categoryOther: "",
    creamyLayer: "",
    otherLanguages: "",
    
    // Address
    presentAddress: "",
    presentPin: "",
    permanentAddress: "",
    permanentPin: "",
    
    // Contact
    studentContact: "",
    phone1: "",
    phone2: "",
    email: "",
    
    // Subjects & College
    subjectsOffered: "",
    lastCollege: "",
    
    // Academic Records
    academic: [
      { exam: "", board: "", year: "", percentage: "" },
      { exam: "", board: "", year: "", percentage: "" },
      { exam: "", board: "", year: "", percentage: "" },
      { exam: "", board: "", year: "", percentage: "" },
      { exam: "", board: "", year: "", percentage: "" },
    ],
    
    // Signatures
    applicantSignature: "",
    parentSignature: "",
    declarationDate: "",
    
    // Office use
    officeMr: "",
    officeBranch: "",
    officeYearFrom: "",
    officeYearTo: "",
    officeClass: "",
    officeDiv: "",
    officeDate: "",
    officeAdmissionSign: "",
    officePrincipalSign: "",
    
    // Undertaking fees
    feesMrMrs: "",
    feesStudentName: "",
    feesFatherName: "",
    feesCourse: "",
    feesMrMrs2: "",
    feesStudentSign: "",
    feesParentSign: "",
    
    // Undertaking attendance
    attendanceName: "",
    attendanceFather: "",
    attendanceClass: "",
    attendanceBranch: "",
    attendanceRollNo: "",
    attendanceParentSign: "",
    attendanceStudentSign: "",
    
    // Fees schedule - structured as array of objects with date and amount
    totalFees: "",
    registrationFees: "",
    feeInstallments: [
      { day: "", month: "", year: "", amount: "" },
      { day: "", month: "", year: "", amount: "" },
      { day: "", month: "", year: "", amount: "" },
      { day: "", month: "", year: "", amount: "" },
      { day: "", month: "", year: "", amount: "" },
    ],
    
    // Final
    finalSignature: "",
    finalDate: "",
    
    // Document files - store file objects
    documents: {
      gradCertificate: null,
      marksheet10: null,
      marksheet12: null,
      leavingCertificate: null,
      migrationCertificate: null,
      gapAffidavit: null,
      photo: null,
      casteCertificate: null,
      marriageCertificate: null,
      aadharCard: null,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear any previous status messages when user starts typing
    setSubmitStatus({ type: '', message: '' });
  };

  const handleAcademicChange = (index, field, value) => {
    const updated = [...formData.academic];
    updated[index][field] = value;
    setFormData(prev => ({ ...prev, academic: updated }));
  };

  const handleFeeInstallmentChange = (index, field, value) => {
    const updated = [...formData.feeInstallments];
    updated[index][field] = value;
    setFormData(prev => ({ ...prev, feeInstallments: updated }));
  };

  const handleFileChange = (e, docName) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: 'File size should be less than 5MB'
        });
        return;
      }
      
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setSubmitStatus({
          type: 'error',
          message: 'Only images, PDFs, and Word documents are allowed'
        });
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [docName]: file,
        },
      }));
    }
  };

  const validateForm = () => {
    // Required fields validation
    const requiredFields = [
      { field: 'academicYearFrom', name: 'Academic Year From' },
      { field: 'academicYearTo', name: 'Academic Year To' },
      { field: 'course', name: 'Course' },
      { field: 'medium', name: 'Medium' },
      { field: 'surname', name: 'Surname' },
      { field: 'firstName', name: 'First Name' },
      { field: 'fatherName', name: 'Father\'s Name' },
      { field: 'motherName', name: 'Mother\'s Name' },
      { field: 'sex', name: 'Sex' },
      { field: 'dobDay', name: 'Date of Birth' },
      { field: 'dobMonth', name: 'Date of Birth' },
      { field: 'dobYear', name: 'Date of Birth' },
      { field: 'nationality', name: 'Nationality' },
      { field: 'religion', name: 'Religion' },
      { field: 'aadhar', name: 'Aadhar Number' },
      { field: 'presentAddress', name: 'Present Address' },
      { field: 'presentPin', name: 'Present PIN' },
      { field: 'studentContact', name: 'Student Contact' },
      { field: 'email', name: 'Email' },
      { field: 'applicantSignature', name: 'Applicant Signature' },
      { field: 'parentSignature', name: 'Parent Signature' },
      { field: 'declarationDate', name: 'Declaration Date' },
    ];

    const missingFields = [];
    requiredFields.forEach(item => {
      if (!formData[item.field]) {
        missingFields.push(item.name);
      }
    });

    // Check academic records (at least first 3 should be filled)
    for (let i = 0; i < 3; i++) {
      const record = formData.academic[i];
      if (!record.exam || !record.board || !record.year || !record.percentage) {
        missingFields.push(`Academic Record ${i + 1} (all fields)`);
        break;
      }
    }

    if (missingFields.length > 0) {
      return {
        valid: false,
        message: `Please fill required fields: ${missingFields.join(', ')}`
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        valid: false,
        message: 'Please enter a valid email address'
      };
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.studentContact)) {
      return {
        valid: false,
        message: 'Please enter a valid 10-digit phone number'
      };
    }

    // Aadhar validation (12 digits)
    const aadharRegex = /^[0-9]{12}$/;
    if (!aadharRegex.test(formData.aadhar.replace(/\s/g, ''))) {
      return {
        valid: false,
        message: 'Please enter a valid 12-digit Aadhar number'
      };
    }

    return { valid: true, message: '' };
  };

  const resetForm = () => {
    setFormData({
      academicYearFrom: "",
      academicYearTo: "",
      course: "",
      medium: "",
      surname: "",
      firstName: "",
      fatherName: "",
      nameDevnagari: "",
      motherName: "",
      sex: "",
      nameChange: "",
      dobDay: "",
      dobMonth: "",
      dobYear: "",
      maritalStatus: "",
      bloodGroup: "",
      motherTongue: "",
      nationality: "",
      religion: "",
      region: "",
      aadhar: "",
      cast: "",
      category: "",
      categoryOther: "",
      creamyLayer: "",
      otherLanguages: "",
      presentAddress: "",
      presentPin: "",
      permanentAddress: "",
      permanentPin: "",
      studentContact: "",
      phone1: "",
      phone2: "",
      email: "",
      subjectsOffered: "",
      lastCollege: "",
      academic: [
        { exam: "", board: "", year: "", percentage: "" },
        { exam: "", board: "", year: "", percentage: "" },
        { exam: "", board: "", year: "", percentage: "" },
        { exam: "", board: "", year: "", percentage: "" },
        { exam: "", board: "", year: "", percentage: "" },
      ],
      applicantSignature: "",
      parentSignature: "",
      declarationDate: "",
      officeMr: "",
      officeBranch: "",
      officeYearFrom: "",
      officeYearTo: "",
      officeClass: "",
      officeDiv: "",
      officeDate: "",
      officeAdmissionSign: "",
      officePrincipalSign: "",
      feesMrMrs: "",
      feesStudentName: "",
      feesFatherName: "",
      feesCourse: "",
      feesMrMrs2: "",
      feesStudentSign: "",
      feesParentSign: "",
      attendanceName: "",
      attendanceFather: "",
      attendanceClass: "",
      attendanceBranch: "",
      attendanceRollNo: "",
      attendanceParentSign: "",
      attendanceStudentSign: "",
      totalFees: "",
      registrationFees: "",
      feeInstallments: [
        { day: "", month: "", year: "", amount: "" },
        { day: "", month: "", year: "", amount: "" },
        { day: "", month: "", year: "", amount: "" },
        { day: "", month: "", year: "", amount: "" },
        { day: "", month: "", year: "", amount: "" },
      ],
      finalSignature: "",
      finalDate: "",
      documents: {
        gradCertificate: null,
        marksheet10: null,
        marksheet12: null,
        leavingCertificate: null,
        migrationCertificate: null,
        gapAffidavit: null,
        photo: null,
        casteCertificate: null,
        marriageCertificate: null,
        aadharCard: null,
      },
    });
    
    // Reset file input fields
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => { input.value = ''; });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateForm();
    if (!validation.valid) {
      setSubmitStatus({
        type: 'error',
        message: validation.message
      });
      
      // Scroll to top to show error
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    try {
      // Show loading state
      setIsSubmitting(true);
      setSubmitStatus({ type: 'info', message: 'Submitting application...' });
      
      // Submit form data
      const response = await admissionAPI.submit(formData);
      
      if (response.data.success) {
        setSubmitStatus({
          type: 'success',
          message: `Application submitted successfully!\nApplication Number: ${response.data.applicationNumber}\n\nPlease save this number for future reference.`
        });
        
        // Show success alert with application number
        alert(`🎉 Application Submitted Successfully!\n\nYour Application Number: ${response.data.applicationNumber}\n\nPlease note down this number for future reference. You will need it to track your application status.`);
        
        // Optionally reset form
        resetForm();
        
        console.log('Submission response:', response.data);
      }
    } catch (error) {
      console.error('Submission error:', error);
      
      let errorMessage = 'Failed to submit application. Please try again.';
      
      if (error.response) {
        // Server responded with error
        errorMessage = error.response.data.error || error.response.data.message || errorMessage;
        if (error.response.data.details) {
          errorMessage += `\nDetails: ${error.response.data.details}`;
        }
      } else if (error.request) {
        // Request made but no response
        errorMessage = 'Network error. Please check your internet connection.';
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
      
      alert(`❌ Submission Failed\n\n${errorMessage}`);
    } finally {
      setIsSubmitting(false);
      // Scroll to top to show status
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-xl border border-gray-200 my-10 font-sans rounded-sm">
      {/* Header with College Identity */}
      <div className="text-center mb-8 border-b-2 border-blue-900 pb-6">
        <h1 className="text-4xl font-bold text-blue-900 tracking-tight">APPLICATION FORM</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-1">Jadhavar Group of Institutes</h2>
        <p className="italic text-gray-600 text-lg">"Education for strength, Intellect & Wisdom"</p>
        <div className="h-1 w-24 bg-blue-900 mx-auto my-3"></div>
        <p className="font-medium text-gray-700">Prin. Dr. Sudhakarrao Jadhavar</p>
        <p className="text-sm text-gray-600 mt-2">Late Uddhavrao Tulshiram Jadhavar Foundation's</p>
        <p className="font-semibold text-gray-800">Prin. Dr. Sudhakarrao Jadhavar Arts, Commerce & Science College</p>
        <p className="text-sm text-gray-600">Adv. Shardul Sudhakarrao Jadhavar Educational Campus,</p>
        <p className="text-sm text-gray-600">2, Jadhavar College Road, Narhe-Dhayari, Pune – 411 041.</p>
        <p className="text-sm text-gray-600">Ph.: 9168274116 | Email: sjartscommercecollege@gmail.com</p>
        <p className="text-sm text-gray-600">www.jadhavarcollegeedu.com | www.jadhavargroupofinstitute.in</p>
      </div>

      {/* Status Messages */}
      {submitStatus.message && (
        <div className={`mb-6 p-4 rounded-lg border-l-4 ${
          submitStatus.type === 'success' ? 'bg-green-50 border-green-500 text-green-800' :
          submitStatus.type === 'error' ? 'bg-red-50 border-red-500 text-red-800' :
          'bg-blue-50 border-blue-500 text-blue-800'
        }`}>
          <p className="whitespace-pre-line">{submitStatus.message}</p>
        </div>
      )}

      {/* Form Sections - Professional Cards */}
      <form onSubmit={handleSubmit}>
        {/* Academic Year & Course */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 pb-1 border-b border-gray-300">Program Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year</label>
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  name="academicYearFrom" 
                  value={formData.academicYearFrom} 
                  onChange={handleChange} 
                  maxLength="2" 
                  className="w-16 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500" 
                  placeholder="YY" 
                  required
                />
                <span>-</span>
                <input 
                  type="text" 
                  name="academicYearTo" 
                  value={formData.academicYearTo} 
                  onChange={handleChange} 
                  maxLength="2" 
                  className="w-16 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500" 
                  placeholder="YY" 
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course (Capital letters)</label>
              <input 
                type="text" 
                name="course" 
                value={formData.course} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500" 
                placeholder="e.g., BACHELOR OF ARTS" 
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Medium</label>
            <div className="flex gap-6">
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="medium" 
                  value="English" 
                  checked={formData.medium === "English"} 
                  onChange={handleChange} 
                  className="h-4 w-4 text-blue-600" 
                  required
                />
                <span className="ml-2 text-gray-700">English</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="medium" 
                  value="Marathi" 
                  checked={formData.medium === "Marathi"} 
                  onChange={handleChange} 
                  className="h-4 w-4 text-blue-600" 
                  required
                />
                <span className="ml-2 text-gray-700">Marathi</span>
              </label>
            </div>
          </div>
        </div>

        {/* Instructions Alert */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mb-8">
          <p className="font-medium text-amber-800">Instructions</p>
          <p className="text-sm text-amber-700">Fill in CAPITAL LETTERS. Incomplete form will be rejected. Write name as per 12th mark sheet.</p>
        </div>

        {/* Personal Details */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 pb-1 border-b border-gray-300">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Surname</label>
              <input 
                type="text" 
                name="surname" 
                value={formData.surname} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Father's/Husband's Name</label>
              <input 
                type="text" 
                name="fatherName" 
                value={formData.fatherName} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name in Devnagari</label>
              <input 
                type="text" 
                name="nameDevnagari" 
                value={formData.nameDevnagari} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mother's Name</label>
              <input 
                type="text" 
                name="motherName" 
                value={formData.motherName} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sex</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="sex" 
                    value="Male" 
                    checked={formData.sex === "Male"} 
                    onChange={handleChange} 
                    className="h-4 w-4 text-blue-600" 
                    required
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="sex" 
                    value="Female" 
                    checked={formData.sex === "Female"} 
                    onChange={handleChange} 
                    className="h-4 w-4 text-blue-600" 
                    required
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">If Name Change</label>
              <input 
                type="text" 
                name="nameChange" 
                value={formData.nameChange} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <div className="flex gap-1">
                <input 
                  type="text" 
                  name="dobDay" 
                  value={formData.dobDay} 
                  onChange={handleChange} 
                  placeholder="DD" 
                  maxLength="2" 
                  className="w-12 p-2 border border-gray-300 rounded-md" 
                  required
                />
                <span>/</span>
                <input 
                  type="text" 
                  name="dobMonth" 
                  value={formData.dobMonth} 
                  onChange={handleChange} 
                  placeholder="MM" 
                  maxLength="2" 
                  className="w-12 p-2 border border-gray-300 rounded-md" 
                  required
                />
                <span>/</span>
                <input 
                  type="text" 
                  name="dobYear" 
                  value={formData.dobYear} 
                  onChange={handleChange} 
                  placeholder="YYYY" 
                  maxLength="4" 
                  className="w-16 p-2 border border-gray-300 rounded-md" 
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Marital Status</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="maritalStatus" 
                    value="Married" 
                    checked={formData.maritalStatus === "Married"} 
                    onChange={handleChange} 
                    className="h-4 w-4 text-blue-600" 
                  />
                  <span className="ml-2">Married</span>
                </label>
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="maritalStatus" 
                    value="Unmarried" 
                    checked={formData.maritalStatus === "Unmarried"} 
                    onChange={handleChange} 
                    className="h-4 w-4 text-blue-600" 
                  />
                  <span className="ml-2">Unmarried</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
              <input 
                type="text" 
                name="bloodGroup" 
                value={formData.bloodGroup} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mother Tongue</label>
              <input 
                type="text" 
                name="motherTongue" 
                value={formData.motherTongue} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
              <input 
                type="text" 
                name="nationality" 
                value={formData.nationality} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
              <input 
                type="text" 
                name="religion" 
                value={formData.religion} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="region" 
                    value="Maharashtrian" 
                    checked={formData.region === "Maharashtrian"} 
                    onChange={handleChange} 
                    className="h-4 w-4 text-blue-600" 
                  />
                  <span className="ml-2">Maharashtrian</span>
                </label>
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="region" 
                    value="Non-Maharashtrian" 
                    checked={formData.region === "Non-Maharashtrian"} 
                    onChange={handleChange} 
                    className="h-4 w-4 text-blue-600" 
                  />
                  <span className="ml-2">Non-Maharashtrian</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Aadhar Card No.</label>
              <input 
                type="text" 
                name="aadhar" 
                value={formData.aadhar} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
                placeholder="12-digit Aadhar number"
                maxLength="12"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cast</label>
              <input 
                type="text" 
                name="cast" 
                value={formData.cast} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <div className="flex flex-wrap gap-2 items-center">
                <select 
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange} 
                  className="p-2 border border-gray-300 rounded-md bg-white"
                >
                  <option value="">Select</option>
                  <option value="Open">Open</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="NT">NT</option>
                  <option value="NT(B)">NT(B)</option>
                  <option value="NT(C)">NT(C)</option>
                  <option value="NT(D)">NT(D)</option>
                  <option value="OBC">OBC</option>
                  <option value="SBC">SBC</option>
                  <option value="Other">Other</option>
                </select>
                <span className="text-gray-500">Other:</span>
                <input 
                  type="text" 
                  name="categoryOther" 
                  value={formData.categoryOther} 
                  onChange={handleChange} 
                  className="w-32 p-2 border border-gray-300 rounded-md" 
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Belongs to Creamy Layer</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="creamyLayer" 
                    value="Yes" 
                    checked={formData.creamyLayer === "Yes"} 
                    onChange={handleChange} 
                    className="h-4 w-4 text-blue-600" 
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="creamyLayer" 
                    value="No" 
                    checked={formData.creamyLayer === "No"} 
                    onChange={handleChange} 
                    className="h-4 w-4 text-blue-600" 
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Other Languages Known</label>
              <input 
                type="text" 
                name="otherLanguages" 
                value={formData.otherLanguages} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
          </div>
        </div>

        {/* Address Details */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 pb-1 border-b border-gray-300">Address Details</h3>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Present Address</label>
              <input 
                type="text" 
                name="presentAddress" 
                value={formData.presentAddress} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
                required
              />
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Pin</label>
                <input 
                  type="text" 
                  name="presentPin" 
                  value={formData.presentPin} 
                  onChange={handleChange} 
                  className="w-32 p-2 border border-gray-300 rounded-md" 
                  maxLength="6"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Permanent Address</label>
              <input 
                type="text" 
                name="permanentAddress" 
                value={formData.permanentAddress} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Pin</label>
                <input 
                  type="text" 
                  name="permanentPin" 
                  value={formData.permanentPin} 
                  onChange={handleChange} 
                  className="w-32 p-2 border border-gray-300 rounded-md" 
                  maxLength="6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 pb-1 border-b border-gray-300">Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Student Contact</label>
              <input 
                type="text" 
                name="studentContact" 
                value={formData.studentContact} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
                placeholder="10-digit mobile number"
                maxLength="10"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone 1</label>
              <input 
                type="text" 
                name="phone1" 
                value={formData.phone1} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone 2</label>
              <input 
                type="text" 
                name="phone2" 
                value={formData.phone2} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
                placeholder="example@email.com"
                required
              />
            </div>
          </div>
        </div>

        {/* Subjects & Last College */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 pb-1 border-b border-gray-300">Academic Information</h3>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subjects Offered</label>
              <input 
                type="text" 
                name="subjectsOffered" 
                value={formData.subjectsOffered} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last College Name & Address</label>
              <input 
                type="text" 
                name="lastCollege" 
                value={formData.lastCollege} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
          </div>
        </div>

        {/* Academic Record Table */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 pb-1 border-b border-gray-300">Academic Record</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2 text-left text-sm font-medium text-gray-700">Sr. No</th>
                  <th className="border border-gray-300 p-2 text-left text-sm font-medium text-gray-700">Examination</th>
                  <th className="border border-gray-300 p-2 text-left text-sm font-medium text-gray-700">Board/University</th>
                  <th className="border border-gray-300 p-2 text-left text-sm font-medium text-gray-700">Year</th>
                  <th className="border border-gray-300 p-2 text-left text-sm font-medium text-gray-700">%</th>
                </tr>
              </thead>
              <tbody>
                {formData.academic.map((row, idx) => (
                  <tr key={idx}>
                    <td className="border border-gray-300 p-2 text-sm">{idx + 1}</td>
                    <td className="border border-gray-300 p-2">
                      <input 
                        type="text" 
                        value={row.exam} 
                        onChange={(e) => handleAcademicChange(idx, "exam", e.target.value)} 
                        className="w-full p-1 border border-gray-200 rounded" 
                        required={idx < 3}
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input 
                        type="text" 
                        value={row.board} 
                        onChange={(e) => handleAcademicChange(idx, "board", e.target.value)} 
                        className="w-full p-1 border border-gray-200 rounded" 
                        required={idx < 3}
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input 
                        type="text" 
                        value={row.year} 
                        onChange={(e) => handleAcademicChange(idx, "year", e.target.value)} 
                        className="w-20 p-1 border border-gray-200 rounded" 
                        required={idx < 3}
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input 
                        type="text" 
                        value={row.percentage} 
                        onChange={(e) => handleAcademicChange(idx, "percentage", e.target.value)} 
                        className="w-16 p-1 border border-gray-200 rounded" 
                        required={idx < 3}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Declaration */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 pb-1 border-b border-gray-300">Declaration</h3>
          <div className="text-sm text-gray-700 space-y-2 mb-4 max-h-64 overflow-y-auto p-2 border border-gray-200 rounded bg-white">
            <p>• I declare that the information provided in this forms is true and complete to the best of my knowledge and belief. I understand that the college reserves the right to verify the information provided and to cancel admission if found incorrect.</p>
            <p>• I acknowledge that Dr. Sudhakar Jadhavar Arts, Commerce & Science College reserves the right at any stage to cancel admission if any information given by me is found incorrect.</p>
            <p>• I understand that my application will only be assessed when it is complete in every detail and includes all supporting documentation.</p>
            <p>• I am aware of the condition relating to my application and admission. And agree to pay all fees for which I am liable.</p>
            <p>I have understood & accept the rules and regulations of the college standards and instructions issued from time to time by the management and the Principal of the college. I shall abide by the rules laid by the Principal/Director of the college/institute and shall observe and follow the rules and regulations and discipline.</p>
            <p>I have read and understood the discipline and code of conduct of the college.</p>
            <p>I shall abide to the rules and regulations and instructions issued by the institute.</p>
            <p>I shall abide by the hygiene and safety standards while in the institute/college premises or outside.</p>
            <p>I am aware that I cannot change the course I am enrolled in and hence I shall select the course carefully.</p>
            <p>I shall attend classes regularly.</p>
            <p>I am aware that fees once paid will not be refunded.</p>
            <p>I am aware that the institute reserves the right to cancel admission if student fails to comply with rules.</p>
            <p>All disputes are subject to Pune jurisdiction only.</p>
            <p>I am aware that the institute shall not be responsible for loss of any belongings.</p>
            <p>I am aware of the fee payment schedule mentioned below.</p>
            <p>I agree to follow the rules and regulations and discipline of the college.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Applicant Signature</label>
              <input 
                type="text" 
                name="applicantSignature" 
                value={formData.applicantSignature} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Signature</label>
              <input 
                type="text" 
                name="parentSignature" 
                value={formData.parentSignature} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input 
                type="text" 
                name="declarationDate" 
                value={formData.declarationDate} 
                onChange={handleChange} 
                placeholder="DD/MM/YYYY" 
                className="w-40 p-2 border border-gray-300 rounded-md" 
                required
              />
            </div>
          </div>
        </div>

        {/* Office Use Only */}
        <div className="bg-gray-100 p-6 rounded-lg border-2 border-blue-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 pb-1 border-b border-blue-300">FOR OFFICE USE ONLY</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mr./Mrs.</label>
              <input 
                type="text" 
                name="officeMr" 
                value={formData.officeMr} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md bg-white" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
              <input 
                type="text" 
                name="officeBranch" 
                value={formData.officeBranch} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md bg-white" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">A.Y.</label>
              <div className="flex gap-1">
                <input 
                  type="text" 
                  name="officeYearFrom" 
                  value={formData.officeYearFrom} 
                  onChange={handleChange} 
                  maxLength="2" 
                  className="w-12 p-2 border border-gray-300 rounded-md bg-white" 
                />
                <span>/</span>
                <input 
                  type="text" 
                  name="officeYearTo" 
                  value={formData.officeYearTo} 
                  onChange={handleChange} 
                  maxLength="2" 
                  className="w-12 p-2 border border-gray-300 rounded-md bg-white" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
              <input 
                type="text" 
                name="officeClass" 
                value={formData.officeClass} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md bg-white" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Division</label>
              <input 
                type="text" 
                name="officeDiv" 
                value={formData.officeDiv} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md bg-white" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input 
                type="text" 
                name="officeDate" 
                value={formData.officeDate} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md bg-white" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Admission Sign</label>
              <input 
                type="text" 
                name="officeAdmissionSign" 
                value={formData.officeAdmissionSign} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md bg-white" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Principal Sign</label>
              <input 
                type="text" 
                name="officePrincipalSign" 
                value={formData.officePrincipalSign} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md bg-white" 
              />
            </div>
          </div>
        </div>

        {/* Undertaking Fees */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Undertaking (Fee Structure)</h3>
          <p className="text-sm text-gray-600 mb-4">(To be given by Parent/Legal Guardian)</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">I Mr./Mrs.</label>
              <input 
                type="text" 
                name="feesMrMrs" 
                value={formData.feesMrMrs} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <p className="text-sm">in lieu of Dr. Sudhakar Jadhavar Arts & Commerce College Malvi Nagar Narhe Pune-41 considering admission of</p>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mr./Miss</label>
              <input 
                type="text" 
                name="feesStudentName" 
                value={formData.feesStudentName} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Son/Daughter of Mr./Mrs.</label>
              <input 
                type="text" 
                name="feesFatherName" 
                value={formData.feesFatherName} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">for admission to</label>
              <input 
                type="text" 
                name="feesCourse" 
                value={formData.feesCourse} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">I Mr./Mrs.</label>
              <input 
                type="text" 
                name="feesMrMrs2" 
                value={formData.feesMrMrs2} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <p className="text-sm">hereby agree to pay adhoc fees / fees prescribed by the competent authority / college authority. I hereby further agree and undertake that fees (Tuition + Development) and other charges / fees as decided by Savitribai Phule University / Pune competent authority for the subsequent academic years in the current academic year then I will pay the difference to the institute on demand. I shall also pay fees and other dues decided by Savitribai Phule University / Pune competent authority for the subsequent academic years promptly. I agree that this undertaking is binding on me and compliance of the contents there in will be made promptly.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student's Signature</label>
                <input 
                  type="text" 
                  name="feesStudentSign" 
                  value={formData.feesStudentSign} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Signature</label>
                <input 
                  type="text" 
                  name="feesParentSign" 
                  value={formData.feesParentSign} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Undertaking Attendance */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Undertaking (Attendance)</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">I Mr./Miss</label>
              <input 
                type="text" 
                name="attendanceName" 
                value={formData.attendanceName} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Son/Daughter of Mr.</label>
              <input 
                type="text" 
                name="attendanceFather" 
                value={formData.attendanceFather} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Studying in class</label>
              <input 
                type="text" 
                name="attendanceClass" 
                value={formData.attendanceClass} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
              <input 
                type="text" 
                name="attendanceBranch" 
                value={formData.attendanceBranch} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Roll No</label>
              <input 
                type="text" 
                name="attendanceRollNo" 
                value={formData.attendanceRollNo} 
                onChange={handleChange} 
                className="w-32 p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <p className="text-sm">hereby undertake: I have been informed that if my attendance is below 75% in theory lectures and 100% in practical's, I will be detained from appearing for the examination of the semester and will have to repeat the study in same year of study during the next year. I will attend the class so as to satisfy the requirement of attendance as per the Rule & Regulation of Savitribai Phule University of Pune; else I will be eligible to be detained.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parent's Signature</label>
                <input 
                  type="text" 
                  name="attendanceParentSign" 
                  value={formData.attendanceParentSign} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student's Signature</label>
                <input 
                  type="text" 
                  name="attendanceStudentSign" 
                  value={formData.attendanceStudentSign} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Documents Checklist with File Upload */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 pb-1 border-b border-gray-300">Documents to be Submitted</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 mr-2" /> 
                Grad./P.G. Certificate – 3 Copies Attested
              </div>
              <input 
                type="file" 
                onChange={(e) => handleFileChange(e, 'gradCertificate')} 
                className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
              />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 mr-2" /> 
                Mark list of 10th Std – 3 Copies Attested
              </div>
              <input 
                type="file" 
                onChange={(e) => handleFileChange(e, 'marksheet10')} 
                className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
              />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 mr-2" /> 
                Mark list of 12th Std – 3 Copies Attested
              </div>
              <input 
                type="file" 
                onChange={(e) => handleFileChange(e, 'marksheet12')} 
                className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
              />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 mr-2" /> 
                Leaving/Transfer Certificate – Original + 3 Copies
              </div>
              <input 
                type="file" 
                onChange={(e) => handleFileChange(e, 'leavingCertificate')} 
                className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
              />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 mr-2" /> 
                Migration Certificate (If reqd.) – Original + 3 Copies
              </div>
              <input 
                type="file" 
                onChange={(e) => handleFileChange(e, 'migrationCertificate')} 
                className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
              />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 mr-2" /> 
                GAP Affidavit (If applicable) – Original + 3 Copies
              </div>
              <input 
                type="file" 
                onChange={(e) => handleFileChange(e, 'gapAffidavit')} 
                className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
              />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 mr-2" /> 
                4 Passport size photographs
              </div>
              <input 
                type="file" 
                onChange={(e) => handleFileChange(e, 'photo')} 
                accept="image/*" 
                className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
              />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 mr-2" /> 
                Caste Certificate & Income Proof – 2 Copies Attested
              </div>
              <input 
                type="file" 
                onChange={(e) => handleFileChange(e, 'casteCertificate')} 
                className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
              />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 mr-2" /> 
                Marriage/Name change certificate – 2 Copies Attested
              </div>
              <input 
                type="file" 
                onChange={(e) => handleFileChange(e, 'marriageCertificate')} 
                className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
              />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 mr-2" /> 
                Aadhar Card Xerox – 1 Copy Attested
              </div>
              <input 
                type="file" 
                onChange={(e) => handleFileChange(e, 'aadharCard')} 
                className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
              />
            </div>
          </div>
        </div>

        {/* Fees Payment Schedule - Corrected Structure */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 pb-1 border-b border-gray-300">Fee Payment Schedule</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Total Fees (Rs)</label>
              <input 
                type="text" 
                name="totalFees" 
                value={formData.totalFees} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">At Registration (Rs)</label>
              <input 
                type="text" 
                name="registrationFees" 
                value={formData.registrationFees} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
          </div>
          
          <h4 className="font-medium text-gray-800 mb-3">Installment Schedule</h4>
          <div className="space-y-4">
            {[0, 1, 2, 3, 4].map((index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-3 items-end border-b pb-3">
                <div className="md:col-span-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Before Day</label>
                  <input 
                    type="text" 
                    placeholder="DD" 
                    value={formData.feeInstallments[index].day} 
                    onChange={(e) => handleFeeInstallmentChange(index, "day", e.target.value)}
                    maxLength="2"
                    className="w-full p-2 border border-gray-300 rounded-md" 
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Month</label>
                  <input 
                    type="text" 
                    placeholder="MM" 
                    value={formData.feeInstallments[index].month} 
                    onChange={(e) => handleFeeInstallmentChange(index, "month", e.target.value)}
                    maxLength="2"
                    className="w-full p-2 border border-gray-300 rounded-md" 
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Year</label>
                  <input 
                    type="text" 
                    placeholder="YYYY" 
                    value={formData.feeInstallments[index].year} 
                    onChange={(e) => handleFeeInstallmentChange(index, "year", e.target.value)}
                    maxLength="4"
                    className="w-full p-2 border border-gray-300 rounded-md" 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Amount (Rs)</label>
                  <input 
                    type="text" 
                    placeholder="Amount" 
                    value={formData.feeInstallments[index].amount} 
                    onChange={(e) => handleFeeInstallmentChange(index, "amount", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md" 
                  />
                </div>
                <div className="md:col-span-1 text-sm text-gray-600">
                  Installment {index + 1}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-red-600 mt-4">Late Fees will be charged if the fees are not paid as per the given schedule.</p>
        </div>

        {/* Important Note & Final Signature */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 pb-1 border-b border-gray-300">Important Note</h3>
          <p className="text-sm mb-4">Please keep minimum 8-10 attested Copies of L.C. and other original document before submitting it to the admin office.</p>
          <p className="text-sm mb-4">I have received list of documents to be submitted & fees schedule. I am aware that the documents are to be submitted before.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Student's Signature</label>
              <input 
                type="text" 
                name="finalSignature" 
                value={formData.finalSignature} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input 
                type="text" 
                name="finalDate" 
                value={formData.finalDate} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-900 hover:bg-blue-800'
            } text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-200 flex items-center gap-2`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </button>
        </div>
      </form>

      {/* Footer Note */}
      <div className="text-center text-xs text-gray-500 mt-8 border-t pt-4">
        Official Application Form - Prin. Dr. Sudhakarrao Jadhavar Arts, Commerce & Science College
      </div>
    </div>
  );
};

export default ApplicationForm;