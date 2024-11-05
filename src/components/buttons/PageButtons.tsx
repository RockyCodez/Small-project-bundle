import { PageButtonsInterface } from "types/components";
import Button from "./Button";

import "src/styles/components/pagebuttons.css";

const PageButtons = ({
  handlePrevPage,
  handleNextPage,
  hasNext,
  hasPrev,
}: PageButtonsInterface) => (
  <div className="pagebutton-wrapper">
    <Button text="Back" onClick={handlePrevPage} disabled={!hasPrev} />
    <Button text="Next" onClick={handleNextPage} disabled={!hasNext} />
  </div>
);

export default PageButtons;
