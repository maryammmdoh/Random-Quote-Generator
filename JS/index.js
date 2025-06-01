var availableQuotes = [
    { "quote":"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth. <br> ― William W. Purkey" },
    { "quote":"Be the change that you wish to see in the world. <br> ― Mahatma Gandhi" },
    { "quote":"Life isn’t about waiting for the storm to pass, it’s about learning to dance in the rain. <br> ― Vivian Greene" },
    { "quote":"Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring. <br> ― Marilyn Monroe" },
    { "quote":"Action speaks louder than words" },
    { "quote":"Life isn't about finding yourself. Life is about creating yourself. <br> ― George Bernard Shaw" },
    { "quote":"Never regret a day in your life.Good days give you happiness & bad ones give you experience." },
    { "quote":"Life is not a problem to be solved, but a reality to be experienced." },
    { "quote":"If it's meant to be, it will be." },
    { "quote":"You have a dream you have to protect it. <br> ― The pursuit of happiness film" },
    { "quote":"when people can't do something by them selfs thay going to tell you that you can't do it. <br> ― The pursuit of happiness film" },
]

function displayQuote(quote) {
    document.getElementById("quoteContainer").innerHTML = `
    <div class="card quote-card bg-white p-4">
        <div class="card-body">
            <p class="quote-text text-dark">"${quote}"</p>
        </div>
    </div>
    `;
}

function generate_Quote() {
    if (availableQuotes.length == 0) {
        availableQuotes = [
    { "quote":"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth. <br> ― William W. Purkey" },
    { "quote":"Be the change that you wish to see in the world. <br> ― Mahatma Gandhi" },
    { "quote":"Life isn’t about waiting for the storm to pass, it’s about learning to dance in the rain. <br> ― Vivian Greene" },
    { "quote":"Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring. <br> ― Marilyn Monroe" },
    { "quote":"Action speaks louder than words" },
    { "quote":"Life isn't about finding yourself. Life is about creating yourself. <br> ― George Bernard Shaw" },
    { "quote":"Never regret a day in your life.Good days give you happiness & bad ones give you experience." },
    { "quote":"Life is not a problem to be solved, but a reality to be experienced." },
    { "quote":"If it's meant to be, it will be." },
    { "quote":"You have a dream you have to protect it. <br> ― The pursuit of happiness film" },
    { "quote":"when people can't do something by them selfs thay going to tell you that you can't do it. <br> ― The pursuit of happiness film" },
]
    }

    var randomIndex = Math.floor(Math.random() * availableQuotes.length);
    var selectedQuote = availableQuotes[randomIndex].quote;
    displayQuote(selectedQuote);
    availableQuotes.splice(randomIndex, 1);
}