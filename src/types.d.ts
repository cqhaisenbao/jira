interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
  pin: boolean;
  created: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchParam {
  name: string;
  personId: string;
}

interface GeneralResponse<T> {
  message: string;
  code: number;
  result: T;
}
