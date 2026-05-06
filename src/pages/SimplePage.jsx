import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';

export default function SimplePage({ title }) {
  return (
    <section className="page-section top-page">
      <Seo title={`${title} | Power Gym Kelibia`} description={`${title} Power Gym Kelibia.`} />
      <SectionTitle eyebrow="Power Gym" title={title} description="Cette page est maintenant geree dans le dossier src/pages." />
      <div className="info-card">
        <p>Le projet est reorganise avec une vraie structure source. Les prochaines mises a jour ne doivent plus se faire dans les fichiers minifies.</p>
      </div>
    </section>
  );
}
