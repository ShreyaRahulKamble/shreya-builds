import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    name: 'Rajmangal Furniture',
    type: 'Furniture · Premium retail',
    number: '01',
    theme: 'furniture',
    tagline: 'Comfort, craft,\nand considered living.',
    detail: 'A premium furniture website concept built around elevated product storytelling and a refined shopping journey.',
    action: 'View concept',
    status: 'Concept Project',
    demoUrl: null,
  },
  {
    name: 'Deko',
    type: 'Salon · Brand experience',
    number: '02',
    theme: 'salon',
    tagline: 'A little more\nroom to exhale.',
    detail: 'A calming salon experience focused on brand personality, service clarity, and a warm client journey.',
    action: 'View concept',
    status: 'Website Concept',
    demoUrl: null,
  },
  {
    name: 'Boutique Website Concept',
    type: 'Fashion · Product showcase',
    number: '03',
    theme: 'boutique',
    tagline: 'Curated pieces,\nmade to linger.',
    detail: 'An editorial retail concept designed to showcase collections with elegant product storytelling and elevated browsing.',
    action: 'View concept',
    status: 'Concept Project',
    demoUrl: null,
  },
  {
    name: 'Luxury Furniture Experience',
    type: 'Furniture · Signature interiors',
    number: '04',
    theme: 'furniture',
    tagline: 'Design that makes\na statement.',
    detail: 'A luxury-first concept for a premium furniture brand, focused on refined storytelling and memorable product presentation.',
    action: 'View concept',
    status: 'Website Concept',
    demoUrl: null,
  },
];

const businessInfo = {
  email: 'shreyabuilds911@gmail.com',
  phoneDisplay: '+91 92260 86700',
  phoneHref: 'tel:+919226086700',
  whatsappNumber: '919226086700',
  whatsappDisplay: '+91 92260 86700',
  whatsappMessage: 'Hi Shreya Builds! I\'m interested in getting a professional website for my business. Could you share your services, pricing, and next steps?',
};

const whatsappInquiryUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(businessInfo.whatsappMessage)}`;

const services = [
  {
    number: '01',
    title: 'Premium Business Websites',
    description: 'Custom websites for local businesses and growing brands, designed around your goals, audience, and market position.',
    tags: 'Business websites / Brand positioning / Responsive design',
  },
  {
    number: '02',
    title: 'Landing Pages',
    description: 'Focused, conversion-ready landing pages for products, services, and campaigns that guide visitors toward action.',
    tags: 'Sales pages / Campaign pages / Lead generation',
  },
  {
    number: '03',
    title: 'Product and Service Showcases',
    description: 'Organized layouts that help visitors explore offerings clearly, understand your value, and browse with confidence.',
    tags: 'Product galleries / Service pages / Portfolio storytelling',
  },
  {
    number: '04',
    title: '3D and Motion Experiences',
    description: 'Thoughtful motion, animated storytelling, and interactive details that give your digital presence a premium edge.',
    tags: 'Visual storytelling / Motion / Interactive design',
  },
  {
    number: '05',
    title: 'WhatsApp Integration',
    description: 'Direct customer inquiries with quick contact pathways and easy access to WhatsApp and email communication.',
    tags: 'Lead capture / Direct contact / Client access',
  },
  {
    number: '06',
    title: 'Website Optimization',
    description: 'Responsive refinements, performance improvements, accessibility updates, and basic on-page SEO to support reliable browsing.',
    tags: 'Optimization / Accessibility / On-page SEO',
  },
];

const approachSteps = [
  {
    number: '01',
    label: 'DISCOVER',
    description: 'Understand the client\'s business, goals, audience, and requirements.',
  },
  {
    number: '02',
    label: 'DESIGN',
    description: 'Create a distinctive visual direction and website experience.',
  },
  {
    number: '03',
    label: 'BUILD',
    description: 'Develop the responsive website and implement the agreed functionality.',
  },
  {
    number: '04',
    label: 'LAUNCH',
    description: 'Test the website, prepare it for launch, and provide the agreed handover.',
  },
];

const whyPoints = [
  'Distinctive design instead of generic templates.',
  'Mobile-first user experience.',
  'Clear communication and defined project scope.',
  'Design focused on the client\'s business goals.',
  'Modern web technologies and thoughtful interactions.',
];

function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-icon--diagonal' : 'arrow-icon'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function useReveals() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -36px 0px' },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function ProjectPreview({ project }) {
  const content = project.demoUrl ? (
    <a className="preview-link" href={project.demoUrl} target="_blank" rel="noreferrer">{project.action} <Arrow /></a>
  ) : (
    <span className="preview-link preview-link--concept">{project.status} <Arrow /></span>
  );

  return (
    <div className={`preview preview--${project.theme}`} aria-label={`${project.name} preview`}>
      <div className="preview-browser">
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <div className="browser-address">{project.name.toLowerCase().replaceAll(' ', '')}.studio</div>
        </div>
        <div className="preview-site">
          <div className="preview-nav">
            <span className="preview-brand">{project.name}</span>
            <span className="preview-menu">MENU <i /></span>
          </div>
          <div className="preview-copy">
            <span className="preview-eyebrow">{project.type.split(' · ')[0]} / {project.status}</span>
            <h3>{project.tagline}</h3>
            <p>{project.detail}</p>
            {content}
          </div>
          <div className="preview-art" aria-hidden="true">
            <div className="art-shape art-shape--one" />
            <div className="art-shape art-shape--two" />
            <div className="art-shape art-shape--three" />
            <span className="art-caption">{project.number} / WEBSITE CONCEPT</span>
          </div>
          <span className="preview-index">{project.number} — 04</span>
        </div>
      </div>
      <div className="preview-side-note" aria-hidden="true">{project.status.toUpperCase()} <span>↗</span></div>
    </div>
  );
}

function App() {
  useReveals();
  const [activeProject, setActiveProject] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoUnavailable, setVideoUnavailable] = useState(false);
  const videoRef = useRef(null);
  const selectedProject = projects[activeProject];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const attemptPlayback = () => {
      const playback = video.play();
      if (playback && typeof playback.catch === 'function') {
        playback.catch((error) => {
          if (error.name !== 'AbortError') setVideoUnavailable(true);
        });
      }
    };

    attemptPlayback();
    return () => video.pause();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Shreya Builds home" onClick={closeMenu}>
          <img src="/logo.png" alt="" width="48" height="48" />
          <span>SHREYA<br />BUILDS</span>
        </a>
        <button
          className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'primary-nav primary-nav--open' : 'primary-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#services" onClick={closeMenu}>What we do</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <Arrow diagonal /></a>
        </nav>
      </header>

      <a className="floating-whatsapp" href={whatsappInquiryUrl} target="_blank" rel="noreferrer" aria-label="Inquire on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M19.05 4.95A9.06 9.06 0 0 0 12.18 2c-5 0-9.08 4.05-9.08 9.04 0 1.59.42 3.15 1.22 4.52L2 22l6.72-1.76a9.07 9.07 0 0 0 4.3 1.12h.01c5 0 9.07-4.06 9.07-9.06 0-2.42-.94-4.7-2.65-6.41Zm-6.87 13.95h-.01c-1.38 0-2.74-.37-3.92-1.08l-.28-.17-3.98 1.04 1.06-3.88-.18-.3a7.42 7.42 0 0 1-1.15-3.96c0-4.08 3.32-7.4 7.4-7.4a7.36 7.36 0 0 1 5.22 2.17 7.39 7.39 0 0 1 2.17 5.23c0 4.08-3.32 7.4-7.4 7.4Zm4.07-5.53c-.22-.11-1.3-.64-1.5-.71-.2-.07-.34-.11-.48.11-.14.22-.54.71-.66.86-.12.14-.24.16-.46.05-.22-.11-.93-.34-1.76-.96-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.24.33-.36.11-.12.14-.21.22-.35.07-.14.04-.26-.02-.36-.06-.11-.48-1.16-.66-1.59-.17-.42-.35-.36-.48-.36h-.41c-.14 0-.36.05-.55.26-.19.21-.73.72-.73 1.76s.75 2.04.85 2.18c.11.14 1.47 2.23 3.56 3.13.5.22.89.35 1.19.45.5.16.96.14 1.32.08.41-.06 1.3-.53 1.49-1.05.19-.52.19-.96.13-1.05-.06-.08-.2-.13-.42-.24Z" fill="currentColor" />
        </svg>
      </a>

      <main id="main">
        <section className={`hero${videoUnavailable ? ' hero--video-unavailable' : ''}`} id="home" aria-labelledby="hero-title">
          {!videoUnavailable && (
            <video
              ref={videoRef}
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              onError={() => setVideoUnavailable(true)}
            >
              <source src="/3d-motion.mp4" type="video/mp4" />
            </video>
          )}
          <div className="hero-video-wash" aria-hidden="true" />
          <div className="hero-inner">
            <p className="eyebrow hero-eyebrow"><span /> Independent digital studio <span className="eyebrow-year">EST. 2024</span></p>
            <h1 id="hero-title">
              <span className="headline-line">Your Business</span>
              <span className="headline-line headline-line--second">Deserves More</span>
              <span className="headline-line headline-line--third">Than a <em>Website.</em></span>
            </h1>
            <div className="hero-bottom">
              <p>We create distinctive digital experiences that help businesses stand out, earn trust, and grow.</p>
              <div className="hero-actions">
                <a className="button button--dark" href="#work">Explore Our Work <Arrow /></a>
                <a className="button button--secondary" href={whatsappInquiryUrl} target="_blank" rel="noreferrer">Inquire on WhatsApp <Arrow /></a>
              </div>
            </div>
          </div>
          <div className="hero-footer" aria-hidden="true">
            <span>Thoughtful by design. Built for what’s next.</span>
            <a href="#work">Scroll to explore <span className="scroll-line" /></a>
          </div>
        </section>

        <section className="work-section section-pad" id="work" aria-labelledby="work-title">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow"><span /> Selected work</p>
                <h2 id="work-title">Recent <em>projects.</em></h2>
            </div>
              <p className="section-intro">A curated look at the website concepts and digital experiences crafted for brands that want a more premium online presence.</p>
          </div>

          <div
            className="work-showcase"
            id="concept-preview"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`project-tab-${activeProject}`}
            data-reveal
          >
            <ProjectPreview project={selectedProject} />
            <div className="work-caption">
              <div>
                <span className="work-category">{selectedProject.type}</span>
                <h3>{selectedProject.name}</h3>
              </div>
              <span className="work-counter">0{activeProject + 1} <span>/</span> {String(projects.length).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="project-selector" role="tablist" aria-label="Choose a website concept">
            {projects.map((project, index) => (
              <button
                className={activeProject === index ? 'project-tab project-tab--active' : 'project-tab'}
                type="button"
                role="tab"
                id={`project-tab-${index}`}
                aria-selected={activeProject === index}
                aria-controls="concept-preview"
                key={project.name}
                onClick={() => setActiveProject(index)}
                onKeyDown={(event) => {
                  let nextIndex = activeProject;
                  if (event.key === 'ArrowRight') nextIndex = (activeProject + 1) % projects.length;
                  else if (event.key === 'ArrowLeft') nextIndex = (activeProject - 1 + projects.length) % projects.length;
                  else if (event.key === 'Home') nextIndex = 0;
                  else if (event.key === 'End') nextIndex = projects.length - 1;
                  else return;
                  event.preventDefault();
                  setActiveProject(nextIndex);
                  document.getElementById(`project-tab-${nextIndex}`)?.focus();
                }}
              >
                <span className="project-tab-number">{project.number}</span>
                <span className="project-tab-copy"><strong>{project.name}</strong><small>{project.status}</small></span>
                <Arrow diagonal />
              </button>
            ))}
          </div>
        </section>

        <section className="services-section section-pad" id="services" aria-labelledby="services-title">
          <div className="services-intro" data-reveal>
            <p className="eyebrow eyebrow--light"><span /> What we build</p>
            <h2 id="services-title">Digital experiences<br />for businesses that <em>want to grow.</em></h2>
            <p className="services-description">Shreya Builds creates thoughtful websites and digital touchpoints that help businesses present their value clearly, attract enquiries, and look distinctly credible online.</p>
            <a className="light-link" href="#contact">Let’s find your next step <Arrow /></a>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" data-reveal key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-tags">{service.tags}</span>
                </div>
                <Arrow diagonal />
              </article>
            ))}
          </div>
        </section>

        <section className="approach-section section-pad" aria-labelledby="approach-title">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow"><span /> Our approach</p>
              <h2 id="approach-title">A clear process.<br /><em>Thoughtful execution.</em></h2>
            </div>
          </div>
          <div className="approach-grid">
            {approachSteps.map((step) => (
              <article className="approach-step" data-reveal key={step.number}>
                <span className="approach-number">{step.number}</span>
                <h3>{step.label}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="why-section section-pad" id="about" aria-labelledby="about-title">
          <div className="about-mark" data-reveal aria-hidden="true">
            <div className="about-orbit about-orbit--one" />
            <div className="about-orbit about-orbit--two" />
            <img src="/logo.png" alt="" loading="lazy" />
            <span>SB / 01</span>
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow"><span /> Why Shreya Builds</p>
            <h2 id="about-title">Distinctive design.<br /><em>Business-first</em> thinking.</h2>
            <p className="about-lede">Shreya Builds is an independent digital studio for businesses that want a polished online presence without the noise of a generic template.</p>
            <ul className="why-list" aria-label="Why choose Shreya Builds">
              {whyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a className="text-link about-link" href="#contact">A good place to begin <Arrow diagonal /></a>
          </div>
          <div className="about-footnote">INDEPENDENT BY NATURE<br />INTENTIONAL BY DESIGN</div>
        </section>

        <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
          <div className="contact-topline">
            <p className="eyebrow eyebrow--light"><span /> Have a project in mind?</p>
            <span className="contact-index">LET’S CREATE SOMETHING DISTINCT / 2024—</span>
          </div>
          <h2 id="contact-title" data-reveal>
            <span className="headline-line">Your Vision.</span>
            <span className="headline-line headline-line--second">Your Brand.</span>
            <span className="headline-line headline-line--third"><em>A Digital Experience That Stands Apart.</em></span>
          </h2>
          <div className="contact-bottom">
            <p>Your business has a story worth telling. Let’s bring your vision to life with a distinctive digital experience that reflects your brand, captures attention, and leaves a lasting impression.</p>
            <div className="contact-actions">
              <a className="contact-email" href={`mailto:${businessInfo.email}`}>
                {businessInfo.email} <span><Arrow diagonal /></span>
              </a>
              <a className="contact-email" href={businessInfo.phoneHref}>
                {businessInfo.phoneDisplay} <span><Arrow diagonal /></span>
              </a>
              <a className="button button--secondary contact-whatsapp" href={whatsappInquiryUrl} target="_blank" rel="noreferrer">Let&apos;s Create Something Exceptional <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          <img src="/logo.png" alt="" width="34" height="34" loading="lazy" />
          <span>SHREYA BUILDS</span>
        </a>
        <div className="footer-links" aria-label="Contact information">
          <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
          <a href={businessInfo.phoneHref}>{businessInfo.phoneDisplay}</a>
          <a href={whatsappInquiryUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <span>Thoughtfully made for the way forward.</span>
        <a href="#home" className="back-top">Back to top ↑</a>
        <span className="copyright">© {new Date().getFullYear()} SHREYA BUILDS</span>
      </footer>
    </>
  );
}

export default App;
