// Start form in Livre d'Or - Flavien 

const buttonLDorElement = document.getElementById('buttonLivreDor');
const inputLivreDor = document.getElementById('msgLiDor');
const nomLivreDor = document.getElementById('nom');
const mainElement = document.querySelector('#livredor');

function addComment() {
  buttonLDorElement.addEventListener('click', function () {
     const newParagrapheElement = document.createElement('p');
     mainElement.appendChild(newParagrapheElement);
     if(nomLivreDor.value !== "" && inputLivreDor.value !== "") {
      newParagrapheElement.innerHTML = nomLivreDor.value + ' a commenté: ' + inputLivreDor.value;
      newParagrapheElement.style.padding = "12px";
      newParagrapheElement.style.margin = "5px";
      newParagrapheElement.style.textAlign = "center";
      newParagrapheElement.style.border = "1px double black";
      newParagrapheElement.style.borderRadius = "10px";
      nomLivreDor.value = "";
      inputLivreDor.value = "";
     }
     else {
       alert("Veuillez entrer votre nom et votre commentaire");
     }
     

     const commentsString = localStorage.getItem('comments')   // create variable to store the comments from the local storage
     const comments = commentsString ? JSON.parse(commentsString) : [];  // create variable to return an object from a string
     const comment = {                      //create an object with the name of the author and the text of the comment 
       author: nomLivreDor.value,
       message: inputLivreDor.value 
     }
     comments.push(comment); // add the comment in the object created above
     localStorage.setItem('comments', JSON.stringify(comments)) //converts in string the object and store it in the key "comments" 
  });
}

// End form in Livre d'Or - Flavien 

// START HAROLD - script for LOGIN BUTTON
let isPopupIsDisplayed = false; // variable for check if popup is display

function openForm() {
    switch(isPopupIsDisplayed){
        case true : // Popup is alwready display, i close it
            document.getElementById("myForm").style.display = "none";
            isPopupIsDisplayed = false;  
            break;  
        case false : // Popup is not displayed, i open it
            document.getElementById("myForm").style.display = "block";
            isPopupIsDisplayed = true;  
            break;  
        default : console.log("i'm in default switch onpenForm")         
    }
}

// Button "fermer" into popup
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// END HAROLD - script for LOGIN BUTTON


// Start dark Theme + local storage

function setInitialTheme() {
  // fonction qui set le theme enregistré
  const storedTheme = localStorage.getItem("theme"); // get du thème enregistré
  if (storedTheme && storedTheme === "dark") {
    // si le thème existe et valeur "dark"
    document.body.classList.add("dark"); // on applique le thème
    document.getElementById("myonoffswitch").checked = false; // et on unckeck la checkbox
  }
}

setInitialTheme();

function switchTheme() {
  if (document.getElementById("myonoffswitch").checked === false) {
    // dark theme
    document.body.classList.add("dark"); // Ajoute la classe "dark" à body, ce qui change le theme
    localStorage.setItem("theme", "dark"); // Enregistre le theme dark dans le localstorage
  } else {
    // light
    document.body.classList.remove("dark"); // Enlève la classe "dark" à body
    localStorage.setItem("theme", "light"); // Enregistre le theme light dans le localstorage
  }
}

addComment();
