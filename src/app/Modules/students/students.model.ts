import { Schema, Types, model } from "mongoose";
import {
  IAuthProvider,
  IClass,
  ISection,
  IStudent,
} from "./students.interfaces";

const phoneSchema = new Schema<IStudent["phone"]>(
  {
    who: { type: String },
    number: { type: String, required: true },
  },
  { _id: false }
);

const authSchema = new Schema<IAuthProvider>(
  {
    provider: { type: String, required: true },
    providerId: { type: String, required: true },
  },
  { _id: false }
);

const studentSchema = new Schema<IStudent>(
  {
    name: { type: String, required: true },

    class: {
      type: String,
      enum: Object.values(IClass),
    },

    section: {
      type: String,
      enum: Object.values(ISection),
    },

    roll: { type: Number },

    phone: {
      type: [phoneSchema],
      default: [],
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      sparse: true,
    },

    fatherName: String,
    motherName: String,

    password: {
      type: String,
      select: false,
    },

    picture: String,
    address: String,
    bloodGroup: String,

    isRemoved: {
      type: Boolean,
      default: false,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    auths: {
      type: [authSchema],
      default: [],
    },

    monthlyFee: [
      {
        type: Types.ObjectId,
        ref: "MonthlyFee",
      },
    ],

    feedBack: [
      {
        type: Types.ObjectId,
        ref: "TeacherFeedback",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Student = model<IStudent>("Student", studentSchema);
