const sequelize = require('sequelize');
const db = require('../config/db');
const path = require('path');
const candidato = require('../models/candidato');

module.exports = {
    async getMenu(req,res){
        res.render('menu');
    },
    async getTelalogincandidato(req,res){
        res.render('logar-candidato');
    },
    async getTelaloginouvinte(req, res){
        res.render('logar-ouvinte');
    },
    async getTelaloginadm(req,res){
        res.render('logar-adm');
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
        res.render('menu-adm');
    },
    async getListcandidatos(req,res){
        db.Candidato.findAll().then((candidato) => {
            res.render('lista-candidatos', {candidato: candidato.map(candidato => candidato.toJSON())});
        });
    },
    async getListouvintes(req,res){
        db.Ouvinte.findAll().then((ouvinte) => {
            res.render('lista-ouvintes', {ouvinte: ouvinte.map(ouvinte => ouvinte.toJSON())});
        });
    },
    async getEditarcandidato(req, res){
        db.Candidato.findOne({where: {ra: req.params.id}}).then((candidato) => {
            res.render('editar-candidatos', {candidato: candidato.toJSON()});
        });
        //var candidato = await db.Candidato.findAll();
        //res.render('editar-candidatos', {candidato: candidato.toJSON()});
    },

    async getExcluircandidato(req, res){
        db.Candidato.findOne({where: {ra: req.params.id}}).then((candidato) => {
            res.render('excluir-candidato', {candidato: candidato.toJSON()});
        });
        //var candidato = await db.Candidato.findOne({where: {ra: req.body.id}});
        //candidato.destroy()
    },

    async postExcluircandidato(req, res){ //falta por a parada de excluir <<<=====
        var candidato = await db.Candidato.findOne({where: {ra: req.body.id}});
        //candidato.destroy();
        candidato.destroy({where: {ra: req.body.id}});
    },

    async postEditcandidato(req, res) {
        //var teste = await db.Candidato.findOneAndRemove({ra: req.body.id}, req.body);
        var candidato = await db.Candidato.findOne({where: {ra: req.body.id}});
        if (candidato) {
            candidato.ra = req.body.ra;
            candidato.nome = req.body.nome;
            await candidato.save();
        }
        //console.log(candidato);
        //db.Candidato.findOne({where: {ra: req.body.id}});
        res.redirect('/listar-candidatos');
    },
}