// table.html attraction list
$.ajax({
    type: "GET"
    , url: 'http://touradvisorzone.com/touradvisorphp/all_attractions.php'
    , dataType: "json", // serializes the form's elements.
    success: function (data) {
        console.log(data); // show response from the php script.


        var text = '';
            for (var i=0; i<data.attractions.length;i++){
                text += '<tr>' +
                            '<td>' + data.attractions[i].attraction_site_id + '</td>' +
                            '<td>' + data.attractions[i].categories + '</td>' +
                            '<td>' + data.attractions[i].site_name + '</td>' +
                            '<td>' + data.attractions[i].opening_hrs + '</td>' +
                            '<td>' + data.attractions[i].location_name + '</td>' +
                        '</tr>';
                // end of the function

            }
            $( '#table' ).html( text );
    
    }
});

// dashboard accomodation list
$.ajax({
    type: "GET"
    , url: 'http://touradvisorzone.com/touradvisorphp/accommodation_map.php'
    , dataType: "json", // serializes the form's elements.
    success: function (data) {
        console.log(data); // show response from the php script.


        var text = '';
        var x = data.accommodations.length;
            for (var x=0; x<=7;x++){
                text += '<tr>' +
                            '<td>' + data.accommodations[x].location_name + '</td>' +
                            '<td>' + data.accommodations[x].restaurant_name + '</td>' +
                            '<td>' + '<button type="button" rel="tooltip" title="Edit Task" class="btn btn-info btn-simple btn-xs"> <i class="fa fa-edit"></i> </button>'+ 
                            '<button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs"> <i class="fa fa-times"></i> </button>'+
                            '</td>' +
                        '</tr>';
                // end of the function

            }
            $( '#accomodation' ).html( text );
    
    }
});


// accomodation.html list
$.ajax({
    type: "GET"
    , url: 'http://touradvisorzone.com/touradvisorphp/accommodation_map.php'
    , dataType: "json", // serializes the form's elements.
    success: function (data) {
        console.log(data); // show response from the php script.


        var text = '';
            for (var i=0; i<data.accommodations.length;i++){
                text += '<tr>' +
                            '<td>' + data.accommodations[i].accommodation_id + '</td>' +
                            '<td>' + data.accommodations[i].cost_per_day + '</td>' +
                            '<td>' + data.accommodations[i].restaurant_name + '</td>' +
                            '<td>' + data.accommodations[i].location_name + '</td>' +
                        '</tr>';
                // end of the function

            }
            $( '#main_accod' ).html( text );
    
    }
});

// trending data
$.ajax({
    type: "GET"
    , url: 'http://touradvisorzone.com/touradvisorphp/trending.php'
    , dataType: "json", // serializes the form's elements.
    success: function (data) {
        console.log(data); // show response from the php script.

        var text = '';
            for (var i=0; i<data.trending.length;i++){
                text +=
                    '<li><a href=#>' + data.trending[i].site_name + '</a></li>';
                        
                // end of the function

            }
            $( '#trending' ).html( text );
    
    }
});