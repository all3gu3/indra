var express = require('express'); // Declarando dependencia del modulo express
var router = express.Router(); // Variable para redirigir las peticiones que reciba externamente

// -> USERS
var UScontroller = require('../controllers/users.controller'); 

/* Routes for user.controller.js */
router.get('/users', UScontroller.getUsers);
router.get('/users/:id', UScontroller.getUser);

router.post('/register-user', UScontroller.insertUser);
router.post('/user-login', UScontroller.loginUser); 
router.post('/recovery:email', UScontroller.passRecover);

// -> CANDIDATES
var candidateController = require('../controllers/candidates.controller'); 

/* Routes for candidate.controller.js */
router.get('/candidates', candidateController.getCandidates);
router.get('/candidates-datatable', candidateController.getCandidatesDatatable);
router.get('/candidates-queue-datatable', candidateController.getCandidatesInQueueDatatable);
router.get('/candidates/:id', candidateController.getCandidate);
router.get('/delete-candidate/:id', candidateController.deleteCandidate);
router.get('/candidate-score/:email', candidateController.getScore);

router.post('/register-candidate', candidateController.insertCandidate);
router.post('/register-score', candidateController.insertScore);
router.post('/candidate-login', candidateController.loginCandidate); 
router.post('/candidate-recovery:email', candidateController.passRecover);

module.exports = router;