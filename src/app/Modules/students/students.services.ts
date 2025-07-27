import { hashingPassword } from "./../../utils/hashingPassword";
import { envVars } from "./../../../config/env";
import bcrypt from "bcrypt";
import { IAuthProvider, IStudent } from "./students.interfaces";
import { Student } from "./students.model";
import { AppError } from "../../Error/appError";
import httpStatus from "http-status-codes";

const createStudent = async (payload: Partial<IStudent>) => {
  const { password, name, ...rest } = payload;

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
    name,
    ...rest,
    password: await hashingPassword(password),
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

const updateStudent = async (id: string, payload: Partial<IStudent>) => {
  const student = await Student.findById(id);

  if (!student) {
    throw new AppError(httpStatus.NOT_FOUND, "Student not found");
  }

  const updateStudent = await Student.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return updateStudent;
};

export const StudentServices = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
};
