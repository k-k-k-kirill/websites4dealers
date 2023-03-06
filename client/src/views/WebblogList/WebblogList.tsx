import React from "react";
import Dashboard from "../Layouts/Dashboard";
import { Typography } from "@mui/material";
import { useQuery, useMutation } from "@tanstack/react-query";
import webblogStorage from "../../api/Webblog";
import DataTable from "../../components/DataTable/DataTable";
import { requestWithTokenRefresh } from "../../api/utils/requestWithTokenRefresh";
import { useNavigate } from "react-router-dom";

const WebblogList = () => {
  const navigate = useNavigate();

  const { data, refetch: refetchWebblog } = useQuery(["webblog"], () =>
    requestWithTokenRefresh(webblogStorage.getAll)
  );

  const { mutate: deleteWebblogRows } = useMutation(
    (rowIds: string[]) =>
      requestWithTokenRefresh(webblogStorage.delete(rowIds)),
    {
      onSuccess: refetchWebblog,
    }
  );

  const { rows = [], columns = [] } = data || {};

  const handleRowsDelete = (rowIds: string[]) => {
    deleteWebblogRows(rowIds);
  };

  return (
    <Dashboard>
      <Typography variant="h4" sx={{ marginBottom: "3rem" }}>
        Web blog
      </Typography>
      <div>
        <DataTable
          primaryKey="webblogID"
          columns={columns}
          rows={rows}
          onRowsDelete={handleRowsDelete}
          onAddItem={() => {
            navigate("/webblog/add");
          }}
          onRowClick={(rowId) => navigate(`/webblog/edit/${rowId}`)}
        />
      </div>
    </Dashboard>
  );
};

export default WebblogList;
