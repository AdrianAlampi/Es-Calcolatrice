$("#btnP").click(function () {
    var input1 = $("#num1");
    var input2 = $("#num2");
    var tab = document.getElementById('tab');
    console.log("input1", input1.val());
    console.log("input2", input2.val());
    if (input1.val() && input2.val()) {
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var row = tab.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        cell1.innerHTML = n1;
        cell2.innerHTML = "+";
        cell3.innerHTML = n2;
        cell4.innerHTML = n1 + n2;

        input1.val("");
        input2.val("");
    }
});

$("#btn-").click(function () {
    var input1 = $("#num1");
    var input2 = $("#num2");
    var tab = document.getElementById('tab');
    console.log("input1", input1.val());
    console.log("input2", input2.val());
    if (input1.val() && input2.val()) {
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var row = tab.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        cell1.innerHTML = n1;
        cell2.innerHTML = "-";
        cell3.innerHTML = n2;
        cell4.innerHTML = n1 - n2;

        input1.val("");
        input2.val("");
    }
});

$("#btn3").click(function () {
    var input1 = $("#num1");
    var input2 = $("#num2");
    var tab = document.getElementById('tab');
    console.log("input1", input1.val());
    console.log("input2", input2.val());
    if (input1.val() && input2.val()) {
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var row = tab.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        cell1.innerHTML = n1;
        cell2.innerHTML = "*";
        cell3.innerHTML = n2;
        cell4.innerHTML = n1 * n2;

        input1.val("");
        input2.val("");
    }
});

$("#btn4").click(function () {
    var input1 = $("#num1");
    var input2 = $("#num2");
    var tab = document.getElementById('tab');
    console.log("input1", input1.val());
    console.log("input2", input2.val());
    if (input1.val() && input2.val()) {
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var row = tab.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        cell1.innerHTML = n1;
        cell2.innerHTML = "/";
        cell3.innerHTML = n2;
        cell4.innerHTML = n1 / n2;

        input1.val("");
        input2.val("");
    }
});