function fetchComponent(component, container)
{
    // console.log(container)
  fetch(component)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(container).innerHTML = data; 
    })
    .catch((error) => console.error(`Error fetching ${container}:`, error));
}

fetchComponent("components/navbar.html","navbar-container"); //fetch navbar


fetchComponent("components/footer.html", "footer-container"); //fetch footer

fetchComponent(
  "components/show_card_detail.html",
  "modal-container"
); //fetch modal
