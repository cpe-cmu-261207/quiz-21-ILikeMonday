const inputface = document.getElementById("img-profile");
const inputname = document.getElementById("#p-name");
const inputemail = document.getElementById("#p-email");
const inputaddress = document.getElementById("#p-address");
const card = document.getElementById("#div-user-card");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  inputface.src = resp.picture.large;
  inputname.innerText = resp.results.name;
}


callApi();
