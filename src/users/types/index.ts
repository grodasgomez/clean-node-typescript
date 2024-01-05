export type User = {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

export type GetUsersParams = {
  limit: number;
  page: number;
};

export type CreateUserDto = {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
};
