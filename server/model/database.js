const Sequelize = require('sequelize');

const database = new Sequelize(process.env.DATABASE_URL);

const Poll = database.define('poll', {
    id: {
        type: database.Sequelize.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    question: {
        type: database.Sequelize.STRING,
        allowNull: false,
    },
}, {
    underscoredAll: true,
});

const Option = database.define('option', {
    id: {
        type: database.Sequelize.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    answer: {
        type: database.Sequelize.STRING,
        allowNull: false,
    },
    votes: {
        type: database.Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
    pollId: {
        type: database.Sequelize.UUID,
        allowNull: false,
        foreignKey: true,
    },
}, {
    underscoredAll: true,
});

Poll.hasMany(Option, {as: 'options', foreignKey: 'pollId', targetKey: 'id'});
Option.belongsTo(Poll, { onDelete: 'CASCADE' });

const sync = () => database.sync({ force: true });

const seed = () => {

    const polls = [
        { 
            id: 'a5f3221f-5794-4049-a0aa-731c55f1cbf5', 
            question: 'Which came first: the chicken or the egg?', 
        },
        { 
            id: 'c59752b4-4823-4bd0-a960-4b1b418f7f5d', 
            question: 'If a tree falls in a deserted forest, does it make a sound?', 
        },
    ];

    const options = [
        { 
            id: 'f46fadf1-f3e3-461f-abcf-71b3b0d4028f',
            answer: 'Chicken', 
            pollId: 'a5f3221f-5794-4049-a0aa-731c55f1cbf5', 
            votes: 110 
        },
        { 
            id: 'a2be06fc-cf21-4a92-b6e0-08785744c79a',
            answer: 'Egg', 
            pollId: 'a5f3221f-5794-4049-a0aa-731c55f1cbf5', 
            votes: 78 
        },
        { 
            id: '8c37dd41-d18e-48fc-990a-73674a509d60',
            answer: 'Yes', 
            pollId: 'c59752b4-4823-4bd0-a960-4b1b418f7f5d', 
            votes: 789 
        },
        { 
            id: '4a571517-32b4-44ea-9e43-29157c855583',
            answer: 'No', 
            pollId: 'c59752b4-4823-4bd0-a960-4b1b418f7f5d', 
            votes: 145 },
    ];

    return sync().then(() => {
        const seedPollData = polls.map(poll => Poll.create({
            id: poll.id,
            question: poll.question,
        }));
        return Promise.all(seedPollData).then(() => {
            const seedOptionData = options.map(option => Option.create({
                id: option.id,
                answer: option.answer,
                votes: option.votes,
                pollId: option.pollId,
            }));
            return Promise.all(seedOptionData);
        });
    });
};

module.exports = {
  models: {
    Poll,
    Option,
  },
  sync,
  seed,
};
