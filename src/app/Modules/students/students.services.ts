import { IAuthProvider, IStudent } from "./students.interfaces";
import { Student } from "./students.model";
import { hashingPassword } from "../../utils/hashingPassword";
import { AppError } from "../../Error/appError";
import httpStatus from "http-status-codes";
const createStudent = async (payload: Partial<IStudent>) => {
  const { name, ...rest } = payload;

  if (!payload.password) {
    throw new AppError(
      httpStatus.NOT_ACCEPTABLE,
      "Password is required for student creation"
    );
  }

  const authProvider: IAuthProvider = {
    provider: "credentials",
    providerId: name as string,
  };

  const student = await Student.create({
    ...rest,
    password: await hashingPassword(payload.password as string),
    auths: [authProvider],
    payload,
  });

  return student;
};

const getAllStudents = async () => {
  const students = await Student.find({});
  const totalStudent = await Student.countDocuments();

  return {
    students,
    meta: {
      total: totalStudent,
    },
  };
};

const getSingleStudent = async (studentId: string) => {
  return await Student.findById(studentId);
};

export const StudentServices = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
