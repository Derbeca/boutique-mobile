const products = [
{
  id: '1',
  name: 'Iphone6',
  img: 'images/telephone1.jpg',
  price: '600',
  color: 'white',
  company: 'apple',
  description: 'lorem ipsum',

},
{
 id: '2',
  name: 'Iphone5',
  price: '600',
  img: 'images/telephone2.jpg',
  color: 'white',
  company: 'apple',
  description: 'lorem ipsum',

},
{
  id: '3',
  name: 'Iphone4',
  img: 'images/telephone3.jpg',
  price: '400',
  color: 'golden',
  company: 'apple',
  description: 'lorem ipsum',

},
{
  id: '4',
  name: 'Iphone6',
  img: 'images/telephone4.jpg',
  price: '300',
  color: 'gray',
  company: 'apple',
  description: 'lorem ipsum',

},
{
  id: '5',
  name: 'Iphone6',
  img: 'images/telephone1.jpg',
  price: '300',
  color: 'gray',
  company: 'apple',
  description: 'lorem ipsum',

},
{
  id: '6',
  name: 'Iphone6',
  img: 'images/telephone2.jpg',
  price: '300',
  color: 'gray',
  company: 'apple',
  description: 'lorem ipsum',

},
{
  id: '7',
  name:'Iphone6',
  img: 'images/telephone3.jpg',
  price: '300',
  color: 'gray',
  company: 'apple',
  description: 'lorem ipsum',

}
];


//Afficher tous les produits

var container = document.querySelector('.container');

products.forEach((produit) => {

  container.insertAdjacentHTML('afterbegin', `<div class="card-deck">
  <div class="card"  id="${produit.id}">
    <div class="card-header"><p><strong>${produit.price}€</strong></p>
      </div>
    <div class="card-body">
      <h4 class="card-title"}>${produit.company}</h4> 
      <h5 class="card-title"><b> ${produit.name}</b></h5>
       <img src="${produit.img}" class="card-img-top" alt=""> 
      <h5 class="card-title"><i>${produit.color}</i></h5>
      <p id="description"> ${produit.description}</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-danger" id="btnAcheter" data-toggle="modal"><i id="iconPanier"class="fas fa-cart-plus "><span> | ACHETER</span></i></button>
    </div>
  </div>`);

//Ajouter au panier

var modalAchat = document.querySelector('.form-group'); //selectionner le div dans la modal pour inserer les produits
var boutonAjouter = document.querySelector('#btnAcheter'); //selectionner le bouton ajouter

var i = 0
boutonAjouter.addEventListener('click',  (event) => {
    modalAchat.insertAdjacentHTML('afterbegin', `<li><p>${produit.name}</p><p>${produit.price}€</p></li>`);
    i++;
    document.getElementById("score").innerHTML = i; //Conteur de produits
    
  });
var boutonSupprimer = document.querySelector('#btnSupprimer');

//Supprimer des elements

boutonSupprimer.addEventListener('click',  (event) => {
  i = 0;
  document.getElementById("score").innerHTML = 0;
  modalAchat.innerHTML = "";

  });
});

// Selectionner le menu
          const menuFixe = document.getElementById('menu');

          //Créer une fonction pour fixer le menu
          function onScroll() {
             function fixer() {
                  // Stocker le nombre de pixels que se sont déplacés dans le document quand on fait scroll verticale
                  var y = window.scrollY;
                  // Créer une condition pour ajouter une class si la distance du scroll est superior à l'hauteur du menu (100px)
                   if (y > 150) {
                      menuFixe.classList.add("fixed-position");
                    } else {
                      menuFixe.classList.remove("fixed-position");
                    };
                };
            // Ajouter un micro à l'objet "window" pour executer la fonction "fixer" quand se produce l'evenement "scroll"
            window.addEventListener("scroll", fixer);      
          };

          onScroll();










