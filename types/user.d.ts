// Generated by https://quicktype.io

export interface Result {
  status: string;
  result: Result;
}

export interface UserInfo {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
  status: string;
  preferredMedium: any[];
  availability: any[];
  tuitionSubjects: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}