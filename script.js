const urlShortenBtn = document.querySelector(".urlShortenBtn");
const displayShortenLink = document.querySelector(".linkResult");
const results = document.querySelector(".results");

urlShortenBtn.addEventListener("click", async () => {
  const inputLinkValue = document.querySelector(".inputLink").value;
  const url = "https://is.gd/create.php?format=simple&url=" + inputLinkValue;
  const data = await fetch(url,{
    method : "GET",
    mode: 'cors'
});
  const parsedData = await data.json();
  displayShortenLink.value= parsedData.result.full_short_link;
  results.style.display = "flex";
});

const copyLink = ()=>{
    const text = document.querySelector(".linkResult");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.querySelector(".copyLink").innerHTML = "Copied!"
}
