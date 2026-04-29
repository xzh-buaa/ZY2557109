import { paperData } from '../data/content'

export default function Papers() {
  return (
    <section className="section-card">
      <h2 className="section-title">Papers</h2>
      <div className="space-y-6">
        {paperData.map((paper, index) => (
          <div key={index} className="item-card">
            <div className="flex items-start justify-between mb-4">
              <h3 className="item-title pr-4">{paper.title}</h3>
              <a href={paper.link} className="text-blue-500 hover:text-blue-600 text-sm flex items-center whitespace-nowrap transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View
              </a>
            </div>
            <div className="item-meta mb-4">
              <span className="text-gray-400">{paper.year}</span>
            </div>

            {paper.images && paper.images.length > 0 && (
              <div className="mt-6 space-y-4">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {paper.images[0] && (
                    <div className="w-full lg:w-80 flex-shrink-0">
                      <img
                        src={`/${paper.images[0]}`}
                        alt="Paper figure 1"
                        className="w-full h-auto rounded-xl shadow-sm object-cover"
                      />
                    </div>
                  )}
                  <p className="item-description flex-grow leading-relaxed">{paper.description}</p>
                </div>

                {paper.images[1] && (
                  <div className="w-full overflow-hidden rounded-xl shadow-sm">
                    <img
                      src={`/${paper.images[1]}`}
                      alt="Paper figure 2"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>
            )}
            {(!paper.images || paper.images.length === 0) && (
              <p className="item-description mt-2 leading-relaxed">{paper.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
