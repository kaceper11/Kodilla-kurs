var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#addCountry');
var flag = $('.flag');
var name = $('.name');

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
    countriesList.empty();
    resp.forEach(function(item) {
        $('<h1>').text(item.name).appendTo(name);
    });
}