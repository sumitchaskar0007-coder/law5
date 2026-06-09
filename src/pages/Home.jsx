import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FAQSection from "../components/FAQSection";
import GlimpseLawCollege from "../components/GlimpseLawCollege";
import FounderSection from "../components/FounderSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Facilities from "../components/Facilities";
import "./Home.css"

export default function HeroSection() {
  return (
    <>
      {/* ==================== SEO-ENHANCED HERO SECTION ==================== */}
      <section
        className="w-full relative py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10 
                   bg-sky-400 md:bg-transparent"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url('/assets/images/hero11.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        itemScope
        itemType="https://schema.org/EducationalOrganization"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* ================= LEFT CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6 text-white"
            >
              {/* SEO */}
              <meta itemProp="name" content="Jadhavar College of Law, Pune" />
              <meta
                itemProp="description"
                content="5-Year Integrated LL.B program in Pune with strong academic and placement support. Bar Council of India Approved."
              />
          
              <h2
                style={{
                  display: "inline-block",
                  background: "rgba(206, 207, 196, 0.6)",
                  padding: "12px 22px",
                  borderRadius: "25px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#1e293b",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                }}
              >
                NAAC A+ Accredited • Bar Council of India Approved
              </h2>

              {/* HEADING */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight">
                Shape Your <span className="text-yellow-400">Future</span> in{" "}
                <span className="text-yellow-400">Law</span>
              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-200 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
                <strong className="text-white">
                  Adv. Shardulrao Sudhakarrao Jadhavar College of Law, Pune
                </strong>{" "}
                offers a{" "}
                <strong>5-Year Integrated LL.B Program</strong> designed to prepare students for{" "}
                <strong className="text-white">
                  advocacy, judiciary, corporate law, legal academia, and public service
                </strong>{" "}
                through academic excellence and comprehensive practical legal training approved by the Bar Council of India.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-2">
                <Link to="/admissions/5-year-llb" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-yellow-400 text-black px-5 sm:px-6 py-2.5 md:py-3 rounded-md font-semibold text-xs sm:text-sm hover:bg-yellow-300 transition duration-300">
                    Apply for 5-Year LL.B 2026
                  </button>
                </Link>

                <a
                  href="/assets/Prospectus.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-white text-black px-5 sm:px-6 py-2.5 md:py-3 rounded-md font-semibold text-xs sm:text-sm hover:bg-gray-100 transition duration-300">
                    Download Prospectus
                  </button>
                </a>
              </div>

              {/* STATS ROW */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/20">
                <div>
                  <p className="text-yellow-400 text-xl sm:text-2xl font-bold">2024</p>
                  <p className="text-xs text-gray-300">Established</p>
                </div>
                <div>
                  <p className="text-yellow-400 text-xl sm:text-2xl font-bold">50+</p>
                  <p className="text-xs text-gray-300">Legal Associations</p>
                </div>
                <div>
                  <p className="text-yellow-400 text-xl sm:text-2xl font-bold">50+</p>
                  <p className="text-xs text-gray-300">MOU with Law Firms</p>
                </div>
                <div>
                  <p className="text-yellow-400 text-xl sm:text-2xl font-bold">95%</p>
                  <p className="text-xs text-gray-300">Placement Support</p>
                </div>
              </div>

              {/* QUOTE */}
              <div className="pt-4 max-w-xl">
                <p className="italic text-gray-300 text-xs sm:text-sm">
                  "We are committed to nurturing legal professionals who will uphold justice
                  and make meaningful contributions to society through our comprehensive 5-Year LL.B program."
                </p>
                
                <p className="text-xs text-gray-400 pt-2 md:pt-4">
                  Principal, Adv. Shardulrao Sudhakarrao Jadhavar College of Law
                </p>
              </div>
            </motion.div>

            {/* ================= RIGHT STATS SECTION ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              {/* This section is intentionally left empty as per original design */}
            </motion.div>
          </div>
        </div>
      </section>

      <FounderSection />

      {/* ================= Vision & Mission Section ================= */}

<section className="visionMissionSection">

  <div className="visionMissionContainer">

    <div className="visionMissionHeader">
      <h2>Vision & Mission</h2>
      <p>
        Adv. Shardulrao Sudhakarrao Jadhavar College of Law is committed to
        excellence in legal education, social responsibility and professional
        ethics while nurturing future leaders in the field of law.
      </p>
    </div>


    <div className="visionMissionGrid">

      {/* Vision Card */}

      <div className="visionCard">

        <div className="vmIcon">⚖️</div>

        <h3>Vision</h3>

        <p>
          Adv. Shardulrao Sudhakarrao Jadhavar College Of Law works towards the
          growth, development and formation of such a generation of students who
          posses the intellectual genius, moral consciousness and social
          responsibility to ensure the Rule of Law, not just locally but also
          propagating the same globally. Since we lead the way in legal
          professional education, the onus is on us to show the way in
          integrating the rule of law within the society and remove any
          discrimination with respect to person, property or community in the
          society.
        </p>

        <p>
          The College is ground for Judges, Legislators and Public Servants in
          the making which would form part of the governing system in the
          future. We endeavour to make them the whatever constructive work they
          do and polish them into professionals who would make a mark in the
          legal area.
        </p>

      </div>


      {/* Mission Card */}

      <div className="missionCard">

        <div className="vmIcon">🎯</div>

        <h3>Mission</h3>

        <p>
          Adv. Shardulrao Sudhakarrao Jadhavar College Of Law believes in
          disseminating legal knowledge in a resourceful way with a view to help
          in the nation’s development. To achieve this objective the College
          identifies the following steps:
        </p>

        <ul>

          <li>
            To evolve and impart comprehensive legal education and to achieve excellence.
          </li>

          <li>
            To promote advanced studies and research in all branches of law.
          </li>

          <li>
            To sensitize the students of law regarding the various socio-legal
            issues of the country.
          </li>

          <li>
            To inculcate cultural, legal and ethical values with a view to
            foster the Rule of Law and the objectives enshrined in the
            Constitution of India.
          </li>

          <li>
            To raise legal awareness in the community for a greater social and
            economic justice.
          </li>

          <li>
            To combine quality education with necessary input of practical training.
          </li>

          <li>
            To prepare students for a variety of legal and law related career.
          </li>

        </ul>

      </div>

    </div>

  </div>

</section>

{/* ================= End Vision & Mission Section ================= */}

      {/* ================= 5-YEAR LL.B PROGRAM DETAILS ================= */}
      <section
        className="w-full bg-gradient-to-b from-slate-50 to-white py-14 md:py-20"
        itemScope
        itemType="https://schema.org/EducationalOccupationalProgram"
      >
        <div className="max-w-6xl mx-auto px-6">

          {/* SECTION HEADER */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Bar Council of India Approved
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              5-Year Integrated LL.B Program
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              A comprehensive legal education program combining undergraduate studies with professional law training
            </p>
          </div>

          {/* CENTERED PROGRAM CARD */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-3xl bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              itemScope
              itemType="https://schema.org/EducationalOccupationalProgram"
            >
              {/* Title */}
              <div className="mb-6">
                <h3
                  className="text-2xl font-bold text-slate-900 mb-2"
                  itemProp="name"
                >
                  5-Year Integrated LL.B
                </h3>

                {/* Duration & Approval Badges */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <span
                    className="inline-block bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full"
                    itemProp="timeToComplete"
                  >
                    5 Years (10 Semesters)
                  </span>
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                    BCI Approved
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                    Integrated Program
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-slate-700 text-sm md:text-base leading-relaxed mb-6"
                itemProp="description"
              >
                The 5-Year Integrated LL.B program at Jadhavar College of Law offers comprehensive legal education 
                covering all core and procedural laws. Students gain in-depth knowledge of Constitutional Law, 
                Criminal Law, Civil Law, Corporate Law, and more, along with practical training through moot courts, 
                legal aid clinics, and internships.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Eligibility</h4>
                    <p className="text-xs text-slate-600">10+2 with minimum 45% (40% for reserved categories)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Intake</h4>
                    <p className="text-xs text-slate-600">120 students per year</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Affiliation</h4>
                    <p className="text-xs text-slate-600">Affiliated to [University Name]</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Approval</h4>
                    <p className="text-xs text-slate-600">Bar Council of India (BCI)</p>
                  </div>
                </div>
              </div>


              

              {/* Core Subjects Preview */}
              <div className="mb-8">
                <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                  Core Subjects Include
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-700">
                  <span>• Constitutional Law</span>
                  <span>• Indian Penal Code</span>
                  <span>• Civil Procedure Code</span>
                  <span>• Criminal Procedure Code</span>
                  <span>• Law of Contracts</span>
                  <span>• Family Law</span>
                  <span>• Company Law</span>
                  <span>• Property Law</span>
                  <span>• Environmental Law</span>
                </div>
              </div>

              {/* Career Opportunities */}
              <div className="mb-8">
                <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                  Career Opportunities
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-700">
                  <span>• Litigation Lawyer</span>
                  <span>• Corporate Counsel</span>
                  <span>• Judicial Services</span>
                  <span>• Public Prosecutor</span>
                  <span>• Legal Advisor</span>
                  <span>• Legal Academia</span>
                  <span>• Legal Researcher</span>
                  <span>• Human Rights Lawyer</span>
                  <span>• Tax Consultant</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/programs/5-year-llb" className="flex-1">
                  <button className="w-full bg-slate-900 text-white py-3 rounded-lg text-sm font-semibold hover:bg-black transition duration-300">
                    View Complete Curriculum
                  </button>
                </Link>

                <Link to="/admissions/5-year-llb" className="flex-1">
                  <button className="w-full border-2 border-slate-900 text-slate-900 py-3 rounded-lg text-sm font-semibold hover:bg-slate-900 hover:text-white transition duration-300">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LL.B PROMO SECTION ==================== */}
      {/* PLACEMENTS SECTION */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Placements
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto mb-16">
            At Jadhavar College of Law (5-Year LL.B.), we are committed to shaping
            confident legal professionals. Our dedicated Training & Placement Cell
            bridges the gap between legal education and professional practice,
            ensuring students are courtroom-ready, corporate-ready, and
            competitive-exam-ready.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* ITEM 1 */}
            <div>
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/assets/images/law-placement1.png"
                  alt="Placement Assistance at Jadhavar Law College"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">
                100% Placement Assistance
              </h4>
              <p className="text-gray-600 text-sm">
                Support with internships, law firms, chambers, and corporate legal
                departments for 5-Year LL.B students.
              </p>
            </div>

            {/* ITEM 2 */}
            <div>
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/assets/images/law-placement2.png"
                  alt="Industry Connect at Jadhavar Law College"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">
                Strong Legal Industry Connect
              </h4>
              <p className="text-gray-600 text-sm">
                Guest lectures by senior advocates, judges, legal advisors, and
                corporate lawyers for integrated law students.
              </p>
            </div>

            {/* ITEM 3 */}
            <div>
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/assets/images/law-placement3.png"
                  alt="Pre-Placement Training at Jadhavar Law College"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">
                Pre-Placement Training
              </h4>
              <p className="text-gray-600 text-sm">
                Courtroom etiquette, drafting skills, communication, moot courts,
                and interview preparation for 5-Year LL.B graduates.
              </p>
            </div>

            {/* ITEM 4 */}
            <div>
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/assets/images/law-placement4.png"
                  alt="Diverse Legal Sectors at Jadhavar Law College"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">
                Diverse Legal Sectors
              </h4>
              <p className="text-gray-600 text-sm">
                Litigation, Corporate Law, Judiciary, Legal Process Outsourcing,
                NGOs, and Public Services for law graduates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE JADHAVAR COLLEGE ================= */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50/30 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Heading Section */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            {/* Badge */}
            <div className="inline-flex items-center justify-center mb-4 md:mb-6">
              <span className="relative inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-semibold rounded-full shadow-md">
                <span className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full opacity-70"></span>
                <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full opacity-70"></span>
                OUR DISTINCTIVE EDGE
              </span>
            </div>
            
            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Jadhavar Advantage
              </span> for 5-Year LL.B
            </h2>
            
            {/* Description */}
            <div className="max-w-4xl mx-auto px-4">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed md:leading-loose">
                <span className="font-bold text-gray-900">Adv. Shardulrao Sudhakarrao Jadhavar College of Law</span> is Pune's premier 
                institution for <span className="text-blue-600 font-semibold">5-Year Integrated LL.B education</span>, combining 
                <span className="text-blue-600 font-semibold"> BCI-approved excellence</span> with 
                <span className="text-blue-600 font-semibold"> practice-oriented pedagogy</span> to shape tomorrow's legal leaders.
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            
            {/* Column 1: Academic Excellence */}
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "Academic Excellence",
                  description: "Rigorous BCI-approved 5-Year LL.B curriculum with emphasis on legal theory and practical application",
                  icon: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6l9-5" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6l-9-5" />
                    </svg>
                  ),
                  color: "from-blue-50 to-blue-100",
                  iconColor: "text-blue-600",
                  borderColor: "border-blue-200"
                },
                {
                  title: "Expert Faculty",
                  description: "Learn from 50+ experienced professors, legal practitioners, and judicial officers specializing in various law subjects",
                  icon: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  color: "from-purple-50 to-purple-100",
                  iconColor: "text-purple-600",
                  borderColor: "border-purple-200"
                },
                {
                  title: "BCI Approved",
                  description: "Fully recognized by Bar Council of India for 5-year integrated LL.B program",
                  icon: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  color: "from-green-50 to-green-100",
                  iconColor: "text-green-600",
                  borderColor: "border-green-200"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`relative bg-white border ${item.borderColor} rounded-2xl p-5 md:p-6 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1`}>
                    <div className="flex items-start space-x-4 md:space-x-5">
                      {/* Icon Container */}
                      <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center ${item.iconColor} shadow-sm`}>
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color.split(' ')[0]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Column 2: Practical Learning */}
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "Practical Learning",
                  description: "Hands-on experience through moot courts, legal aid clinics, mock trials, and case studies throughout the 5-year program",
                  icon: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  ),
                  color: "from-orange-50 to-orange-100",
                  iconColor: "text-orange-600",
                  borderColor: "border-orange-200"
                },
                {
                  title: "Career Support",
                  description: "95% placement assistance with top law firms, corporates, judicial services, and litigation chambers for LL.B graduates",
                  icon: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  color: "from-indigo-50 to-indigo-100",
                  iconColor: "text-indigo-600",
                  borderColor: "border-indigo-200"
                },
                {
                  title: "Research Excellence",
                  description: "Active research culture with publication opportunities and national seminars for 5-Year LL.B students",
                  icon: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  ),
                  color: "from-red-50 to-red-100",
                  iconColor: "text-red-600",
                  borderColor: "border-red-200"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`relative bg-white border ${item.borderColor} rounded-2xl p-5 md:p-6 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1`}>
                    <div className="flex items-start space-x-4 md:space-x-5">
                      {/* Icon Container */}
                      <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center ${item.iconColor} shadow-sm`}>
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color.split(' ')[0]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Column 3: Infrastructure & Values */}
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "Modern Infrastructure",
                  description: "Smart classrooms, digital law library with 30,000+ resources, moot court hall, and legal tech labs for 5-Year LL.B students",
                  icon: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  color: "from-teal-50 to-teal-100",
                  iconColor: "text-teal-600",
                  borderColor: "border-teal-200"
                },
                {
                  title: "Ethical Foundation",
                  description: "Strong emphasis on professional ethics, social justice, and constitutional values throughout the 5-year law program",
                  icon: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                  color: "from-yellow-50 to-yellow-100",
                  iconColor: "text-yellow-600",
                  borderColor: "border-yellow-200"
                },
                {
                  title: "Global Perspective",
                  description: "International collaborations, exchange programs, and global legal exposure for integrated law students",
                  icon: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: "from-cyan-50 to-cyan-100",
                  iconColor: "text-cyan-600",
                  borderColor: "border-cyan-200"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 6) * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`relative bg-white border ${item.borderColor} rounded-2xl p-5 md:p-6 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1`}>
                    <div className="flex items-start space-x-4 md:space-x-5">
                      {/* Icon Container */}
                      <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center ${item.iconColor} shadow-sm`}>
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color.split(' ')[0]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Section - Added back with enhanced design */}
         
        </div>
      </section>
        

      {/* ================= INFRASTRUCTURE ================= */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              State-of-the-Art Infrastructure
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Modern facilities designed to enhance learning and professional development for 5-Year LL.B students
            </p>
          </div>

          {/* Slider */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >

            {[
              {
                image: "/assets/images/b1.png",
                title: "Moot Court Hall",
                description: "Fully equipped courtroom for practical training of law students"
              },
              {
                image: "/assets/images/b2.png",
                title: "Digital Law Library",
                description: "30,000+ law books & online legal databases including Manupatra, SCC Online"
              },
              {
                image: "/assets/images/b3.jpg",
                title: "Smart Classrooms",
                description: "Technology-enabled learning spaces for legal education"
              },
              {
                image: "/assets/images/b4.png",
                title: "Legal Research Lab",
                description: "Legal research software & databases for 5-Year LL.B students"
              },
              {
                image: "/assets/images/b5.png",
                title: "Legal Aid Clinic",
                description: "Practical legal counseling experience for integrated law students"
              },
              {
                image: "/assets/images/b6.png",
                title: "Seminar Halls",
                description: "For guest lectures, conferences, and legal workshops"
              }
            ].map((facility, index) => (

              <SwiperSlide key={index}>
                <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">

                  <div className="h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {facility.description}
                    </p>
                  </div>

                </div>
              </SwiperSlide>

            ))}

          </Swiper>

        </div>
      </section>
      <Facilities />
      
      {/* ================= AWARDS & ACHIEVEMENTS ================= */}
      <section className="w-full bg-white py-10 md:py-15">
        <div className="max-w-7xl mx-auto px-6">
          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
            <div className="flex">
              <img
                src="/assets/images/logo/logo1.png"
                alt="Jadhavar Group of Institutes Logo"
                className="w-48 md:w-56 object-contain ml-20 lg:ml-32"
                loading="lazy"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="text-sm text-blue-600 font-semibold mb-2">
                Jadhavar Group of Institutes
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Awards & Achievements
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Jadhavar College of Law has been consistently recognized for excellence
                in 5-Year Integrated LL.B education. Our commitment to quality teaching, infrastructure,
                and student outcomes has earned us numerous accolades and certifications.
              </p>
            </div>
          </div>

          {/* CERTIFICATE SLIDER */}
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            loop
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {[
              "/assets/images/certificate1.png",
              "/assets/images/certificate2.png",
              "/assets/images/certificate3.png",
              "/assets/images/certificate4.png",
            ].map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <img
                    src={cert}
                    alt={`Jadhavar College of Law Certificate ${index + 1}`}
                    className="w-full max-w-xs h-56 object-contain border border-gray-200 rounded-lg"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= ACCREDITATIONS ================= */}
      <section className="w-full bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          {/* HEADER */}
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-full mb-3 md:mb-4">
              QUALITY & COMPLIANCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-3">
              Recognitions & Accreditations
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-4">
              Our 5-Year LL.B program meets nationally recognized quality standards through
              statutory approvals and academic accreditations.
            </p>
          </div>

          {/* LOGOS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-8xl mx-auto">
            {[
              {
                image: "/assets/logo1/bci-logo.png",
                alt: "Bar Council of India Approved for 5-Year LL.B",
                title: "Bar Council of India (BCI)"
              },
              {
                image: "/assets/logo1/naac-logo.png",
                alt: "NAAC A+ Accredited",
                title: "NAAC – A+ Accreditation"
              },
              {
                image: "/assets/logo1/ugc-logo.png",
                alt: "UGC Recognized",
                title: "University Grants Commission (UGC)"
              },
              {
                image: "/assets/images/logo/logo1.png",
                alt: "Jadhavar Group of Institutions",
                title: "Jadhavar Group of Institutions"
              }
            ].map((logo, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* LOGO */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center mb-3 sm:mb-4">
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* TITLE */}
                <p className="text-xs sm:text-sm font-medium text-slate-700">
                  {logo.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GLIMPSE OF COLLEGE ================= */}
      <GlimpseLawCollege />

      {/* ================= FAQ SECTION ================= */}
      <FAQSection />
    </>
  );
}