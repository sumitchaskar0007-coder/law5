import React from 'react'
import { Award, CheckCircle } from 'lucide-react'

const ScholarshipCard = ({ scholarship }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
      <div className="flex items-center gap-3 mb-4">
        <Award className="h-6 w-6 text-blue-600" />
        <h4 className="font-bold text-gray-900">{scholarship.name}</h4>
      </div>
      <ul className="space-y-2">
        {scholarship.details.map((detail, idx) => (
          <li key={idx} className="flex items-start text-sm">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ScholarshipCard