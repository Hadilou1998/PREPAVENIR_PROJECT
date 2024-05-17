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
 
creerCours = (courseName, courseLevel) => {
    // Création du nouvel objet (nouveau cours)
    let newCourse = {
        name: courseName,
        level: courseLevel
    };
 
    cours.push(newCourse);
};
 
creerCours("Cours 1", "Python", "Simple", false);
creerCours("Cours 2", "CSS", "Base", true);
creerCours("Cours 3", "HTML", "Global", true);
console.table(cours);