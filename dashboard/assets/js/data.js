$.ajax({
    type: "GET"
    , url: 'http://touradvisorzone.com/touradvisorphp/all_attractions.php'
    , dataType: "json", // serializes the form's elements.
    success: function (data) {
        console.log(data); // show response from the php script.


        var text = '';
            for (var i=0;i<data.attractions.length;i++){
                text += '<tr>' +
                            '<td>' + data.attractions[i].attraction_site_id + '</td>' +
                            '<td>' + data.attractions[i].site_name + '</td>' +
                            '<td>' + data.attractions[i].opening_hrs + '</td>' +
                            '<td>' + data.attractions[i].location_name + '</td>' +
                            '<td>' + data.attractions[i].site_name + '</td>' +
                        '</tr>';
                // end of the function

            }
            $( '#table' ).html( text );
    
    }
});

