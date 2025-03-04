// <!-- Coder un script JS qui change la couleur de fond du body -->
// <!-- Créer une page HTML avec 3 balises “p” contenant du texte, coder un script permettant de mettre en gras le 1er élément, en italique le 2ème et en uppercase le 3ème -->
// <!-- Créer une page HTML avec 3 images, coder un script qui remplace l’attribut src de la 1ère et 2ème image par celui de la 3ème -->

// <!-- Récupérer une page HTML sur internet, puis rajouter un script permettant de supprimer tous les éléments “p” -->
// 

const body = document.getElementsByTagName('body')[0]

function changeColor(element, color) {
    element.style.backgroundColor = color
}

changeColor(body, 'grey')

const tagP = document.getElementById('p-1');
const tagP2 = document.getElementById('p-2');
const tagP3 = document.getElementById('p-3');

function addStyle(tag, style) {
    tag.style = style
}

addStyle(tagP, 'font-weight: bold')
addStyle(tagP2, 'font-style: italic')

function toUppercase(tag){
    const text = tag.textContent.toLowerCase();
    tag.textContent = text[0].toUpperCase() + text.slice(1)
}

toUppercase(tagP3)

const images = document.getElementsByTagName('img');

for (let image of images) {
    addStyle(image, 'height: 100px; weight: 100px')
}


const img1 = document.getElementById('img-1')
const img2 = document.getElementById('img-2')
const img3 = document.getElementById('img-3')

function swapImages(target, source) {
    target.src = source.src
}

// swapImages(img1, img3);
// swapImages(img2, img3);

function swapAllImages(images) {
    
    const imagesKeys = Object.keys(images) // [0,1,2, ... ]
    const lastKey = imagesKeys.pop(); // images[images.length]
    
    imagesKeys
        .forEach( function (imageKey) {
            swapImages(images[imageKey], images[lastKey])
        }
    )
    imagesKeys
        .forEach( function (imageKey) {
            swapImages(images[imageKey], images[lastKey])
        }
    )
    // Is the same as:
    // for (let imageKey = 0; imageKey <= imagesKeys.length -1  ; ++imageKey) {
    //     swapImages(images[imageKey], images[lastKey])
    // }
}

swapAllImages(images)

// <!-- Coder un script qui permet d’ajouter un élément div avec un fond violet, 
//       une largeur de 100% et une hauteur de 300px. 
//       Créer un autre élément “h1” avec une couleur de texte blanche, en majuscule. 
//       Attacher l’élément H1 à l’élément div. -->

function createElement(tag, style = '', textContent = '') {
    const element = document.createElement(tag);    
    addStyle(element, style)
    element.textContent = textContent;
    return element;
}

const pinkDiv = createElement('div', 'background-color: purple; width: 100%; height: 300px');

const h1Title = createElement('h1', 'color: white', 'title')


pinkDiv.appendChild(h1Title)
body.appendChild(pinkDiv)


// <!-- Créer une page HTML avec une liste “Toto” “Tata” “Titi” “Tutu”. 
// Créer un nouvel élément li et remplacer le 2ème élément de la liste par le nouvel élément. -->


const tabs = ["Toto", "Tata", "Titi", "Tutu"]


const ul = createElement('ul')

for (let i = 0 ; i <= tabs.length -1 ; i++) {
    const li = createElement('li', '',tabs[i]);
    ul.appendChild(li)
}

body.appendChild(ul)

function swapInTree(parent, source, target){
  parent.replaceChild(source, target)
}

const nLi = createElement('li', '', 'Tete')

ul.replaceChild(nLi, ul.children[1])
