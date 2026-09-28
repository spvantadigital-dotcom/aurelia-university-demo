import React from "react";
import "./App.css";

const programs = [
  {
    number: "01",
    title: "Engineering",
    text: "Build intelligent systems, products and technologies for tomorrow.",
  },
  {
    number: "02",
    title: "Design",
    text: "Turn ideas into meaningful experiences through creativity and technology.",
  },
  {
    number: "03",
    title: "Business",
    text: "Learn strategy, leadership and entrepreneurship in a changing world.",
  },
];

const stories = [
  {
    category: "RESEARCH",
    title: "Inside Aurelia's next generation innovation lab",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "CAMPUS",
    title: "A new way of experiencing university life",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "STUDENTS",
    title: "Meet the minds creating what comes next",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
  },
];

function App() {
  return (
    <div className="aurelia">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">A</span>
          <span>
            AURELIA
            <small>UNIVERSITY</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#campus">Campus</a>
          <a href="#stories">Stories</a>
        </nav>

        <a href="#apply" className="nav-apply">
          Apply Now <span>↗</span>
        </a>
      </header>

      {/* HERO */}
      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span></span> EST. 1987 · A GLOBAL UNIVERSITY
            </p>

            <h1>
              The future
              <br />
              belongs to
              <em>the curious.</em>
            </h1>

            <p className="hero-description">
              Aurelia University is a place for ambitious minds, bold ideas
              and people who believe education can change what comes next.
            </p>

            <div className="hero-actions">
              <a href="#programs" className="button button-dark">
                Explore Programs <span>↗</span>
              </a>

              <a href="#about" className="text-link">
                Discover Aurelia <span>→</span>
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1800&q=90"
              alt="Aurelia University campus"
              className="hero-image"
            />

            <div className="hero-image-label">
              <span>01</span>
              <p>WHERE IDEAS<br />BECOME IMPACT</p>
            </div>
          </div>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <div></div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          <div>
            <strong>38</strong>
            <span>YEARS OF<br />EXCELLENCE</span>
          </div>

          <div>
            <strong>24K+</strong>
            <span>ALUMNI<br />WORLDWIDE</span>
          </div>

          <div>
            <strong>96%</strong>
            <span>GRADUATE<br />PLACEMENT</span>
          </div>

          <div>
            <strong>42</strong>
            <span>GLOBAL<br />PARTNERS</span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="section-label">
            <span>01</span>
            <span>ABOUT AURELIA</span>
          </div>

          <div className="about-grid">
            <h2>
              Education should
              <br />
              <span>move you.</span>
            </h2>

            <div className="about-content">
              <p className="large-text">
                Not simply towards a career, but towards a bigger idea of who
                you can become.
              </p>

              <p>
                At Aurelia, disciplines connect, perspectives collide and
                students are encouraged to question the obvious. Our community
                brings together researchers, creators, entrepreneurs and
                future leaders.
              </p>

              <a href="#programs" className="circle-link">
                <span>Meet<br />Aurelia</span>
                ↗
              </a>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="programs section" id="programs">
          <div className="section-label light-label">
            <span>02</span>
            <span>FIND YOUR DIRECTION</span>
          </div>

          <div className="program-heading">
            <h2>
              Choose a path.
              <br />
              <em>Make it yours.</em>
            </h2>

            <p>
              Explore interdisciplinary programs designed for a world that
              refuses to stand still.
            </p>
          </div>

          <div className="program-list">
            {programs.map((program) => (
              <article className="program-card" key={program.number}>
                <span className="program-number">{program.number}</span>

                <div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </div>

                <span className="program-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        {/* CAMPUS */}
        <section className="campus section" id="campus">
          <div className="section-label">
            <span>03</span>
            <span>LIFE AT AURELIA</span>
          </div>

          <div className="campus-heading">
            <h2>
              More than a
              <br />
              <em>campus.</em>
            </h2>

            <p>
              A living ecosystem of ideas, friendships, experiments,
              conversations and experiences.
            </p>
          </div>

          <div className="campus-gallery">
            <div className="gallery-main">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85"
                alt="Students walking across campus"
              />
              <div className="gallery-caption">
                <span>01</span>
                <strong>PEOPLE FIRST</strong>
              </div>
            </div>

            <div className="gallery-small top">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=85"
                alt="University building"
              />
            </div>

            <div className="gallery-small bottom">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85"
                alt="Students collaborating"
              />
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="quote-section">
          <div className="quote-symbol">“</div>

          <blockquote>
            Education should not prepare you
            <br />
            for the future.
            <br />
            <em>It should help you create it.</em>
          </blockquote>

          <p>AURELIA UNIVERSITY · 2026</p>
        </section>

        {/* STORIES */}
        <section className="stories section" id="stories">
          <div className="section-label">
            <span>04</span>
            <span>FROM AURELIA</span>
          </div>

          <div className="stories-heading">
            <h2>
              Stories worth
              <br />
              <em>sharing.</em>
            </h2>

            <a href="#stories" className="text-link">
              View all stories →
            </a>
          </div>

          <div className="stories-grid">
            {stories.map((story, index) => (
              <article className={`story story-${index + 1}`} key={story.title}>
                <div className="story-image">
                  <img src={story.image} alt={story.title} />
                </div>

                <div className="story-info">
                  <span>{story.category}</span>
                  <h3>{story.title}</h3>
                  <a href="#apply">Read story ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* APPLICATION CTA */}
        <section className="apply" id="apply">
          <div className="apply-inner">
            <p className="eyebrow light-eyebrow">
              <span></span> YOUR NEXT CHAPTER STARTS HERE
            </p>

            <h2>
              Ready to make
              <br />
              <em>your mark?</em>
            </h2>

            <p>
              Applications for the 2027 academic year are now open.
            </p>

            <a href="mailto:admissions@aureliauniversity.edu" className="button button-light">
              Start Your Journey <span>↗</span>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-top">
            <div className="footer-brand">
              <span className="brand-mark">A</span>
              <div>
                AURELIA
                <small>UNIVERSITY</small>
              </div>
            </div>

            <p>
              Think beyond.
              <br />
              Shape tomorrow.
            </p>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Aurelia University</span>

            <span>
              Demo Website · Designed & Developed by{" "}
              <strong>SPVANTA DIGITAL</strong>
            </span>

            <span>India · Global</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;