import catchAsync from "../../utils/catchAsync";
import { Request, Response, NextFunction } from "express";
import { StudentServices } from "./students.services";
import sendResponse from "../../utils/sendResponse";
import statusCode from "http-status-codes";

const createStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const student = await StudentServices.createStudent(req.body);

    sendResponse(res, {
      success: true,
      statusCode: statusCode.CREATED,
      message: "Student admitted successfully.",
      data: student,
    });
  }
);

const getAllStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const students = await StudentServices.getAllStudents();

    sendResponse(res, {
      success: true,
      statusCode: statusCode.OK,
      message: "All students retrieved successfully.",
      data: students,
    });
  }
);

const getSingleStudnet = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const studentId = req.params.id;
    const student = await StudentServices.getSingleStudent(studentId);

    sendResponse(res, {
      success: true,
      statusCode: statusCode.OK,
      message: "Single studnet retrieved successfully.",
      data: student,
    });
  }
);

const updateStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const studentId = req.params.id;

    const result = await StudentServices.updateStudent(studentId, req.body);

    sendResponse(res, {
      success: true,
      statusCode: statusCode.OK,
      message: "Student update successfully.",
      data: result,
    });
  }
);
export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudnet,
  updateStudent,
};
