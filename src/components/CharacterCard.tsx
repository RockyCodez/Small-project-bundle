import { CharacterCardInterface } from "types/components";

import "src/styles/components/charactercard.css";

const CharacterCard = ({ character, onClick }: CharacterCardInterface) => {
  const { name, image } = character;
  return (
    <div className="character-card" onClick={onClick}>
      <h2 className="card-name">{name}</h2>
      <div className="card-photo">
        <img src={image} alt="character" />
      </div>
    </div>
  );
};

export default CharacterCard;
