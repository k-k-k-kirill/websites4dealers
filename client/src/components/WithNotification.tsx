import React, { useState, useEffect, ReactNode } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { getNotification } from "../redux/notification/slice";
import { useDispatch } from "react-redux";
import { uiSetNotification } from "../redux/notification/slice";
import { NotificationType } from "../redux/notification/types";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface WithNotificationProps {
  children: ReactNode;
}

const WithNotification: React.FC<WithNotificationProps> = ({ children }) => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const { message, type } = useSelector((state) => getNotification(state));

  const dispatch = useDispatch();

  const onSnackbarClose = () => {
    setSnackbarOpen(false);
    dispatch(uiSetNotification({ type: NotificationType.Info, message: "" }));
  };

  useEffect(() => {
    if (message) {
      setSnackbarOpen(true);
    } else {
      setSnackbarOpen(false);
    }
  }, [message]);

  return (
    <>
      {children}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={onSnackbarClose}
      >
        <Alert onClose={onSnackbarClose} severity={type} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default WithNotification;
