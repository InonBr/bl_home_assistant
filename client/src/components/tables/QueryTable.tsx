import { Table } from "react-bootstrap";
import { TableData } from "../interfaces/tableInterfaces";
import "../styles/tables.css";

const QueryTable = ({ tableData }: TableData) => {
  return (
    <div className="table-container">
      <Table striped bordered hover className="tables">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Company ID</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.companyId}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.companyId}</td>
              <td>{item.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default QueryTable;
