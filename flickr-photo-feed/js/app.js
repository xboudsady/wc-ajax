$(document).ready(function() {
    $('form').submit(function(evt) {
        evt.preventDefault();

        var flickrAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
        var search = $('#search').val();
        var flickrOptions = {
            tags: search,
            format: "json"
         };
         function displayPhotos(data) {
            var photoHTML = '<ul>';
            $.each(data.items, function(i, photo) {
                photoHTML += '<li class="grid-25 tablet-grid-50">';
                photoHTML += '<a href="' + photo.link + '" class="image">';
                photoHTML += '<img src="' + photo.media.m +  '"></a></li>';
            });
            photoHTML += '</ul>';
            $('#photos').html(photoHTML);
         }
         // getJSON method takes 3 parameters, the url, the data, and the functions response to the data
        $.getJSON(flickrAPI, flickrOptions, displayPhotos); 
        
    });
}); // end ready