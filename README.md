# Commentaire dynamique

Projet réalisé en HTML, Tailwind CSS et JavaScript.

## Objectif

Ce projet a pour but de dynamiser un espace de commentaires sur une page web.

L’utilisateur peut :

- saisir un prénom
- saisir un nom
- écrire un commentaire
- envoyer le formulaire sans rechargement de la page

Si un ou plusieurs champs sont vides, un message d’erreur s’affiche.  
Si tous les champs sont remplis, un nouveau commentaire est ajouté et le formulaire est réinitialisé.

## Fonctionnalités

- Affichage d’une liste de commentaires
- Ajout dynamique de commentaires
- Vérification des champs du formulaire
- Affichage / masquage du message d’erreur
- Réinitialisation automatique du formulaire
- Aucun rechargement de la page

## Technologies utilisées

- HTML5
- Tailwind CSS
- JavaScript

## Structure du projet

```bash
commentaire/
├── index.html
├── script.js
└── README.md
```

## Fonctionnement

Le script JavaScript écoute la soumission du formulaire.

* Comportement attendu
- Si un champ est vide :
    - le message d’erreur apparaît
    - aucun commentaire n’est ajouté
- Si tous les champs sont remplis :
    - le message d’erreur disparaît
    - un nouveau commentaire est créé dynamiquement
    - le prénom et le nom sont affichés
    - le message est ajouté à la liste existante
    - le formulaire est vidé avec reset()

## Points importants

Ce projet respecte les consignes suivantes :

- Vérifier que tous les champs sont remplis
- Afficher un message d’erreur si nécessaire
- Ajouter un nouveau commentaire sans remplacer les précédents
- Manipuler le DOM en JavaScript
- Réinitialiser le formulaire après envoi
- Lancer le projet
- Télécharger ou cloner le projet
- Ouvrir le fichier index.html dans un navigateur

## Auteur

Adeline

## Contact

Pour toute question :
*ad15canon@gmail.com*