let cours = [];
 
// fonction creerCours(nom du cours, niveau du cours) => remplir le tableau "cours" avec ces données sous forme d'un objet
 
/*
creerCours('Python',1) rempli le tableau cours comme ceci :
 
[{
name: "Python",
level: 1,
statut: "non terminé"   
}]
 
*/

function createCourse(courseName, level, statut) {
    return cours.push({ courseName, level, statut })
};

createCourse('JS', 'avancé', 'non terminé');
console.table(createCourse);
 
creerCours = (courseName, courseLevel) => {
    // Création du nouvel objet (nouveau cours)
    let newCourse = {
        name: courseName,
        level: courseLevel
    };
 
    cours.push(newCourse);
};
 
creerCours("Python pour débutants", "Débutant");
creerCours("Les grilles CSS", "Intermédiaire");
creerCours("HTML : accessibilité", "Avancé");
creerCours("CSS Flexbox", "Avancé");
console.table(cours);

// Supprimer un cours

// Afficher tous les cours

// Rechercher un cours par mot clé

// Changer le statut d'un cours à "terminé"

// Compter le nombre de cours terminé

// Suppression

/**
 * Fonction qui supprime un cours.
 * Il prend en paramètre le nom du "cours" que l'on souhaite supprimer
 * @param {string} name 
 * @returns 
 */
function deleteCours(name) {
    const newCours = cours.filter((c) => c.name != name);
    cours = newCours;
    return cours;
}
 
deleteCours("CSS Flexbox");
console.table(cours);
 
 
function deleteCoursByTagName(name) {
    const newCours = cours.filter((c) => c.name != name || c.statut != name);
    cours = newCours;
    return cours;
}

 
// Afficher tous les cours
 
function afficherCours() {
    cours.forEach(c => {
        console.log(`
        Titre du cours: ${c.name}\n 
        Niveau :${c.level}\n 
        Statut :${c.statut}\n
        ---------------------
        `);
    })
};
 
afficherCours();