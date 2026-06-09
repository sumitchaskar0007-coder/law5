import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Calendar, 
  Download, 
  FileText, 
  Award, 
  CheckCircle, 
  DollarSign,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Percent,
  Shield,
  Bookmark,
  Users,
  Clock,
  BookOpen
} from 'lucide-react'

import EnquiryModal from '../components/EnquiryModal'
import AdmissionCard from '../components/Admissions/AdmissionCard'
import SectionHeader from '../components/Admissions/SectionHeader'
import FeeTable from '../components/Admissions/FeeTable'
import ScholarshipCard from '../components/Admissions/ScholarshipCard'
import RuleCard from '../components/Admissions/RuleCard'

export default function Admissions() {
  const [openSections, setOpenSections] = useState({
    admissionProcess: true,
    documentsRequired: false,
    feeStructure: false,
    scholarships: false,
    rules: false
  })

  const [showEnquiryModal, setShowEnquiryModal] = useState(false)
  const [modalType, setModalType] = useState('')

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleEnquiryClick = (type = 'enquiry') => {
    setModalType(type)
    setShowEnquiryModal(true)
  }

  const handleApplyNowClick = () => {
    setModalType('admission')
    setShowEnquiryModal(true)
  }

  const handleCloseModal = () => {
    setShowEnquiryModal(false)
    setModalType('')
  }

  const handleSubmitEnquiry = (formData) => {
    console.log('Form submitted:', formData)
    console.log('Modal type:', modalType)
    handleCloseModal()
  }

  const admissionCards = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "2026 Admissions Open",
      description: "Apply for 5-Year Integrated B.A. LL.B Program starting academic year 2026-27",
      cta: "Apply Now",
      onClick: handleApplyNowClick,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Download Prospectus",
      description: "Complete admission guide with fee structure & eligibility for 5-Year Program",
      cta: "Download PDF",
      onClick: () => window.open('/assets/prospectus.pdf', '_blank'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Admission Enquiry",
      description: "Mon-Sat: 10:00 AM - 5:00 PM | Get personalized counseling",
      cta: "Enquire Now",
      onClick: () => handleEnquiryClick('enquiry'),
      color: "from-purple-500 to-purple-600"
    }
  ]

  const feeStructure = [
    { category: "Maharashtra State Students", tuition: "₹1,25,000 per year", development: "₹35,000", total: "₹1,60,000" },
    { category: "Outside Maharashtra Students", tuition: "₹2,50,000 per year", development: "₹35,000", total: "₹2,85,000" },
    { category: "NRI/Foreign Students", tuition: "$3,500 per year", development: "$500", total: "$4,000" }
  ]

  const scholarshipCategories = [
    {
      name: "Merit-Based Scholarships",
      details: [
        "95% and above in 12th: 100% tuition fee waiver",
        "90-94% in 12th: 75% fee concession",
        "85-89% in 12th: 50% fee concession",
        "80-84% in 12th: 25% fee concession"
      ]
    },
    {
      name: "Social Welfare Scholarships",
      details: [
        "SC/ST students: Full fee reimbursement as per Govt. norms",
        "OBC/EBC students: Fee concession as per state policy",
        "Economically weaker sections: Special financial aid",
        "Single girl child: Additional 10% concession"
      ]
    },
    {
      name: "Special Category Scholarships",
      details: [
        "Children of armed forces personnel: 35% concession",
        "National level sports achievers: Up to 60% concession",
        "Differently-abled students: 50% fee waiver",
        "Orphan students: Full fee concession"
      ]
    }
  ]

  const rulesRegulations = [
    {
      title: "Academic Regulations",
      points: [
        "Minimum 75% attendance mandatory for all subjects",
        "Internal assessment carries 30% weightage",
        "End-semester examination carries 70% weightage",
        "Minimum 45% marks required to pass each subject",
        "Backlog papers must be cleared within 2 years"
      ]
    },
    {
      title: "Conduct & Discipline",
      points: [
        "Strict anti-ragging policy as per Supreme Court guidelines",
        "Professional dress code for moot courts and seminars",
        "Mobile phone usage restricted in classrooms and library",
        "Zero tolerance for substance abuse on campus",
        "Respectful behavior towards faculty and staff mandatory"
      ]
    },
    {
      title: "Examination Rules",
      points: [
        "Valid college ID card mandatory for all examinations",
        "No revaluation for internal assessment marks",
        "Medical certificate required for exam absence",
        "University pattern followed for all evaluations",
        "Original hall ticket required for semester exams"
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>5-Year B.A. LL.B Admissions 2026 | Jadhavar College of Law Pune | Apply Now</title>
        <meta
          name="description"
          content="Apply for 5-Year Integrated B.A. LL.B program at Jadhavar Law College Pune. Check admission process, documents required, FRA approved fee structure, scholarships, and rules for 2026 batch."
        />
        <meta name="keywords" content="5 year law college Pune, BA LLB admission 2026, Jadhavar law college admissions, integrated law program fees, law admission process, 12th pass law admissions" />
        <link rel="canonical" href="https://www.jadhavar-law.edu.in/admissions" />
      </Helmet>

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={showEnquiryModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitEnquiry}
        type={modalType}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Bar Council of India Approved</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              5-Year Integrated <span className="text-yellow-300">B.A. LL.B Admissions 2026</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Start Your Legal Career After 12th at Jadhavar Law College, Pune
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleApplyNowClick}
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </button>
              <button 
                onClick={() => window.open('/assets/prospectus.pdf', '_blank')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
              >
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-16 bg-gray-50 -mt-2">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {admissionCards.map((card, index) => (
              <AdmissionCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <SectionHeader
                icon={<FileText className="h-6 w-6" />}
                title="Admission Process"
                isOpen={openSections.admissionProcess}
                onClick={() => toggleSection('admissionProcess')}
              />
              
              {openSections.admissionProcess && (
                <div className="px-6 pb-6">
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Criteria</h4>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-blue-800">12th Standard Requirement</h5>
                          <p className="text-blue-700 mt-1">
                            Passed 10+2 or equivalent examination from any recognized board with minimum 45% marks (40% for SC/ST categories). Students appearing for 12th standard exams in 2026 are also eligible to apply.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Application Submission",
                        description: "Fill online application form available on college website or collect form from admission office"
                      },
                      {
                        step: "2",
                        title: "Entrance Test/Interview",
                        description: "Appear for college entrance test and personal interview (for certain categories)"
                      },
                      {
                        step: "3",
                        title: "Merit List Publication",
                        description: "College publishes merit list based on 12th marks, entrance test, and reservation criteria"
                      },
                      {
                        step: "4",
                        title: "Document Verification",
                        description: "Selected candidates need to submit original documents for verification"
                      },
                      {
                        step: "5",
                        title: "Fee Payment & Admission",
                        description: "Pay admission fees and complete enrollment formalities"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <SectionHeader
                icon={<FileText className="h-6 w-6" />}
                title="Documents Required"
                isOpen={openSections.documentsRequired}
                onClick={() => toggleSection('documentsRequired')}
              />
              
              {openSections.documentsRequired && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-lg">Academic Documents</h4>
                      <div className="space-y-3">
                        {[
                          "SSC/10th Mark sheet & Passing Certificate",
                          "HSC/12th Mark sheet & Passing Certificate",
                          "School Leaving/Transfer Certificate",
                          "Migration Certificate (if applicable)",
                          "Gap Certificate (if applicable)",
                          "Entrance Test Score Card (if applicable)"
                        ].map((doc, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-lg">Personal Documents</h4>
                      <div className="space-y-3">
                        {[
                          "Aadhaar Card (Student & Parents)",
                          "Domicile Certificate (for Maharashtra students)",
                          "Caste Certificate & Validity Certificate (if applicable)",
                          "Non-Creamy Layer Certificate (for OBC)",
                          "Income Certificate (for EWS category)",
                          "Passport size photographs (10 copies)",
                          "Birth Certificate/School Leaving Certificate showing DOB",
                          "Physically Handicapped Certificate (if applicable)"
                        ].map((doc, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <p className="text-yellow-800 text-center">
                      <strong>Important:</strong> All documents must be submitted in original for verification along with three attested photocopies. Self-attested copies will not be accepted for admission.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <SectionHeader
                icon={<DollarSign className="h-6 w-6" />}
                title="Fee Structure (FRA Approved)"
                isOpen={openSections.feeStructure}
                onClick={() => toggleSection('feeStructure')}
              />
              
              {openSections.feeStructure && (
                <div className="px-6 pb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                    <p className="text-green-800 text-center">
                      <strong>FRA Approved:</strong> All fees are regulated by the Fees Regulating Authority, Government of Maharashtra. Fees are subject to revision as per FRA guidelines for 5-Year Integrated Law Programs.
                    </p>
                  </div>

                  <FeeTable feeStructure={feeStructure} />

                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Additional Charges (One Time - First Year Only)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-xl p-6">
                        <ul className="space-y-2 text-blue-700">
                          <li>Admission Processing Fee: ₹1,000</li>
                          <li>Library Deposit (Refundable): ₹3,000</li>
                          <li>Laboratory Charges: ₹2,000</li>
                          <li>Identity Card & Library Card: ₹500</li>
                          <li>Student Activity Fund: ₹1,000</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-xl p-6">
                        <ul className="space-y-2 text-green-700">
                          <li>University Enrollment Fee: ₹1,000</li>
                          <li>Medical Examination & Insurance: ₹1,500</li>
                          <li>Student Welfare Fund: ₹1,000</li>
                          <li>Alumni Association: ₹500</li>
                          <li>Moot Court & Seminar Kit: ₹2,000</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships & Freeships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <SectionHeader
                icon={<Percent className="h-6 w-6" />}
                title="Scholarships & Freeships"
                isOpen={openSections.scholarships}
                onClick={() => toggleSection('scholarships')}
              />
              
              {openSections.scholarships && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {scholarshipCategories.map((scholarship, index) => (
                      <ScholarshipCard key={index} scholarship={scholarship} />
                    ))}
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h4 className="font-semibold text-yellow-800 mb-3">Important Information for Scholarship Holders</h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>Scholarship applications must be submitted within 15 days of admission</li>
                      <li>All scholarships are subject to annual renewal based on academic performance (minimum 70% marks)</li>
                      <li>Students must maintain minimum 80% attendance to continue scholarships</li>
                      <li>Multiple scholarship benefits cannot be combined - highest applicable will be granted</li>
                      <li>Scholarship disbursement is done directly to student's bank account in January each year</li>
                      <li>Any disciplinary action will lead to immediate cancellation of scholarship</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Regulations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <SectionHeader
                icon={<Shield className="h-6 w-6" />}
                title="Rules & Regulations"
                isOpen={openSections.rules}
                onClick={() => toggleSection('rules')}
              />
              
              {openSections.rules && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {rulesRegulations.map((rule, index) => (
                      <RuleCard key={index} rule={rule} />
                    ))}
                  </div>

                  <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
                    <h4 className="font-semibold text-red-800 mb-3">Strict Regulations - Zero Tolerance Policy</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Academic Integrity</h5>
                        <ul className="space-y-1 text-red-600">
                          <li>• Plagiarism in assignments leads to suspension for one semester</li>
                          <li>• Use of unfair means in exams results in cancellation of entire year</li>
                          <li>• Fabrication of documents leads to immediate rustication</li>
                          <li>• Malpractice in internal assessments leads to zero marks</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Code of Conduct</h5>
                        <ul className="space-y-1 text-red-600">
                          <li>• Smoking and alcohol strictly prohibited on campus</li>
                          <li>• Mobile phones prohibited in classrooms and examination halls</li>
                          <li>• Damage to college property must be compensated 3x</li>
                          <li>• Ragging leads to immediate expulsion and police complaint</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your 5-Year Legal Journey with Us
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join Jadhavar Law College's 5-Year Integrated B.A. LL.B Program and build a strong foundation for your legal career right after 12th. 
            Limited seats available for 2026 batch.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleApplyNowClick}
              className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Apply for Admission
            </button>
            <button 
              onClick={() => window.open('/assets/prospectus.pdf', '_blank')}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
            >
              Download Complete Prospectus
            </button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <Phone className="h-8 w-8 text-yellow-300" />
              <div>
                <h4 className="font-semibold">Admission Helpline</h4>
                <p className="text-blue-100">+91 9284246664 / +91 20 25467890</p>
                <p className="text-blue-100 text-sm">Mon-Sat: 9:30 AM - 5:30 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-8 w-8 text-yellow-300" />
              <div>
                <h4 className="font-semibold">Email Assistance</h4>
                <p className="text-blue-100">admissions@jadhavar-law.edu.in</p>
                <p className="text-blue-100 text-sm">Response within 24 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-8 w-8 text-yellow-300" />
              <div>
                <h4 className="font-semibold">Visit Admission Office</h4>
                <p className="text-blue-100">Jadhavar Law College Campus</p>
                <p className="text-blue-100 text-sm">Law College Road, Pune - 411004</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}