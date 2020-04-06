///ici nous sommes dans le controlleur , il contient les actions des utilisateurs


const router = require('express').Router();// importe la methode Router de la bibliotheque express on lenferme dans une variable pour pouvoir la reutiliser.
let Exercise = require('../model/exercise.model');//importe le module model pour pouvoir l'integrer au requete ;

//localhost:5000
router.route('/').get((req,res)=>{
    User.find()//methode mongoose qui liste tous les users de la db
      .then(exercise => res.json(exercise))//en cas de reussite de loperation 
      .catch(err => res.status(400).json('erreor' + err))//gestion en cas d'erreur
})

router.route("/add").post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercice = new newExercice(
        username,
        description,
        duration,
        date
    )

    newExercice.save()
    .then(()=>res.json("Exercise added!"))
    .catch((err)=>res.status(400).json(err + "error"))

});


module.exports = router;