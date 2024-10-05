export interface IResponse<T = null> {
  data: T;
  error: string[];
  message: string;
  statusCode: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}
