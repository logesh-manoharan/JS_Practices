window.onload = function() {
    console.log("Window Loaded");

    var row1 = document.querySelector("#row1");

    var div1 = document.createElement("div");
    div1.setAttribute("class", "col-md-6");

    var primarybutton = document.createElement("button");
    primarybutton.innerHTML = "PRIMARY";
    primarybutton.setAttribute("class", "btn btn-primary");
    div1.appendChild(primarybutton);

    row1.appendChild(div1);

    var div2 = document.createElement("div");
    div2.setAttribute("class", "col-md-6");

    var successbutton = document.createElement("button");
    successbutton.innerHTML = "SUCCESS";
    successbutton.setAttribute("class", "btn btn-success");
    div2.appendChild(successbutton);

    row1.appendChild(div2);

    var childDiv1 = document.querySelector("#div1");
    var childDiv2 = document.querySelector("#div2");

    // childDiv1.removeAttribute("class");
    // childDiv1.setAttribute("class", "col-md-3");

    // childDiv2.removeAttribute("class");
    // childDiv2.setAttribute("class", "col-md-3");

    // ALTER:

    childDiv1.classList.remove("col-md-6");
    childDiv1.classList.add("col-md-3");

    childDiv2.classList.remove("col-md-6");
    childDiv2.classList.add("col-md-3");
}