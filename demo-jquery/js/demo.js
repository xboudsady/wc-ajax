var url = '/employees.php';
var data = {
    firstName: "Dave",
    lastName: "McFarland"
};
var callback = function(response) {
    // do something with the response
};
$.get(url, data, callback);


var url = "http://website.com/posts";
var data = {
    firstName: "Dave",
    lastName: "McFarland"
};
$.post(url, data, callback);


