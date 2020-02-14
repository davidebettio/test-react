import React, {useState, useEffect} from 'react';
import AmountsTable from './components/AmountsTable';
import ApiSelect from './components/ApiSelect';
import { getItems } from './services/api';
import { apiConfigs } from './constants';
import './App.css';

function App() {
  const sortOrders = ['asc', 'desc'];
  const [items, setItems] = useState([]);
  const [apiConfig, setApiConfig] = useState(apiConfigs[0]);
  const [sortOrder, setSortOrder] = useState(0);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getData() {
    getItems(apiConfig.url)
      .then((newItems) => {
        setItems(newItems);
      })
      .catch((err) => {
        alert('cannot fetch data');
      });
  }

  function handleApiSelectChange(selectedIndex) {
    setApiConfig(apiConfigs[selectedIndex]);
  }

  const selectOptions = apiConfigs.map((api) => api.title);
  return (
    <div className="App">
      <ApiSelect options={selectOptions} onChange={handleApiSelectChange} />
      <button onClick={getData}>Refresh</button>
      <button onClick={() => setSortOrder(1 - sortOrder)}>Sort {sortOrders[1 - sortOrder]}</button>
      <AmountsTable items={items} sortOrder={sortOrders[sortOrder]} sortColumn={apiConfig.amountColumn} />
    </div>
  );
}

export default App;
