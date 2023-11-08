'use strict'
/* eslint-env node, es6 */

//Connexion à la base et utilisation de Sequelize pour la creation des modèles
const sequelize  = require('../config/database');
const { Sequelize, Op, Model, DataTypes } = require("sequelize")
/* =========================================================================*/


const Matiere = sequelize.define('Matiere', {
    title      : {type: Sequelize.STRING, allowNull : false },    
    color      : {type: Sequelize.STRING, defaultValue: "#5d4391" },  
    shorttitle : {type: Sequelize.STRING},
    is_active  : {type: Sequelize.BOOLEAN,defaultValue: 1 }
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
        is_active : Sequelize.BOOLEAN 
        },  
        {
            // freeze name table not using *s on name
            freezeTableName: true,
            // dont use createdAt/update
            timestamps: false,
        }      
   );


Niveau.hasMany(Theme); // On rajoute la colonne NiveauId dans la table Theme.
Theme.belongsTo(Niveau);

const Attendu = sequelize.define('Attendu', {
        title : Sequelize.STRING,
    },  
    {
        // freeze name table not using *s on name
        freezeTableName: true,
        // dont use createdAt/update
        timestamps: false,
    });
    return Attendu;

Theme.hasMany(Attendu); // On rajoute la colonne theme_id dans la table Attendu.
Attendu.belongsTo(Theme);

Niveau.hasMany(Attendu); // On rajoute la colonne level_id dans la table Attendu.
Attendu.belongsTo(Niveau);

const SavoirFaire = sequelize.define('SavoirFaire', {
        title : Sequelize.STRING,   
    },  
    {
        // freeze name table not using *s on name
        freezeTableName: true,
        // dont use createdAt/update
        timestamps: false,
    });
    return SavoirFaire;


Attendu.hasMany(SavoirFaire); 
SavoirFaire.BelongsTo(Attendu); 

 
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
Competence.BelongsTo(Matiere); 


module.exports = { Matiere , Niveau, Competence, Theme, Attendu, SavoirFaire };

