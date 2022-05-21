const { User } = require('../models');

const userData = [
    {
        username: 'user1',
        password: 'password'
    },
    {
        username: 'user2',
        password: 'password'
    },
    {
        username: 'user3',
        password: 'password'
    },
    {
        username: 'user4',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = { seedUsers, userData };