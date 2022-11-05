export interface LoginUserType {
  email: string;
  password: string;
  userName?: string;
}

export const initialUser = {
  email: '',
  password: '',
  userName: '',
};

export interface ISingupUserResponse {
  email: string;
  name: string;
}

export interface IUser {
  userName?: string;
}

export interface UserInfo {
  data: {
    userId: number;
    email: string;
    userName: string;
  };
}

export interface IsLogin {
  isLogin: Boolean;
}
