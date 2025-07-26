# HRnet – Rapports de performance

Ce dossier contient les rapports Lighthouse générés dans le cadre du projet de refonte de l'application HRnet, initialement développée avec jQuery puis reconstruite avec React.

## Objectif

Comparer de manière objective les performances de l'application avant et après la refonte, en s'appuyant sur les métriques fournies par Google Lighthouse.

## Méthodologie

Des audits ont été réalisés sur les **deux pages principales** de l’application :

- La page d’accueil (`index.html` pour jQuery, `/` pour React)
- La page de la liste des employés (`employee-list.html` pour jQuery, `/employees` pour React)

### Conditions de test

- Audits réalisés avec [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) en mode **Desktop**
- Les tests ont été effectués sur les **versions buildées** des applications :
  - jQuery : servie avec `Live Server` ou `npx serve`
  - React : via `npm run build` puis `npx vite preview`
- Les rapports ont été exportés au format **JSON**

## Structure du dossier

```
performance-reports/
├── jquery/
│   ├── home-lighthouse.json              # Rapport pour index.html
│   └── employee-list-lighthouse.json     # Rapport pour employee-list.html
├── react/
│   ├── home-lighthouse.json              # Rapport pour la page d’accueil React
│   └── employee-list-lighthouse.json     # Rapport pour la page des employés React
```

## Métriques analysées

- **Scores globaux** : Performance, Best Practices
- **Temps de chargement** : First Contentful Paint (FCP), Largest Contentful Paint (LCP)
- **Stabilité visuelle** : Cumulative Layout Shift (CLS)
- **Interactivité** : Time To Interactive (TTI), Total Blocking Time (TBT)
- **Speed Index**
- **Qualité du DOM et poids des scripts**

## Résultats comparés

| Page                    | Version | Performance | Best Practices | FCP    | LCP    | CLS    | TBT   | Speed Index | Commentaire                        |
|-------------------------|---------|-------------|----------------|--------|--------|--------|-------|--------------|------------------------------------|
| Accueil                 | jQuery  | 82          | 89             | 2.8s   | 2.9s   | 0      | 20ms  | 9.5s         | Temps de chargement élevé          |
|                         | React   | 99          | 100            | 1.6s   | 1.6s   | 0.014  | 0ms   | 1.6s         | Chargement rapide, structure optimisée |
| Liste des employés      | jQuery  | 76          | 89             | 1.7s   | 2.2s   | 0      | 980ms | 1.8s         | Blocages importants au chargement |
|                         | React   | 96          | 100            | 2.3s   | 2.3s   | 0.021  | 0ms   | 2.3s         | DOM plus léger, interactivité fluide |

## Visualiser les rapports

Pour analyser les résultats complets :  
[https://googlechrome.github.io/lighthouse/viewer/](https://googlechrome.github.io/lighthouse/viewer/)

Il suffit de charger les fichiers JSON exportés pour retrouver tous les détails, y compris les recommandations d’optimisation.

## Conclusion

Les audits Lighthouse mettent en évidence des améliorations nettes après la migration vers React :

- **Amélioration significative des temps de chargement**
- **Réduction du temps de blocage (TBT)**
- **Adoption complète des meilleures pratiques modernes**
- **Meilleure stabilité visuelle et structure DOM plus optimisée**

Ces résultats confirment les bénéfices d’une refonte moderne en React, tant en termes de performances que de maintenabilité.