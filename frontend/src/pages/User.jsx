import UserProfile from '@/components/UserProfile';
import { findUser } from '@/mock/users';
import { useParams } from 'react-router-dom';

export default function Users() {
  let { id } = useParams();
  const user = findUser(id);
  return (
    <div className="container user-profile">
      <UserProfile
        key={user.id}
        id={user.id}
        name={user.name}
        bio={user.bio}
        email={user.email}
        imageSrc={user.imageSrc}
      />
    </div>
  );
}
