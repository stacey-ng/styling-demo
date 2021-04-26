import { AiFillCloseCircle } from "react-icons/ai";
import { FillCloseCircle } from "./style";

export const StyledFillCloseCircle = ({ onClick }) => {
  return (
    <FillCloseCircle onClick={onClick}>
      <AiFillCloseCircle />
    </FillCloseCircle>
  );
};
