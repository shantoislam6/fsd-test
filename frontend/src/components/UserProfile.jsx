import PropType from 'prop-types';
import { useState, useMemo } from 'react';
import userProfileStyles from './user-profile.module.css';
import { Link } from 'react-router-dom';

function UserProfile({ id, name, bio, email, imageSrc }) {
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
    <div className={userProfileStyles.userProfileCard}>
      <img
        src={imageSrc}
        alt={name}
      />
      <h2 className={userProfileStyles.name}>
        <Link to={`/users/${id}`}>{name}</Link>
      </h2>
      <p className={userProfileStyles.bio}>{bio}</p>
      <div className={userProfileStyles.email}>
        <a
          href={showEmail ? `mailto:${transformedEmail}` : '#'}
          className={userProfileStyles.emailAddress}
        >
          {transformedEmail}
        </a>
        <button
          className={userProfileStyles.toggleButton}
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

UserProfile.propTypes = {
  id: PropType.string.isRequired,
  name: PropType.string.isRequired,
  bio: PropType.string.isRequired,
  email: PropType.string.isRequired,
  imageSrc: PropType.string.isRequired,
};

export default UserProfile;
