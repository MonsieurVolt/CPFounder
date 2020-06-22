const isValid = (value) => {
  let reg = /[0-9]{5}/;
  return (value.length = 5 && reg.test(value));
};
function complete(obj) {
  let main = document.querySelector(".main__result");
  main.innerHTML = "";
  for (let i = 0; i < obj.length; i++) {
    let neo = document.createElement("p");
    result.appendChild(neo);
    neo.innerHTML = `Ville : ${obj[i].nom} <br> Population : ${obj[i].population} habitants`;
    neo.classList.add("inert");
  }
}
function get(postcode) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      var response = JSON.parse(this.responseText);
      complete(response);
    }
    if (response.length == 0) {
      document.querySelector(".main__result").innerHTML =
        '<p class="inert">Ce code postale ne correspond à aucune ville</p>';
    }
  };
  request.open(
    "GET",
    `https://geo.api.gouv.fr/communes?codePostal=${postcode}&format=json`
  );
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
