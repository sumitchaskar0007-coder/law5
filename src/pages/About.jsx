import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  GraduationCap,
  Shield,
  Quote,
  Clock,
  Award as Medal,
  CheckCircle,
  Users,
  BookOpen,
  Target,
  Eye,
  UserCheck,
  Building,
  Globe,
  Scale,
  Briefcase,
  BookMarked,
  Library,
  Award,
  Zap,
  TrendingUp,
  Heart,
  Lightbulb,
  ChevronRight,
  Gavel,
  FileText,
  Landmark,
  Scale as ScaleIcon,
  BookOpenCheck,
  Sparkles
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  /* ================= LEADERSHIP ================= */
  const leadership = [
    {
      name: "Dr. Sudhakarrao Jadhavar",
      position: "President & Founder",
      qualification: "M.Com, M.A., L.L.M., M.P.M., D.T.L., D.L.L.&L.W., G.D.C.&A., Ph.D.",
      experience: "25+ Years in Educational Leadership",
      image: "/assets/images/about1.png",
      achievements: [
        "Founder of Jadhavar Group of Institutions",
        "Visionary leader in integrated legal education",
        "Promoter of value-based and ethical education",
        "Established multiple professional colleges"
      ],
      message:
        "Our 5-Year Integrated LL.B Program is designed to nurture young minds from the undergraduate level, shaping them into ethical, competent, and socially responsible legal professionals.",
      color: "from-blue-600 to-purple-700"
    },
    {
      name: "Adv. Shardulrao Sudhakarrao Jadhavar",
      position: "Vice President",
      qualification: "M.B.A., P.G.D.H.R.M., B.Com., D.H.R.&L., D.C.L., D.CP.L., APCL, DIPL, CMED, D.LL&L.W., L.L.M.",
      experience: "15+ Years in Legal Education & Practice",
      image: "/assets/images/about2.png",
      achievements: [
        "Expert in civil and constitutional law",
        "Key architect of 5-Year LL.B curriculum",
        "Moot court & legal training mentor",
        "Industry–academia liaison"
      ],
      message:
        "The future of law demands comprehensive legal education. Our 5-Year Integrated LL.B program provides students with in-depth knowledge of substantive and procedural law, preparing them for advocacy, judiciary, and corporate careers.",
      color: "from-green-600 to-blue-700"
    }
  ]

  /* ================= 5-YEAR LL.B PROGRAM DETAILS ================= */
  const programDetails = {
    title: "5-Year Integrated LL.B Program",
    description: "A comprehensive legal education program approved by the Bar Council of India, combining undergraduate studies with professional law education.",
    duration: "5 Years (10 Semesters)",
    eligibility: "10+2 or equivalent examination with minimum 45% marks (40% for reserved categories)",
    intake: "120 Students per year",
    fees: "Competitive fee structure with scholarship opportunities",
    affiliations: "Approved by Bar Council of India (BCI) & Affiliated to [University Name]"
  }

  const programHighlights = [
    {
      icon: <Gavel className="h-6 w-6" />,
      title: "Comprehensive Legal Curriculum",
      description: "In-depth study of substantive and procedural laws including Constitutional Law, Criminal Law, Civil Law, Corporate Law, and more"
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "Moot Court & Clinical Legal Education",
      description: "Regular moot court competitions, mock trials, legal aid camps, and client counseling sessions from first year onwards"
    },
    {
      icon: <Library className="h-6 w-6" />,
      title: "Advanced Learning Resources",
      description: "Well-stocked law library with Manupatra, SCC Online, and other legal databases; e-resources and digital learning platforms"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Internship & Placement Support",
      description: "Mandatory internships with law firms, courts, legal aid authorities, and corporate legal departments"
    }
  ]

  const coreSubjects = [
    {
      category: "Core Law Subjects",
      subjects: [
        "Constitutional Law of India",
        "Indian Penal Code (IPC)",
        "Code of Civil Procedure (CPC)",
        "Code of Criminal Procedure (CrPC)",
        "Law of Contracts (Indian & Special)",
        "Family Law (Hindu & Muslim)",
        "Law of Torts & Consumer Protection",
        "Property Law (Transfer of Property Act)",
        "Company Law & Corporate Governance",
        "Administrative Law",
        "Environmental Law",
        "Human Rights & International Law",
        "Labour & Industrial Laws",
        "Taxation Law (Direct & Indirect)",
        "Interpretation of Statutes",
        "Professional Ethics & Bar Council Rules"
      ]
    },
    {
      category: "Clinical & Practical Training",
      subjects: [
        "Moot Court Exercise & Internship",
        "Drafting, Pleading & Conveyancing",
        "Alternative Dispute Resolution (ADR)",
        "Professional Ethics & Accountancy for Lawyers",
        "Legal Aid & Public Interest Litigation (PIL)"
      ]
    }
  ]

  const careerOpportunities = [
    { icon: <Scale className="h-5 w-5" />, title: "Litigation", description: "Practice as an advocate in trial courts, high courts, or Supreme Court" },
    { icon: <Building className="h-5 w-5" />, title: "Corporate Law", description: "Work as legal counsel in corporate houses, MNCs, or law firms" },
    { icon: <Landmark className="h-5 w-5" />, title: "Judiciary", description: "Prepare for judicial services examinations at state and central level" },
    { icon: <FileText className="h-5 w-5" />, title: "Legal Academia", description: "Pursue research and teaching in law universities and colleges" },
    { icon: <Globe className="h-5 w-5" />, title: "International Organizations", description: "Work with UN, WTO, WHO, or international NGOs" },
    { icon: <BookOpen className="h-5 w-5" />, title: "Public Prosecutor", description: "Serve as government counsel or public prosecutor" },
    { icon: <Shield className="h-5 w-5" />, title: "Legal Advisor", description: "Advise government departments, PSUs, or regulatory bodies" },
    { icon: <Gavel className="h-5 w-5" />, title: "Legal Journalism", description: "Pursue legal reporting, content writing, or legal publishing" }
  ]

  /* ================= VISION / MISSION ================= */
  const visionMission = [
    {
      title: "Vision",
      icon: <Eye className="h-6 w-6" />,
      points: [
        "To be a premier institution for integrated legal education in India",
        "To develop ethical, competent, and socially responsible legal professionals",
        "To promote justice, equity, and constitutional values through legal education",
        "To contribute to legal research, reform, and access to justice"
      ],
      color: "border-blue-200 bg-blue-50"
    },
    {
      title: "Mission",
      icon: <Target className="h-6 w-6" />,
      points: [
        "Deliver high-quality 5-Year Integrated LL.B education as per BCI norms",
        "Encourage analytical thinking, legal reasoning, and problem-solving skills",
        "Provide extensive practical exposure through clinical legal education",
        "Instill professional ethics, social responsibility, and commitment to rule of law"
      ],
      color: "border-green-200 bg-green-50"
    },
    {
      title: "Objectives",
      icon: <CheckCircle className="h-6 w-6" />,
      points: [
        "Build strong foundation in all core and procedural laws",
        "Develop advocacy skills and courtroom etiquettes",
        "Prepare students for judiciary exams, competitive exams, and legal practice",
        "Promote legal awareness and access to justice through legal aid clinics"
      ],
      color: "border-purple-200 bg-purple-50"
    }
  ]

  const stats = [
    { icon: <Users />, value: "50+", label: "Association With Lawyers", color: "text-blue-600" },
    { icon: <GraduationCap />, value: "2024", label: "Established", color: "text-green-600" },
    { icon: <Briefcase />, value: "95%", label: "Placement Support", color: "text-purple-600" },
    { icon: <Award />, value: "50+", label: "MOU with Legal Bodies", color: "text-orange-600" }
  ]

  const teachingMethodologies = [
    { icon: <BookOpenCheck />, title: "Case Study Method", description: "Analysis of landmark judgments and real case studies" },
    { icon: <Users />, title: "Seminars & Guest Lectures", description: "Regular sessions with legal experts and practitioners" },
    { icon: <Gavel />, title: "Mock Trials", description: "Simulated court proceedings for practical training" },
    { icon: <ScaleIcon />, title: "ADR Training", description: "Workshops on mediation, arbitration, and negotiation" }
  ]

  return (
    <>
      <Helmet>
        <title>About Jadhavar 5-Year Integrated LL.B College | BCI Approved Law Program</title>
        <meta
          name="description"
          content="Learn about Jadhavar 5-Year Integrated LL.B College offering BCI-approved law program. Discover our vision, leadership, curriculum, and commitment to excellence in legal education."
        />
      </Helmet>

      {/* ================= HERO WITH BACKGROUND IMAGE - NO COLOR OVERLAY, INCREASED HEIGHT ================= */}
      <section
        className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/assets/images/hero1.png')" }}
      >
        {/* Semi-transparent overlay for text readability - removed color, just subtle darkening */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container relative z-10 mx-auto px-4 text-center text-white max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
            <Shield className="h-4 w-4" />
            BCI Approved | 5-Year Integrated Law Program
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Jadhavar 5-Year Integrated LL.B College
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Comprehensive Legal Education • Clinical Training • BCI Approved
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className={`${s.color} flex justify-center mb-2`}>
                  {React.cloneElement(s.icon, { className: "h-6 w-6" })}
                </div>
                <div className="text-xl font-bold">{s.value}</div>
                <div className="text-xs text-gray-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT & PROGRAM DETAILS ================= */}
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm mb-4">
              <Building className="h-4 w-4" />
              About the College
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Premier Institution for <span className="text-blue-600">5-Year Integrated LL.B</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Jadhavar Law College offers a comprehensive 5-Year Integrated LL.B program 
              approved by the Bar Council of India. The curriculum provides in-depth knowledge 
              of substantive and procedural laws, preparing students for diverse legal careers 
              in litigation, judiciary, corporate sector, and academia.
            </p>
          </div>

          {/* Program Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <Clock className="h-5 w-5 text-blue-600 mb-2" />
              <p className="text-sm text-gray-600">Duration</p>
              <p className="font-semibold">{programDetails.duration}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <Users className="h-5 w-5 text-green-600 mb-2" />
              <p className="text-sm text-gray-600">Intake</p>
              <p className="font-semibold">{programDetails.intake}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <CheckCircle className="h-5 w-5 text-purple-600 mb-2" />
              <p className="text-sm text-gray-600">Eligibility</p>
              <p className="font-semibold">10+2 with 45%</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <Shield className="h-5 w-5 text-orange-600 mb-2" />
              <p className="text-sm text-gray-600">Approval</p>
              <p className="font-semibold">Bar Council of India</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {visionMission.map((item, i) => (
              <div key={i} className={`rounded-xl p-6 border ${item.color}`}>
                <div className="mb-3 text-blue-600">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <ul className="space-y-2 text-sm">
                  {item.points.map((p, j) => (
                    <li key={j} className="flex items-start">
                      <ChevronRight className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-center mb-8">
            Program Highlights
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {programHighlights.map((h, i) => (
              <div key={i} className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 text-blue-600">{h.icon}</div>
                <h4 className="font-semibold mb-1">{h.title}</h4>
                <p className="text-sm text-gray-600">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE SUBJECTS ================= */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm mb-4">
              <BookMarked className="h-4 w-4 text-blue-600" />
              Curriculum
            </span>
            <h2 className="text-3xl font-bold mb-4">
              5-Year LL.B <span className="text-blue-600">Core Subjects</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive curriculum covering all essential law subjects as per Bar Council of India guidelines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreSubjects.map((category, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600 border-b pb-2">{category.category}</h3>
                <div className="grid grid-cols-1 gap-2">
                  {category.subjects.map((subject, i) => (
                    <div key={i} className="flex items-center p-2 hover:bg-blue-50 rounded-lg transition-colors">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEACHING METHODOLOGIES ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-sm mb-4">
              <Sparkles className="h-4 w-4 text-blue-600" />
              Teaching Methodologies
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Innovative <span className="text-blue-600">Learning Approaches</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingMethodologies.map((method, i) => (
              <div key={i} className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(method.icon, { className: "h-6 w-6" })}
                </div>
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAREER OPPORTUNITIES ================= */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm mb-4">
              <Briefcase className="h-4 w-4 text-blue-600" />
              Career Pathways
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Diverse <span className="text-blue-600">Career Opportunities</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              After completing 5-Year LL.B, graduates can explore various career options in legal profession
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {careerOpportunities.map((career, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-3">{career.icon}</div>
                <h3 className="font-semibold mb-2">{career.title}</h3>
                <p className="text-sm text-gray-600">{career.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-sm mb-4">
              <UserCheck className="h-4 w-4 text-blue-600" />
              Leadership
            </span>
            <h2 className="text-3xl font-bold">
              Our Visionary <span className="text-blue-600">Leadership</span>
            </h2>
          </div>

          <div className="space-y-6">
            {leadership.map((l, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden border">
                <div className="flex flex-col lg:flex-row">
                  <img src={l.image} alt={l.name} className="lg:w-1/3 w-full h-64 object-cover object-top" />
                  <div className="p-6 lg:w-2/3">
                    <h3 className="text-xl font-bold mb-1">{l.name}</h3>
                    <p className="text-sm text-blue-600 font-semibold mb-2">{l.position}</p>
                    <p className="text-sm text-gray-600 mb-3">{l.qualification}</p>

                    <ul className="mb-4 space-y-1 text-sm">
                      {l.achievements.map((a, j) => (
                        <li key={j} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>

                    <blockquote className="italic text-gray-700 text-sm border-l-4 pl-4 border-blue-500">
                      "{l.message}"
                    </blockquote>
                  </div>
                </div>
                <div className={`h-1 bg-gradient-to-r ${l.color}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INFRASTRUCTURE HIGHLIGHTS ================= */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm mb-4">
              <Building className="h-4 w-4 text-blue-600" />
              Infrastructure
            </span>
            <h2 className="text-3xl font-bold mb-4">
              State-of-the-Art <span className="text-blue-600">Facilities</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Library className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Law Library</h3>
              <p className="text-sm text-gray-600">
                Well-stocked library with 10,000+ books, national and international journals, 
                and access to Manupatra, SCC Online, and LexisNexis databases.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Gavel className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Moot Court Hall</h3>
              <p className="text-sm text-gray-600">
                Fully equipped moot court hall for conducting mock trials, client counseling, 
                and advocacy training sessions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Landmark className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Legal Aid Clinic</h3>
              <p className="text-sm text-gray-600">
                Functional legal aid clinic providing free legal advice to underprivileged 
                and practical training to students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Begin Your Journey in Legal Excellence
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join Jadhavar 5-Year Integrated LL.B Program and build a successful career in law
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Apply Now for 5-Year LL.B
          </button>
        </div>
      </section>
    </>
  )
}