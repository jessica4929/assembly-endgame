function Keyboard({
  alphabet,
  currentWord,
  savedLetters,
  setSavedLetters,
  isGameOver,
}) {
  function addLetter(letter) {
    !isGameOver &&
      setSavedLetters((prev) => {
        return prev.includes(letter) ? prev : prev + letter;
      });
  }

  const keyElements = alphabet.split("").map((letter) => {
    const style =
      savedLetters.indexOf(letter) < 0
        ? "#fab03a"
        : currentWord.indexOf(letter) > -1
        ? "#10a95b"
        : "#ec5d49";
    //if installing clsx:
    //make variables 'isCorrect' and 'isWrong' using logic above then
    //const className= clsx({correct: isCorrect, wrong:isWrong})
    //and use {className} as value for button's className. Then
    //fill in styles for .correct and .wrong in css

    return (
      <button
        key={letter}
        className="letter-btn"
        id={letter}
        style={{ backgroundColor: `${style}` }}
        onClick={() => addLetter(letter)}
        disabled={isGameOver}
        aria-disabled={savedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard-container">{keyElements}</section>;
}
export default Keyboard;
