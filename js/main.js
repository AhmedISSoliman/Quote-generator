var quoteTitle = document.getElementById('quote');
var quoteOwner = document.getElementById('quoteOwner');
var quoteGenertorBtn = document.getElementById('quoteGenertor');
var lastQuoteIndex = -1;
var quotesList =
    [
        {
            quote: `“Be yourself; everyone else is already taken.”`,
            owner: `― Oscar Wilde`
        },
        {
            quote: `“I'm selfish, impatient and a little insecure.I make mistakes, I am out of control and at times hard to handle.But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
            owner: `― Marilyn Monroe`
        },
        {
            quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
            owner: `― Albert Einstein`
        },
        {
            quote: `“So many books, so little time.”`,
            owner: `― Frank Zappa`
        },
        {
            quote: `“A room without books is like a body without a soul.”`,
            owner: `― Marcus Tullius Cicero`
        },
        {
            quote: `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,
            owner: `― William W. Purkey`
        },
    ];


function generateQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotesList.length);
    } while (randomIndex === lastQuoteIndex);
    lastQuoteIndex = randomIndex;
    quoteTitle.innerHTML = quotesList[randomIndex].quote;
    quoteOwner.innerHTML = quotesList[randomIndex].owner;
    document.querySelector('.card-footer').classList.remove('d-none');
    document.querySelector('.card-footer').classList.add('d-block');
}

quoteGenertorBtn.addEventListener('click', generateQuote);