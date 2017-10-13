// This file is written in this funny way so you can better visualize how Node's asynchronous pattern works.
// Because Node is asynchronous, code will run seemingly out of order.
// Pay attention to how the variable "secondNumber" gets printed.
// It doesn't wait for the append to complete. It runs immediately.
// This is purposeful. If you aren't careful, this will trip you up. Be mindful of the async nature!

var fs = require("fs");

var textFile = process.argv[2];
var number = 0;

fs.readFile(textFile, "utf8", function(err, data)
                                {
                                  var secondNumber = 0;
                                  // Inside our ReadFile Function...
                                  // We use the writeFile function
                                  // We pass in the parameter of the text file to save.
                                  // We pass in the data we want to write
                                  // We create the callback.
                                              fs.appendFileSync("written.txt", "Hello Kitty", function(err)
                                                    {

                                                      number = 5;
                                                      secondNumber = 2;
                                                      console.log(number);

                                                      // If an error was experienced we say it.
                                                      if(err) {
                                                        console.log(err);
                                                      }
                                                      else {

                                                        // We need to console.log that we saved the info
                                                        console.log("SAVED");
                                                      }

                                                    });
                                  console.log(secondNumber);
                                });

console.log(number);

