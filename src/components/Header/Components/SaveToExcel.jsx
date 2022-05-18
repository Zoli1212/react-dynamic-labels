import exportFromJSON from "export-from-json";
import { convertDataToJSON } from "../../../methods";

export const SaveToExcel = ({ columns, rows }) => {
  const downloadExcelFile = () => {
    const data = convertDataToJSON({ columns, rows });

    const fileName = "data";
    const exportType = exportFromJSON.types.xls;

    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <button
      type="button"
      onClick={() => downloadExcelFile()}
      className="btn btn-success"
    >
      Export Excel
    </button>
  );

  }