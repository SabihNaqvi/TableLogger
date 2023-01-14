import Input from './component/input';
import Table from './component/table';
import './App.css';

import Container from '@mui/material/Container';
import { useState } from 'react';
function App() {
  const [filterData, setFilterData] = useState({ actionType: [], applicationType: [] })
  const [searchData, setSearchData] = useState({ actionType: [], applicationType: [] })
  return (
    <Container maxWidth="lg">
      <Input actionType={filterData.actionType} applicationType={filterData.applicationType} setSearchData={setSearchData} />
      <Table setFilterData={setFilterData} />
    </Container>
  );
}

export default App;
