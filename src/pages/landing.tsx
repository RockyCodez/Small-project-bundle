import { useNavigate } from "react-router-dom";

import { ROUTES } from "src/constants";
import { Button } from "src/components";

import "../styles/pages/landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Example tasks</h1>
        <p>Select one of the pages</p>
        <div className="buttons-container">
          <Button text="Lists" onClick={() => navigate(ROUTES.list)} />
          <Button text="Chuck Norris" onClick={() => navigate(ROUTES.jokes)} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
