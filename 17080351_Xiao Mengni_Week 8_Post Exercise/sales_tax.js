var $ = function (id) {
    return document.getElementById(id); 
};


var processEntries = function() {
    //Get inputs
    var input_subtotal = $("subtotal").value;
    var input_taxrate = $("tax_rate").value;
    
    var subtotal = parseFloat(input_subtotal);
    var taxrate = parseFloat(input_taxrate);
    
    //Data validation 
    if(subtotal < 0 || subtotal > 10000 || taxrate < 0 || taxrate > 12) {
        alert("Subtotal must be > 0 and < 10000; Tax Rate must be > 0 and < 12")
        return;
    }
    
    //Calculation
    var tax = subtotal * taxrate / 100;
    var total = subtotal + tax;
    
    //Show the results
    $("sales_tax").value = tax;
    $("total").value = total;
}

var clear = function() {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("subtotal").focus();
}

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("clear").onclick = clear;
}