import api from "../api";
import BaseStorage from "./ApiBase";
import { SignupFormValues } from "../components/Forms/SignupForm/SignupForm";

class User extends BaseStorage {
  module;

  constructor() {
    super();
    this.module = "user";
  }

  login = (email?: string, password?: string) => {
    return api.post(`/${this.module}/login`, {
      email,
      password,
    });
  };

  signUp = (data: SignupFormValues) => {
    return api.post(`/${this.module}/signup`, {
      ...data,
    });
  };
}

export default new User();
