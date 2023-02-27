export interface UpdateUserData {
  username?: string;
  password?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  street?: string;
  street_number?: string;
  company?: string;
  city?: string;
  state_name?: string;
  zip_code?: string;
}

export interface CreateUserData {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  street: string;
  street_number: string;
  company: string;
  city: string;
  state_name: string;
  zip_code: string;
}
