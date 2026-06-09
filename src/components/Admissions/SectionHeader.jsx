import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const SectionHeader = ({ icon, title, isOpen, onClick }) => {
  return (
    <div 
      className="p-6 flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="text-blue-600">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
    </div>
  )
}

export default SectionHeader