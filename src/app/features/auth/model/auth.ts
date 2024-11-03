export interface IResponse<T> {
  isSuccess: boolean;
  data: T;
  message: string;
  errorCode: number;
}

export interface ISignin {
  email: string;
  password: string;
}


export interface IRegister {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
}

export interface IChangePassword {
  newPassword: string;
  confirmPassword: string;
  email: string;
  oldPassword: string;
}

export interface IResetPassword {
  newPassword: string;
  confirmPassword: string;
  email: string;
  otp: string;
}

export interface IForgetPassword {
  email: string;
}

export interface IToken {
  UserName: string;
  RoleID: string;
  Email: string;
  nbf: number;
  exp: number;
  iat: number;
}
