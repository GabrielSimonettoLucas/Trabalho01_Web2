const express = require ('express');
const controller = require('../controllers/controller');
const route = express.Router();

module.exports = route;

route.get("/menu",controller.getMenu);
route.get("/logar-candidato",controller.getTelalogincandidato);
route.get("/logar-ouvinte", controller.getTelaloginouvinte);
route.get("/logar-adm", controller.getTelaloginadm);
route.post("/validar-candidato", controller.getValidarcandidato);
route.post("/validar-ouvinte", controller.getValidarouvinte);
route.post("/validar-adm", controller.getValidaradm);
route.get("/candidato/:id", controller.getCandidatomenu);
route.get("/ouvinte/:id", controller.getOuvintemenu);
route.get("/adm/:id", controller.getAdmmenu);
route.get("/listar-candidatos", controller.getListcandidatos);
route.get("/listar-ouvintes", controller.getListouvintes);