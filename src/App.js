import "./App.css";
import StyledButton from "./styled-components/StyledButton/StyledButton";
import StyledIconButton from "./styled-components/StyledIconButton/StyledIconButton";

// Common Props

// children: array
//    Optional (see text & iconName).

// onClick: function
//    The clickHandler function passed down to StyledButton.

// theme: string
//    determines 3 core stylings (“solid”, “inverted”, “skeleton/borderless”)
//    These core stylings can be modified by adding a color to the theme string (solidColor).
//    i.e. solidRed, invertedRed, skeletonRed
//    Color modifies the core stylings accordingly.
//    Defaulted to solid + primaryBlue color when theme prop isn't provided

// text: string,
//    The text of a button saves 1 line of code if used by not needing </StyledButton>

// iconName: string
//    The name of the icon based on the icons imported into icons.js.
//    StyledButton sets this prop as its default for curIcon state to allow for
//    dynamic switching between Filled and Outline icon versions.
//    Note: Icons in this repo uses only AntD icons because it has both outlined and filled
//    versions of their icons. FontAwesome sells this as a premium option.

// iconPosition: string, one of ["top", "right", "bottom", "left", "center"]
//    Determines where the icon appears relative to a button's text.
//    "center" is used when no text is wanted on a button

// Uncommon Props

// activatable: boolean, allows user to toggle “active” state
// round: boolean, changes border-radius & padding to look round
// submit: boolean, determines the type of button it is, "submit" & "button"

function App() {
  return (
    <div className="App">
      <div className="container solid">
        Solid
        <StyledButton
          theme="solid"
          color="red"
          endIcon="AiFillFilter"
          size="large"
        >
          Button
        </StyledButton>
        <StyledButton startIcon="AiFillFilter" size="small">
          Button
        </StyledButton>
        <StyledButton theme="outlined" color="neutral" activatable size="small">
          Button
        </StyledButton>
        <StyledButton
          theme="outlined"
          color="neutral"
          activatable
          size="small"
          disabled
        >
          Button
        </StyledButton>
      </div>
      <div className="container solid">
        <StyledIconButton
          theme="inverted"
          size="small"
          icon="AiOutlineFilter"
        ></StyledIconButton>
      </div>
    </div>
  );
}

export default App;
