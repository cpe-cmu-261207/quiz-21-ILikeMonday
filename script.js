callApi();

const inputface = document.getElementById("img-profile");
const inputname = document.getElementById("p-name");
const inputemail = document.getElementById("p-email");
const inputaddress = document.getElementById("p-address");
const genderTag = document.getElementById("span-gender-icon");
const btnRandom = document.getElementById("btn-random");

btnRandom.onclick = () => {
  callApi();
};
async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  if (resp.data.results[0].gender == "female") {
    genderTag.innerText = "👩";
  } else {
    genderTag.innerText = "👨";
  }
  inputface.src = resp.data.results[0].picture.large;
  inputname.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  inputemail.innerText = resp.data.results[0].email;
  inputaddress.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode;
  console.log(resp.data.results[0]);
}
