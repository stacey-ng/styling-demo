import {useState} from 'react';
import './App.css';
import StyledButton from './components/StyledButton'
import { FilterFilled, EditFilled } from '@ant-design/icons';
function App() {
  
  return (
    <div className="App">
      <StyledButton
        submit
        styleType="primary"
        activatable
      >
        <FilterFilled/>
        Filters
      </StyledButton>
      <StyledButton
        styleType="secondary"
        activatable
      >
        Manage Tasks
        <EditFilled />
      </ StyledButton>
      <div>font size</div>
    </div>
  );
}

export default App;
