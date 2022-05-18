import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Header, Table } from './components'
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [columns, setColumns] = useState(["Column 1"])

  const [rows, setRows] = useState([])

  const addColumn = () => {
    if(columns.length < 9){
      setColumns((prevColumns) => [...prevColumns, `Column ${columns.length + 1}`])
      if(rows.length > 0){
        setRows((prevRows) => prevRows.map((row) => [...row, ""]))
      }

    }else{
      toast.dark("Maximum 9 columns needed");
    }


  }

  const addRow = () => {

    setRows((prevRows) => [
      ...prevRows,
      columns.map((col) => "")
    ])

  }

  return (
    <div className="container-fluid">
      <ToastContainer />
      <Header columns={columns} rows={rows} addRow={addRow} addColumn={addColumn} setColumns={setColumns} />
      <Table columns={columns} rows={rows} addRow={addRow} addColumn={addColumn} setColumns={setColumns} setRows={setRows} />
    
    
    </div>
  )
}

export default App
