import './App.css';
import SCStyledButton from './styled-components/SCStyledButton';
import SassStyledButton from './sass/SassStyledButton';
import { FilterFilled, EditFilled } from '@ant-design/icons';
function App() {
  
  return (
    <div className="App">
      <div className="container v1">
        Version 1
        <SCStyledButton
          submit
          activatable
          styleType="primary"
        >
          <FilterFilled/>
          Filters
        </SCStyledButton>
        <SCStyledButton
          activatable
          styleType="secondary"
        >
          Manage Tasks
          <EditFilled />
        </ SCStyledButton>
      </div>
      <div className="container v2">
      Version 2
        <SCStyledButton
          submit
          activatable
          primary
        >
          <FilterFilled/>
          Filters
        </SCStyledButton>
        <SCStyledButton
          activatable
        >
          Manage Tasks
          <EditFilled />
        </ SCStyledButton>
      </div>
      <div className="container v3">
      Version 3
        <SCStyledButton
          submit
          activatable
        >
          <FilterFilled/>
          Filters
        </SCStyledButton>
        <SCStyledButton
          activatable
          theme="gray"
        >
          Manage Tasks
          <EditFilled />
        </ SCStyledButton>
      </div>
      <div className="container">
        SASS
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
