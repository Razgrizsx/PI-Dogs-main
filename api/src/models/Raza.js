const { DataTypes } = require('sequelize');


module.exports = sequelize => {
    sequelize.define('Raza', {
        nombre: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
            defaultValue: "https://cdn-icons-png.flaticon.com/512/194/194279.png"
        },
        altura: {
            type: DataTypes.STRING,
            allowNull: false
        },
        peso:{
            type: DataTypes.STRING,
            allowNull: false
        },
        longevidad:{
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    }
    );
}
