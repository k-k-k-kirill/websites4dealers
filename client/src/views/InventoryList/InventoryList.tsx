import React from "react";
import Dashboard from "../Layouts/Dashboard";
import { Typography } from "@mui/material";
import { useQuery, useMutation } from "@tanstack/react-query";
import inventoryStorage from "../../api/Inventory";
import DataTable from "../../components/DataTable/DataTable";
import { requestWithTokenRefresh } from "../../api/utils/requestWithTokenRefresh";
import { useNavigate } from "react-router-dom";

const InventoryList = () => {
  const navigate = useNavigate();

  const { data, refetch: refetchInventory } = useQuery(["inventory"], () =>
    requestWithTokenRefresh(inventoryStorage.getAll)
  );

  const { mutate: deleteInventoryRows } = useMutation(
    (rowIds: string[]) =>
      requestWithTokenRefresh(inventoryStorage.delete(rowIds)),
    {
      onSuccess: refetchInventory,
    }
  );

  const { rows = [], columns = [] } = data || {};

  const handleRowsDelete = (rowIds: string[]) => {
    deleteInventoryRows(rowIds);
  };

  return (
    <Dashboard>
      <Typography variant="h4" sx={{ marginBottom: "3rem" }}>
        Inventory
      </Typography>
      <div>
        {rows && rows.length > 0 && columns && (
          <DataTable
            primaryKey="InventoryID"
            columns={columns}
            rows={rows}
            onRowsDelete={handleRowsDelete}
            onAddItem={() => {
              navigate("/inventory/add");
            }}
            onRowClick={(rowId) => navigate(`/inventory/edit/${rowId}`)}
          />
        )}
      </div>
    </Dashboard>
  );
};

export default InventoryList;
