import { useEffect, useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import StatusSection from "./components/StatusSection";
import Languages from "./components/Languages";
import Word from "./components/Word";
import { languages } from "./components/languagesData";
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";
import SrOnly from "./components/SrOnly";
import { generate } from "random-words";
import Confetti from "react-confetti";

function App() {
  //State values
  const [langs, setLangs] = useState(languages);
  const [currentWord, setCurrentWord] = useState("");
  const [savedLetters, setSavedLetters] = useState("");

  //Static value
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  //Derived values
  const gameWon =
    savedLetters !== "" &&
    currentWord.split("").every((letter) => savedLetters.includes(letter));

  const wrongGuessCount =
    savedLetters === ""
      ? 0
      : savedLetters.split("").filter((letter) => !currentWord.includes(letter))
          .length;
  const numGuessesLeft = langs.length - wrongGuessCount - 1;

  const gameLost = wrongGuessCount === langs.length - 1;
  const isGameOver = gameLost || gameWon;
  const lastGuessedLetter =
    savedLetters !== "" && savedLetters[savedLetters.length - 1];
  const isLastGuessIncorrect =
    savedLetters !== "" && !currentWord.includes(lastGuessedLetter);

  const lostLanguage =
    savedLetters !== "" && wrongGuessCount !== 0 && langs[wrongGuessCount - 1];

  const lostLanguages =
    savedLetters !== "" &&
    wrongGuessCount !== 0 &&
    langs.filter((lang, index) => index < wrongGuessCount);

  //Functions
  function getRandomWord() {
    return generate();
  }

  useEffect(() => {
    const newWord = getRandomWord();
    setCurrentWord(newWord);
  }, []);

  return (
    <>
      <main>
        {gameWon && <Confetti />}
        <Header />
        <StatusSection
          gameLost={gameLost}
          gameWon={gameWon}
          lostLanguage={lostLanguage}
          lostLanguages={lostLanguages}
          isLastGuessIncorrect={isLastGuessIncorrect}
        />
        <Languages langs={langs} wrongGuessCount={wrongGuessCount} />
        <Word
          currentWord={currentWord}
          savedLetters={savedLetters}
          isGameOver={isGameOver}
        />
        <Keyboard
          alphabet={alphabet}
          currentWord={currentWord}
          savedLetters={savedLetters}
          setSavedLetters={setSavedLetters}
          isGameOver={isGameOver}
        />
        {isGameOver && (
          <NewGameButton
            getRandomWord={getRandomWord}
            setCurrentWord={setCurrentWord}
            setSavedLetters={setSavedLetters}
          />
        )}
        {/* Combined visually hidden region for status updates */}
        <SrOnly
          currentWord={currentWord}
          savedLetters={savedLetters}
          isGameOver={isGameOver}
          lastGuessedLetter={lastGuessedLetter}
          numGuessesLeft={numGuessesLeft}
        />
      </main>
    </>
  );
}

export default App;
