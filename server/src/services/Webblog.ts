import knex from "../db/db";

class Webblog {
  userId: string;
  table: string;
  editableFields: string[];

  constructor(userId: string) {
    this.userId = userId;
    this.table = "webblog";
    this.editableFields = [
      "First_Name",
      "Last_Name",
      "Type",
      "Write_Up",
      "Photo",
    ];
  }

  public add = async (data: any) => {
    data.DBID = this.userId;
    const result = await knex(this.table).insert(data);
    return result;
  };

  public getAll = async (columns: string[] | string = "*") => {
    const result = await knex(this.table)
      .select(columns)
      .where({ DBID: this.userId });

    return result;
  };

  public delete = async (rowIds: string[]) => {
    const result = await knex(this.table)
      .delete()
      .whereIn("webblogID", rowIds)
      .where("DBID", this.userId);

    return result;
  };

  public findItemById = async (itemId: string) => {
    const result = await knex(this.table)
      .select(this.editableFields)
      .where({ DBID: this.userId, webblogID: itemId });

    return result;
  };

  public updateItemById = async (itemId: string, data: any) => {
    const result = await knex(this.table)
      .update(data)
      .where({ DBID: this.userId, webblogID: itemId });

    return result;
  };
}

export default Webblog;
