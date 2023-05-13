module.exports = (sequelize, Sequelize) => {
    const Apresentacao = sequelize.define('apresentacao',{
        id: {
            type: Sequelize.INTEGER,
            autoIncremente: true, allowNull: false, primaryKey: true
        },
        musica: Sequelize.STRING,
        votos: Sequelize.INTEGER
    });
    return Apresentacao;
}