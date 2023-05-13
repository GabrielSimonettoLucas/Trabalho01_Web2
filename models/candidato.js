module.exports = (sequelize, Sequelize) => {
    const Candidato = sequelize.define('candidato',{
        ra: {
            type: Sequelize.INTEGER,
            allowNull: false, primaryKey: true
        }
    });
    return Candidato;
}