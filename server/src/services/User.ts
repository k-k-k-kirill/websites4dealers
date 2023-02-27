import PasswordService from "./Password";
import JWT from "../services/JWT";
import SomethingWentWrongError from "../errors/SomethingWentWrongError";
import UserNotFoundError from "../errors/UserNotFoundError";
import UnauthorizedError from "../errors/UnauthorizedError";
import knex from "../db/db";
import { User as UserType } from "../models/User/types";
import { UpdateUserData, CreateUserData } from "../types/types";

class User {
  passwordService: any;

  constructor() {
    this.passwordService = new PasswordService();
  }

  public signUp = async (data: CreateUserData) => {
    data.password = this.passwordService.createHash(data.password);
    await knex.transaction(async (trx) => {
      try {
        let results = await trx("users").insert({
          ...data,
        });
        const userId = results[0];

        results = await trx("roles").select("*").where({ name: "standard" });
        //@ts-ignore
        const roleId = results[0].id;

        await trx("users_roles").insert({
          user_id: userId,
          role_id: roleId,
        });
      } catch (err) {
        throw new SomethingWentWrongError();
      }
    });
  };

  public login = async (email: string, password: string) => {
    const users: UserType[] = await knex
      .select("*")
      .from("users")
      .where({ email });

    const user = users[0];

    if (!user) {
      throw new UserNotFoundError();
    }

    const loggedIn = this.passwordService.compare(password, user.password);

    if (loggedIn) {
      const jwtService = new JWT();

      return {
        accessToken: await jwtService.createAccessToken(user.id, user.password),
        refreshToken: await jwtService.createRefreshToken(
          user.id,
          user.password
        ),
        fingerprint: jwtService.getFingerprint(),
      };
    } else {
      throw new UnauthorizedError();
    }
  };

  public checkIfUserExists = async (email: string) => {
    const existingUser = await knex
      .select("id")
      .from("users")
      .where({ email })
      .first();
    return !!existingUser;
  };

  public delete = async (id: string) => {
    return knex("users").where({ id }).delete();
  };

  public update = async (id: number, data: UpdateUserData) => {
    if (data.password) {
      data.password = this.passwordService.createHash(data.password);
    }

    return knex("users")
      .where({ id })
      .update({ ...data });
  };
}

export default new User();
