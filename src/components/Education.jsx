import { educationData } from '../data/content'

export default function Education() {
  return (
    <section className="section-card">
      <h2 className="section-title">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="item-card">
            <h3 className="item-title">{edu.institution}</h3>
            <div className="item-meta">
              <span className="text-gray-700 font-medium">{edu.degree}</span>
              <span className="text-gray-300 mx-2">|</span>
              <span className="text-gray-500">{edu.location}</span>
            </div>
            <div className="flex items-center gap-3 mt-3 text-sm">
              <span className="text-gray-500">{edu.startDate} - {edu.endDate}</span>
            </div>
            <p className="item-description mt-3">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
