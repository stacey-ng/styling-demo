import './App.css';
import StyledButton from './styled-components/StyledButton';

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
          activatable
          text="default"
        />
        <StyledButton
          activatable
          theme="solidRed"
          iconName="AiFillEdit"
          iconPosition="right"
          text="solidRed"
        />
        <StyledButton
          activatable
          theme="solidBlue"
          round
          iconName="AiFillFilter"
          iconPosition="center"
        />
        <StyledButton
          activatable
          theme="solidRed"
          iconName="AiFillFilter"
          iconPosition="left"
          text="Filter"
        />
      </div>
      <div className="container inverted">
        Inverted
        <StyledButton
          activatable
          theme="invertedBlue"
          text="invertedBlue"
        />
        <StyledButton
          activatable
          theme="invertedRed"
          iconName="AiFillEdit"
          iconPosition="right"
          text="invertedRed"
        />
        <StyledButton
          activatable
          theme="invertedBlue"
          round
          iconName="AiFillFilter"
          iconPosition="center"
        />
        <StyledButton
          activatable
          theme="invertedRed"
          iconName="AiFillFilter"
          iconPosition="left"
          text="Filter"
        />
      </div>
      <div className="container skeleton">
        Skeleton
        <StyledButton
          activatable
          theme="skeletonNeutral"
          text="skeletonNeutral"
        />
        <StyledButton
          activatable
          theme="skeletonRed"
          text="skeletonRed"
        />
        <StyledButton
          activatable
          theme="skeletonNeutral"
          round
          iconName="AiFillFilter"
          iconPosition="center"
        />
        <StyledButton
          activatable
          theme="skeletonNeutral"
          iconName="AiFillFilter"
          iconPosition="top"
          text="Bulk Edit"
        />
        <StyledButton
          activatable
          theme="skeletonRed"
          iconName="AiFillFilter"
          iconPosition="bottom"
          text="Bulk Filter"
        />
      </div>
      {/* <div className="container">
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
      </div> */}
    </div>
  );
}

export default App;
