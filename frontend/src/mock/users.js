import { delay } from '@/lib/utils';

export const users = [
  {
    id: 1,
    name: 'Shanto Islam',
    email: 'ishanto412@gmail.com',
    bio: 'A passionate full-stack developer with over 3 years of experience.',
    imageSrc:
      'https://img.freepik.com/premium-photo/cartoon-character-with-blue-shirt-glasses_561641-2084.jpg?w=1060',
  },
  {
    id: 2,
    name: 'Sabbir Ahmed',
    email: 'sabbir@yahoo.com',
    bio: 'Experienced full-stack developer with 3+ years in the field',
    imageSrc:
      'https://img.freepik.com/premium-photo/realistic-3d-cartoon-character-with-glasses-beard_899449-25784.jpg?w=1060',
  },
  {
    id: 3,
    name: 'Abu Talha',
    email: 'abutalha@outlook.com',
    bio: 'An enthusiastic full-stack engineer with a robust background spanning 3 years.',
    imageSrc:
      'https://img.freepik.com/premium-photo/cartoon-character-with-blue-shirt-glasses_561641-2088.jpg?w=1060',
  },
  {
    id: 4,
    name: 'Rakib Islam',
    email: 'rakibislam@yopmail.com',
    bio: 'A passionate full-stack developer with over 3 years of experience.',
    imageSrc:
      'https://img.freepik.com/premium-photo/3d-pixar-character-xu-cartoon-style-with-glasses-sportswear_899449-58451.jpg?w=1060',
  },
  {
    id: 5,
    name: 'Sihab',
    email: 'Sihab@example.com',
    bio: 'As a seasoned full-stack developer with 3 years of experience.',
    imageSrc:
      'https://img.freepik.com/premium-photo/3d-rendering-chinese-new-year-figures_540381-3885.jpg?w=1060',
  },
  {
    id: 6,
    name: 'Ruby Rails',
    email: 'rubyrails@raid.com',
    bio: 'Seasoned full-stack developer with 3+ years of expertise',
    imageSrc:
      'https://img.freepik.com/premium-photo/artist-digital-avatar-generative-ai_934475-9063.jpg?w=1060',
  },
];

export const getUsers = async () => {
  await delay(1000);
  return users;
};

export const findUser = async (id) => {
  await delay(1000);
  return users.filter((user) => user.id == id)[0];
};
