function displayRandomQuote() {

    const randomIndex =
        Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").textContent =
        `"${quotes[randomIndex].quote}"`;

    document.getElementById("author").textContent =
        "— " + quotes[randomIndex].author;
}

document
    .getElementById("newQuoteBtn")
    .addEventListener("click", displayRandomQuote);

document
    .getElementById("copyBtn")
    .addEventListener("click", () => {

        const quote =
            document.getElementById("quote").textContent;

        const author =
            document.getElementById("author").textContent;

        navigator.clipboard.writeText(
            quote + " " + author
        );

        alert("Quote copied!");
    });

window.onload = displayRandomQuote;

setInterval(displayRandomQuote, 30000);