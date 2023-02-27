import react from "react";
import { useNavigate } from "react-router-dom";
import userStorage from "../api/User";
import { useDispatch } from "react-redux";
import { uiSetNotification } from "../redux/notification/slice";

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

  const signup = async (email: string, password: string) => {
    try {
      await userStorage.signUp(email, password);
      await login(email, password);
    } catch (error) {
      throw new Error("Failed to sign up.");
    }
  };

  return {
    login,
    signup,
  };
};
