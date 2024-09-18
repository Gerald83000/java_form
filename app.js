document.getElementById("myForm").addEventListener("submit", myFunction);

function myFunction(e) {
    e.preventDefault();
    console.log("Je recupere l'events");

    //Je recupère la valeur du champ prénom du formulaire
    let firstNamevalue = document.getElementById("first-name").value;
    let lastNamevalue = document.getElementById("last-name").value;
    let messageValue = document.getElementById("message").value;
    

       //Je vérifie si le champ firstName / LastName et message est vide
         if (firstNamevalue =="" || lastNamevalue=="" || messageValue =="") {
            console.log("Ne peut pas etre vide")
            document.getElementById("error-message").style.display="block";
         }
         else{
            console.log(firstNamevalue, lastNamevalue, messageValue); // affiche ce qui est contenu dans la balise Firstname
            
    // Sélectionner la div principale avec l'ID "comment-list"
    let commentList = document.getElementById('comment-list');

    // Créer un div principal pour le commentaire avec les classes spécifiées
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');

    // Créer un div pour le contenu du commentaire
    let contentDiv = document.createElement('div');
    contentDiv.classList.add('flex-1', 'py-10');

    // Ajouter le titre du commentaire (nom de l'utilisateur)
    let title = document.createElement('h3');
    title.classList.add('font-medium', 'text-gray-900');
    title.textContent = `${firstNamevalue} ${lastNamevalue}`; // Nom complet de l'utilisateur

    // Créer un div pour le texte du commentaire avec ses classes
    let proseDiv = document.createElement('div');
    proseDiv.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500');

    // Créer le paragraphe contenant le message du commentaire
    let paragraph = document.createElement('p');
    paragraph.textContent = messageValue;

    // Ajouter le paragraphe dans le div prose
    proseDiv.appendChild(paragraph);

    // Ajouter le titre et le div prose au contenu principal
    contentDiv.appendChild(title);
    contentDiv.appendChild(proseDiv);

    // Ajouter le contenu principal au div principal
    mainDiv.appendChild(contentDiv);

    // Ajouter l'élément principal au conteneur comment-list
    commentList.appendChild(mainDiv);

        // Vider les champs du formulaire
        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('message').value = '';
}

         }

