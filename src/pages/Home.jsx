import { Link } from 'react-router-dom';
import './Home.css';

export default function Home({ stats }) {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-title">MaPlume</h1>
          <p className="home-tagline">Maîtrisez le français écrit</p>
          <p className="home-subtitle">
            Exercices courts, corrections instantanées, progression visible
          </p>
          <Link to="/categories" className="home-cta">
            Commencer maintenant
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <div className="home-feature-card">
          <span className="home-feature-icon">✏️</span>
          <h3 className="home-feature-title">Exercices courts</h3>
          <p className="home-feature-desc">
            5 min max, adaptés à votre niveau
          </p>
        </div>

        <div className="home-feature-card">
          <span className="home-feature-icon">⚡</span>
          <h3 className="home-feature-title">Correction instantanée</h3>
          <p className="home-feature-desc">
            Comprenez vos erreurs immédiatement
          </p>
        </div>

        <div className="home-feature-card">
          <span className="home-feature-icon">📈</span>
          <h3 className="home-feature-title">Progression visible</h3>
          <p className="home-feature-desc">
            Points, niveaux et streaks pour rester motivé
          </p>
        </div>
      </section>

      {/* Stats Teaser */}
      {stats && stats.totalPoints > 0 && (
        <section className="home-stats-teaser">
          <p className="home-stats-text">
            Vous avez déjà <strong>{stats.totalPoints} points</strong> !
          </p>
          <Link to="/categories" className="home-cta home-cta--secondary">
            Continuer
          </Link>
        </section>
      )}
    </div>
  );
}
