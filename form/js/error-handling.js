$(document).ready(function() {
    $('#myDiv').html(data);
}).fail(function(jqXHR) {
    var errorMessage = "<p>Sorry! There's been an error. ";
    errorMessage += "Please try again later.</p>"
    $('#myDiv').html(errorMessage);
    //alert(jqXHR.statusText);
});