function Languages({ langs, wrongGuessCount }) {
  const languageElements = langs.map((lang, index) => {
    const className =
      "language-badge " + (index < wrongGuessCount ? "lost" : "");

    // another way to write the style is like this:
    // const styles = {
    //   backgroundColor: lang.backgroundColor,
    //   color:lang.color
    // }
    //Then in the div add style={styles}

    //using clsx make variable isLanguageLost using logic above, then
    //const className = clsx("language-badge", isLanguageLost && "lost" )

    return (
      <div
        key={lang.language}
        className={className}
        style={{
          backgroundColor: `${lang.backgroundColor}`,
          color: `${lang.textColor}`,
        }}
      >
        {lang.language}
      </div>
    );
  });
  return <section className="languages-section">{languageElements}</section>;
}
export default Languages;
