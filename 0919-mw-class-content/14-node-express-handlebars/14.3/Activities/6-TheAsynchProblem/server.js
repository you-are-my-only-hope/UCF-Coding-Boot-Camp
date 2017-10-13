var orm = require("./config/orm.js");

function somethingFunny (data){
        console.log(data); // Data is undefined. Why?
}


var data = orm.selectWhere("parties", "party_type", "grown-up", somethingFunny);

