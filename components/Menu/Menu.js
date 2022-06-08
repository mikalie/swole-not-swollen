import React from "react";
import { StyledMenu} from "./Menu.styled";

const Menu = ({open}) => {
    return (
      <StyledMenu open={open}>
        <a href="/exercises">
          <span aria-label="exercises"></span>
          Exercises
        </a>
        <a href="/workoutPlans">
          <span role="img" aria-label="workout plans"></span>
          Workout Plans
          </a>
        <a href="/testEmotion">
          <span role="img" aria-label="other options"></span>
          Other Options
          </a>
      </StyledMenu>
    )
  }

  Menu.propTypes = {
    open: Boolean.isRequired,
  }
  
  export default Menu;