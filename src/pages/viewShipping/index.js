import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Search from "../../components/Search";
import Table from "../../components/Table";
import "./index.css";

import { getShippings } from "../../store/modules/shipping";
import { getColumnsConfig, getFilteredData, getPrice } from "./helpers";

const ViewShipping = () => {
  const shippings = useSelector(getShippings);
  const [searchText, setSearchText] = useState("");
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    const filteredData = getFilteredData(shippings, searchText);
    setVisibleData(filteredData);
  }, [shippings, searchText]);

  const handleSearchChange = (text) => setSearchText(text);

  const getBoxColorCell = (row) => (
    <div
      style={{ height: "20px", width: "40px", backgroundColor: row.boxColor }}
    />
  );

  const getPriceCell = (row) => (
    <span>{getPrice(row.destinationCountry, row.weight)}</span>
  );

  const columnsConfig = getColumnsConfig({
    getBoxColorCell,
    getPriceCell,
  });

  return (
    <div className="shipping-container">
      <div className="shipping-nav">
        <Search onChange={(text) => handleSearchChange(text)}></Search>
      </div>
      <Table columnsConfig={columnsConfig} data={visibleData}></Table>
    </div>
  );
};
export default ViewShipping;
