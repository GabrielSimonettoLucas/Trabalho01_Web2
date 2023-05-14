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
}