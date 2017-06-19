var https = require("https");
var star_index_js = require("/star_index.js");

const users = ['torvalds', 'JakeWharton', 'tj', 'addyosmani', 'paulirish', 'flowmemo'];

var get_users = function(){
      for(var i = 0; i < users.length; i++){
            star_index_js.star_index(users[i]);
      }
}
