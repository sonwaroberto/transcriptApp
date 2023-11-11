export interface EmailDataType {
  email: string;
}

export interface LoginDataType extends EmailDataType {
  password: string;
}

export interface VerifyDataType extends EmailDataType {
  verification_code: string;
}
export interface RegisterDataType extends LoginDataType {
  fullName: string;
  phoneNumber: string;
  confirmPassword: string;
}
