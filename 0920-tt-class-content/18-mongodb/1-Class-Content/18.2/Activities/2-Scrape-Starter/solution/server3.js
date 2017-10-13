/* Scraper: Server #3  (18.2.1)
 * ========================= */

// Dependencies:

// Snatches HTML from URLs
var request = require("request");
// Scrapes our HTML
var cheerio = require("cheerio");


// First, tell the console what server3.js is doing
console.log("\n******************************************\n" +
            "Look at the image of every award winner in \n" +
            "one of the pages of awwwards.com. Then,\n" +
            "grab the image's source URL." +
            "\n******************************************\n");


// Run request to grab the HTML from awwards's clean website section
request("http://www.awwwards.com/websites/clean/", function(error, response, html) {

  // Load the HTML into cheerio
  var $ = cheerio.load(html);

  // Make an empty array for saving our scraped info
  var result = [];

  // With cheerio, look at each award-winning site, enclosed in "figure" tags with the class name "site"
  $("figure.site").each(function(i, element) {

    /* Cheerio's find method will "find" the first matching child element in a parent.
     *    We start at the current element, then "find" its first child a-tag.
     *    Then, we "find" the lone child img-tag in that a-tag.
     *    Then, .attr grabs the imgs src value.
     * So: <figure>  ->  <a>  ->  <img src="link">  ->  "link"  */
    var imgLink = $(element).find("a").find("img").attr("src");

    // Push the image's URL (saved to the imgLink var) into the result array
    result.push({ Link: imgLink });
  });

  // With each link scraped, log the result to the console
  console.log(result);
});

