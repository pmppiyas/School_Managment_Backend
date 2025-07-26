import { Types } from "mongoose";

export enum IClass {
  PLAYGROUP = "Play Group",
  NURSERY = "Nursery",
  ONE = "One",
  TWO = "TWO",
  THREE = "Three",
  FOUR = "Four",
  FIVE = "Five",
}
export enum ISection {
  A = "A",
  B = "B",
  C = "C",
}

export interface IPhone {
  who: string;
  number: string;
}

export interface IAuthProvider {
  provider: string;
  providerId: string;
}

export interface IStudent {
  name: string;
  class?: IClass;
  section?: ISection;
  roll?: number;
  phone?: IPhone[];
  email?: string;
  fatherName?: string;
  motherName?: string;
  password?: string;
  picture?: string;
  address?: string;
  bloodGroup?: string;
  isRemoved?: boolean;
  isVerified?: boolean;
  auth: IAuthProvider[];
  monthlyFee?: Types.ObjectId[];
  feedBack?: Types.ObjectId[];
}
