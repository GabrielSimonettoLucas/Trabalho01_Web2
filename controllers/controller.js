const sequelize = require('sequelize');
const db = require('../config/db');
const path = require('path');
const candidato = require('../models/candidato');

module.exports = {
    async getTelalogincandidato(req,res){
        res.sendFile(path.join(__dirname + '/htmls/logar-candidato.html'));
    },
    async getMenu(req,res){
        res.sendFile(path.join(__dirname + '/htmls/menu.html'));
    },
    async getTelaloginouvinte(req, res){
        res.sendFile(path.join(__dirname + '/htmls/logar-ouvinte.html'));
    },
    async getTelaloginadm(req,res){
        res.sendFile(path.join(__dirname + '/htmls/logar-adm.html'));
    },
    async getValidarcandidato(req,res){
        var pessoas = await db.Candidato.findOne({where: {ra: req.body.ra}});
        if (pessoas === null){
            res.redirect('/logar-candidato');
        }else{
            res.redirect("/candidato/" + req.body.ra);
        }
    },
    async getValidarouvinte(req,res){
        var pessoas = await db.Ouvinte.findOne({where: {ra: req.body.ra}});
        if (pessoas === null){
            res.redirect('/logar-ouvinte');
        }else{
            res.redirect("/ouvinte/" + req.body.ra);
        }
    },
    async getValidaradm(req,res){
        var pessoas = await db.Adm.findOne({where: {ra: req.body.ra}});
        if (pessoas === null){
            res.redirect('/logar-adm');
        }else{
            res.redirect("/adm/" + req.body.ra);
        }
    },
    async getCandidatomenu(req,res){

    },
    async getOuvintemenu(req,res){

    },
    async getAdmmenu(req,res){

    },
    async getLlist(req,res){
        var teste = await db.Candidato.findAll();
        res.render('lista-teste',{candidato: JSON.stringify(teste)});
        console.log(candidato);
    }
}