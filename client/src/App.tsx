import { useState } from "react";
import QueryForm from "./components/forms/QueryForm";
import QueryTable from "./components/tables/QueryTable";
import { QueryResult } from "./lib/interfaces";

function App() {
  const [queryResult, setQueryResult] = useState<ReadonlyArray<QueryResult>>(
    []
  );
  return (
    <div className="App">
      <QueryForm setResult={setQueryResult} />
      <QueryTable tableData={queryResult} />
    </div>
  );
}

export default App;
