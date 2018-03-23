export interface Credential {
  username: string;
  password: string;
}

export interface User {
  id: string | null;
  token: string | null;
  roles: string[] | null;
}
