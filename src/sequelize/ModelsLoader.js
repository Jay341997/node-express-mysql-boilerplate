const fs = require('fs');
const path = require('path');

module.exports = {
  load({ sequelize, baseFolder, indexFile = 'index.js', Sequelize }) {
    const loaded = {};

    fs
      .readdirSync(baseFolder)
      .filter((file) => {
        return (file !== indexFile) && (file !== 'database.js') && (file.slice(-3) === '.js');
      })
      .forEach((file) => {
        const model = require(path.join(baseFolder, file))(sequelize, Sequelize);
        const modelName = file.split('.')[1];
        loaded[modelName] = model;
      });

    Object.keys(loaded).forEach((modelName) => {
      if(loaded[modelName].associate) {
        loaded[modelName].associate(loaded);
      }
    });

    loaded.database = sequelize;

    return loaded;
  }
};
