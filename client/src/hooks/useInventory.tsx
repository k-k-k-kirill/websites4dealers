import inventoryStorage from "../api/Inventory";
import { useDispatch } from "react-redux";
import { uiSetNotification } from "../redux/notification/slice";
import { requestWithTokenRefresh } from "../api/utils/requestWithTokenRefresh";
import { NotificationType } from "../redux/notification/types";
import { useNavigate } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const add = async (data: any) => {
    try {
      await requestWithTokenRefresh(async () => inventoryStorage.add(data));

      dispatch(
        uiSetNotification({
          type: NotificationType.Success,
          message: "Successfully added inventory item",
        })
      );

      navigate("/inventory");
    } catch (error) {
      dispatch(
        uiSetNotification({
          type: NotificationType.Error,
          message: "Failed to add new inventory item",
        })
      );
      throw new Error("Failed to add new inventory item");
    }
  };

  const update = async (itemId: string, data: any) => {
    try {
      await requestWithTokenRefresh(async () =>
        inventoryStorage.update(itemId, data)
      );

      dispatch(
        uiSetNotification({
          type: NotificationType.Success,
          message: "Successfully updated inventory item",
        })
      );

      navigate("/inventory");
    } catch (error) {
      dispatch(
        uiSetNotification({
          type: NotificationType.Error,
          message: "Failed to update inventory item",
        })
      );
      throw new Error("Failed to update inventory item");
    }
  };

  return {
    add,
    update,
  };
};
