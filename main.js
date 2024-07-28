const populate = async (value, currency, convertTo) => {
    let myStr = "";
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_2SWxnwU9SzmkOsnPCJ1908UZPH5bXznogCmNMgcj&base_currency=" + currency;
    let response =  await fetch(url);
    let rJson =  await response.json();
    console.log(rJson["data"]["USD"], rJson["data"]["USD"]["value"]);
    document.querySelector("#output").style.display = "block"
    myStr += `
                <h2>Converted Value:</h2>
                <h2>${(rJson["data"][convertTo]["value"] * value).toFixed(2)}<h2/>
            `
    document.getElementById("output").innerHTML = myStr;
}
const btn = document.querySelector(".btn")
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currencies']").value;
    const convertTo = document.querySelector("select[name='convertTo']").value;
    populate(value, currency, convertTo);
})
