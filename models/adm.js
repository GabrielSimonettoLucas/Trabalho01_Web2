module.exports = (sequelize, Sequelize) => {
    const Adm = sequelize.define('adm',{
        ra: {
            type: Sequelize.INTEGER,
            allowNull: false, primaryKey: true
        },
        periodofotacaoiniciado: Sequelize.BOOLEAN
    });
    return Adm;
}