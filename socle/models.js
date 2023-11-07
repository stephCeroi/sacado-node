import { Sequelize, DataTypes } from 'sequelize'

const sequelize  = new Sequelize('postgres') 


module.exports = (sequelize, Sequelize) => {
    const Matiere = sequelize.define('Matiere', {
        id        : {type: Sequelize.INTEGER,autoIncrement: true,primaryKey: true },
        name      : {type: Sequelize.STRING, allowNull : false },    
        color     : {type: Sequelize.STRING, defaultValue: "#5d4391" },  
        shortname : Sequelize.STRING,    
        is_active : {type: Sequelize.BOOLEAN,defaultValue: 1 },      
    });
    return Matiere;
} 


module.exports = (sequelize, Sequelize) => {
    const Theme = sequelize.define('Theme', {
        id   : {type: Sequelize.INTEGER, autoIncrement: true,primaryKey: true},
        name : Sequelize.STRING,             
    });
    return Theme;
}

Matiere.hasMany(Theme); // On rajoute la colonne MatiereId dans la table Theme.
Theme.belongsTo(Matiere);


module.exports = (sequelize, Sequelize) => {
    const Niveau = sequelize.define('Niveau', {
        id        : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name      : Sequelize.STRING,
        shortname : Sequelize.STRING,
        cycle     : Sequelize.STRING,
        ranking   : Sequelize.STRING,
        is_active : Sequelize.BOOLEAN,    
    });
    return Niveau;
}

Niveau.hasMany(Theme); // On rajoute la colonne NiveauId dans la table Theme.
Theme.belongsToMany(Niveau);



module.exports = (sequelize, Sequelize) => {
    const Attendu = sequelize.define('Attendu', {
        id   : { type: Sequelize.INTEGER,  autoIncrement: true, primaryKey: true },   
        name : Sequelize.STRING,
    });
    return Attendu;
}

Theme.hasMany(Attendu); // On rajoute la colonne theme_id dans la table Attendu.
Attendu.belongsToMany(Theme);

Niveau.hasMany(Attendu); // On rajoute la colonne level_id dans la table Attendu.
Attendu.belongsToMany(Niveau);


module.exports = (sequelize, Sequelize) => {
    const SavoirFaire = sequelize.define('SavoirFaire', {
        id   : { type: Sequelize.INTEGER,  autoIncrement: true, primaryKey: true },   
        name : Sequelize.STRING,   
    });
    return SavoirFaire;
}

Attendu.hasMany(SavoirFaire); 
SavoirFaire.BelongsTo(Attendu); 

 

module.exports = (sequelize, Sequelize) => {
    const Competence = sequelize.define('Competence', {
        id   : { type: Sequelize.INTEGER,  autoIncrement: true, primaryKey: true },   
        name : Sequelize.STRING,   
    });
    return SavoirFaire;
}

Matiere.hasMany(Competence); 
Competence.BelongsTo(Matiere); 
