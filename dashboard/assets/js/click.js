


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



            function findIndexByKeyValue(obj, key, value){
                for (var i = 0; i < data.accommodations.length; i++) {
                    if (accommodations[i][key] == value){
                        return i;
                        alert(i);
                        console.log("Con")
                    }
                    return null;
                }
            }
        }
    });