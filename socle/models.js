'use strict'
/* eslint-env node, es6 */
 
//Connexion à la base et utilisation de Sequelize pour la creation des modèles
const sequelize  = require('../config/database');
const { Sequelize, Op, Model, DataTypes } = require("sequelize")
/* =========================================================================*/


const Matiere = sequelize.define('Matiere', {
    title      : {type: DataTypes.STRING, allowNull : false },    
    color      : {type: DataTypes.STRING, defaultValue: "#5d4391" },  
    shorttitle : {type: DataTypes.STRING},
    is_active  : { type: DataTypes.BOOLEAN, defaultValue: false }
    },  
    {
        // freeze name table not using *s on name
        freezeTableName: true,
        // dont use createdAt/update
        timestamps: false,
    }   
);
 
const Theme = sequelize.define('Theme', {
        title : Sequelize.STRING
        },  
        {
            // freeze name table not using *s on name
            freezeTableName: true,
            // dont use createdAt/update
            timestamps: false,
        }                
);

Matiere.hasMany(Theme); // On rajoute la colonne matiereId dans la table Theme.
Theme.belongsTo(Matiere);

const Niveau = sequelize.define('Niveau', {
        title     : Sequelize.STRING,
        shorttitle: Sequelize.STRING,
        cycle     : Sequelize.STRING,
        ranking   : Sequelize.STRING,
        is_active : { type: DataTypes.BOOLEAN, defaultValue: false }
        },  
        {
            // freeze name table not using *s on name
            freezeTableName: true,
            // dont use createdAt/update
            timestamps: false,
        }      
   );




const Attendu = sequelize.define('Attendu', {
        title : Sequelize.STRING,
    },  
    {
        // freeze name table not using *s on name
        freezeTableName: true,
        // dont use createdAt/update
        timestamps: false,
    });
 


const SavoirFaire = sequelize.define('SavoirFaire', {
        title : Sequelize.STRING,   
    },  
    {
        // freeze name table not using *s on name
        freezeTableName: true,
        // dont use createdAt/update
        timestamps: false,
});
 


const Competence = sequelize.define('Competence', {
        title : Sequelize.STRING,   
    },  
    {
        // freeze name table not using *s on name
        freezeTableName: true,
        // dont use createdAt/update
        timestamps: false,
    });
 
 
Matiere.hasMany(Competence); 
Competence.belongsTo(Matiere); 

Attendu.hasMany(SavoirFaire); 
SavoirFaire.belongsTo(Attendu); 

Theme.hasMany(Attendu); // On rajoute la colonne theme_id dans la table Attendu.
Attendu.belongsTo(Theme);

Niveau.hasMany(Attendu); // On rajoute la colonne level_id dans la table Attendu.
Attendu.belongsTo(Niveau);

Niveau.hasMany(Theme); // On rajoute la colonne NiveauId dans la table Theme.
Theme.belongsTo(Niveau);

Matiere.hasMany(Theme); // On rajoute la colonne matiereId dans la table Theme.
Theme.belongsTo(Matiere);

module.exports = [ Matiere , Niveau, Competence, Theme, Attendu, SavoirFaire ];

