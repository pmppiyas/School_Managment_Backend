import { envVars } from "./../../config/env";
import bcrypt from "bcrypt";

export const hashingPassword = async (password: string) => {
  return await bcrypt.hash(password, Number(envVars.DCRYPT_SALT_ROUND));
};
