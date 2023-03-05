import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationActionPayload } from "./actions";
import { NotificationState, NotificationType } from "./types";

export const notification = createSlice({
  name: "session",
  initialState: {
    type: NotificationType.Info,
    message: "",
  },
  reducers: {
    uiSetNotification(
      state: NotificationState,
      action: PayloadAction<NotificationActionPayload>
    ) {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },

    sagaSetNotification(
      state: NotificationState,
      action: PayloadAction<NotificationActionPayload>
    ) {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
  },
});

// Action creators
export const { uiSetNotification, sagaSetNotification } = notification.actions;

// Selectors
export const getNotification = (state: any) => state.notification;

export default notification.reducer;
