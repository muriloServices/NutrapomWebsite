import { useState } from 'react'
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
    icon: 'spark',
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
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 42 42" fill="none">
              <path d="M8 29.5C17 30 28.5 22 32 9c-9 .5-20.5 8.5-24 20.5Z" />
              <path d="M9 34c5-7 11-12 20-17" />
              <path d="M11 20c4-.2 7.5 1 10 3.5M18 13c4 .2 7 1.8 9 4.5" />
            </svg>
          </span>
          <span className="brand-name">nutrapom<span>.</span></span>
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
            <div className="hero-note">
              <span className="note-line" />
              <span>Nutrapom — Nutrição Animal De Pombal, S.A.</span>
            </div>
          </div>

          <div className="hero-visual" role="img" aria-label="Paisagem rural verde ao amanhecer">
            <div className="visual-overlay" />
            <div className="visual-card">
              <span className="visual-card-icon" aria-hidden="true">✳</span>
              <span>Da terra, com cuidado.</span>
            </div>
            <span className="visual-index">39°54' N&nbsp; · &nbsp;08°37' W</span>
          </div>
          <div className="hero-bottom">
            <span>Nutrição para um futuro melhor</span>
            <a href="#sobre" aria-label="Descer para conhecer a Nutrapom">↓</a>
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
          <div className="intro-stamp" aria-hidden="true">
            <span>Nutrição</span>
            <span>com cuidado</span>
            <span className="stamp-leaf">✳</span>
          </div>
        </section>

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
                    {principle.icon === 'spark' && (
                      <svg viewBox="0 0 32 32" fill="none">
                        <path d="M16 3 18.8 13.2 29 16l-10.2 2.8L16 29l-2.8-10.2L3 16l10.2-2.8L16 3Z" />
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
          <div className="closing-mark" aria-hidden="true">
            <svg viewBox="0 0 42 42" fill="none">
              <path d="M8 29.5C17 30 28.5 22 32 9c-9 .5-20.5 8.5-24 20.5Z" />
              <path d="M9 34c5-7 11-12 20-17" />
              <path d="M11 20c4-.2 7.5 1 10 3.5M18 13c4 .2 7 1.8 9 4.5" />
            </svg>
          </div>
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
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 42 42" fill="none">
              <path d="M8 29.5C17 30 28.5 22 32 9c-9 .5-20.5 8.5-24 20.5Z" />
              <path d="M9 34c5-7 11-12 20-17" />
              <path d="M11 20c4-.2 7.5 1 10 3.5M18 13c4 .2 7 1.8 9 4.5" />
            </svg>
          </span>
          <span className="brand-name">nutrapom<span>.</span></span>
        </a>
        <p>Nutrapom — Nutrição Animal De Pombal, S.A.</p>
        <span className="copyright">© {currentYear} Nutrapom. Todos os direitos reservados.</span>
      </footer>
    </>
  )
}

export default App
