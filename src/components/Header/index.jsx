import React from 'react'
import { SaveToExcel } from './Components/SaveToExcel'
import { SaveToJSON } from './Components/SaveToJson'



const Header = ({ columns, addColumn, rows, addRow }) => {
  return (
    <div className="row mb-5">
      <div className="col-md-10 mt-5 mx-auto d-flex align-items-center justify-content-between">
      <img src="https://i.pinimg.com/originals/c2/d1/ed/c2d1ed0716c40a008a1f6212ff634d48.jpg" style={{ width: 150, height: 150}} />
        <a href="/" className="ms-5 text-decoration-none text-dark fw-bold">
          KPI Reactjs Dynamic Label Table
        </a>

        <div className="d-flex align-items-center justify-content-end gap-1">
          <p className="my-0">Columns : {columns.length}</p>
          <p className="my-0">Rows : {rows.length}</p>

          <button
            type="button"
            onClick={() => addColumn()}
            className="ms-1 btn btn-outline-dark"
          >
            Add Column
          </button>
          <button
            type="button"
            onClick={() => addRow()}
            className="btn btn-outline-dark"
          >
            Add Row
          </button>

          <SaveToJSON rows={rows} columns={columns} />
          <SaveToExcel rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Header;
