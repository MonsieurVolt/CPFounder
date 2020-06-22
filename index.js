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
function get(postcode) {
  let request = new XMLHttpRequest();
  request.open("GET", `http://api.zippopotam.us/fr/${postcode}`);
  request.onreadystatechange = function () {
    if ((this.readyState = XMLHttpRequest.DONE && this.status == 200)) {
      let response = JSON.parse(this.responseText);
      console.log(response.country);
      return response;
    }
  };
  request.send();
}
document.querySelector("#");
