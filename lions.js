const lionRouter = require('express').Router();
const _ = require('lodash')

lionRouter.param('id', (req, res, next, id) => {
   let lion = _.find(lions, {id: parseInt(id)})
   if (lion) {
      req.lion = lion
      next()
   } else{
      res.status(404).send({'message': 'lion was not found'});
   }
});

var lions = [];
var id = 1;

const updateId = (req, res, next) => {
   let nextId = id ++;
   req.body.id = nextId;
   next()
}

lionRouter.route('/')
   .get( (req, res) => {
      res.json(lions);
    })
   .post(updateId, (req, res) => {
      lion = req.body;
      lions.push(lion)
      res.json(lion)
   });
lionRouter.route('/:id')
   .get((req, res) => {
      var lion = req.lion;
      res.json(lion || {msg:"Lion not found"});
   })
   .put((req, res) => {
      var update = req.body;
     if(update.id) {
         delete update.id
      };
      var lion = _.findIndex(lions, {id: parseInt(req.params.id)});
      if (!lions[lion]) {
         res.json({"message":"lion does not exist"})
      }
      else {
         var updatedLion = _.assign(lions[lion], update);
         res.json(updatedLion)
      }
   })
   .delete((req, res) => {
      var lion =  _.findIndex(lions, {id: parseInt(req.params.id)});
      if(!lions[lion]) {
         res.json({"message":"lion not found"})
      }
      else {
         var deletedLion = lions[lion];
         lions.splice(lion, 1);
         res .json(deletedLion);
      }
   });

module.exports = lionRouter;