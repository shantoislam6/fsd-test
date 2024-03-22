import UserProfile from '@/components/UserProfile';
import { useUsers } from '@/hooks/hook.user';

export default function Users() {
  const { users, loading } = useUsers();

  return (
    <div className="container users">
      <div className="users-header">
        <h1>Profiles</h1>
      </div>
      <div className="user-group">
        {!loading
          ? users.length > 0
            ? users.map((user) => (
                <UserProfile
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  bio={user.bio}
                  email={user.email}
                  imageSrc={user.imageSrc}
                />
              ))
            : 'No Result'
          : 'Loading...'}
      </div>
    </div>
  );
}
