import axios from "axios";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

import React from "react";
function ExportToCSV(array, filename) {
  const [data, setData] = useState("");
  // const csvData = array.map((row) => Object.values(row).join(","));
  // const csvHeaders = Object.keys(array[0]).join(",");
  // const csv = csvHeaders + "\n" + csvData.join("\n");
  // const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  useEffect(() => {
    axios
      .get("https://unibackend.azurewebsites.net/api/idea/csv")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  // if (navigator.msSaveBlob) {
  //   navigator.msSaveBlob(blob, filename);
  // } else {
  //   const link = document.createElement("a");
  //   if (link.download !== undefined) {
  //     const url = URL.createObjectURL(blob);
  //     link.setAttribute("href", url);
  //     link.setAttribute("download", filename);
  //     link.style.visibility = "hidden";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);

  return <CSVLink data={data} />;
}
export default ExportToCSV;
