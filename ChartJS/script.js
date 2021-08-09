window.onload = function () {
    console.log("Window Loaded");
}

function loadCharts() {
    console.log("Load Charts called!!");

    $('#selectItems').append($('<option>').val("value").text("Text"));

    var x = document.getElementById("selectCategory");
    var option = document.createElement("option");
    option.text = "Kiwi";
    x.add(option);
}

function selectCategory() {
    var categoryElement = document.getElementById("selectCategory");

    console.log(categoryElement.selectedIndex);
    console.log("Selected Category: " +  categoryElement.options[categoryElement.selectedIndex].value);

    var selectedValue = categoryElement.options[categoryElement.selectedIndex].value;

    var itemsElement = document.getElementById("selectItems");

    if (selectedValue === "Animals") {
        console.log("Selected " + selectedValue);
        let lst = ["Cat", "Dog", "Cow"];
        for (var i=0 ; i<lst.length; i++) {
            let option = document.createElement("option");
            option.text = lst[i];
            option.value = lst[i];
            itemsElement.add(option);
        }
    }
    else if (selectedValue === "Colors") {
        console.log("Selected " + selectedValue);
        let lst = ["Red", "Green", "Blue"]
        for (var i=0 ; i<lst.length; i++) {
            let option = document.createElement("option");
            option.text = lst[i];
            option.value = lst[i];
            itemsElement.add(option);
        }
    }
    else if (selectedValue === "Fruits") {
        console.log("Selected " + selectedValue);
        let lst = ["Apple", "Mango", "Orange"];
        for (var i=0 ; i<lst.length; i++) {
            console.log(lst[i]);
            let option = document.createElement("option");
            option.text = lst[i];
            option.value = lst[i];
            itemsElement.add(option);
        }
    }
    else {
        alert("Please, select the category");
    }
}