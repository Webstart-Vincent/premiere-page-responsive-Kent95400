const burger = document.querySelector(".burger");
/* document.query le "." rattache le query au document(objet)*/

burger.addEventListener("click", () => {
    burger.classList.toggle("cross");
    /*toggle regarde la liste des class et ikl retire puis il met comme un interupteur*/
});
