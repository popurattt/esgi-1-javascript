// <!-- Coder un script JS qui change la couleur de fond du body -->
// <!-- Créer une page HTML avec 3 balises “p” contenant du texte, coder un script permettant de mettre en gras le 1er élément, en italique le 2ème et en uppercase le 3ème -->
// <!-- Créer une page HTML avec 3 images, coder un script qui remplace l’attribut src de la 1ère et 2ème image par celui de la 3ème -->
// <!-- Coder un script qui permet d’ajouter un élément div avec un fond violet, une largeur de 100% et une hauteur de 300px. Créer un autre élément “h1” avec une couleur de texte blanche, en majuscule. Attacher l’élément H1 à l’élément div. -->
// <!-- Récupérer une page HTML sur internet, puis rajouter un script permettant de supprimer tous les éléments “p” -->
// <!-- Créer une page HTML avec une liste “Toto” “Tata” “Titi” “Tutu”. Créer un nouvel élément li et remplacer le 2ème élément de la liste par le nouvel élément. -->


// console.log('first.js')

// function changeColor() {
    // ...
// }

// document.body.style.backgroundColor = '#282887'

// const arr = [2,3,65, 'dnwkdnwk' ]

const body = document.getElementsByTagName('body')[0]

function changeColor(element, color) {
    element.style.backgroundColor = color
}

changeColor(body, 'red')

function addTag(tag, string) {
    // ...
}