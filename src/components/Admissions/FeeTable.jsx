import React from 'react'

const FeeTable = ({ feeStructure }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <th className="px-6 py-4 text-left font-semibold">Student Category</th>
            <th className="px-6 py-4 text-left font-semibold">Tuition Fee (Annual)</th>
            <th className="px-6 py-4 text-left font-semibold">Development Fee</th>
            <th className="px-6 py-4 text-left font-semibold">Total Annual Fee</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {feeStructure.map((fee, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium">{fee.category}</td>
              <td className="px-6 py-4">{fee.tuition}</td>
              <td className="px-6 py-4">{fee.development}</td>
              <td className="px-6 py-4 font-bold text-blue-700">{fee.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FeeTable