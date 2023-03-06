import axios from "./axios";

class Api {
  get = async (url: string) => {
    const response = await axios.get(url, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken") || "",
      },
    });
    return response.data;
  };

  post = async (url: string, params: any) => {
    const response = await axios.post(url, params, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken") || "",
      },
    });
    return response.data;
  };

  postFormData = async (url: string, params: any) => {
    const response = await axios.post(url, params, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken") || "",
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  patchFormData = async (url: string, params: any) => {
    const response = await axios.patch(url, params, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken") || "",
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  patch = async (url: string, params: any) => {
    const response = await axios.patch(url, params, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken") || "",
      },
    });
    return response.data;
  };

  delete = async (url: string, data: any) => {
    const response = await axios.delete(url, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken") || "",
      },
      data,
    });
    return response.data;
  };
}

export default new Api();
