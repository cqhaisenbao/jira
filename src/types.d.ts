interface Project {
  id: number;
  name: string;
  personId: number;
  organization: number;
  pin: boolean;
  created: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

// interface SearchParam {
//   name: string;
//   personId: string;
// }

interface GeneralResponse<T> {
  message: string;
  code: number;
  result: T;
}
