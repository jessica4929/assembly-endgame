function SrOnly({
  currentWord,
  savedLetters,
  isGameOver,
  lastGuessedLetter,
  numGuessesLeft,
}) {
  const letterElements = currentWord.split("").map((letter) => {
    savedLetters.includes(letter) || isGameOver ? letter + "." : "blank.";
  });

  return (
    <section
      className="sr-only letters-container"
      aria-live="polite"
      role="status"
    >
      <p>
        {currentWord.includes(lastGuessedLetter)
          ? `Correct! The letter ${lastGuessedLetter} is in the word.`
          : `Sorry, the letter ${lastGuessedLetter} is not in the word. You have ${numGuessesLeft} guesses left.`}
      </p>
      <p>Current word: {letterElements.join(" ")} </p>
    </section>
  );
}
export default SrOnly;
