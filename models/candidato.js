module.exports = (sequelize, Sequelize) => {
    const Candidato = sequelize.define('candidato',{
        ra: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        nome: Sequelize.STRING
    });
    return Candidato;
}