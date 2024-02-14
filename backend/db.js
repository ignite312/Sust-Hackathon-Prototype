const sqlite = require("sqlite3").verbose();

class db{
    constructor(){
        this.database = new sqlite.Database('question_bank.db', (err) => {
            if(err){
                console.error('Could not create db instance: ', err);
                return;
            }
            console.log('Successfully created db instance');
        });

        this.createtable = 'CREATE TABLE IF NOT EXISTS questions(id INTEGER PRIMARY KEY, desc TEXT, marks INTEGER)';
        this.showallquestions = "SELECT * FROM questions";

        this.database.run(this.createtable, (err)=>{
            if(err){
                console.error('Error creating table: ', err);
                return;
            }
            console.log('Successfully created table');
        });
    }

    showtables(tables){
        this.database.serialize(() => {
            this.database.each("SELECT name FROM sqlite_master WHERE type = 'table'", (err, row)=>{
                if(err){
                    console.error("Error getting table names: ", err);
                }
                else{
                    tables.push(row.name);
                    console.log(row.name);
                }
            });
        });
    }

    showall(){
        return new Promise((resolve, reject) => {

        });
    }
}

module.exports = db;
