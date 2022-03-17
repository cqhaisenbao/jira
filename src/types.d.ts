interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
  pin: boolean;
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