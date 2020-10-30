const Database = require('sqlite-async');

function execute(db) {
    
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
            );
            
        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS classes_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            weekDay INTEGER,
            timeFrom INTEGER,
            timeTo INTEGER,
            class_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS connections (
            id INTEGER PRIMARY KEY AUTOINCREMENT
        );
    `);
}

module.exports = Database.open(__dirname + "/database.sqlite").then(execute);
