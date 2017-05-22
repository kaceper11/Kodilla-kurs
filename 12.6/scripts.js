var url = 'https://restcountries.eu/rest/v1/name/';
var flagDiv = $('.flag');
var nameDiv = $('.name');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    nameDiv.empty();
    resp.forEach(function(item) {
        $('<h1>').text(item.name).appendTo(nameDiv);
        $('<img>').attr('src', item.flag).appendTo(flagDiv);
    });
}