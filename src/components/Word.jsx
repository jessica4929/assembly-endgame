import clsx from "clsx";

function Word({ currentWord, savedLetters, isGameOver }) {
  const letterElements = currentWord.split("").map((letter, index) => {
    const letterClassName = clsx(
      "letter-box",
      isGameOver && !savedLetters.includes(letter) && "missed-letter"
    );
    return (
      <span className={letterClassName} key={index}>
        {savedLetters.includes(letter) || isGameOver ? letter : ""}
      </span>
    );
  });

  return <section className="letters-container">{letterElements}</section>;
}
export default Word;
