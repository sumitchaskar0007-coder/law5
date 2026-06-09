import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  CalendarDays,
  BookOpen,
  ClipboardCheck,
  Landmark,
  Briefcase,
  FileText,
  Users,
  GraduationCap,
  Target,
  Award,
  BarChart,
  Globe,
  BookMarked,
  Scale,
  Library,
  ChevronRight,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const academicsData = [
  {
    title: "Academic Calendar",
    icon: <CalendarDays className="h-6 w-6" />,
    description: "Structured 5-year academic schedule with semester system, examinations, and events as per university guidelines.",
    color: "text-blue-600 bg-blue-50"
  },
  {
    title: "Teaching Methodology",
    icon: <BookOpen className="h-6 w-6" />,
    description: "Innovative pedagogy combining lectures, case studies, and interactive sessions for comprehensive learning.",
    color: "text-green-600 bg-green-50"
  },
  {
    title: "Examination System",
    icon: <ClipboardCheck className="h-6 w-6" />,
    description: "Continuous assessment and semester-end examinations as per Bar Council of India regulations.",
    color: "text-purple-600 bg-purple-50"
  },
  {
    title: "Moot Court Training",
    icon: <Landmark className="h-6 w-6" />,
    description: "State-of-the-art facilities for mock trials, competitions, and courtroom procedure training.",
    color: "text-orange-600 bg-orange-50"
  },
  {
    title: "Legal Internships",
    icon: <Briefcase className="h-6 w-6" />,
    description: "Compulsory internships with judges, law firms, and corporate legal departments.",
    color: "text-red-600 bg-red-50"
  },
  {
    title: "Research & Publications",
    icon: <FileText className="h-6 w-6" />,
    description: "Dedicated research cell promoting legal scholarship through publications and conferences.",
    color: "text-indigo-600 bg-indigo-50"
  }
];

const programStats = [
  { label: "Program Duration", value: "5 Years" },
  { label: "Placement Rate", value: "90%+" },
  { label: "Expert Faculty", value: "50+" },
  { label: "Specializations", value: "10+" }
];

export default function Academics() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Academics - 5-Year Integrated Law Program | Jadhavar College of Law</title>
        <meta
          name="description"
          content="Explore the academic framework of Jadhavar College of Law's 5-Year Integrated BA-LLB, BBA-LLB & BCom-LLB programs. Comprehensive curriculum, practical training, and professional development."
        />
        <meta
          name="keywords"
          content="Law College Academics, 5 Year Law Program, BA LLB Curriculum, Legal Education, Law College Pune"
        />
        <link rel="canonical" href="https://www.jadhavar-law.edu.in/academics" />
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg mb-6"
            >
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Bar Council of India Approved</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              5-Year Integrated <span className="text-blue-700">Law Program</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal education combining theoretical knowledge with practical training 
              for successful legal careers.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-lg"
          >
            <div className="bg-blue-700 px-6 py-4 text-white">
              <h2 className="text-2xl font-bold">Fee Structure</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left">
                <thead className="bg-blue-50 text-sm uppercase tracking-wide text-blue-900">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Course</th>
                    <th className="px-6 py-4 font-semibold">Tuition Fee</th>
                    <th className="px-6 py-4 font-semibold">Development Fee</th>
                    <th className="px-6 py-4 font-semibold">Total Annual Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-700">
                    <td className="px-6 py-5">
                      <span className="block font-semibold text-gray-900">Bachelor of Law - 5 Years</span>
                      <span className="text-sm text-gray-500">(L.L.B.- V)</span>
                    </td>
                    <td className="px-6 py-5">29,091/-</td>
                    <td className="px-6 py-5">2,909/-</td>
                    <td className="px-6 py-5 text-lg font-bold text-blue-700">32,000/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Program Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Overview</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Available Programs</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {["BA-LLB", "BBA-LLB", "BCom-LLB"].map((program, index) => (
                        <div key={index} className="text-center p-4 bg-white rounded-lg border border-gray-200">
                          <div className="text-lg font-bold text-blue-700">{program}</div>
                          <div className="text-sm text-gray-500">5-Year Integrated</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Bar Council of India Approved",
                        "Industry-aligned Curriculum",
                        "Practical Training Modules",
                        "Career Guidance & Placement"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Program Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Program Highlights</h2>
                
                <div className="grid grid-cols-2 gap-6">
                  {programStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-blue-700 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-blue-100">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Admissions Open</h3>
                      <p className="text-sm text-gray-600">2026-27 Academic Year</p>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ACADEMIC FRAMEWORK ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Framework</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive academic structure is designed to provide a balanced 
              approach to legal education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 ${item.color.split(' ')[1]}`}>
                  <div className={item.color.split(' ')[0]}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CURRICULUM STRUCTURE ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum Structure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              10-semester program integrating Arts/Commerce subjects with core legal education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-blue-700">1</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Foundation Phase</h3>
              <p className="text-gray-600">Years 1-2: Arts/Commerce subjects with introductory law courses</p>
            </div>

            {/* Phase 2 */}
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-blue-700">2</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Core Law Phase</h3>
              <p className="text-gray-600">Years 3-4: Comprehensive study of substantive and procedural laws</p>
            </div>

            {/* Phase 3 */}
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-blue-700">3</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialization Phase</h3>
              <p className="text-gray-600">Year 5: Elective specializations and practical training</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPECIALIZATIONS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Specializations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from specialized tracks based on your career interests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* BA-LLB */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Scale className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">B.A. LL.B</h3>
              </div>
              <p className="text-gray-600 mb-4">Arts and Law integration focusing on social sciences and humanities.</p>
              <div className="space-y-2">
                {["Constitutional Law", "Criminal Law", "Human Rights", "International Law"].map((spec, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BBA-LLB */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">B.B.A. LL.B</h3>
              </div>
              <p className="text-gray-600 mb-4">Business administration and law for corporate legal careers.</p>
              <div className="space-y-2">
                {["Corporate Law", "Taxation", "IPR", "Banking & Finance"].map((spec, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <ArrowRight className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BCom-LLB */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <BarChart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">B.Com LL.B</h3>
              </div>
              <p className="text-gray-600 mb-4">Commerce and law integration for financial and corporate sectors.</p>
              <div className="space-y-2">
                {["Corporate Governance", "Insolvency Law", "Securities Law", "Competition Law"].map((spec, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <ArrowRight className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Begin Your Legal Career</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our 5-Year Integrated Law Program and build a strong foundation for your legal career.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-600">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-blue-200 text-sm">Admission Helpline</p>
                <p className="text-white font-semibold">+91 9284246664</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">Email</p>
                <p className="text-white font-semibold">admissions@jadhavar-law.edu.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
