import { apiFetch, delay } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiFetch
      .get('/users')
      .then(async (response) => {
        await delay(400);
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return { users, loading };
};

export const useUser = (id) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiFetch
      .get(`/users/${id}`)
      .then(async (response) => {
        await delay(400);
        setUser(response.data.user);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [id]);

  return { user, loading };
};
