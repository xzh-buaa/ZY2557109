import { courseData } from '../data/content'

export default function Coursework() {
  return (
    <section className="section-card">
      <h2 className="section-title">Coursework</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courseData.map((course, index) => (
          <div key={index} className="item-card">
            <h3 className="item-title">{course.title}</h3>
            <div className="item-meta">
              <span className="text-gray-500">{course.institution}</span>
              <span className="text-gray-300 mx-2">|</span>
              <span className="text-gray-500">{course.semester}</span>
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                Grade: {course.grade}
              </span>
            </div>
            <p className="item-description mt-3">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
