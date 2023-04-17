// GET THE REFERENCES
const container = document.querySelector("#container");
const links = document.querySelectorAll("a");
let url = window.location.href;

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = (urlFeed) => {
  fetch(urlFeed)
    .then(response => response.text())
    .then(data => {
      container.innerHTML = data;
    })
    .catch(error => {
      console.log(error);
    });
}

// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = (event) => {
  // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
  event.preventDefault();
  // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
  const urlFeed = event.target.getAttribute("href");
  // CALL THE FUNCTION loadContent PROVIDING THE href
  // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
  // OF loadContent FUNCTION.
  loadContent(urlFeed);
}

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
links.forEach(link => {
  link.addEventListener("click", selectContent);
});