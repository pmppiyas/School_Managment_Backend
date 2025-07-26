import bcryptjs from "bcryptjs";
import { envVars } from "../../config/env";

export const hashingPassword = async (password: string) => {
  return await bcryptjs.hash(password, Number(envVars.DCRYPT_SALT_ROUND));
};
