import React from 'react'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>The Core Idea</h2>
        <div className="idea-grid">
          <div className="idea-card">
            <h3>What We Are</h3>
            <p>A <strong>B2B Dry-Mix Brand</strong>. We create a high-end, proprietary powder base (starting with Premium Vegan) that ice cream shops mix with water or milk to create their product.</p>
          </div>
          <div className="idea-card">
            <h3>The Problem We Solve</h3>
            <p>Local shops struggle with the high cost of refrigerated shipping, short shelf-life of liquid dairy, and the "science" of making creamy vegan ice cream.</p>
          </div>
          <div className="idea-card">
            <h3>Our Solution</h3>
            <p>A shelf-stable bag that saves them <strong>40% on shipping/storage</strong> and guarantees a perfect scoop every time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
