import React, { useState } from 'react'
import { Loader2, CheckCircle } from 'lucide-react'

const FullApplication = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: 'Male',
    tenthPercentage: '',
    twelfthPercentage: '',
    twelfthStream: 'Science',
    board: 'State Board',
    category: 'General',
    address: '',
    city: '',
    state: '',
    pincode: '',
    guardianName: '',
    guardianPhone: '',
    message: '',
    howDidYouHear: 'Website'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-3">Application Submitted Successfully!</h2>
        <p className="text-gray-600">
          Our admission team will contact you within 2-3 working days.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-6">
        Apply Now - 5-Year B.A. LL.B Program
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

        {/* Personal Information */}
        <div className="space-y-4">
          <h4 className="font-semibold">Personal Information</h4>

          <input name="firstName" placeholder="First Name" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />
          <input name="lastName" placeholder="Last Name" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />
          <input name="phone" placeholder="Phone" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />

          <input type="date" name="dateOfBirth" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />

          <select name="gender" onChange={handleChange} className="w-full px-4 py-3 border rounded-xl">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Academic */}
        <div className="space-y-4">
          <h4 className="font-semibold">Academic Information</h4>

          <input name="tenthPercentage" placeholder="10th %" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />
          <input name="twelfthPercentage" placeholder="12th %" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />

          <input name="address" placeholder="Address" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />
          <input name="city" placeholder="City" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />
          <input name="state" placeholder="State" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />
          <input name="pincode" placeholder="Pincode" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />

          <input name="guardianName" placeholder="Guardian Name" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />
          <input name="guardianPhone" placeholder="Guardian Phone" required onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />
        </div>

        <div className="md:col-span-2">
          <textarea name="message" placeholder="Additional Information" rows="3" onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold flex justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </div>

      </form>
    </div>
  )
}

export default FullApplication