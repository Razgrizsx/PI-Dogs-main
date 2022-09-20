const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Temperamento',{
        temperamento:{
            type: DataTypes.STRING,
            unique: true,
        }

    },
{
    timestamps:false
}
    )
}