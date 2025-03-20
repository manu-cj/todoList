# Description du projet

Ce projet est une application de gestion de tâches simple et intuitive. Elle permet aux utilisateurs de créer, visualiser, modifier et supprimer des tâches. L'application est conçue pour être rapide et réactive grâce à l'utilisation de **Vite** et de JavaScript vanilla. Elle inclut également des fonctionnalités telles que le mode sombre et le filtrage des tâches pour améliorer l'expérience utilisateur.

# Voir le projet 

[Voir le projet en ligne](todo-list-alpha-lyart.vercel.app)
# Structure du projet

Ce projet est une application développée avec **Vite** et JavaScript vanilla. Voici l'organisation des fichiers et dossiers :

## 📂 src/
Contient l'ensemble du code source de l'application.

### 📂 assets/
Regroupe les ressources statiques comme les images et les icônes.
- 📂 icons/ → Icônes utilisées dans l'application.
- 📂 imgs/ → Images de l’application.
- 📂 styles/ → Contient les styles globaux.
  - 📜 global.css → Feuille de style principale de l'application.

### 📂 components/
Ce dossier regroupe les composants JavaScript réutilisables.
- 📜 AddTask.js → Composant pour ajouter une tâche.
- 📜 Menu.js → Gestion du menu de navigation.
- 📜 Task.js → Affichage d’une tâche individuelle.
- 📜 Title.js → Gestion du titre de l’application.

### 📂 lib/
Regroupe les fonctions utilitaires et modules de logique métier.
- 📜 checkTask.js → Fonction pour vérifier une tâche.
- 📜 darkMode.js → Gestion du mode sombre.
- 📜 deleteTask.js → Suppression d’une tâche.
- 📜 filter.js → Filtrage des tâches.
- 📜 function.js → Regroupe des fonctions utilitaires diverses.
- 📜 getTasks.js → Fonction pour récupérer les tâches enregistrées.

### 📂 ui/
Dossier contenant les éléments liés à l’interface utilisateur.
- 📂 footer/ → Contient les fichiers CSS du pied de page.
- 📂 header/ → Contient les fichiers CSS pour l'en-tête.
  - 📜 header.css → Styles du header.
  - 📜 title.css → Styles spécifiques au titre.
- 📂 main/ → Contient les styles principaux.
  - 📜 main.css → Styles globaux.
  - 📜 task.css → Styles spécifiques aux tâches.

### 📂 shared/
Dossier contenant des styles réutilisables.
- 📜 buttons.css → Styles des boutons.
- 📜 form.css → Styles des formulaires.
- 📜 modal.css → Styles des modales.
- 📜 shared.css → Styles partagés entre plusieurs composants.

## 📜 main.js
Point d’entrée principal de l’application.

---

💡 **Comment démarrer ?**
1. Installer les dépendances : `npm install`
2. Lancer le projet : `npm run dev`
