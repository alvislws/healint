import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Categories } from "../../types.ts/apiTypes";
import DashboardForm from "../dashboard/form";

function Table({
  expensePayload,
  setExpensePayload,
  balance,
}: TableProps): JSX.Element {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [rowData, setRowData] = useState<Categories>();

  const handleDelete = (id: string): void => {
    const updatedPayload = expensePayload.filter(
      (transaction) => transaction.id !== id
    );
    setExpensePayload(updatedPayload);
  };

  const shouldShowEditForm = (rowData: Categories): void => {
    setRowData(rowData);
    setShowEdit(!showEdit);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    const updatedTransaction: Categories = {
      itemAmount: Number(form.amount.value),
      category: form.category.value,
      note: form.notes.value,
      expenseDate: form.date.value,
      isDeleted: false,
      id: rowData.id,
    };
    const updatedPayload = expensePayload.map((value) =>
      value.id === rowData.id ? updatedTransaction : value
    );
    setExpensePayload(updatedPayload);
    setShowEdit(false);
    e.preventDefault();
  };

  const handleClose = () => setShowEdit(false);

  const columns = [
    {
      name: "Category",
      selector: "category",
      sortable: false,
    },
    {
      name: "Amount",
      selector: "itemAmount",
      sortable: true,
    },
    {
      name: "Date of Transaction",
      selector: "expenseDate",
      sortable: true,
    },
    {
      name: "Note",
      selector: "note",
      sortable: false,
      allowOverflow: true,
    },
    {
      name: "Delete",
      selector: "id",
      cell: (row) => (
        <Button variant="danger" size="sm" onClick={() => handleDelete(row.id)}>
          Delete
        </Button>
      ),
      button: true,
    },
    {
      name: "Edit",
      cell: (row) => (
        <Button
          variant="warning"
          size="sm"
          onClick={() => shouldShowEditForm(row)}
        >
          Edit
        </Button>
      ),
      button: true,
    },
  ];
  return (
    <>
      <Card>
        <Modal show={showEdit} onHide={handleClose}>
          <Modal.Header closeButton style={{ borderBottom: "none" }} />
          <Modal.Body>
            <DashboardForm
              handleSubmit={handleSubmit}
              balance={balance}
              title="Edit a Transaction"
              rowData={rowData}
            />
          </Modal.Body>
        </Modal>
        <Card.Title as="h5" style={{ textAlign: "center", padding: "1rem" }}>
          List of Transaction
        </Card.Title>
        <DataTable
          columns={columns}
          data={expensePayload}
          defaultSortField="expenseDate"
          pagination
          responsive
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 15, 25, 50]}
          style={{ width: "35rem" }}
        />
      </Card>
    </>
  );
}

interface TableProps {
  expensePayload: Array<Categories>;
  setExpensePayload: React.Dispatch<React.SetStateAction<Categories[]>>;
  balance: number;
}

export default Table;
