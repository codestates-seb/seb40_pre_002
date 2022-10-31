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
