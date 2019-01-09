const tigerRouter = require('express').Router();
const _ = require('lodash')

tigerRouter.param('id', (req, res, next, id) => {
   let tiger = _.find(tigers, {id: parseInt(id)})
   if (tiger) {
      req.tiger = tiger
      next()
   } else{
      res.status(404).send({'message': 'tiger was not found'});
   }
});

var tigers = [];
var id = 1;

const updateId = (req, res, next) => {
   let nextId = id ++;
   req.body.id = nextId;
   next()
}

tigerRouter.route('/')
    .get((req, res) => {
        res.json(tigers);
      })

    .post( updateId, (req, res) => {
        tiger = req.body;
        tigers.push(tiger)
        res.json(tiger)
     })

tigerRouter.route('/:id')
    .get((req, res) => {
        var tiger = req.tiger;
        res.json(tiger || {msg:"tiger not found"});
     })

    .put((req, res) => {
        var update = req.body;
       if(update.id) {
           delete update.id
        };
        var tiger = _.findIndex(tigers, {id: parseInt(req.params.id)});
        if (!tigers[tiger]) {
           res.json({"message":"tiger does not exist"})
        }
        else {
           var updatedtiger = _.assign(tigers[tiger], update);
           res.json(updatedtiger)
        }
     })

    .delete((req, res) => {
        var tiger =  _.findIndex(tigers, {id: parseInt(req.params.id)});
        if(!tigers[tiger]) {
           res.json({"message":"tiger not found"})
        }
        else {
           var deletedtiger = tigers[tiger];
           tigers.splice(tiger, 1);
           res .json(deletedtiger);
        }
     });

module.exports = tigerRouter;