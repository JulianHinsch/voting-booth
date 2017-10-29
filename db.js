const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const User = conn.define('user', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: conn.Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: conn.Sequelize.STRING,
    allowNull: false,
  },
});

const Poll = conn.define('poll', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false,
  },
});

const Options = conn.define('option', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false,
  },
  count: {
    type: conn.Sequelize.INTEGER,
    allowNull: true,
  },

});

// define relationship
Poll.belongsTo(User);
User.hasMany(Poll);
Options.belongsTo(Poll);
Poll.hasMany(Options);

const sync = () => conn.sync({ force: true });

// seed function here
const seed = () => {
  const users = [
    { name: 'user1', password: 'password1', email: 'email1@example.com' },
    { name: 'user2', password: 'password2', email: 'emai2l@example.com' },
  ];

  const polls = [
    { name: 'poll1', userId: 1 },
    { name: 'poll2', userId: 2 },
  ];

  const options = [
    { name: 'option1', pollId: 1, count: 3 },
    { name: 'option2', pollId: 1, count: 6 },
    { name: 'option1', pollId: 2, count: 7 },
    { name: 'option2', pollId: 2, count: 1 },
    { name: 'option3', pollId: 2, count: 5 },
  ];

  return sync()
    .then(() => {
      const seedUserData = users.map(user => User.create({
        name: user.name,
        password: user.password,
        email: user.email,
      }));

      return Promise.all(seedUserData)
        .then(() => {
          const seedPollData = polls.map(poll => Poll.create({
            name: poll.name,
            option: poll.pollOption,
            userId: poll.userId,
          }));

          return Promise.all(seedPollData)
            .then(() => {
              const seedOptionData = options.map(option => Options.create({
                name: option.name,
                count: option.count,
                pollId: option.pollId,
              }));

              return Promise.all(seedOptionData);
            });
        });
    });
};


module.exports = {
  models: {
    User,
    Poll,
    Options,
  },
  sync,
  seed,
};
