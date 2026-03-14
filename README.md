# FullStack User Dashboard
Application FullStack pour gérer une liste d'utilisateurs.  
Le projet comprend :

- un **frontend React** avec un formulaire interactif
- un **backend Node.js / Express** exposant une **API REST**
- une interface permettant d'ajouter et supprimer des utilisateurs dynamiquement.

# Technologies utilisées
Frontend
- React
- JavaScript (ES6)
- CSS

Backend
- Node.js
- Express
- API REST

## Fonctionnalités
- Ajouter un utilisateur (nom + email)
- Supprimer un utilisateur
- Liste des utilisateurs affichée dynamiquement

## Structure du projet
Test_Seomaniak_MioranirinaAbelRAKOTOARIMANANA_2025/
│
├─ FullStack-app/
│ │
│ ├─ frontend/             # code React
│ │   ├─ src/
│ │   ├─ public/
│ │   ├─ package.json
│ │   └─ README.md
│ │
│ ├─ backend/              # code Node.js + Express
│ │   ├─ server.js
│ │   ├─ package.json
│ │
│ ├─ README.md             # explication globale du projet
│ ├─ .gitignore 
│
├─ Filming_Pitch_Projet.mp4
├── README.txt
└─ Captures/          # captures d'écran

## Installation

### Backend
1. Aller dans le dossier `backend`
2. `npm install` pour isntaller les dépendances
3. `npm start` pour lancer le serveur (Le serceur démarre localhost:5000)

### Frontend
1. Aller dans le dossier `frontend`
2. `npm install` pour isntaller les dépendances
3. `npm start` pour lancer l’app React (L'application démarre sur localhost:3000)

# API REST

### Récupérer les utilisateurs
GET /users

### Ajouter un utilisateur
POST /users
Body :
{
"name": "Ali",
"email": "Ali@email.com
"
}

### Supprimer un utilisateur
DELETE /users/:id

## Captures
Liste vide:
![Liste vide](Captures/ListeVide.png)

Liste avec un utilisateur:
![Ajout](Captures/ListeAvec1User.png)

Liste avec deux utilisateur et ajout d'un troisième utilisateur:
![Ajout](Captures/Ajout3rdUser.png)

Liste avec trois utilisateurs:
![Ajout](Captures/ListeAvec3Users.png)

Suppression d’un utilisateur (le second dans la liste):
![Suppression](Captures/Suppression1User.png)

# Démonstration vidéo
Voir la démonstration de l'application en action : 
![Demo](Captures/App_Demo.mp4)
