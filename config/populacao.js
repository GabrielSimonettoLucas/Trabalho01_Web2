const db = require('./db');

function popular_db(){
    db.Ouvinte.create({
        ra: 0000001,
        nome: 'Pedro',
    })
    db.Ouvinte.create({
        ra: 0000002,
        nome: 'Julia',
    })
    db.Ouvinte.create({
        ra: 0000003,
        nome: 'Amilton',
    })
    db.Ouvinte.create({
        ra: 0000004,
        nome: 'Rogerio',
    })
    db.Ouvinte.create({
        ra: 0000005,
        nome: 'Vitor',
    })
    db.Ouvinte.create({
        ra: 0000006,
        nome: 'Sergio',
    })
    db.Ouvinte.create({
        ra: 0000007,
        nome: 'Sherek',
    })
    db.Ouvinte.create({
        ra: 0000010,
        nome: 'Fiona',
    })
    db.Ouvinte.create({
        ra: 0000011,
        nome: 'Douglas',
    })
    db.Ouvinte.create({
        ra: 0000012,
        nome: 'Antonio',
    })
    db.Ouvinte.create({
        ra: 0000013,
        nome: 'Robert',
    })
    db.Ouvinte.create({
        ra: 0000014,
        nome: 'Carol',
    })
    db.Ouvinte.create({
        ra: 0000015,
        nome: 'Luiz',
    })
    db.Ouvinte.create({
        ra: 0000016,
        nome: 'Porfilho',
    })
    db.Ouvinte.create({
        ra: 0000017,
        nome: 'Igor',
    })
    db.Candidato.create({
        ra: 0000017,
        nome: 'Igor'
    })
    db.Candidato.create({
        ra: 0000007,
        nome: 'Sherek',
    })
    db.Candidato.create({
        ra: 0000010,
        nome: 'Fiona',
    })
    db.Candidato.create({
        ra: 0000006,
        nome: 'Sergio'
    })
    db.Candidato.create({
        ra: 0000003,
        nome: 'Amilton'
    })
    db.Candidato.create({
        ra: 0000001,
        nome: 'Pedro'
    })
    db.Adm.create({
        ra: 9999999,
    })
}

module.exports = popular_db()