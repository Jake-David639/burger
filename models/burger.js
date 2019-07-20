const orm = require('../config/orm.js');

const burger = {

    all(table, cb) {
        orm.selectAll().then((table) => {
            console.log(table);
        }).catch(err => {
        console.log(err);
        });
    },
    create(name, cb) {
        orm.insertOne("burgers",["burger_name", "devoured"], 
        [name, false], cb);
    },
    update(id, cb) {
        let condition = `id=${id}`;
        orm.updateOne("burgers", 
        {
            devoured: true
        },
        condition, cb);
    }
};

module.exports = burger;
