import { useState } from 'react'
import companyPhoto from './assets/company_full_view.png'
import companyLogo from './assets/nutrapom.png'
import truckPhoto from './assets/nutrapom_truck.jpg'
import './App.css'

const principles = [
  {
    number: '01',
    title: 'Nutrição com propósito',
    description:
      'Cada escolha nutricional contribui para o bem-estar animal e para um futuro mais equilibrado.',
    icon: 'leaf',
  },
  {
    number: '02',
    title: 'Qualidade em cada etapa',
    description:
      'A atenção ao detalhe e o rigor são essenciais para responder às necessidades de cada animal.',
    icon: 'quality',
  },
  {
    number: '03',
    title: 'Proximidade que conta',
    description:
      'Conhecer o território e as pessoas é o ponto de partida para relações de confiança duradouras.',
    icon: 'hands',
  },
]

const currentYear = new Date().getFullYear()

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Nutrapom — início" onClick={closeMenu}>
          <img className="brand-logo" src={companyLogo} alt="Nutrapom — Nutrição Animal de Pombal, S.A." />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`main-navigation${menuOpen ? ' is-open' : ''}`}
          id="main-navigation"
          aria-label="Navegação principal"
        >
          <a href="#sobre" onClick={closeMenu}>A Nutrapom</a>
          <a href="#compromisso" onClick={closeMenu}>O nosso compromisso</a>
          <a className="nav-cta" href="#contacto" onClick={closeMenu}>
            Fale connosco <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow"><span /> Nutrição animal · Pombal</span>
            <h1>Bem-estar que começa <em>à mesa.</em></h1>
            <p>
              Nutrição animal pensada com cuidado, conhecimento e respeito por
              cada etapa da vida.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#sobre">
                Conheça a Nutrapom <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#compromisso">
                O que nos move <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img className="hero-image" src={truckPhoto} alt="Camião de distribuição Nutrapom com o logótipo da empresa" />
            <div className="visual-overlay" />
            <div className="visual-card">
              <img className="visual-card-logo" src={companyLogo} alt="" />
              <span>Nutrição animal de Pombal.</span>
            </div>
            <span className="visual-index">Nutrapom · Pombal</span>
          </div>

        </section>

        <section className="intro section-wrap" id="sobre">
          <div className="section-label"><span>01</span> A Nutrapom</div>
          <div className="intro-content">
            <h2>O cuidado com os animais começa <em>naquilo que os nutre.</em></h2>
            <div className="intro-text">
              <p>
                Somos a Nutrapom — Nutrição Animal De Pombal, S.A. Acreditamos
                que uma nutrição equilibrada é essencial para o bem-estar
                animal e para a relação de confiança entre quem cuida e quem
                produz.
              </p>
              <p>
                É com este olhar atento que nos aproximamos da nutrição animal:
                com respeito pela vida, pelo território e pelas necessidades
                de cada dia.
              </p>
              <a className="text-link dark-link" href="#compromisso">
                Descubra os nossos princípios <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <figure className="company-photo section-wrap">
          <img
            src={companyPhoto}
            alt="Vista das instalações da Nutrapom em Pombal"
            loading="lazy"
          />
          <figcaption>
            <span>As nossas instalações</span>
            <span>Pombal, Portugal</span>
          </figcaption>
        </figure>

        <section className="commitment" id="compromisso">
          <div className="section-wrap commitment-inner">
            <div className="commitment-heading">
              <div className="section-label light-label"><span>02</span> O nosso compromisso</div>
              <h2>O essencial é <em>fazer bem.</em></h2>
              <p>
                Princípios simples, que orientam a forma como olhamos para a
                nutrição animal.
              </p>
            </div>
            <div className="principle-list">
              {principles.map((principle) => (
                <article className="principle" key={principle.number}>
                  <span className="principle-number">{principle.number}</span>
                  <div className="principle-icon" aria-hidden="true">
                    {principle.icon === 'leaf' && (
                      <svg viewBox="0 0 32 32" fill="none">
                        <path d="M26 5C16 5 7 11 7 21c0 3 2 5 5 5C22 26 27 16 26 5Z" />
                        <path d="M5 28c4-7 9-11 16-15" />
                      </svg>
                    )}
                    {principle.icon === 'quality' && (
                      <svg viewBox="0 0 32 32" fill="none">
                        <path d="M16 3 26 7v8c0 6.5-4.3 11-10 14-5.7-3-10-7.5-10-14V7l10-4Z" />
                        <path d="m11.5 16 3 3 6-7" />
                      </svg>
                    )}
                    {principle.icon === 'hands' && (
                      <svg viewBox="0 0 32 32" fill="none">
                        <path d="M16 27s-11-6.2-11-14a6 6 0 0 1 11-3.2A6 6 0 0 1 27 13c0 7.8-11 14-11 14Z" />
                      </svg>
                    )}
                  </div>
                  <div className="principle-copy">
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                  <span className="principle-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing section-wrap" id="contacto">
          <div>
            <span className="eyebrow">Nutrapom · Pombal</span>
            <h2>Vamos falar sobre <em>nutrição?</em></h2>
            <p>Estamos perto de quem acredita que cuidar faz a diferença.</p>
          </div>
          <a
            className="button button-light"
            href="https://www.google.com/maps/search/?api=1&query=Nutrapom+Nutri%C3%A7%C3%A3o+Animal+Pombal"
            target="_blank"
            rel="noreferrer"
          >
            Encontre-nos em Pombal <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <img className="brand-logo" src={companyLogo} alt="Nutrapom" />
        </a>
        <p>Nutrapom — Nutrição Animal De Pombal, S.A.</p>
        <span className="copyright">© {currentYear} Nutrapom. Todos os direitos reservados.</span>
      </footer>
    </>
  )
}

export default App
