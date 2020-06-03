const Sequelize = require('sequelize');
const db = require('../db');
const User = require('../user/model');
const Ticket = require('../tickets/model');

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start_date: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Event.belongsTo(User);
Event.hasMany(Ticket);
Ticket.belongsTo(Event);
User.hasMany(Event);

module.exports = Event;
