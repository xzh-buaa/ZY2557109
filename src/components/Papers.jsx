import { paperData } from '../data/content'

export default function Papers() {
  return (
    <section className="section-card">
      <h2 className="section-title">Papers</h2>
      <div className="space-y-6">
        {paperData.map((paper, index) => (
          <div key={index} className="item-card">
            <div className="mb-4">
              <h3 className="item-title">{paper.title}</h3>
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
