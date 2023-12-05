export interface EmailDataType {
  email: string;
}

export interface LoginDataType {
  matricule: string;
  password: string;
}

export interface VerifyDataType extends EmailDataType {
  verification_code: string;
}
export interface RegisterDataType extends LoginDataType {
  fullName: string;
  phoneNumber: string;
  confirmPassword: string;
  email: string;
}

export interface TranscriptDataType {
  fullName: string;
  matricule: string;
  level: string;
  date: string;
  type: string;
  // amount: string;
}