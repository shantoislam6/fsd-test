// /* eslint-disable no-console */
// /* eslint-disable camelcase */
// import createError from 'http-errors';

// import db from '@/database';
// import redisClient from '@/libs/redis';
// import { sendForgotPassMail } from '@/libs/email';
// import { hash } from 'bcrypt';
// import User from '@/database/models/user';
// import sequelize from 'sequelize';

// const userModel = User(sequelize);
// /**
//  * POST /auth/login
//  * Login request
//  */
// export const login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     // Find user by email address
//     const user = await db.models.user.findOne({ where: { email } });
//     if (!user) {
//       return next(createError(400, 'Invalid email or password!'));
//     }

//     // Check user password
//     const isValidPassword = await user.validatePassword(password);
//     if (!isValidPassword) {
//       return next(createError(400, 'Invalid email or password!'));
//     }

//     // Generate and return token
//     const token = user.generateToken('72h');
//     const refreshToken = user.generateToken('2h');
//     // Save this tweet to redis
//     if (redisClient.connected) {
//       redisClient.set(`${user.email}`, JSON.stringify(token));
//     }

//     let answer;
//     if (redisClient.connected) {
//       answer = redisClient.get(`${user.email}`);
//     }

//     return res
//       .status(200)
//       .json({ access_token: token, refresh_token: refreshToken });
//   } catch (err) {
//     return next(err);
//   }
// };

// /**
//  * POST /auth/register
//  * Register request
//  */
// export const register = async (req, res, next) => {
//   try {
//     const payload = req.body;
//     payload.role = 'student';

//     const { name, phone, email, password, district, hsc, institution } =
//       payload;

//     const isEmailTaken = await db.models.user.findOne({ where: { email } });

//     if (isEmailTaken) {
//       let errors = {
//         message: 'Email already used!',
//         path: 'email',
//       };
//       return next(createError(400, { errors: errors }));
//     }

//     const isPhoneTaken = await db.models.user.findOne({ where: { phone } });
//     if (isPhoneTaken) {
//       let errors = {
//         message: 'Phone number already used!',
//         path: 'phone',
//       };
//       return next(createError(400, { errors: errors }));
//     }

//     const user = await db.models.user.create(payload);

//     // Generate and return tokens
//     const access_token = user.generateToken('72h');
//     const refresh_token = user.generateToken('2h');
//     res.status(201).json({ access_token, refresh_token });
//   } catch (err) {
//     next(err);
//   }
// };

// /**
//  * GET /auth/me
//  * Get current user
//  */
// export const getCurrentUser = async (req, res, next) => {
//   try {
//     delete req.user.dataValues.password;
//     res.json(req.user);
//   } catch (err) {
//     next(err);
//   }
// };

// /**
//  * PUT /auth/me
//  * Update current user
//  */
// export const updateCurrentUser = async (req, res, next) => {
//   try {
//     await req.user.update(req.body, {
//       fields: ['name', 'institution', 'district'],
//     });
//     res.status(200).json({ message: 'Profile Updated Successfully' });
//   } catch (err) {
//     next(err);
//   }
// };

// /**
//  * DELETE /auth/me
//  * Delete current user
//  */
// export const deleteCurrentUser = async (req, res, next) => {
//   try {
//     await req.user.destroy();
//     res.status(204).send();
//   } catch (err) {
//     next(err);
//   }
// };

// /**
//  * PUT /auth/me/password
//  * Update password of current user
//  */
// export const updatePassword = async (req, res, next) => {
//   try {
//     const { current, password } = req.body;

//     // Check user password
//     const isValidPassword = await req.user.validatePassword(current);
//     if (!isValidPassword) {
//       return next(createError(400, 'Incorrect password!'));
//     }

//     // Update password
//     req.user.password = password;
//     await req.user.save();

//     return res.json({ message: 'Password Updated Successfully' });
//   } catch (err) {
//     return next(err);
//   }
// };

// /**
//  * PUT /auth/user-existance
//  *
//  */
// export const userExistance = async (req, res, next) => {
//   try {
//     const { email } = req.body;

//     // Find user by email address
//     const user = await db.models.user.findOne({ where: { email } });

//     console.log('user', user);
//     if (!user) {
//       return next(createError(400, 'Invalid email address'));
//     }

//     // Generate a random 4-digit number
//     let otp = Math.floor(Math.random() * 9000) + 1000;

//     const dbUpdated = await db.models.user.update(
//       { otp },
//       {
//         where: {
//           email: user.email,
//         },
//       }
//     );

//     if (dbUpdated[0]) {
//       const userObj = {
//         name: user.name,
//         otp: otp,
//         email: user.email,
//       };
//       sendForgotPassMail(userObj);
//     } else {
//       return next(createError(400, 'Something went wrong, Please try again'));
//     }

//     return res.json({ message: 'OTP Send to Your Registered Email' });
//   } catch (err) {
//     return next(err);
//   }
// };

// /**
//  * PUT /auth/me/verify-user
//  * verify-user and change password
//  */
// export const verifyPassword = async (req, res, next) => {
//   try {
//     const { email, otp: givenOtp, password, confirm_password } = req.body;

//     // Find user by email address
//     const user = await db.models.user.findOne({ where: { email } });

//     if (!user) {
//       return next(createError(400, 'Invalid email address'));
//     }

//     if (givenOtp !== user.otp) {
//       return next(createError(400, 'OTP not matched'));
//     }

//     if (password !== confirm_password) {
//       return next(createError(400, 'Confirm password not matched'));
//     }

//     const hashedPassword = await hash(password, 10);

//     const dbUpdated = await db.models.user.update(
//       { password: hashedPassword },
//       {
//         where: {
//           email: user.email,
//         },
//       }
//     );

//     if (dbUpdated[0]) {
//       return res.json({ message: 'Password changed.' });
//     } else {
//       return next(createError(400, 'Something went wrong, Please try again'));
//     }
//   } catch (err) {
//     return next(err);
//   }
// };
