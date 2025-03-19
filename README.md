# Structure du projet

Ce projet utilise **Vite** pour un développement rapide en JavaScript vanilla. Voici l'organisation des fichiers et dossiers :

## 📂 src/
Contient l'ensemble du code source de l'application.

### 📂 assets/
Regroupe les ressources statiques comme les images et les icônes.
- 📂 icons/ → Icônes du projet.
- 📂 imgs/ → Images utilisées dans l'application.
- 📂 styles/ → Fichiers CSS globaux.
  - 📜 global.css → Styles généraux de l’application.

### 📂 components/
Contient les composants JavaScript réutilisables.
- 📜 AddTask.js → Composant pour ajouter une tâche.
- 📜 Menu.js → Menu de navigation.
- 📜 Task.js → Affichage d’une tâche individuelle.
- 📜 Title.js → Gestion du titre de l’application.

### 📂 lib/
Regroupe les fonctions utilitaires et modules de logique.
- 📜 getTasks.js → Fonction pour récupérer les tâches.

### 📂 ui/
Contient les éléments d'interface utilisateur structurés.
- 📂 footer/ → Contient le fichier CSS pour le pied de page.
  - 📜 footer.css → Styles du footer.
- 📂 header/ → Contient les fichiers CSS pour l'en-tête.
  - 📜 header.css → Styles du header.
  - 📜 title.css → Styles spécifiques au titre.

### 📂 main/
Regroupe les styles principaux du projet.
- 📜 main.css → Styles globaux.
- 📜 task.css → Styles spécifiques aux tâches.

### 📂 shared/
Contient les fichiers CSS réutilisables entre plusieurs composants.
- 📜 buttons.css → Styles des boutons.
- 📜 form.css → Styles des formulaires.
- 📜 modal.css → Styles des modales.
- 📜 shared.css → Styles partagés.

## 📜 main.js
Point d’entrée principal du projet.

---

💡 **Comment démarrer ?**
1. Installer les dépendances : `npm install`
2. Lancer le projet : `npm run dev`
