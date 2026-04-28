import { internshipData } from '../data/content'

export default function Internships() {
  return (
    <section className="section-card">
      <h2 className="section-title">💼 Internships</h2>
      <div className="space-y-4">
        {internshipData.map((internship, index) => (
          <div key={index} className="item-card">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="item-title">{internship.position}</h3>
                <div className="item-meta">
                  <span className="text-gray-700 font-medium">{internship.company}</span>
                  <span className="text-gray-400 mx-2">|</span>
                  <span className="text-gray-500">{internship.location}</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {internship.startDate} - {internship.endDate}
              </span>
            </div>
            <p className="item-description mt-3">{internship.description}</p>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Key Achievements:</p>
              <ul className="list-disc list-inside space-y-1">
                {internship.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
