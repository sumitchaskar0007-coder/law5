import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  Scale,
  BookOpen,
  Briefcase,
  Search,
  Shield,
  Users,
  Heart,
  Trophy,
  ShieldCheck,
  ArrowRight,
  Star,
  CheckCircle,
  GraduationCap,
  BarChart,
  Target
} from 'lucide-react'

export default function Cells() {

  const cells = [
    {
      title: "Legal Aid & Legal Literacy Cell",
      icon: <Scale className="h-10 w-10" />,
      description:
        "Provides free legal assistance and spreads awareness of basic legal rights.",
      objectives: [
        "Provide free legal aid",
        "Promote legal awareness",
        "Encourage social responsibility",
        "Develop client-handling skills"
      ],
      activities: [
        "Legal literacy camps",
        "Village outreach",
        "Legal aid clinics",
        "Document drafting"
      ],
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Moot Court & Advocacy Cell",
      icon: <BookOpen className="h-10 w-10" />,
      description:
        "Strengthens advocacy, research, and courtroom skills.",
      objectives: [
        "Advocacy skills",
        "Court etiquette",
        "Legal research",
        "Competition preparation"
      ],
      activities: [
        "Moot courts",
        "Trial advocacy",
        "Judgment analysis",
        "Workshops"
      ],
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Internship & Placement Cell",
      icon: <Briefcase className="h-10 w-10" />,
      description:
        "Connects students with courts, law firms, corporates, and NGOs.",
      objectives: [
        "Internships",
        "Career guidance",
        "Employability skills",
        "Professional networking"
      ],
      activities: [
        "Resume workshops",
        "Mock interviews",
        "Career counseling",
        "Internship coordination"
      ],
      color: "from-green-600 to-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Research & Publication Cell",
      icon: <Search className="h-10 w-10" />,
      description:
        "Promotes academic research and publications.",
      objectives: [
        "Legal research",
        "Academic writing",
        "Interdisciplinary studies",
        "Conference participation"
      ],
      activities: [
        "Research workshops",
        "Student journal",
        "Paper presentations",
        "Faculty projects"
      ],
      color: "from-indigo-600 to-indigo-800",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      title: "Women Development Cell",
      icon: <Heart className="h-10 w-10" />,
      description:
        "Focuses on empowerment and leadership for women students.",
      objectives: [
        "Women empowerment",
        "Leadership skills",
        "Safety & equality",
        "Career growth"
      ],
      activities: [
        "Self-defense",
        "Leadership talks",
        "Mentoring",
        "Wellness programs"
      ],
      color: "from-rose-600 to-rose-800",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200"
    },
    {
      title: "Cultural & Sports Committee",
      icon: <Trophy className="h-10 w-10" />,
      description:
        "Encourages holistic development through sports and cultural events.",
      objectives: [
        "Teamwork",
        "Creativity",
        "Fitness",
        "Leadership"
      ],
      activities: [
        "Annual fest",
        "Sports meets",
        "Debates",
        "Intercollege events"
      ],
      color: "from-violet-600 to-violet-800",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Cells & 5 Year Law Programme</title>
      </Helmet>

{/* HERO */}
<section className="bg-white py-16 text-center">
  <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
    Cells & 5 Year Integrated Law Programme
  </h1>

  <p className="max-w-3xl mx-auto text-gray-600">
    BA LL.B & BBA LL.B (5 Years) at Jadhavar Law College combines legal education with
    arts or business studies, preparing students for advocacy, judiciary, corporates,
    and civil services.
  </p>
</section>

{/* ABOUT 5 YEAR LAW */}
<section className="py-16 bg-gray-50">
<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">

<div className="bg-white p-6 rounded-xl shadow">
<GraduationCap className="text-blue-600 mb-3"/>
<h3 className="font-bold mb-2">Integrated Degree</h3>
<p className="text-sm text-gray-600">
BA LL.B & BBA LL.B combine graduation + law in 5 years.
</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<BarChart className="text-purple-600 mb-3"/>
<h3 className="font-bold mb-2">Industry Exposure</h3>
<p className="text-sm text-gray-600">
Court visits, internships, moot courts & research projects.
</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<Target className="text-green-600 mb-3"/>
<h3 className="font-bold mb-2">Career Ready</h3>
<p className="text-sm text-gray-600">
Advocate, Judge, Corporate Lawyer, Legal Advisor, UPSC.
</p>
</div>

</div>
</section>

{/* CELLS GRID */}
<section className="py-16">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

{cells.map((cell,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className={`${cell.bgColor} border ${cell.borderColor} rounded-xl p-6 shadow`}
>

<div className={`w-14 h-14 bg-gradient-to-br ${cell.color} rounded-xl text-white flex items-center justify-center mb-4`}>
{cell.icon}
</div>

<h3 className="font-bold mb-2">{cell.title}</h3>
<p className="text-sm text-gray-600 mb-3">{cell.description}</p>

<h4 className="text-sm font-semibold mb-1">Objectives</h4>
{cell.objectives.map((o,i)=>(
<p key={i} className="text-xs flex items-center gap-1 text-gray-700">
<CheckCircle className="h-3 w-3 text-green-500"/> {o}
</p>
))}

<h4 className="text-sm font-semibold mt-3 mb-1">Activities</h4>
{cell.activities.map((a,i)=>(
<p key={i} className="text-xs flex items-center gap-1 text-gray-700">
<Star className="h-3 w-3 text-yellow-500"/> {a}
</p>
))}

</motion.div>
))}

</div>
</section>

{/* CTA */}
<section className="py-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
<h2 className="text-2xl font-bold mb-3">Shape Your Legal Career With Us</h2>
<p className="mb-6 text-blue-100">
Join BA LL.B / BBA LL.B and grow with academic excellence + professional exposure.
</p>

<button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2">
Enquire Now <ArrowRight size={16}/>
</button>
</section>

</>
)
}
