var mysql = require("mysql");
var inquirer = require("inquirer");
var stock;
var needed;
var item;

//Connection
//.........................................
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  inventorySearch();
});
//.........................................

//Full Inventory
//.........................................
function inventorySearch() {
  var query = "SELECT * FROM bamazon.products;";
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res);
    }
    idSearch();
  });
}
//.........................................

//Search By ID
//.........................................
function idSearch() {
  inquirer
    .prompt({
      name: "id",
      type: "input",
      message: "Please input the item ID of the equipment you would like to buy."
    })
    .then(function (answer) {
      item = answer.id;
      console.log("Item ID selected: " + item + "\n----------------------------");
      var query = "SELECT * FROM bamazon.products WHERE ?";
      connection.query(query, [{ item_id: answer.id }], function (err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Item ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: " + res[i].price + " || Quantity: " + res[i].stock_quantity
            + "\n--------------------------------------------------------------------");
          stock = res[i].stock_quantity;
        }
        //Compare Request Quantity with Stock Quantity
        //.........................................
        stockCheck();
      })
    })
};

function stockCheck() {
  inquirer
    .prompt({
      name: "units",
      type: "input",
      message: "How many units would you like to buy?"
    })
    .then(function (answer) {
      connection.query("SELECT stock_quantity FROM products WHERE ?", [{ item_id: answer.id }], function (err, res) {
        if (err) throw err;
      })
      needed = answer.units;
      console.log("want: " + needed);
      console.log("available: " + stock);
      //IF ENOUGH UNITS
      if (answer.units == stock) {
        console.log("Fulfilling order.")
        updateOrder();
      }
      else if (answer.units < stock) {
        console.log("Fulfilling order.")
        updateOrder();
      }

      //IF NOT ENOUGH UNITS
      else (console.log("Insufficient quantity!"))

    })
}


function updateOrder() {
  console.log("Updating your order \n------------------------------------------------");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: stock-needed
      },
      {
        item_id: item
      }
    ],

    function (err, res) {
      console.log(res.affectedRows + " products updated!\n");

    }
  );
  console.log(query.sql);
};



//   // logs the actual query being run
//   console.log(query.sql);
// }

