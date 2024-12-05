function NewGameButton({ getRandomWord, setCurrentWord, setSavedLetters }) {
  function startNewGame() {
    setCurrentWord(getRandomWord());
    setSavedLetters("");
  }
  return (
    <button className="newGame-btn" onClick={startNewGame}>
      New Game
    </button>
  );
}
export default NewGameButton;
