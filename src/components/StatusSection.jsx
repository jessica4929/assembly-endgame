function StatusSection({
  gameLost,
  gameWon,
  lostLanguage,
  lostLanguages,
  isLastGuessIncorrect,
}) {
  const styles = (gameLost && { backgroundColor: "red", opacity: "100%" }) ||
    (gameWon && { backgroundColor: "#10A95B", opacity: "100%" }) ||
    (lostLanguage.language !== undefined &&
      isLastGuessIncorrect && {
        backgroundColor: "#7a5ea7",
        padding: "10px",
        border: "1px dashed gray",
        fontStyle: "italic",
        opacity: "100%",
      }) || {
      opacity: "0",
    };
  return (
    <section
      className="status-container"
      style={styles}
      aria-live="polite"
      role="status"
    >
      <div className="status-message-container">
        <h4>
          {(gameLost && "Game over!") ||
            (gameWon && "You won!") ||
            (lostLanguage.language !== undefined &&
              `Farewell ${
                lostLanguages[lostLanguages.length - 1].language
              } 😢`) ||
            " test"}
        </h4>
        <p>
          {(gameLost && "You lost. Better start learning Assembly ☹️") ||
            (gameWon && "Well done! 👏") ||
            (lostLanguage.language !== undefined && " ") ||
            "test "}
        </p>
      </div>
    </section>
  );
}
export default StatusSection;
