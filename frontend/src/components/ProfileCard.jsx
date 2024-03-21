import PropType from 'prop-types';
import { useState, useMemo } from 'react';
import profileCardStyles from './profile-card.module.css';

function ProfileCard({ name, bio, email, imageSrc }) {
  const [showEmail, setShowEmail] = useState(false);

  const transformedEmail = useMemo(() => {
    if (!showEmail) {
      const atIndex = email.indexOf('@');
      return '*'.repeat(atIndex) + email.slice(atIndex);
    }
    return email;
  }, [email, showEmail]);

  const toggleEmailVisibility = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className={profileCardStyles.userProfileCard}>
      <img
        src={imageSrc}
        alt={name}
      />
      <h2 className={profileCardStyles.name}>
        <a href="#">{name}</a>
      </h2>
      <p className={profileCardStyles.bio}>{bio}</p>
      <div className={profileCardStyles.email}>
        <a
          href={showEmail ? `mailto:${transformedEmail}` : '#'}
          className={profileCardStyles.emailAddress}
        >
          {transformedEmail}
        </a>
        <button
          className={profileCardStyles.toggleButton}
          onClick={toggleEmailVisibility}
          aria-label={showEmail ? 'Hide email' : 'Show email'}
        >
          {showEmail ? (
            <i className="fas fa-eye"></i>
          ) : (
            <i className="fas fa-eye-slash"></i>
          )}
        </button>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropType.string.isRequired,
  bio: PropType.string.isRequired,
  email: PropType.string.isRequired,
  imageSrc: PropType.string.isRequired,
};

export default ProfileCard;
