const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./database/menu.json');
const db = low(adapter);

module.exports = { db };