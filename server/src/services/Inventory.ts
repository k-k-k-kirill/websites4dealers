import { Result } from "express-validator";
import knex from "../db/db";

class Inventory {
  userId: string;
  table: string;
  editableFields: string[];

  constructor(userId: string) {
    this.userId = userId;
    this.table = "inventory_new";
    this.editableFields = [
      "VEHICLES___kp_Stock_Number",
      "Status",
      "VEHICLES_Year",
      "VEHICLES_Make",
      "VEHICLES_Model",
      "VEHICLES_Trim",
      "VEHICLES_Body_Style",
      "VEHICLES_Doors",
      "VEHICLES_Drive_Type",
      "VEHICLES_Exterior_Color",
      "VEHICLES_Interior_Color",
      "VEHICLES_Transmission",
      "VEHICLES_Mileage_Current",
      "VEHICLES_Engine_Description",
      "VEHICLES_Fuel_Type",
      "VEHICLES_Vin_Number",
      "Price_Display_Feeds",
      "VEHICLES_Price_Asking",
      "VEHICLES_Web_Publish_Special",
      "vehicle_FEATURES_Details",
      "vehicle_FEATURES_Extra_Features_Final",
      "vehicle_FEATURES_Mileage_EPA_City",
      "vehicle_FEATURES_Mileage_EPA_Highway",
      "Vehicles_Days_On_Market",
      "VEHICLES_Location_Name",
      "VEHICLES_Location_Number",
      "vehicle_FEATURES_Virtual_Tour_Link",
      "vehicle_FEATURES_Web_Custom_Link",
      "VEHICLES_Photo_Count",
    ];
  }

  public add = async (data: any) => {
    data.DBID = this.userId;
    data.VEHICLES_Year_Make_Model_Body_Style = `${data.VEHICLES_Year} ${data.VEHICLES_Make} ${data.VEHICLES_Model} ${data.VEHICLES_Body_Style}`;

    const result = await knex(this.table).insert(data);
    return result;
  };

  public getAll = async (columns: string[]) => {
    const result = await knex(this.table)
      .select(columns)
      .where({ DBID: this.userId });

    return result;
  };

  public delete = async (rowIds: string[]) => {
    const result = await knex(this.table)
      .delete()
      .whereIn("InventoryID", rowIds)
      .where("DBID", this.userId);

    return result;
  };

  public findItemById = async (itemId: string) => {
    const result = await knex(this.table)
      .select(this.editableFields)
      .where({ DBID: this.userId, InventoryID: itemId });

    return result;
  };

  public updateItemById = async (itemId: string, data: any) => {
    const result = await knex(this.table)
      .update(data)
      .where({ DBID: this.userId, InventoryID: itemId });

    return result;
  };
}

export default Inventory;
