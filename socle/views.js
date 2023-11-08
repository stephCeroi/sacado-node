const db = require("./models");
const Matiere = db.Matiere;
const Op = db.Sequelize.Op;
//************************************************************************ */
//                        Matiere
//************************************************************************ */
// Create and Save a new Matiere
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    // Create a matiere
    const matiere = {
      title     : req.body.title, 
      color     : req.body.color,
      shorttitle: req.body.shorttitle,
      is_active : req.body.is_active ? req.body.is_active : false
    };
    // Save Matiere in the database
    Matiere.create(matiere)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
};

// Retrieve all Matieres from the database.
exports.findAll = (req, res) =>  {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Echec."
      });
    });
};

// Find a single Matiere with an id
exports.findOne = (req, res)  => {
    const id = req.params.id;
  
    Matiere.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

// Update a Matiere by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Matiere.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Matiere with id=${id}. Maybe Matiere was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
};

// Delete a Matiere with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Matiere.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Matiere was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Matiere with id=${id}. Maybe Matiere was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Matiere with id=" + id
        });
      });
};

// Delete all Matieres from the database.
exports.deleteAll =  (req, res) => {
    Matiere.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Matieres were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all matieres."
        });
      });
};

// // Find all published Tutorials
/* exports.findAllPublished = (req, res) => {
  Matiere.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Matieres were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all matieres."
      });
    });
 };
 */