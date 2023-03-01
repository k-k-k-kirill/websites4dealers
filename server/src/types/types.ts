export interface UpdateUserData {
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
