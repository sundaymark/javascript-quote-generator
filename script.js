let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes = [
    {
        quote: `"It does not matter how slowly you go as long as you do not stop."`,
        person: `confucius`,
    },

    {
        quote: `"if you look at what you have in life,You will always have
         more.if you look at what you dont have in life,You will never have enough."`,
        person: `oprah winfrey`
    },

    {
        quote: `"remember that not getting what you want is sometimes a wonderful stroke of
        luck."`,
        person: `Dalai Lama.`

    },

    {
        quote: `"Our lifes begin to end the day we become silent about the things that 
        matter."`,
        person: `Marthin Luther King ,jr.`
    },

    {
        quote: `"It is better you walk alone than walk with a crowd of people going in the wrong 
        direction"`,
        person: `Sunday Mark`
    },

    {
        quote: `"The greatest glory in living lies not in never falling, 
        but in rising every time we fall".`,
        person: `Nelson Mandela.`
    },

    {
        quote: `"The way to get started is to quit talking and begin doing."`,
        person: `Walt Disney.`
    },

    {
        quote: `"Your time is limited, so don't waste it living someone else's life.
         Don't be trapped by dogma
        which is living with the results of other people's thinking".`,
        person: `Steve Jobs.`
    },

    {
        quote: `"you are my 143, i will always love you."`,
        person: `Sunday Mark`
    },

    {
        quote: `"Life is what happens when you're busy making other plans"`,
        person: `John Lennon`
    },];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})