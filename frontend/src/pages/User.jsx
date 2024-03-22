import UserProfile from '@/components/UserProfile';
import { useUser } from '@/hooks/hook.user';
import { useParams } from 'react-router-dom';

export default function Users() {
  let { id } = useParams();
  const { user, loading } = useUser(id);
  return (
    <div className="container user-profile">
      {!loading ? (
        user ? (
          <UserProfile
            key={user.id}
            id={user.id}
            name={user.name}
            bio={user.bio}
            email={user.email}
            imageSrc={user.imageSrc}
          />
        ) : (
          <h2>User not found</h2>
        )
      ) : (
        'Loading...'
      )}
    </div>
  );
}
