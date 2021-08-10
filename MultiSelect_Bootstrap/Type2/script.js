window.onload = function() {
    console.log("Window loaded");

    var buildlist2 = ["Green", "Red", "Blue"];

    loadBuild2Details(buildlist2);
    $('#buildname2').multiselect('destroy');
    build2DetailsMultiselect();
}


function loadBuild2Details(buildlist2) {
    $('#buildname2').empty();
    var eleRunOnModel = document.getElementById('buildname2');
    for (var i = 0; i < buildlist2.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", buildlist2[i]);
        option.text = buildlist2[i];
        eleRunOnModel.appendChild(option);
    }
}

function build2DetailsMultiselect() {
    $('#buildname2').multiselect({
        includeSelectAllOption: true,
        enableFiltering: true,
        maxHeight: 150,
        dropUp: false,
        enableCaseInsensitiveFiltering: true,
        buttonWidth: '100%',
        onDropdownShow: function(event) {
            if ($('#buildname2 > option').length == 0)
                alert("Please select atleast one build name dropdown.")
        }
    });
}

function loadOptions() {
    $('#buildname2').empty();
    console.log("Load options function called.");
    var buildlist2 = ["Green", "Red", "Orange", "Yellow"];

    var buildinp = document.getElementById('buildname2');
    var option = document.createElement("option");
    option.setAttribute("value", "");
    option.text = "Please Select";
    buildinp.appendChild(option);

    for (var i = 0; i < buildlist2.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", buildlist2[i]);
        option.text = buildlist2[i];
        buildinp.appendChild(option);
    }
}

function selectOptions() {
    console.log("Selected options Called");
    var selElement = document.getElementById("buildname2");
    for (var i = 0; i < selElement.options.length; i++) {
        console.log(selElement.options[i].value);
    }
}