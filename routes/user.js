///ici nous sommes dans le controlleur , il contient les actions des utilisateurs


const router = require('express').Router();// importe la methode Router de la bibliotheque express on lenferme dans une variable pour pouvoir la reutiliser.
let User = require('../model/user.model');//importe le module model pour pouvoir l'integrer au requete ;

//localhost:3000
router.route('/').get((req,res)=>{//on demande une info avec le get 
    User.find()//methode mongoose qui liste tous les users de la db
      .then(users => res.json(users))//en cas de reussite de loperation 
      .catch(err => res.status(400).json('erreor' + err))//gestion en cas d'erreur
})


router.route("/add").post((req,res)=>{
    const username = req.body.username//enferme la new data ds une variable 

    const newUser = new User({username})//mets cette variabledans un new object via le modele predefini ds model
    newUser
    .save()//on enregistre le new user ds la db
    .then(()=>res.json('User added !'))
    .catch(()=>res.status(404).json("error :" + err));

})

module.exports = router;