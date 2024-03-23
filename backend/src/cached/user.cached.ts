import redis from '@/lib/redis';
import { User } from '@/models/user.model';
import mongoose from 'mongoose';

export const fetchCachedUser = async (_id: string, expiration: number = 3600) => {
  const redisKey = 'user:' + _id;
  const cachedUser = await redis.get(redisKey);
  if (cachedUser) {
    return JSON.parse(cachedUser);
  }
  if (mongoose.Types.ObjectId.isValid(_id)) {
    const uncachedUser = await User.findById(_id);
    if (uncachedUser) {
      await redis.setex(redisKey, expiration, JSON.stringify(uncachedUser));
      return uncachedUser;
    }
  }
  return null;
};
