import { ArrowRight, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ActivityCard({ activity }) {
  return (
    <article className="activity-card">
      <div className="activity-image">
        <img src={activity.image} alt={`${activity.name} Power Gym`} loading="lazy" decoding="async" />
      </div>
      <div className="card-row">
        <span className="icon-chip">
          <Dumbbell size={20} />
        </span>
        <span className="badge">{activity.difficulty}</span>
      </div>
      <h3>{activity.name}</h3>
      <p>{activity.description}</p>
      <div className="tag-row">
        <span>{activity.goal}</span>
        <span>{activity.coach}</span>
      </div>
      <Link className="text-link" to={activity.id === 'musculation' ? '/musculation' : '/contact'}>
        Voir details <ArrowRight size={16} />
      </Link>
    </article>
  );
}
