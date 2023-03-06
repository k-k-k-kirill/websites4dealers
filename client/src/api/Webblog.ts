import api from "../api";
import BaseStorage from "./ApiBase";

class Webblog extends BaseStorage {
  module;

  constructor() {
    super();
    this.module = "webblog";
  }

  add = (data: any) => {
    return api.postFormData(`/${this.module}/`, {
      ...data,
    });
  };

  update = (itemId: string, data: any) => {
    return api.patchFormData(`/${this.module}/${itemId}`, {
      ...data,
    });
  };

  getAll = () => {
    return api.get(`/${this.module}/`);
  };

  delete = (rowIds: string[]) => {
    return api.delete(`/${this.module}/`, { rowIds });
  };

  getItemById = (itemId: string) => {
    return api.get(`/${this.module}/${itemId}`);
  };
}

export default new Webblog();
