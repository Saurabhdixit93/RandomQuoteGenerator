// Select quote-box elements
            const quoteText = document.querySelector("#text");
            const quoteAuthor = document.querySelector("#author");
            const whatsappQuote = document.querySelector("#whatsapp-quote");
            const newQuote = document.querySelector("#new-quote");

            // API URL
            const apiURL = "https://api.quotable.io/random";

            // Function to fetch a quote from API
            async function getQuote() {
                const response = await fetch(apiURL);
                const data = await response.json();

                quoteText.innerText = data.content;
                quoteAuthor.innerText = `- ${data.author}`;
                whatsappQuote.href = `https://wa.me/?text="${data.content}" - ${data.author}`;
            }

            // On load, fetch a quote
            getQuote();

            // Event listener for new quote button
            newQuote.addEventListener("click", getQuote);
