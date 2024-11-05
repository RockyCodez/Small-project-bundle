import { CharacterInterface } from "src/types/api";

import "src/styles/components/charactercard.css";

const CharacterCard = ({ character }: { character: CharacterInterface }) => {
  const { name, image, gender, species, status, location } = character;
  return (
    <div className="character-card">
      <h2 className="card-name">{name}</h2>
      <div className="card-photo">
        <img src={image} alt="character" />
      </div>
      <div className="card-details">
        <p className="card-status">
          Status:
          <span className={`card-status ${status.toLowerCase()}`}>
            {status}
          </span>
        </p>
        <p className="card-location">
          Location: <span>{location.name}</span>
        </p>
        <p className="card-gender">
          Gender: <span>{gender}</span>
        </p>
        <p className="card-species">
          Species: <span>{species}</span>
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
