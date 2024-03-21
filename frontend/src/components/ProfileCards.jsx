import ProfileCard from './ProfileCard';
import { profiles } from '../mock/profiles';

export default function ProfileCards() {
  return (
    <div className="container profile-cards">
      <div className="profile-cards-header">
        <h1>Profiles</h1>
      </div>
      <div className="profile-card-groups">
        {profiles.map((profile, i) => (
          <ProfileCard
            key={i}
            name={profile.name}
            bio={profile.bio}
            email={profile.email}
            imageSrc={profile.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
