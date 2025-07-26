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

export const StudentController = {
  createStudent,
};
