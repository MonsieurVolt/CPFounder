/*function send() {
  let request = new XMLHttpRequest;
  request.open("POST", "https://mockbin.com/request")
  request.setRequestHeader("content-type", "application/json")
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText)
      document.querySelector("#result").textContent = response.postData.text
    }
  }
  request.send(JSON.stringify(document.querySelector("input").value))
}
document.querySelector("#button").addEventListener("click", (e) => {
  e.preventDefault();
  send()
})*/
const isValid = (value) => {
  let reg = /[0-9]{5}/;
  return (value.length = 5 && reg.test(value));
};
function complete(obj) {
  for (let i = 0; i < obj.length; i++) {
    let neo = document.createElement("p");
    result.appendChild(neo);
    neo.innerHTML = `Ville : ${obj[i].nom}`;
    neo.style.color = "black";
  }
}
function get(postcode) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://geo.api.gouv.fr/communes?codePostal=${postcode}`
  );
  request.onreadystatechange = function () {
    if ((this.readyState = XMLHttpRequest.DONE && this.status == 200)) {
      const response = JSON.parse(this.responseText);
      complete(response);
      if (response.length === 0) {
        result.innerHTML = "Cette adresse postale n'existe pas";
      }
    }
  };
  request.send();
}
let result = document.querySelector(".main__result");
document.querySelector("#sub-btn").addEventListener("click", (e) => {
  let sode = document.querySelector('input[type="text"]').value;
  e.preventDefault();
  if (isValid(sode)) {
    get(sode);
  } else {
    result.innerHTML = "Entrer une addresse valide";
  }
});
