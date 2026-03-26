import { Link } from 'react-router-dom';
import './Home.css';

export default function Home({ stats }) {
  const hasPlayed = stats && stats.totalPoints > 0;

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-content">
          <div className="home-logo">P</div>
          <h1 className="home-title">MaPlume</h1>
          <p className="home-tagline">Maîtrisez le français écrit</p>
          <p className="home-subtitle">
            Orthographe, grammaire, conjugaison — progressez en 5 minutes par jour
          </p>
          <Link to="/categories" className="home-cta">
            {hasPlayed ? 'Continuer' : 'Commencer gratuitement'}
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="home-how">
        <h2 className="home-section-title">Comment ça marche ?</h2>
        <div className="home-steps">
          <div className="home-step">
            <div className="home-step-number">1</div>
            <div className="home-step-text">
              <h3>Apprenez la règle</h3>
              <p>Leçons courtes avec exemples et astuces mnémotechniques</p>
            </div>
          </div>
          <div className="home-step">
            <div className="home-step-number">2</div>
            <div className="home-step-text">
              <h3>Pratiquez</h3>
              <p>QCM, textes à compléter, exercices variés et adaptés</p>
            </div>
          </div>
          <div className="home-step">
            <div className="home-step-number">3</div>
            <div className="home-step-text">
              <h3>Progressez</h3>
              <p>Corrections instantanées, explications claires, points et badges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <div className="home-feature-card">
          <span className="home-feature-icon">📖</span>
          <div>
            <h3 className="home-feature-title">Leçons interactives</h3>
            <p className="home-feature-desc">
              Règles expliquées simplement avec exemples et astuces mémo
            </p>
          </div>
        </div>

        <div className="home-feature-card">
          <span className="home-feature-icon">✍️</span>
          <div>
            <h3 className="home-feature-title">Exercices variés</h3>
            <p className="home-feature-desc">
              QCM, textes à compléter, dictées — pas de monotonie
            </p>
          </div>
        </div>

        <div className="home-feature-card">
          <span className="home-feature-icon">⚡</span>
          <div>
            <h3 className="home-feature-title">Correction instantanée</h3>
            <p className="home-feature-desc">
              Chaque erreur est expliquée avec la règle et un exemple
            </p>
          </div>
        </div>

        <div className="home-feature-card">
          <span className="home-feature-icon">🏆</span>
          <div>
            <h3 className="home-feature-title">Gamification</h3>
            <p className="home-feature-desc">
              Points, niveaux, badges, streaks — restez motivé chaque jour
            </p>
          </div>
        </div>
      </section>

      {/* Categories preview */}
      <section className="home-categories-preview">
        <h2 className="home-section-title">4 catégories essentielles</h2>
        <div className="home-cat-grid">
          <div className="home-cat-item" style={{borderColor: '#58CC02'}}>
            <span>🔤</span>
            <strong>Homophones</strong>
            <small>a/à, et/est, ou/où...</small>
          </div>
          <div className="home-cat-item" style={{borderColor: '#1CB0F6'}}>
            <span>📝</span>
            <strong>Conjugaison</strong>
            <small>Présent, passé, futur...</small>
          </div>
          <div className="home-cat-item" style={{borderColor: '#FF9600'}}>
            <span>🎯</span>
            <strong>Accords</strong>
            <small>Pluriel, féminin...</small>
          </div>
          <div className="home-cat-item" style={{borderColor: '#CE82FF'}}>
            <span>✍️</span>
            <strong>Orthographe</strong>
            <small>Doubles lettres, accents...</small>
          </div>
        </div>
      </section>

      {/* Stats Teaser */}
      {hasPlayed && (
        <section className="home-stats-teaser">
          <div className="home-stats-badge">
            <span className="home-stats-points">⭐ {stats.totalPoints}</span>
            <span className="home-stats-label">points</span>
          </div>
          {stats.streak > 0 && (
            <div className="home-stats-badge">
              <span className="home-stats-points">🔥 {stats.streak}</span>
              <span className="home-stats-label">jours de suite</span>
            </div>
          )}
        </section>
      )}

      {/* Bottom CTA */}
      <section className="home-bottom-cta">
        <p>Prêt à améliorer votre français ?</p>
        <Link to="/categories" className="home-cta home-cta--green">
          C'est parti !
        </Link>
      </section>
    </div>
  );
}
