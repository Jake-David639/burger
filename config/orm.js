// import the dependencies
const connection = require('./connection');

// create the ORM object to handle the MySQL queries
const orm = {
// todo
    selectAll = (table, cb) => {
       let queryStr = `SELECT * FROM ${tableInput};`;
       connection.query(queryStr,(err, result) => {
        if (err) throw err;
        cb(result);
        });
    },
    insertOne = (table, cols, vals, cb) => {
        let queryStr = `INSERT INTO ${table} (${cols.join()}) VALUES (${questionMarkString(vals.length)})`;
        
        console.log(queryStr);
        
        connection.query(queryStr, vals,(err, result) => {
            if (err) throw err;
            cb(result);
        }); 
    },
    updateOne = (table, objColVals, condition, cb) => {
        let queryStr = `UPDATE ${table} SET ${convertObjectToSql(objColVals)} WHERE ${condition}`;

        console.log(queryStr);
        connection.query(queryStr, (err, result) => {
        if (err) throw err;
        cb(result);
        });
    }
}

questionMarkString = number => {
    let array = [];
    for (let i = 0; i < number; i++) {
        array.push("?");
    }
    return array.join();
}

convertObjectToSql = obj => {
    let keyValArray = [];
    Object.keys(obj).forEach(key => {
        let value = obj[key];
        if (typeof value === "string" && value.indexOf(" ") >= 0) value = `'${value}'`;
        keyValArray.push(`${key}=${value}`);
    });
}

module.exports = orm;
