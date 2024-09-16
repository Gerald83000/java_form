document.getElementById("myForm").addEventListener("submit", myFunction);

function myFunction(e) {
    e.preventDefault();
    console.log("Je recupere l'events");

    //Je recupère la valeur du champ prénom du formulaire
    let firstNamevalue = document.getElementById("first-name").value;
    let lastNamevalue = document.getElementById("last-name").value;
    let messageValue = document.getElementById("message").value;
    

       //Je vérifie si le champ firstName est vide
         if (firstNamevalue =="" || lastNamevalue=="" || messageValue =="") {
            console.log("Ne peut pas etre vide")
            document.getElementById("error-message").style.display="block";
         }
         else{
            console.log(firstNamevalue, lastNamevalue, messageValue); // affiche ce qui est contenu dans la balise Firstname
         }
      
}
