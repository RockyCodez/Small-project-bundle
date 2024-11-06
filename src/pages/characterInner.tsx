import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { RickAndMortyApiService } from "src/APIService";
import { Button, Spinner } from "src/components";
import { ROUTES } from "src/constants";
import { CharacterInterface } from "types/api";

import "src/styles/pages/characterInner.css";

const CharacterInner = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [character, setCharacter] = useState<CharacterInterface>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [fetchError, setFetchError] = useState<string>();

  const fetchCharacter = useCallback(async () => {
    if (!id) return;
    setIsLoading(true);

    try {
      const data: CharacterInterface =
        await RickAndMortyApiService.getSingleCharacter(parseInt(id));
      setCharacter(data);
    } catch (error) {
      setFetchError("Could not load the character, please try again later!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  return (
    <div className="characterInner-container">
      <div className="back-btn-wrapper">
        <Button
          text="Back"
          onClick={() => {
            navigate(ROUTES.rickAndMorty);
          }}
        />
      </div>
      <div className="loader">{isLoading && <Spinner />}</div>

      {character && (
        <div className="characterInner-content">
          <div className="character-photo">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="character-details">
            <h1>{character.name}</h1>
            <div className="character-details">
              <p className="character-status">
                Status:
                <span
                  className={`character-status ${character.status.toLowerCase()}`}
                >
                  {character.status}
                </span>
              </p>
              <p className="character-location">
                Location: <span>{character.location.name}</span>
              </p>
              <p className="character-gender">
                Gender: <span>{character.gender}</span>
              </p>
              <p className="character-species">
                Species: <span>{character.species}</span>
              </p>
            </div>
          </div>
        </div>
      )}
      {fetchError && <p className="error-message">{fetchError}</p>}
    </div>
  );
};

export default CharacterInner;
