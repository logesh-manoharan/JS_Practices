function printValues() {
    var selectElement = document.getElementById("selectColors");

    var lst = [];
    for (let j=0; j<selectElement.options.length ; j++) {
        console.log("Color-" + j + " : " + selectElement.options[j].value);
        lst[j] = selectElement.options[j].value;
    }
    console.log("LIST: " + lst.toString());
}