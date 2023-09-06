document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "Ame e manifeste esse amor agora.",
        "Inclua em seu amor todo o planeta, com árvores e insetos. Flores e pássaros. Mares, rios, oceanos.",
        "Amor incondicional é aquele que quer o bem do outro, independentemente do seu eu individual.",
        "Como é bom estar viva, respirar e apreciar cada instante, assim como eles são."
        // Add more quotes here
    ];

    const quoteElement = document.querySelector(".quote");
    let currentIndex = 0;

    function changeQuote() {
        quoteElement.style.opacity = 0;
        setTimeout(function () {
            quoteElement.textContent = quotes[currentIndex];
            quoteElement.style.opacity = 1;
            currentIndex = (currentIndex + 1) % quotes.length;
        }, 1000); // Change quote every 7 seconds (7000 milliseconds)
    }

    // Initial quote
    changeQuote();

    // Change quote every 7 seconds
    setInterval(changeQuote, 7000);
});
