import React from 'react'

function Timeline() {
  const timelineData = [
    {
      year: 1,
      title: "Year 1",
      description: "Use our $20k to develop one \"Hero\" product (Vegan Base), get a co-packer to make it, and sign our first 5–10 Miami accounts."
    },
    {
      year: 2,
      title: "Year 2",
      description: "Expand across Florida and Georgia. Hire a 3PL (warehouse) to handle shipping so we don't have to pack boxes."
    },
    {
      year: 3,
      title: "Year 3",
      description: "Clean up the books, show 24 months of growth, and list the business for sale with a broker."
    }
  ]

  return (
    <section id="timeline" className="section bg-light">
      <div className="container">
        <h2>Our 3-Year Timeline</h2>
        <div className="timeline">
          {timelineData.map((item) => (
            <div key={item.year} className="timeline-item">
              <div className="timeline-marker">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
