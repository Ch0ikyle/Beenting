import Sequelize from 'sequelize';
import path from 'path';

import { User } from './User';
import { Room } from './Room';

const config = require(path.join(__dirname, '..', 'config', 'dbconfig.json'))['beenting'];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config  
)

const user = User(sequelize, Sequelize);
const room = Room(sequelize, Sequelize);

export { sequelize, Sequelize, user, room };