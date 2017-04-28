var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function () {

    var i = list.getElementsByTagName('li').length;
    console.log(i);
    list.innerHTML = list.innerHTML + '<li>item</li>' + i;

})