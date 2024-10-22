import { useNavigate } from "react-router-dom";

import { Button } from "../components";

import "../styles/pages/landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Peplink task</h1>
        <p>Select one of the tasks</p>
        <div className="buttons-container">
          <Button text="Lists" onClick={() => navigate("/list")} />
          <Button text="Chuck Norris" onClick={() => navigate("/jokes")} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
