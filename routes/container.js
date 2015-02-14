var express = require('express');
var router = express.Router();
var Promise = require('promise');
var docker = require('../private/docker');
var makePageModel = require('../private/makePageModel');

router.get('/:id', function(req, res, next) {
  
  docker.getContainer(req.params.id).inspect()
  .then(function(result){
    return makePageModel(result.Name.substr(1) + ' - Container', {info: result}, req.params.id)
  })
  .then(function(pageModel){
    res.render('info', pageModel);
  }).catch(function(err){
    console.log(err);
    res.render('error', {message: err.message, error: err});
  });
});

module.exports = router;
