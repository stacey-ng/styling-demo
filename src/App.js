import "./App.css";
import StyledButton from "./styled-components/StyledButton/StyledButton";
import StyledIconButton from "./styled-components/StyledIconButton/StyledIconButton";
import StyledInput from "./styled-components/StyledInput/StyledInput";

function App() {
  return (
    <div className="App">
      <div className="rows">
        <div className="container inputs">
          <h1>Inputs</h1>
          <StyledInput></StyledInput>
          <StyledInput defaultValue="Default Value"></StyledInput>
          <StyledInput placeholder="Required" required></StyledInput>
          <StyledInput placeholder="Error" error></StyledInput>
          <StyledInput placeholder="Disabled" disabled></StyledInput>
          <StyledInput placeholder="Placeholder Value" allowClear></StyledInput>
          <StyledInput placeholder="Disabled" disabled allowClear></StyledInput>
          <StyledInput placeholder="Error" error allowClear></StyledInput>
          <StyledInput defaultValue="Default Value" size="small"></StyledInput>
          <StyledInput defaultValue="Default Value" size="medium"></StyledInput>
          <StyledInput defaultValue="Default Value" size="large"></StyledInput>
        </div>
      </div>
      {/* <div className="rows">
        <div className="container solid">
          <h1>Contained</h1>
          <StyledButton
            variant="contained"
            color="blue"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="contained"
            color="neutral"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="contained"
            color="red"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="contained"
            color="orange"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="contained"
            color="yellow"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="contained"
            color="green"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="contained"
            color="blue"
            endIcon="AiFillFilter"
            size="large"
            disabled
          >
            Disabled
          </StyledButton>
        </div>

        <div className="container outlined">
          <h1>Outlined</h1>
          <StyledButton
            variant="outlined"
            color="blue"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="neutral"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="red"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="orange"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="yellow"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="green"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="blue"
            endIcon="AiFillFilter"
            size="large"
            activatable
            disabled
          >
            Disabled
          </StyledButton>
        </div>

        <div className="container minimal">
          <h1>Minimal</h1>
          <StyledButton
            variant="minimal"
            color="blue"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="minimal"
            color="neutral"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="minimal"
            color="red"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="minimal"
            color="orange"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="minimal"
            color="yellow"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="minimal"
            color="green"
            endIcon="AiFillFilter"
            size="large"
            activatable
          >
            Button
          </StyledButton>
          <StyledButton
            variant="minimal"
            color="blue"
            endIcon="AiFillFilter"
            size="large"
            disabled
          >
            Disabled
          </StyledButton>
        </div>

        <div className="container content">
          <h1>Content Orientation</h1>
          <StyledButton
            variant="contained"
            color="blue"
            startIcon="AiFillFilter"
            size="large"
          >
            Button
          </StyledButton>
          <StyledButton variant="contained" color="blue" size="large">
            Button
          </StyledButton>
          <StyledButton
            variant="contained"
            color="blue"
            endIcon="AiFillFilter"
            size="large"
          >
            Button
          </StyledButton>
        </div>
      </div>
      <div className="rows">
        <div className="container outlined icons">
          <h1>Icons - Outlined</h1>
          <StyledIconButton
            variant="outlined"
            color="blue"
            icon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="outlined"
            color="neutral"
            icon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="outlined"
            color="red"
            icon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="outlined"
            color="orange"
            icon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="outlined"
            color="yellow"
            icon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="outlined"
            color="green"
            icon="AiFillFilter"
            size="large"
            activatable
          />
        </div>

        <div className="container filled icons">
          <h1>Icons - Filled (Matches Button Minimal)</h1>
          <StyledIconButton
            variant="filled"
            color="blue"
            icon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="filled"
            color="neutral"
            icon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="filled"
            color="red"
            icon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="filled"
            color="orange"
            icon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="filled"
            color="yellow"
            icon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="filled"
            color="green"
            icon="AiFillFilter"
            size="large"
            activatable
          />
        </div>

        <div className="container minimal2 icons">
          <h1>Icons - Unfilled (Current Implementation, Table Filters)</h1>
          <StyledIconButton
            variant="unfilled"
            color="blue"
            icon="AiOutlineFilter"
            activeIcon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="unfilled"
            color="neutral"
            icon="AiOutlineFilter"
            activeIcon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="unfilled"
            color="red"
            icon="AiOutlineFilter"
            activeIcon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="unfilled"
            color="orange"
            icon="AiOutlineFilter"
            activeIcon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="unfilled"
            color="yellow"
            icon="AiOutlineFilter"
            activeIcon="AiFillFilter"
            size="large"
            activatable
          />
          <StyledIconButton
            variant="unfilled"
            color="green"
            icon="AiOutlineFilter"
            activeIcon="AiFillFilter"
            size="large"
            activatable
          />
        </div>

        <div className="container icons">
          <h1>Icons - Disabled</h1>
          <StyledIconButton
            variant="outlined"
            color="blue"
            icon="AiFillFilter"
            size="large"
            activatable
            disabled
          />
          <StyledIconButton
            variant="filled"
            color="blue"
            icon="AiFillFilter"
            size="large"
            activatable
            disabled
          />
          <StyledIconButton
            variant="unfilled"
            color="blue"
            icon="AiOutlineFilter"
            size="large"
            disabled
          />
        </div>

        <div className="container icons">
          <h1>Icons - Sizes</h1>
          <StyledIconButton
            variant="outlined"
            color="blue"
            icon="AiFillFilter"
            size="small"
            activatable
          />{" "}
          <StyledIconButton
            variant="outlined"
            color="blue"
            icon="AiFillFilter"
            size="medium"
            activatable
          />{" "}
          <StyledIconButton
            variant="outlined"
            color="blue"
            icon="AiFillFilter"
            size="large"
            activatable
          />
        </div>
      </div> */}
    </div>
  );
}

export default App;
