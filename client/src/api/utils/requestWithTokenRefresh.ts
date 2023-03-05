import authStorage from "../Auth";

export const requestWithTokenRefresh = async (callable: any) => {
  try {
    const response = await callable();
    return response;
  } catch (err) {
    try {
      const { accessToken, refreshToken } =
        await authStorage.refreshAccessToken(
          sessionStorage.getItem("accessToken") || "",
          sessionStorage.getItem("refreshToken") || ""
        );

      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("refreshToken", refreshToken);

      const response = await callable();
      return response;
    } catch (error) {
      throw new Error("Failed to query API.");
    }
  }
};
