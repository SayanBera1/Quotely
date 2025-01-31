const quote = document.getElementById("quote");
const author = document.getElementById("author");
const copyBtn = document.querySelector(".copy");
const tooltip = document.getElementById("tooltip");
const Q_url = "https://api.api-ninjas.com/v1/quotes";

async function getquote(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': '+yk0fD3/bgDjkPaaZ+8caw==AeNiJo4PJi8g6kH6'
        }
    });
    var data = await response.json();
    quote.innerHTML = `${data[0].quote}`;
    author.innerHTML = ` ${data[0].author}`;
}

getquote(Q_url);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quote.innerText).then(() => {
        tooltip.style.visibility = "visible";
        setTimeout(() => {
            tooltip.style.visibility = "hidden";
        }, 1000); // Hide the tooltip after 1 seconds
    });
});
