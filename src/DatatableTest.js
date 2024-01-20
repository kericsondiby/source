import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import info from "./img/info.svg"

import "./tooltip.css"
const Table = ({ data, click }) => {
  const columns = [
    {
      name: "Name",
      selector: row => row.name,
      sortable: true,
      // grow: 2
    },
    // {
    //   name: "Email",
    //   selector: row => row.email,
    //   sortable: true,
    //   hide: "sm"
    // },
    // {
    //   name: "Website",
    //   selector: row => row.website,
    //   sortable: true
    // },
    {
      name: "Company",
      selector: row => row.company.name,
      sortable: true,
      hide: "md"
    },
    {
      name: "City",
      selector: row => row.address.city,
      sortable: true,
      hide: "md"
    },
    {
      name: "Buttons",
      button: true,
      cell: () =>
        (
          <>
            {/* <button
              onClick={() => click(row.name)}
              style={{ marginRight: "5px" }}
              className="btn"
              data-toggle="tooltip" data-placement="top" title="Tooltip on top"
            > */}
            {/* <img src={info} width={40} height={40} /> */}
            {/* <div id="anim"> */}
            {/* <span class="tooltip" data-tooltip="username must consist of 29 symbols.">dfdfdfdfdfdfdfd?</span> */}
            {/* </div> */}
            {/* </button> */}


            <div id="anim">
              <span class="tooltipa" data-tooltip="username must consist of 29 symbols.">?</span>
            </div>
          </>
        )
    }
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  let ar = []

  //   console.log("DATA: ", data.filter(it=>{console.log("TEST:", it)}));
  const filteredItems = data && data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', selectedRows);
  };
  return (
    <>
      <div className="container">
        <DataTable
          title="Contact List"
          columns={columns}
          data={filteredItems}
          defaultSortField="name"
          striped
          pagination
          subHeader
          subHeaderComponent={subHeaderComponent}
          selectableRows
          onSelectedRowsChange={handleChange}
        />
      </div>
    </>
  );
};

export default Table;
