const faker = require('faker');

function getUnread() {
    const randomInt = getRandomIntInclusive(1,3);
    const messages = Array(randomInt).fill(0).map(() => getData());

    return {
        status: 'ok',
        timestamp: Date.now(),
        messages,
    }
}

function getData() {
    return {
        id: faker.datatype.uuid(),
        from: faker.internet.email(),
        subject: `Hellow from ${faker.name.firstName()}`,
        body: faker.random.words(),
        received: faker.time.recent(),
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

module.exports = getUnread;
