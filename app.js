document.getElementById("myForm").addEventListener("submit", myFunction);

function myFunction(e) {
    e.preventDefault();
    console.log("Je recupere  l'events");

    //Je recupère la valeur du champ prénom du formulaire
    let balisefirstName = document.getElementById("first-name")
    let firstname = balisefirstName.value

       //Je vérifie si le champ firstName est vide
    if (firstname =="") {
            console.log("peut pas etre vide")
        }else{
            console.log(firstname); // affiche ce qui est contenu dans la balise Firstname
        }

    //Je recupère la valeur du champ nom du formulaire
    let baliselastName = document.getElementById("last-name")
    let lastname = baliselastName.value
      
    //Je vérifie si le champ lastName est vide
    if (lastname =="") {
        console.log("peut pas etre vide")
    }else{
        console.log(lastname); // affiche ce qui est contenu dans la balise LastName
    }

    //Je recupère la valeur du champ message du formulaire
    let balisemessage = document.getElementById("message")
    let message = balisemessage.value

        //Je vérifie si le champ message est vide
        if (message =="") {
            console.log("peut pas etre vide")
        }else{
            console.log(message); // affiche ce qui est contenu dans la balise Message
        }
  
}
