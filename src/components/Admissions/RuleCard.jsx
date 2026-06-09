import React from 'react'
import { Bookmark } from 'lucide-react'

const RuleCard = ({ rule }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Bookmark className="h-5 w-5 text-blue-600" />
        <h4 className="font-bold text-gray-900">{rule.title}</h4>
      </div>
      <ul className="space-y-3">
        {rule.points.map((point, idx) => (
          <li key={idx} className="flex items-start text-sm">
            <div className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
              {idx + 1}
            </div>
            <span className="text-gray-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RuleCard