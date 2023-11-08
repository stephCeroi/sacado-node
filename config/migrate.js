const socle_models = require('../socle/models');


socle_models.forEach((Model) =>

 

    Model.sync({force: true})
    .then(function() {
        console.log(`table ${Model} créée avec succes`);}
        )
    .catch((err) => {
        console.log(err);
    })

);

