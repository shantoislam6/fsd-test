import redis from '@/lib/redis';
import { User } from '@/models/user.model';

export const fetchCachedUser = async (_id: string, expiretime: number = 3600) => {
  const redisKey = 'user:' + _id;
  const cachedUser = await redis.get(redisKey);
  if (cachedUser) {
    return JSON.parse(cachedUser);
  }
  const uncachedUser = await User.findById(_id);
  if (uncachedUser) {
    await redis.setex(redisKey, expiretime, JSON.stringify(uncachedUser));
    return uncachedUser;
  }
  return null;
};
