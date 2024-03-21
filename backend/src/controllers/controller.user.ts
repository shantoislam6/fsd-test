import type { Request, Response } from 'express';

const dummyUsers = [
  { id: 1, name: 'John', age: 25, email: 'john@example.com' },
  { id: 2, name: 'Alice', age: 30, email: 'alice@example.com' },
  { id: 3, name: 'Bob', age: 28, email: 'bob@example.com' },
  { id: 4, name: 'Emma', age: 35, email: 'emma@example.com' },
  { id: 5, name: 'Michael', age: 40, email: 'michael@example.com' },
  { id: 6, name: 'Sarah', age: 22, email: 'sarah@example.com' },
  { id: 7, name: 'David', age: 33, email: 'david@example.com' },
  { id: 8, name: 'Emily', age: 29, email: 'emily@example.com' },
  { id: 9, name: 'James', age: 45, email: 'james@example.com' },
  { id: 10, name: 'Sophia', age: 27, email: 'sophia@example.com' },
  { id: 11, name: 'William', age: 32, email: 'william@example.com' },
  { id: 12, name: 'Olivia', age: 26, email: 'olivia@example.com' },
  { id: 13, name: 'Daniel', age: 31, email: 'daniel@example.com' },
  { id: 14, name: 'Isabella', age: 23, email: 'isabella@example.com' },
  { id: 15, name: 'Liam', age: 37, email: 'liam@example.com' },
  { id: 16, name: 'Ava', age: 24, email: 'ava@example.com' },
  { id: 17, name: 'Alexander', age: 38, email: 'alexander@example.com' },
  { id: 18, name: 'Mia', age: 21, email: 'mia@example.com' },
  { id: 19, name: 'Benjamin', age: 34, email: 'benjamin@example.com' },
  { id: 20, name: 'Charlotte', age: 39, email: 'charlotte@example.com' },
  { id: 21, name: 'Ethan', age: 36, email: 'ethan@example.com' },
  { id: 22, name: 'Amelia', age: 20, email: 'amelia@example.com' },
  { id: 23, name: 'Michael', age: 41, email: 'michael2@example.com' },
  { id: 24, name: 'Lucas', age: 44, email: 'lucas@example.com' },
  { id: 25, name: 'Harper', age: 42, email: 'harper@example.com' },
  { id: 26, name: 'Henry', age: 48, email: 'henry@example.com' },
  { id: 27, name: 'Evelyn', age: 49, email: 'evelyn@example.com' },
  { id: 28, name: 'Jackson', age: 43, email: 'jackson@example.com' },
  { id: 29, name: 'Victoria', age: 46, email: 'victoria@example.com' },
  { id: 30, name: 'Samuel', age: 47, email: 'samuel@example.com' },
  { id: 31, name: 'Avery', age: 50, email: 'avery@example.com' },
  { id: 32, name: 'Aria', age: 19, email: 'aria@example.com' },
  { id: 33, name: 'Sebastian', age: 52, email: 'sebastian@example.com' },
  { id: 34, name: 'Scarlett', age: 53, email: 'scarlett@example.com' },
  { id: 35, name: 'Carter', age: 54, email: 'carter@example.com' },
  { id: 36, name: 'Madison', age: 51, email: 'madison@example.com' },
  { id: 37, name: 'Jayden', age: 55, email: 'jayden@example.com' },
  { id: 38, name: 'Luna', age: 56, email: 'luna@example.com' },
  { id: 39, name: 'Mateo', age: 58, email: 'mateo@example.com' },
  { id: 40, name: 'Chloe', age: 59, email: 'chloe@example.com' },
];

/**
 * GET /users
 * Get users with pagiantion
 */
export const getUsers = (req: Request, res: Response) => {
  return res.json(dummyUsers).status(200);
};

/**
 * GET /users/{user_id}
 * Get user by id
 */
export const getUser = (req: Request, res: Response) => {};

/**
 * POST /users/
 * Create user
 */
export const createUser = (req: Request, res: Response) => {};

/**
 * PUT /users/
 * Update user
 */
export const updateUser = (req: Request, res: Response) => {
  return res.send('updated');
};

/**
 * DELETE /users/
 * delete user
 */
export const deleteUser = (req: Request, res: Response) => {};
