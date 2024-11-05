import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, CharacterCard, Spinner } from "src/components";
import { RickAndMortyApiService } from "src/APIService";
import { AllCharactersInterface, CharacterInterface } from "src/types/api";
import { ROUTES } from "src/constants";

import "src/styles/pages/rickandmorty.css";

const RickAndMorty = () => {
  const navigate = useNavigate();

  const [allCharacters, setAllCharacters] = useState<CharacterInterface[]>();
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean | null>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const fetchAllCharacters = useCallback(async () => {
    if (!hasNextPage || isLoading) return;
    setIsLoading(true);
    try {
      const data: AllCharactersInterface =
        await RickAndMortyApiService.getAllCharacters(page);
      setAllCharacters((prevCharacters) =>
        prevCharacters?.length
          ? [...prevCharacters, ...data.results]
          : data.results
      );
      setHasNextPage(!!data.info.next);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setFetchError("Failed to load characters. Please try again later!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [page, hasNextPage, isLoading]);

  useEffect(() => {
    fetchAllCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        if (
          scrollTop + clientHeight >= scrollHeight - 10 &&
          !isLoading &&
          hasNextPage
        ) {
          fetchAllCharacters();
        }
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [fetchAllCharacters, hasNextPage, isLoading]);

  return (
    <div className="rickandmorty-container">
      <div className="back-btn-wrapper">
        <Button
          text="Back"
          onClick={() => {
            navigate(ROUTES.landing);
          }}
        />
      </div>
      <div className="rickandmorty-content">
        <h1>Rick and morty</h1>
        <div className="rickandmorty-cards-wrapper" ref={containerRef}>
          {allCharacters?.map((character, i) => (
            <CharacterCard character={character} key={i} />
          ))}
        </div>
        {fetchError && <p className="error-message">{fetchError}</p>}
        {isLoading && <Spinner />}
      </div>
    </div>
  );
};

export default RickAndMorty;
