import { internshipData } from '../data/content'

export default function Internships() {
  return (
    <section className="section-card">
      <h2 className="section-title">Internships</h2>
      <div className="space-y-6">
        {internshipData.map((internship, index) => (
          <div key={index} className="item-card">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="item-title">{internship.position}</h3>
                <div className="item-meta">
                  <span className="text-gray-700 font-medium">{internship.company}</span>
                  <span className="text-gray-300 mx-2">|</span>
                  <span className="text-gray-500">{internship.location}</span>
                </div>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap bg-gray-100 px-3 py-1 rounded-full">
                {internship.startDate} - {internship.endDate}
              </span>
            </div>
            <p className="item-description">{internship.description}</p>
            <div className="mt-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Key Achievements</p>
              <ul className="space-y-1">
                {internship.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2 text-gray-300">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
