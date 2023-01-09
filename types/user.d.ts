// Generated by https://quicktype.io

export interface Result {
  status: string;
  result: UserInfo;
}

export interface UserInfo {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
  currentInstitution:CurrentInstitution;
  status: string;
  preferredMedium: any[];
  availability: any[];
  tuitionSubjects: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CurrentInstitution {
  name: string;
  department: string;
}