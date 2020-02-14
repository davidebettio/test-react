import React from 'react';
import PropTypes from 'prop-types';
import './AmountsTable.css';

function AmountsTable(props) {
  const {items, sortOrder, sortColumn} = props;
  let headers = [];
  if (items.length > 0) {
    headers = Object.keys(items[0]);
  }
 
  const headersItems = headers.map((item, i) => 
    <th key={i}>{item}</th>
  );

  const sortedItems = items.sort((a, b) => {
    return sortOrder === 'asc' 
      ? a[sortColumn] - b[sortColumn]
      : b[sortColumn] - a[sortColumn];
  });
  
  const listSortedItems = sortedItems.map((item, i) =>
    <tr key={i}>
      { headers.map((header, j) => <td key={j}>{item[header]}</td>)}
    </tr>
  );

  return (
    <table className="AmountsTable">
      <thead>
        <tr>
          {headersItems}
        </tr>
      </thead>
      <tbody>
        {listSortedItems}
      </tbody>
    </table>
  );
}

AmountsTable.defaultProps = {
  items: [],
  sortOrder: 'asc'
};

AmountsTable.propTypes = {
  items: PropTypes.array,
  sortColumn: PropTypes.string.isRequired,
  sortOrder: PropTypes.string,
};

export default AmountsTable;