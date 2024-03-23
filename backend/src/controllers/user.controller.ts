import { User } from '@/models/user.model';
import { Request, Response } from 'express';
// import redis from '@/lib/redis';
import { fetchCachedUser } from '@/cached/user.cached';
import { parsePaginationParams } from '@/lib/utils';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const { skip, totalPages, currentPage, limit } = parsePaginationParams({
      req,
      totalCollections: await User.countDocuments(),
      MAX_LIMIT: 20,
      DEFAULT_PAGE: 1,
    });
    const users = await User.find().sort({ updatedAt: -1 }).skip(skip).limit(limit);

    const response = {
      success: true,
      pagination: {
        currentPage,
        limit,
        totalPages,
      },
      users,
    };
    return res.json(response).status(200);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      errorType: 'serverError',
      message: 'Server error',
      users: [],
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id: _id } = req.params;
  try {
    const user = await fetchCachedUser(_id, 60 * 60);
    if (user) {
      return res.status(200).json({
        success: true,
        user: user,
      });
    } else {
      return res.status(404).json({
        success: false,
        errorType: 'notFound',
        message: 'User not found',
        user: null,
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      errorType: 'serverError',
      message: 'Server error',
      user: null,
    });
  }
};

export const seedUsers = async (req: Request, res: Response) => {
  try {
    await User.create([
      {
        name: 'Shanto Islam',
        email: 'ishanto412@gmail.com',
        bio: 'A passionate full-stack developer with over 3 years of experience.',
        imageSrc:
          'https://img.freepik.com/premium-photo/cartoon-character-with-blue-shirt-glasses_561641-2084.jpg?w=1060',
      },
      {
        name: 'Sabbir Ahmed',
        email: 'sabbir@yahoo.com',
        bio: 'Experienced full-stack developer with 3+ years in the field',
        imageSrc:
          'https://img.freepik.com/premium-photo/realistic-3d-cartoon-character-with-glasses-beard_899449-25784.jpg?w=1060',
      },
      {
        name: 'Abu Talha',
        email: 'abutalha@outlook.com',
        bio: 'An enthusiastic full-stack engineer with a robust background spanning 3 years.',
        imageSrc:
          'https://img.freepik.com/premium-photo/cartoon-character-with-blue-shirt-glasses_561641-2088.jpg?w=1060',
      },
      {
        name: 'Rakib Islam',
        email: 'rakibislam@yopmail.com',
        bio: 'A passionate full-stack developer with over 3 years of experience.',
        imageSrc:
          'https://img.freepik.com/premium-photo/3d-pixar-character-xu-cartoon-style-with-glasses-sportswear_899449-58451.jpg?w=1060',
      },
      {
        name: 'Sihab',
        email: 'Sihab@example.com',
        bio: 'As a seasoned full-stack developer with 3 years of experience.',
        imageSrc:
          'https://img.freepik.com/premium-photo/3d-rendering-chinese-new-year-figures_540381-3885.jpg?w=1060',
      },
      {
        name: 'Ruby Rails',
        email: 'rubyrails@raid.com',
        bio: 'Seasoned full-stack developer with 3+ years of expertise',
        imageSrc:
          'https://img.freepik.com/premium-photo/artist-digital-avatar-generative-ai_934475-9063.jpg?w=1060',
      },
    ]);

    res.status(201).json({
      message: 'Users seed has been created',
    });
  } catch (err) {
    console.log(err);
  }
};
