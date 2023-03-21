import { Table } from "react-bootstrap";
import { TableData } from "../interfaces/tableInterfaces";

const QueryTable = ({ tableData }: TableData) => {
  return (
    <Table striped bordered hover>
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
  );
};

export default QueryTable;
