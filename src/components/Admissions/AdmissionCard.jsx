import React from 'react'
import { ArrowRight } from 'lucide-react'

const AdmissionCard = ({ icon, title, description, cta, onClick, color }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group hover:transform hover:-translate-y-2 overflow-hidden">
      <div className={`bg-gradient-to-r ${color} p-6 text-white`}>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              {icon}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <button 
          onClick={onClick}
          className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group/btn"
        >
          {cta}
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}

export default AdmissionCard