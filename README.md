# HRnet - Application RH React (Projet P14 OpenClassrooms)

Cette application est une refonte en React d’un ancien outil interne RH développé en jQuery.  
Elle permet la création et la consultation des employés au sein d’une entreprise.

Ce projet fait partie de la formation OpenClassrooms « Développeur d'application JavaScript avec React ».

---

## Objectifs

- Remplacer l'ancienne application jQuery par une version moderne en React
- Créer un composant réutilisable sous forme de bibliothèque npm
- Améliorer les performances et la maintenabilité du code
- Comparer les performances des deux versions avec Lighthouse

---

## Stack technique

- React 19
- Zustand pour la gestion d’état global
- Vite comme outil de build
- Sass (SCSS modules) pour le style
- React Router pour la navigation
- Bibliothèque maison : [`oc-js-react-p14-dropdown`](https://www.npmjs.com/package/oc-js-react-p14-dropdown)

---

## Installation et lancement

### 1. Cloner le dépôt

    git clone https://github.com/manuo1/OC-JS-REACT-P14.git
    cd OC-JS-REACT-P14

### 2. Installer les dépendances

    npm install

### 3. Lancer l'application en mode développement

    npm run dev

L’application sera accessible à l’adresse : `http://localhost:5173/`

### 4. Ajout de faux employés pour le développement

Dans le dossier `project-meta` se trouvent deux scripts générer des faux employés en développement 

- `hrnet_new.txt` : script à utiliser dans la console du navigateur pour injecter **999 faux employés** dans la version **React**.
- `hrnet_old.txt` : script similaire pour la version **jQuery**.

Dans la console du navigateur, Copie-colle le contenu du fichier correspondant (`hrnet_new.txt` ou `hrnet_old.txt`), puis valide.

Cela permet de tester rapidement avec un grand volume de données sans passer par le formulaire.


---

## Composant Dropdown personnalisé

Cette application utilise une bibliothèque React développée pour remplacer un ancien menu déroulant jQuery.

- [npm : oc-js-react-p14-dropdown](https://www.npmjs.com/package/oc-js-react-p14-dropdown)  
- Dépôt GitHub : https://github.com/manuo1/OC-JS-REACT-P14-Dropdown  
- Documentation d’utilisation : https://github.com/manuo1/OC-JS-REACT-P14-Dropdown/blob/main/README.md

---

## Rapports de performances

Le dossier `project-meta/Rapports de performances` contient les rapports Lighthouse au format JSON, réalisés sur les deux versions de l'application :

- `jquery/` : version d’origine en jQuery  
  - `home-lighthouse.json` : page d’accueil  
  - `employee-list-lighthouse.json` : liste des employés

- `react/` : version convertie en React  
  - `home-lighthouse.json` : page d’accueil  
  - `employee-list-lighthouse.json` : liste des employés

Une synthèse comparative est disponible dans :  
`project-meta/Rapports de performances/README.md`

---

## Structure du projet

```
.
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── project-meta
│ ├── Ajout d'employés
│ │ ├── hrnet_new.txt
│ │ └── hrnet_old.txt
│ ├── Rapports de performances
│ │ ├── jquery
│ │ │ ├── employee-list-lighthouse.json
│ │ │ └── home-lighthouse.json
│ │ ├── react
│ │ │ ├── employee-list-lighthouse.json
│ │ │ └── home-lighthouse.json
│ │ └── README.md
├── public
│ └── favicon.png
├── README.md
├── src
│ ├── App.jsx
│ ├── components
│ │ ├── EmployeeForm.jsx
│ │ ├── EmployeeForm.module.scss
│ │ ├── EmployeeTable.jsx
│ │ ├── EmployeeTable.module.scss
│ │ ├── EntriesInfo.jsx
│ │ ├── EntriesInfo.module.scss
│ │ ├── Layout.jsx
│ │ ├── Layout.module.scss
│ │ ├── LibDropdown.override.scss
│ │ ├── Modal.jsx
│ │ ├── Modal.module.scss
│ │ ├── Navbar.jsx
│ │ ├── Navbar.module.scss
│ │ ├── PaginationNav.jsx
│ │ ├── PaginationNav.module.scss
│ │ ├── SearchBar.jsx
│ │ ├── SearchBar.module.scss
│ │ ├── SortArrows.jsx
│ │ ├── SortArrows.module.scss
│ │ ├── TableSizeSelect.jsx
│ │ ├── TableSizeSelect.module.scss
│ │ ├── TextInput.jsx
│ │ └── TextInput.module.scss
│ ├── data
│ │ ├── departments.js
│ │ └── states.js
│ ├── main.jsx
│ ├── pages
│ │ ├── CreateEmployeePage.jsx
│ │ ├── CreateEmployeePage.module.scss
│ │ ├── EmployeeListPage.jsx
│ │ └── EmployeeListPage.module.scss
│ ├── store
│ │ └── useEmployeeStore.js
│ └── styles
│ ├── _colors.scss
│ ├── main.scss
│ └── _typography.scss
└── vite.config.js
```

---
