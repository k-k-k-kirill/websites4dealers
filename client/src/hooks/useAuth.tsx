import react from "react";
import { useNavigate } from "react-router-dom";
import userStorage from "../api/User";
import { useDispatch } from "react-redux";
import { uiSetNotification } from "../redux/notification/slice";
import { SignupFormValues } from "../components/Forms/SignupForm/SignupForm";

export default () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (email: string, password: string) => {
    try {
      const response = await userStorage.login(email, password);
      const { accessToken, refreshToken } = response;

      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("refreshToken", refreshToken);

      navigate("/dashboard");
    } catch (error) {
      dispatch(uiSetNotification("Failed to login."));
      throw new Error("Failed to login.");
    }
  };

  const signup = async (data: SignupFormValues) => {
    try {
      await userStorage.signUp(data);
      await login(data.email, data.password);
    } catch (error) {
      dispatch(uiSetNotification("Failed to create new account."));
      throw new Error("Failed to sign up.");
    }
  };

  return {
    login,
    signup,
  };
};
