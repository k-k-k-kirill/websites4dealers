import api from "../api";
import BaseStorage from "./ApiBase";

class Inventory extends BaseStorage {
  module;

  constructor() {
    super();
    this.module = "inventory";
  }

  add = (data: any) => {
    return api.post(`/${this.module}/`, {
      ...data,
    });
  };

  update = (itemId: string, data: any) => {
    return api.patch(`/${this.module}/${itemId}`, {
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

export default new Inventory();
