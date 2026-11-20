import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, BarChart3, BookOpen, Check, ChevronDown,
  CircleHelp, Clock3, Menu, ShieldCheck, Signal, TrendingUp, X
} from 'lucide-react'

const features = [
  'Clear entry, stop-loss and take-profit levels',
  'Market analysis and trade rationale',
  'Risk-aware trading ideas',
  'Ongoing updates while your subscription is active',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(0)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="topline">
        <span className="status-dot" />
        <span>UFA TRADING • EDUCATION & MARKET INSIGHTS</span>
      </div>

      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="UFA home">
          <span className="brand-mark"><TrendingUp size={21} strokeWidth={2.6} /></span>
          <span>UFA<span className="brand-period">.</span></span>
        </a>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#offerings" onClick={closeMenu}>Our products</a>
          <a href="#about" onClick={closeMenu}>Our approach</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
          <a className="nav-cta" href="#offerings" onClick={closeMenu}>Explore products <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span /> A MORE STRUCTURED WAY TO TRADE</div>
            <h1>Make your next<br />move with <em>clarity.</em></h1>
            <p className="hero-description">
              Practical forex insights and focused learning resources to help you approach the markets with a plan.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#offerings">Explore our products <ArrowRight size={17} /></a>
              <a className="text-link" href="#about">Discover our approach <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-note"><ShieldCheck size={16} /> Education-led. Risk-aware. No guaranteed returns.</div>
          </div>

          <div className="hero-visual" aria-label="Abstract forex market chart illustration">
            <div className="visual-glow" />
            <div className="chart-card">
              <div className="chart-top">
                <div><span className="chart-label">MARKET SNAPSHOT</span><strong>EUR / USD</strong></div>
                <span className="market-pill"><span /> MARKET VIEW</span>
              </div>
              <div className="chart-price">1.084<span>26</span></div>
              <div className="chart-change"><TrendingUp size={15} /> Illustrative market movement</div>
              <div className="chart-area">
                <div className="chart-grid"><i /><i /><i /><i /></div>
                <svg viewBox="0 0 520 190" role="img" aria-label="Decorative rising market line">
                  <defs>
                    <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#b8f36b" stopOpacity=".22" />
                      <stop offset="100%" stopColor="#b8f36b" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 148 C22 139 26 157 48 132 S82 141 103 119 S132 128 151 105 S180 116 201 91 S229 111 251 82 S281 93 302 72 S331 85 351 60 S379 80 399 50 S429 62 450 37 S485 45 520 15 L520 190 L0 190Z" fill="url(#areaFill)" />
                  <path d="M0 148 C22 139 26 157 48 132 S82 141 103 119 S132 128 151 105 S180 116 201 91 S229 111 251 82 S281 93 302 72 S331 85 351 60 S379 80 399 50 S429 62 450 37 S485 45 520 15" fill="none" stroke="#b8f36b" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="520" cy="15" r="5" fill="#b8f36b" />
                </svg>
              </div>
              <div className="chart-footer"><span>MARKET EDUCATION</span><span>ILLUSTRATIVE DATA</span></div>
            </div>
            <div className="floating-card"><span className="floating-icon"><BarChart3 size={18} /></span><div><strong>Plan the trade</strong><small>Respect the risk</small></div><Check size={17} className="floating-check" /></div>
            <div className="visual-caption">A disciplined approach starts with a clear process.</div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="trust-inner">
            <div><Signal size={19} /><span>Focused market insights</span></div>
            <div><BookOpen size={19} /><span>Practical learning resources</span></div>
            <div><ShieldCheck size={19} /><span>Risk-aware approach</span></div>
            <div><Clock3 size={19} /><span>Simple, transparent pricing</span></div>
          </div>
        </section>

        <section className="offerings section-wrap" id="offerings">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> WHAT WE OFFER</div>
              <h2>Choose how you<br className="desktop-break" /> want to grow.</h2>
            </div>
            <p>Two focused products. Choose ongoing market insights or build your knowledge at your own pace.</p>
          </div>

          <div className="product-grid">
            <article className="product-card signal-card">
              <div className="product-card-top">
                <span className="product-icon"><Signal size={22} /></span>
                <span className="product-tag">MONTHLY MEMBERSHIP</span>
              </div>
              <h3>Forex Signals</h3>
              <p className="product-description">Stay informed with structured trade ideas and market analysis to support your own trading decisions.</p>
              <div className="price"><span className="currency">TSh</span>60,000<span className="price-period"> / month</span></div>
              <div className="card-divider" />
              <p className="includes-label">WHAT'S INCLUDED</p>
              <ul className="feature-list">
                {features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}
              </ul>
              <a className="button button-primary product-button" href="#contact">Get started <ArrowRight size={17} /></a>
              <p className="under-button">Renews monthly. Cancel according to the subscription terms.</p>
            </article>

            <article className="product-card ebook-card">
              <div className="product-card-top">
                <span className="product-icon ebook-icon"><BookOpen size={22} /></span>
                <span className="product-tag ebook-tag">ONE-TIME PURCHASE</span>
              </div>
              <h3>Forex Ebook</h3>
              <p className="product-description">A learning resource you can keep and revisit as you build your understanding of the forex market.</p>
              <div className="price"><span className="currency">TSh</span>70,000<span className="price-period"> / once</span></div>
              <div className="card-divider" />
              <p className="includes-label">YOUR RESOURCE</p>
              <ul className="feature-list">
                <li><Check size={16} />Learn at your own pace</li>
                <li><Check size={16} />Revisit the material whenever you need</li>
                <li><Check size={16} />A one-time payment</li>
                <li><Check size={16} />A useful reference for your learning journey</li>
              </ul>
              <a className="button button-outline product-button" href="#contact">Get the ebook <ArrowRight size={17} /></a>
              <p className="under-button">Pay once. Keep the learning resource.</p>
            </article>
          </div>
          <p className="pricing-note">All prices are in Tanzanian Shillings (TZS).</p>
        </section>

        <section className="approach-section" id="about">
          <div className="approach-inner section-wrap">
            <div className="approach-graphic">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="approach-center"><TrendingUp size={34} /><span>UFA</span></div>
              <span className="orbit-label label-top">LEARN</span>
              <span className="orbit-label label-right">ANALYSE</span>
              <span className="orbit-label label-bottom">MANAGE RISK</span>
            </div>
            <div className="approach-copy">
              <div className="eyebrow"><span /> OUR APPROACH</div>
              <h2>Trade with a process.<br /><em>Not just a prediction.</em></h2>
              <p>Forex is a high-risk market. We believe learning, preparation and thoughtful risk management should be part of every trader's journey.</p>
              <div className="approach-points">
                <div><span>01</span><p><strong>Stay informed</strong><small>Use market insights as one input in your decision-making.</small></p></div>
                <div><span>02</span><p><strong>Keep learning</strong><small>Build your understanding instead of relying on shortcuts.</small></p></div>
                <div><span>03</span><p><strong>Manage your risk</strong><small>Understand that losses are possible with every trade.</small></p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section-wrap" id="faq">
          <div className="section-heading faq-heading">
            <div><div className="eyebrow"><span /> GOOD TO KNOW</div><h2>Frequently asked<br className="desktop-break" /> questions.</h2></div>
            <p>A few quick answers before you choose a product.</p>
          </div>
          <div className="faq-list">
            {[
              ['What is the difference between the two products?', 'Forex Signals is a monthly membership for ongoing market insights. The Forex Ebook is a one-time purchase learning resource.'],
              ['Do the signals guarantee profit?', 'No. Forex trading involves significant risk and losses are possible. Signals are for informational and educational purposes, not a promise of returns or personal financial advice.'],
              ['How much do the products cost?', 'Forex Signals cost TSh 60,000 per month. The Forex Ebook costs TSh 70,000 as a one-time purchase.'],
              ['Can I buy the ebook without subscribing to signals?', 'Yes. The ebook and signals are separate products. You can choose either one or both.'],
            ].map(([question, answer], index) => (
              <div className={faqOpen === index ? 'faq-item faq-active' : 'faq-item'} key={question}>
                <button onClick={() => setFaqOpen(faqOpen === index ? -1 : index)} aria-expanded={faqOpen === index}>
                  <span>{question}</span><ChevronDown size={19} />
                </button>
                {faqOpen === index && <p>{answer}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="closing-cta" id="contact">
          <div className="closing-inner section-wrap">
            <div><div className="eyebrow"><span /> START WITH A CLEARER PLAN</div><h2>Your next step<br /><em>starts here.</em></h2></div>
            <a className="button button-primary" href="#offerings">Explore products <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main section-wrap">
          <a className="brand footer-brand" href="#home"><span className="brand-mark"><TrendingUp size={20} /></span><span>UFA<span className="brand-period">.</span></span></a>
          <p>Market insights. Practical learning. A more thoughtful approach to forex.</p>
          <div className="footer-links"><a href="#offerings">Products</a><a href="#about">Our approach</a><a href="#faq">FAQs</a></div>
        </div>
        <div className="footer-bottom section-wrap">
          <span>© {new Date().getFullYear()} UFA. All rights reserved.</span>
          <span className="risk-disclaimer"><CircleHelp size={14} /> Forex trading carries a high level of risk. You may lose some or all of your capital.</span>
        </div>
      </footer>
    </div>
  )
}

export default App