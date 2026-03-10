import { User } from "../models/user.model";

export const getUsers = () => {
  return User.find();
};

export const createUser = (data: any) => {
  return User.create(data);
};
