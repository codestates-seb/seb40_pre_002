export interface LoginUserType {
  userEmail: string;
  userPassword: string;
  userName?: string;
}

export const initialUser = {
  userEmail: '',
  userPassword: '',
  userName: '',
};
