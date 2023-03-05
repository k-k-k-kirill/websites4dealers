import React, { useState, useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { areArraysEqual } from "@mui/base";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

interface DataTableProps {
  rows: any[];
  columns: string[];
  hiddenColumns?: string[];
  primaryKey: string;
  onRowsDelete: (rowIds: string[]) => void;
  onAddItem: () => void;
  onRowClick: (rowId: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  rows,
  columns,
  primaryKey,
  onRowsDelete,
  onAddItem,
  onRowClick,
}) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const allPrimaryKeys = useMemo(() => {
    return rows.map((row) => row[primaryKey]);
  }, [rows]);

  const areAllRowsSelected =
    rows.length === 0 ? false : areArraysEqual(selectedRows, allPrimaryKeys);

  const handleAllRowsSelectClick = () => {
    if (areAllRowsSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(allPrimaryKeys);
    }
  };

  const handleSingleRowSelectClick = (rowId: string) => {
    let newSelectedRows = [];

    if (selectedRows.includes(rowId)) {
      newSelectedRows = selectedRows.filter((row: any) => {
        return row !== rowId;
      });
    } else {
      newSelectedRows = [...selectedRows];
      newSelectedRows.push(rowId);
    }

    setSelectedRows(newSelectedRows);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => onRowsDelete(selectedRows)}
          variant="contained"
          sx={{ marginBottom: "1rem" }}
          disabled={selectedRows.length === 0}
          startIcon={<DeleteIcon />}
        >
          Delete {selectedRows.length} row(s)
        </Button>
        <Button
          onClick={() => onAddItem()}
          variant="contained"
          sx={{ marginBottom: "1rem" }}
          startIcon={<AddIcon />}
        >
          Add item
        </Button>
      </Box>
      <TableContainer
        component={Paper}
        style={{
          maxHeight: 400,
          overflow: "auto",
        }}
      >
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={"medium"}
        >
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  onChange={handleAllRowsSelectClick}
                  checked={areAllRowsSelected}
                  inputProps={{
                    "aria-labelledby": "select-all",
                  }}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column}
                  align={"left"}
                  style={{ minWidth: "150px" }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                onClick={() => onRowClick(row[primaryKey])}
                hover
                role="checkbox"
                aria-checked={false}
                tabIndex={-1}
                key={`row-${index}`}
                selected={false}
                sx={{ ":hover": { cursor: "pointer" } }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    onChange={() => handleSingleRowSelectClick(row[primaryKey])}
                    color="primary"
                    checked={selectedRows.includes(row[primaryKey])}
                    inputProps={{
                      "aria-labelledby": "select-all",
                    }}
                  />
                </TableCell>
                {Object.keys(row).map((key) => {
                  return (
                    <TableCell
                      component="th"
                      id={key}
                      scope="row"
                      padding="none"
                      key={key}
                      align="left"
                      style={{
                        minWidth: "150px",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      {row[key]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
