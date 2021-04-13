import {useState} from 'react';
import './App.css';
import SCStyledButton from './styled-components/SCStyledButton';
import SassStyledButton from './sass/SassStyledButton';
import { FilterFilled, EditFilled } from '@ant-design/icons';
function App() {
  
  return (
    <div className="App">
      <div className="container">
        <SCStyledButton
          submit
          activatable
          primary
        >
          <FilterFilled/>
          Filters
        </SCStyledButton>
        <SCStyledButton
          theme="gray"
          activatable
        >
          Manage Tasks
          <EditFilled />
        </ SCStyledButton>
      </div>
      <div className="container">
        <SassStyledButton
          submit
          className="styled-button styled-button--primary"
          activatable
        >
          <FilterFilled/>
          Filters
        </SassStyledButton>
        <SassStyledButton
          className="styled-button styled-button--secondary"
          activatable
        >
          Manage Tasks
          <EditFilled />
        </ SassStyledButton>
      </div>
    </div>
  );
}

export default App;
