import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

 const faqs = [
  {
    q: "What is the duration of the 5-Year Integrated Law program?",
    a: "The BA LL.B and BBA LL.B programs are of five years duration, divided into ten semesters as per Bar Council of India (BCI) norms."
  },
  {
    q: "Who is eligible to apply for the 5-Year Integrated Law course?",
    a: "Students who have completed 10+2 or equivalent from a recognized board with minimum required marks are eligible to apply."
  },
  {
    q: "Is the 5-Year Law degree approved by the Bar Council of India?",
    a: "Yes, both BA LL.B and BBA LL.B programs are fully approved by the Bar Council of India (BCI)."
  },
  {
    q: "What is the admission process for BA LL.B / BBA LL.B?",
    a: "Admission is based on merit, academic performance, and document verification as per university and government guidelines."
  },
  {
    q: "Does the college provide internship opportunities during the course?",
    a: "Yes, students are guided for internships with advocates, courts, law firms, NGOs, and legal organizations throughout the program."
  },
  {
    q: "Are moot court and practical legal training included?",
    a: "Regular moot courts, drafting exercises, legal aid activities, client counseling, and court visits are integral parts of the curriculum."
  },
  {
    q: "What career opportunities are available after completing the 5-Year Law program?",
    a: "Graduates can pursue careers in advocacy, corporate law, judiciary, legal consultancy, public service, or higher studies such as LL.M."
  },
  {
    q: "Is placement assistance and career guidance available?",
    a: "Yes, the college offers career counseling, internship guidance, and placement support through its professional network."
  }
];

  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Common questions about admissions, academics, and career opportunities
            at Jadhavar College of Law.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm md:text-base">
                    {index + 1}. {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-blue-700" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-700" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 px-4 pb-4" : "max-h-0 px-4"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
