// recuperer les éléments du DOM
const form = document.querySelector('form');
const listeCommentaires = document.getElementById('liste-commentaires');
const messageErreur = document.getElementById('message-erreur');

// masquer le message d'erreur par défaut
messageErreur.style.display = 'none';

// ecouter l'événement de soumission du formulaire
form.addEventListener('submit', function (event) {
    // Empêcher le rechargement de la page
    event.preventDefault();

    // recuperer les valeurs des champs
    const prenom = document.getElementById('prenom').value.trim();
    const nom = document.getElementById('nom').value.trim();
    const message = document.getElementById('message').value.trim();

    // vérifier si tous les champs sont remplis
    if (prenom === '' || nom === '' || message === '') {
        // afficher le message d'erreur
        messageErreur.textContent = "Tous les champs doivent être remplis";
        messageErreur.style.display = 'block';
    } 
    // verifier la longueur du message
    else if (message.length > 500) {
        messageErreur.textContent = "Le commentaire ne doit pas dépasser 500 caractères";
        messageErreur.style.display = 'block';
    } else {
        // masquer le message d'erreur
        messageErreur.style.display = 'none';

        // crée un nouvel élément de commentaire
        const nouveauCommentaire = document.createElement('div');
        nouveauCommentaire.classList.add('commentaire');

        // ajoutée le contenu du commentaire
        nouveauCommentaire.innerHTML = `
            <h4>${prenom} ${nom}</h4>
            <p>${message}</p>
        `;

        // ajoutée le nouveau commentaire à la liste
        listeCommentaires.appendChild(nouveauCommentaire);

        // réinitialiser le formulaire
        form.reset();
    }
});
