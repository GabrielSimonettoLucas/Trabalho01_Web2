module.exports = (sequelize, Sequelize) => {
    const Ouvinte = sequelize.define('ouvinte',{
        ra: {
            type: Sequelize.INTEGER,
            allowNull: false, primaryKey: true
        },
        nome: Sequelize.STRING
    });
    return Ouvinte;
}