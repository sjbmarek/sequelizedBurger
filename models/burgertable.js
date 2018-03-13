// module.exports = function(sequelize, DataTypes) {
//   var Burgertable = sequelize.define("Burgertable", {
//     burger_name: DataTypes.STRING,
//     devoured: DataTypes.BOOLEAN, defaultValue: false
//   });
//   return Burgertable;
// };



module.exports = function(sequelize, DataTypes) {
  var Burgertable = sequelize.define("Burgertable", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE

  });

  return Burgertable;
};
