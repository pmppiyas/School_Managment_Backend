import { IAuthProvider, IStudent } from "./students.interfaces";
import { Student } from "./students.model";
import { hashingPassword } from "../../utils/hashingPassword";

const createStudent = async (payload: Partial<IStudent>) => {
  const { name, password, ...rest } = payload;

  if (!password) {
    throw new Error("Password is required for student creation");
  }

  const authProvider: IAuthProvider = {
    provider: "credentials",
    providerId: name as string,
  };

  const student = await Student.create({
    name,
    password: await hashingPassword(password as string),
    auths: [authProvider],
    ...rest,
  });
  return student;
};

export const StudentServices = {
  createStudent,
};
