import PasswordService from "./Password";
import JWT from "../services/JWT";
import UserExistsError from "../errors/UserExistsError";
import UserNotFoundError from "../errors/UserNotFoundError";
import UnauthorizedError from "../errors/UnauthorizedError";
import NotFoundError from "../errors/NotFoundError";

class User {
  passwordService: any;

  constructor() {
    this.passwordService = new PasswordService();
  }

  public signUp = async (
    email: string,
    password: string,
    username?: string
  ) => {
    return true;
  };

  public login = async (email: string, password: string) => {
    return {
      accessToken: "",
      refreshToken: "",
      fingerprint: "",
    };
  };

  public checkIfUserExists = async (email: string) => {
    return true;
  };

  public delete = async (id: string) => {
    return true;
  };
}

export default new User();
