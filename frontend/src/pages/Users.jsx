import UserProfile from '@/components/UserProfile';
import { users } from '@/mock/users';

export default function Users() {
  return (
    <div className="container users">
      <div className="users-header">
        <h1>Profiles</h1>
      </div>
      <div className="user-group">
        {users.map((user) => (
          <UserProfile
            key={user.id}
            id={user.id}
            name={user.name}
            bio={user.bio}
            email={user.email}
            imageSrc={user.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
