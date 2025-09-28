import { AppDataSource } from "../config/configDb.js";
import { User } from "../entities/user.entity.js";
import bcrypt from "bcrypt";

const userRepository = AppDataSource.getRepository(User);

export async function createUser(data) {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newUser = userRepository.create({
    email: data.email,
    password: hashedPassword,
  });

  return await userRepository.save(newUser);
}

export async function findUserByEmail(email) {
  return await userRepository.findOneBy({ email });
}

export const updateUserService = async (id, data) => {
  const repo = AppDataSource.getRepository(User);

  const user = await repo.findOneBy({ id });
  if (!user) {
    return null;
  }

  user.email = data.email || user.email;
  user.password = data.password || user.password;

  await repo.save(user);
  return user;
}

export const deleteUserService = async (id) => {
  const repo = AppDataSource.getRepository(User);

  const user = await repo.findOneBy({ id });
  if (!user) return null;

  await repo.remove(user);
  return user;
};
