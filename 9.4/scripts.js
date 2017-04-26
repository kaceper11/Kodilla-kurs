function drawTree(treeHeight) {
    for (var i=1; i<=treeHeight; i++) {
        var star = '*';

        for (j=1; j<i; j++) {
            star = star + '*';
        }

        console.log(star);
    }
}
console.log(drawTree(5));