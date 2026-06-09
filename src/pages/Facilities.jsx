import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Building,
  BookOpen,
  Scale,
  Users,
  Monitor,
  Wifi,
  Home,
  Dumbbell,
  Coffee,
  CheckCircle,
  MapPin,
  Clock,
  Award,
  Shield,
  Heart,
  Zap,
  Star,
  ArrowRight,
  ChevronRight,
  Library,
  Mic,
  Video,
  Users2,
  Target,
  Globe,
  GraduationCap,
  BookCheck,
  Globe2,
  Computer,
  Printer,
  Camera,
  WifiOff,
  Utensils,
  Bed,
  ShowerHead,
  Briefcase,
  Smartphone
} from 'lucide-react'

export default function Facilities() {
  const facilities = [
    {
      title: "Campus Infrastructure",
      icon: <Building className="h-8 w-8" />,
      description: "Modern 8-acre campus with eco-friendly architecture, lush green spaces, and dedicated zones for academic and recreational activities.",
      features: [
        "8-acre sprawling campus",
        "Eco-friendly construction",
        "24/7 CCTV surveillance",
        "Ample parking (500+ vehicles)",
        "Wheelchair accessible throughout",
        "Solar-powered common areas"
      ],
      stats: "8 Acre Campus",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100 text-blue-700"
    },
    {
      title: "Digital Library",
      icon: <BookOpen className="h-8 w-8" />,
      description: "Modern library with 40,000+ legal volumes, digital resource center, and access to leading online legal databases.",
      features: [
        "40,000+ legal volumes",
        "Manupatra & SCC Online access",
        "24/7 digital resource access",
        "Silent study zones",
        "Group study rooms",
        "Research assistance desk"
      ],
      stats: "40K+ Books",
      color: "from-green-600 to-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100 text-green-700"
    },
    {
      title: "Moot Court Complex",
      icon: <Scale className="h-8 w-8" />,
      description: "Advanced moot court facility simulating Supreme Court environment for practical advocacy training.",
      features: [
        "Full courtroom simulation",
        "HD recording facilities",
        "Judges' chambers",
        "Digital evidence display",
        "200-seater capacity",
        "Audio-visual recording"
      ],
      stats: "Professional Setup",
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100 text-purple-700"
    },
    {
      title: "Smart Classrooms",
      icon: <Monitor className="h-8 w-8" />,
      description: "Technology-enabled classrooms with interactive boards, projectors, and comfortable seating for effective learning.",
      features: [
        "Interactive smart boards",
        "High-quality projectors",
        "Air-conditioned rooms",
        "Ergonomic furniture",
        "High-speed internet",
        "Sound amplification"
      ],
      stats: "Tech-Enabled",
      color: "from-orange-600 to-orange-800",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100 text-orange-700"
    },
    {
      title: "Computer Lab",
      icon: <Computer className="h-8 w-8" />,
      description: "Advanced computer lab with latest software for legal research, case management, and digital learning.",
      features: [
        "100+ computers",
        "Legal research software",
        "High-speed internet",
        "Printing facilities",
        "Technical support",
        "Extended access hours"
      ],
      stats: "100+ Systems",
      color: "from-indigo-600 to-indigo-800",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-100 text-indigo-700"
    },
    {
      title: "Auditorium",
      icon: <Mic className="h-8 w-8" />,
      description: "600-seater auditorium with professional audio-visual systems for seminars, conferences, and events.",
      features: [
        "600 seating capacity",
        "Professional sound system",
        "Stage lighting",
        "Green rooms",
        "Recording facilities",
        "VIP lounge"
      ],
      stats: "600 Seater",
      color: "from-red-600 to-red-800",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconBg: "bg-red-100 text-red-700"
    },
    {
      title: "Wi-Fi Campus",
      icon: <Wifi className="h-8 w-8" />,
      description: "High-speed Wi-Fi connectivity across campus with secure network and dedicated bandwidth for students.",
      features: [
        "Campus-wide coverage",
        "High-speed fiber optic",
        "Secure access points",
        "Dedicated bandwidth",
        "24/7 IT support",
        "Digital campus portal"
      ],
      stats: "High-Speed",
      color: "from-cyan-600 to-cyan-800",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      iconBg: "bg-cyan-100 text-cyan-700"
    },
    {
      title: "Hostel Accommodation",
      icon: <Home className="h-8 w-8" />,
      description: "Separate hostels for boys and girls with modern amenities, 24/7 security, and recreational facilities.",
      features: [
        "AC & non-AC rooms",
        "In-house dining",
        "Common rooms with TV",
        "Laundry services",
        "Medical facilities",
        "24/7 security"
      ],
      stats: "Safe & Secure",
      color: "from-teal-600 to-teal-800",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      iconBg: "bg-teal-100 text-teal-700"
    },
    {
      title: "Sports Complex",
      icon: <Dumbbell className="h-8 w-8" />,
      description: "Well-equipped sports facilities including gymnasium, indoor games, and outdoor courts for physical fitness.",
      features: [
        "Modern gym equipment",
        "Indoor sports hall",
        "Basketball court",
        "Yoga & meditation room",
        "Table tennis",
        "Sports coach"
      ],
      stats: "Fitness Center",
      color: "from-amber-600 to-amber-800",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100 text-amber-700"
    },
    {
      title: "Cafeteria",
      icon: <Utensils className="h-8 w-8" />,
      description: "Spacious and hygienic cafeteria serving nutritious meals, snacks, and beverages at reasonable prices.",
      features: [
        "Hygienic kitchen",
        "Varied menu options",
        "Subsidized rates",
        "Outdoor seating",
        "Juice center",
        "Snack counter"
      ],
      stats: "Healthy Dining",
      color: "from-pink-600 to-pink-800",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      iconBg: "bg-pink-100 text-pink-700"
    },
    {
      title: "Career Development Cell",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Dedicated center for placement assistance, interview preparation, and career counseling services.",
      features: [
        "Placement assistance",
        "Interview preparation",
        "Resume building",
        "Mock interviews",
        "Corporate workshops",
        "Alumni network"
      ],
      stats: "Career Support",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      iconBg: "bg-gray-100 text-gray-700"
    },
    {
      title: "Medical Facility",
      icon: <Heart className="h-8 w-8" />,
      description: "On-campus medical center with trained staff, first aid, and tie-up with nearby hospitals for emergencies.",
      features: [
        "24/7 medical center",
        "Trained nursing staff",
        "First aid facilities",
        "Regular health checkups",
        "Ambulance service",
        "Hospital tie-ups"
      ],
      stats: "Healthcare",
      color: "from-rose-600 to-rose-800",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      iconBg: "bg-rose-100 text-rose-700"
    }
  ]

  const highlights = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Modern Infrastructure",
      description: "Purpose-built campus for integrated legal education"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safe Campus",
      description: "24/7 security with CCTV surveillance"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Technology-Enabled",
      description: "Smart classrooms and digital resources"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Excellence",
      description: "Designed for 5-year integrated program"
    }
  ]

  const specialFeatures = [
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: "International Collaborations",
      description: "Access to global legal databases and international moot court opportunities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BookCheck className="h-8 w-8" />,
      title: "Research Support",
      description: "Dedicated research assistance and publication support for students",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      title: "Mentorship Program",
      description: "Personalized guidance from faculty and senior students",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Facilities & Infrastructure | Jadhavar 5-Year Law College Pune</title>
        <meta 
          name="description" 
          content="Explore world-class facilities at Jadhavar 5-Year Law College including modern library, moot court complex, smart classrooms, hostel, sports complex, and digital campus for BA-LLB, BBA-LLB, BCom-LLB programs."
        />
        <meta name="keywords" content="Jadhavar Law College facilities, 5-year law college infrastructure Pune, integrated law campus, law library, moot court, hostel facilities, sports complex, digital campus" />
        <link rel="canonical" href="https://www.jadhavar-law.edu.in/facilities" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-white pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6"
            >
              <Building className="h-4 w-4" />
              <span className="text-sm font-medium">Modern Campus Infrastructure</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              <span className="text-blue-700">World-Class Facilities</span> for Integrated Legal Education
            </motion.h1>
            
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Experience state-of-the-art infrastructure designed specifically for our 5-Year 
              BA-LLB, BBA-LLB, and BCom-LLB programs, fostering academic excellence and holistic development.
            </motion.p>
          </div>

          {/* Highlights */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-3 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center mb-1">{highlight.title}</h3>
                <p className="text-xs text-gray-600 text-center">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Campus <span className="text-blue-700">Facilities</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Designed to support comprehensive legal education and student development
              </p>
            </div>

            {/* Facilities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className={`relative h-full ${facility.bgColor} rounded-xl p-6 border ${facility.borderColor} hover:shadow-lg transition-all duration-300`}>
                    
                    {/* Stats Badge */}
                    <div className={`absolute top-4 right-4 bg-gradient-to-r ${facility.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {facility.stats}
                    </div>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${facility.iconBg} mb-4`}>
                      {facility.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {facility.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {facility.description}
                      </p>

                      {/* Features */}
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-1.5">
                          {facility.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-xs">
                              <ChevronRight className="h-3 w-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Special <span className="text-blue-700">Features</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Unique amenities that enhance the learning experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {specialFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map & Contact */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Campus Location */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Campus Location</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600 text-sm">
                          Jadhavar College of Law<br />
                          Law College Road, Shivajinagar<br />
                          Pune, Maharashtra - 411004
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Campus Hours</h4>
                        <p className="text-gray-600 text-sm">
                          Monday to Saturday: 8:00 AM - 8:00 PM<br />
                          Sunday: 9:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Smartphone className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Quick Contact</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <div className="p-2 bg-white rounded-lg">
                        <Smartphone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Admission Helpline</p>
                        <p className="font-semibold text-gray-900">+91 9284246664</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <div className="p-2 bg-white rounded-lg">
                        <Smartphone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">General Enquiry</p>
                        <p className="font-semibold text-gray-900">+91 20 25467890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <div className="p-2 bg-white rounded-lg">
                        <Smartphone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-semibold text-blue-700">info@jadhavar-law.edu.in</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Tour CTA */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Schedule a Campus Tour</h4>
                    <p className="text-gray-600 text-sm">Experience our facilities in person</p>
                  </div>
                  <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                    Book Campus Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}