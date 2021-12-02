import React from 'react';
import './App.css';
import jsonData from './data.json'
import FilterableProductTable from './components/FilterableProductTable'

function App() {
  return (
    <div className="App">
    <FilterableProductTable products={jsonData.data}/>
    </div>
  );
}

export default App;
