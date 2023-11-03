var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/all', function(req, res) {
  res.send('Birds home page');
});

// define the home page route
router.post('create/0', function(req, res) {
    res.send('create birds');
  });

// define the about route
router.put('update/:id', function(req, res) {
  res.send('update birds');
});
// define the about route
router.delete('/:id', function(req, res) {
    res.send('delete group');
  });

  


module.exports = router;



  