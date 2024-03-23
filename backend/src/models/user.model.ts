import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';

async function validateEmail(email: string) {
  if (!isEmail(email)) throw new Error('Please enter a valid email address.');
  const user = await User.findOne({ email });
  if (user) throw new Error('A user is already registered with this email address.');
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [3, 'Name must contain at least 3 characters'],
      maxlength: [60, 'Name must contain at most 60 characters long'],
    },
    bio: {
      type: String,
      required: [true, 'Bio is required'],
      trim: true,
      minlength: [10, 'Bio must contain at least 10 characters'],
      maxlength: [120, 'Bio must contain at most 120 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      maxlength: [100, 'Email must contain at most 100 characters long'],
      validate: validateEmail,
    },
    imageSrc: {
      type: String,
      required: true,
      maxlength: [500, 'Image source must contain at most 500 characters long'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: 'throw' }
);

export const User = mongoose.model('User', userSchema);
