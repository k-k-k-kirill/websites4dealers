import webblogStorage from "../api/Webblog";
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
      const formData = new FormData();

      for (const key in data) {
        formData.append(key, data[key]);
      }

      await requestWithTokenRefresh(async () => webblogStorage.add(data));

      dispatch(
        uiSetNotification({
          type: NotificationType.Success,
          message: "Successfully added web blog item",
        })
      );

      navigate("/webblog");
    } catch (error) {
      dispatch(
        uiSetNotification({
          type: NotificationType.Error,
          message: "Failed to add new web blog item",
        })
      );
      throw new Error("Failed to add new web blog item");
    }
  };

  const update = async (itemId: string, data: any) => {
    try {
      await requestWithTokenRefresh(async () =>
        webblogStorage.update(itemId, data)
      );

      dispatch(
        uiSetNotification({
          type: NotificationType.Success,
          message: "Successfully updated web blog item",
        })
      );

      navigate("/webblog");
    } catch (error) {
      dispatch(
        uiSetNotification({
          type: NotificationType.Error,
          message: "Failed to update web blog item",
        })
      );
      throw new Error("Failed to update web blog item");
    }
  };

  return {
    add,
    update,
  };
};
