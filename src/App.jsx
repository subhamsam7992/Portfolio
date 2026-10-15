import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  Menu,
  MousePointer2,
  Target,
  TrendingUp,
  X,
} from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Target,
    title: 'Meta Ads campaign setup',
    description:
      'Plan and set up Facebook and Instagram ad campaigns around your business goals and offer.',
  },
  {
    number: '02',
    icon: MousePointer2,
    title: 'Audience & ad planning',
    description:
      'Shape audience targeting, placements and ad messaging to reach people who may be right for your business.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Ongoing optimization',
    description:
      'Review campaign activity and make considered adjustments to help improve the quality of your advertising.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Understand your business',
    description:
      'Start with your service, customers, goals and what makes your offer useful.',
  },
  {
    number: '02',
    title: 'Plan the campaign',
    description:
      'Align the audience, message and campaign setup with the outcome you want.',
  },
  {
    number: '03',
    title: 'Review and refine',
    description:
      'Keep an eye on performance and use what the campaign shows to guide next steps.',
  },
];

const navigation = [
  ['About', 'about'],
  ['Services', 'services'],
  ['Approach', 'approach'],
  ['Contact', 'contact'],
];

const publicAsset = (filename) => `${import.meta.env.BASE_URL}${filename}`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="app">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Ads Sathi home">
            <img src={publicAsset('ad-saathi-logo.jpeg')} alt="" className="brand-logo" />
            <span className="brand-copy">
              <strong>ADS SATHI</strong>
              <span>META ADS · GAYA, BIHAR</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav
            className={`navigation${menuOpen ? ' navigation-open' : ''}`}
            id="main-navigation"
            aria-label="Main navigation"
          >
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="header-cta" href="mailto:adssathi1@gmail.com">
              Let’s talk <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              META ADS FOR BUSINESS GROWTH
            </div>
            <h1>
              Put your business
              <br />
              <span className="text-gradient">in the right feed.</span>
            </h1>
            <p className="hero-description">
              I’m Shubham from Ads Sathi. I help businesses reach potential customers
              through thoughtfully planned Facebook and Instagram ads—with a focus on
              relevant audiences, clear messaging and meaningful enquiries.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:adssathi1@gmail.com">
                Discuss your business <ArrowUpRight size={17} />
              </a>
              <a className="button button-secondary" href="#services">
                Explore services <ArrowDown size={16} />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-icon"><Target size={16} /></span>
              <span>
                <strong>Clear strategy. Thoughtful execution.</strong>
                <small>Meta advertising for businesses in Gaya and beyond.</small>
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Shubham Kumar, Ads Sathi">
            <div className="visual-grid" aria-hidden="true" />
            <div className="visual-ring ring-one" aria-hidden="true" />
            <div className="visual-ring ring-two" aria-hidden="true" />
            <div className="portrait-frame">
              <div className="portrait-topline">
                <span>YOUR ADS PARTNER</span>
                <span className="portrait-indicator"><i /> ADS SATHI</span>
              </div>
              <img
                src={publicAsset('shubham-kumar-profile.png')}
                alt="Shubham Kumar, founder of Ads Sathi"
                className="portrait"
              />
              <div className="portrait-caption">
                <span className="caption-rule" />
                <span>
                  <strong>SHUBHAM KUMAR</strong>
                  <small>Helping businesses grow with Meta Ads</small>
                </span>
              </div>
            </div>
            <div className="floating-card floating-facebook">
              <span className="social-icon facebook-icon"><Facebook size={17} /></span>
              <span><strong>Facebook</strong><small>Reach your audience</small></span>
            </div>
            <div className="floating-card floating-instagram">
              <span className="social-icon instagram-icon"><Instagram size={17} /></span>
              <span><strong>Instagram</strong><small>Show up where they scroll</small></span>
            </div>
            <span className="visual-tag"><span /> GAYA, BIHAR · INDIA</span>
          </div>
          <a className="hero-scroll" href="#about">
            <span /> SCROLL TO EXPLORE <ChevronRight size={14} />
          </a>
        </section>

        <div className="platform-strip" aria-label="Advertising platforms">
          <div className="container platform-inner">
            <span className="strip-label">ADVERTISING ON</span>
            <span><Facebook size={17} /> Facebook</span>
            <span><Instagram size={17} /> Instagram</span>
            <span className="strip-note">One connected Meta Ads strategy</span>
          </div>
        </div>

        <section className="section container" id="about">
          <div className="section-heading">
            <div>
              <span className="section-kicker">01 — ABOUT ADS SATHI</span>
              <h2>
                Good ads start
                <br />
                <span className="muted-heading">with a clear purpose.</span>
              </h2>
            </div>
            <p>
              Ads Sathi helps businesses use Facebook and Instagram advertising to
              build visibility and connect with potential customers. Every business
              is different, so the first step is understanding what you offer and
              who you want to reach.
            </p>
          </div>

          <div className="about-grid">
            <article className="about-card about-message">
              <span className="card-overline">THE ADS SATHI APPROACH</span>
              <div className="message-mark" aria-hidden="true">“</div>
              <p>
                Make the message clear, reach the relevant people, and keep learning
                from the campaign.
              </p>
              <div className="signature">
                <span className="signature-line" />
                <span><strong>Shubham Kumar</strong><small>Ads Sathi</small></span>
              </div>
            </article>

            <div className="about-points">
              <article>
                <span className="point-icon"><Target size={18} /></span>
                <div>
                  <h3>Built around your goal</h3>
                  <p>Start with what matters to your business, from awareness to customer enquiries.</p>
                </div>
              </article>
              <article>
                <span className="point-icon"><MousePointer2 size={18} /></span>
                <div>
                  <h3>Made for your audience</h3>
                  <p>Bring audience, platform placement and ad message together with intention.</p>
                </div>
              </article>
              <article>
                <span className="point-icon"><TrendingUp size={18} /></span>
                <div>
                  <h3>Focused on learning</h3>
                  <p>Use campaign observations to inform adjustments and future decisions.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">02 — SERVICES</span>
                <h2>
                  Meta Ads, made
                  <br />
                  <span className="muted-heading">more intentional.</span>
                </h2>
              </div>
              <p>
                Practical support to help your business show up on Facebook and
                Instagram with a clear plan and a relevant message.
              </p>
            </div>

            <div className="service-grid">
              {services.map(({ number, icon: Icon, title, description }) => (
                <article className="service-card" key={number}>
                  <div className="service-card-top">
                    <span className="service-icon"><Icon size={20} /></span>
                    <span className="service-number">{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="service-bottom"><Check size={14} /> FACEBOOK & INSTAGRAM</span>
                </article>
              ))}
            </div>
            <p className="results-note">
              Campaign performance depends on factors such as the offer, audience,
              creative and budget. Results are not guaranteed.
            </p>
          </div>
        </section>

        <section className="section container" id="approach">
          <div className="section-heading approach-heading">
            <div>
              <span className="section-kicker">03 — HOW I WORK</span>
              <h2>
                A thoughtful process.
                <br />
                <span className="muted-heading">One step at a time.</span>
              </h2>
            </div>
            <a className="text-link" href="mailto:adssathi1@gmail.com">
              Start a conversation <ArrowRight size={16} />
            </a>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span>{step.number}</span>
                <div className="step-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div className="contact-copy">
              <span className="section-kicker">04 — GET IN TOUCH</span>
              <h2>
                Ready to talk
                <br />
                <span className="text-gradient">about your ads?</span>
              </h2>
              <p>
                Tell me a little about your business and what you’re looking to
                achieve. Let’s start with a conversation.
              </p>
              <div className="contact-actions">
                <a className="button button-primary" href="mailto:adssathi1@gmail.com">
                  <Mail size={17} /> adssathi1@gmail.com <ArrowUpRight size={16} />
                </a>
                <a
                  className="website-link"
                  href="https://adssathi.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Ads Sathi website <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <div className="contact-brand-card">
              <img src={publicAsset('ad-saathi-logo.jpeg')} alt="Ads Sathi logo" />
              <span className="contact-location"><i /> BASED IN GAYA, BIHAR</span>
              <strong>Ads Sathi</strong>
              <p>Helping businesses get seen by the people they want to reach.</p>
              <a href="https://adssathi.com/" target="_blank" rel="noreferrer">
                adssathi.com <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home" onClick={closeMenu}>
            <img src={publicAsset('ad-saathi-logo.jpeg')} alt="" className="brand-logo" />
            <span className="brand-copy">
              <strong>ADS SATHI</strong>
              <span>META ADS · GAYA, BIHAR</span>
            </span>
          </a>
          <span className="footer-tagline">Clear strategy. Thoughtful execution.</span>
          <a className="back-to-top" href="#home">BACK TO TOP ↑</a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Ads Sathi · Shubham Kumar</span>
          <span>Meta Ads for Facebook & Instagram</span>
        </div>
      </footer>
    </div>
  );
}
