const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});


const addPersonButton = document.querySelector('button#new-person-button');

addPersonButton.addEventListener('click', e => {
  fetch('https://randomuser.me/api/')
    .then (resp => resp.json())
    .then (resp => {
      document.querySelector('img#profile_picture').src = resp.results[0].picture.thumbnail;
      document.querySelector('h3#fullname').innerText = `${resp.results[0].name.first} ${resp.results[0].name.last}`;
      document.querySelector('h4#email').innerText = `${resp.results[0].email}`;
      document.querySelector('h4#street').innerText = `${resp.results[0].location.street.number} ${resp.results[0].location.street.name}`;
      document.querySelector('h4#city').innerText = `${resp.results[0].location.city}`;
      document.querySelector('h4#state').innerText = `${resp.results[0].location.state}`;
      document.querySelector('h4#postcode').innerText = `${resp.results[0].location.postcode}`;
    })
})
