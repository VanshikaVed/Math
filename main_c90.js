function hide_q_div()
{
    document.getElementById("output").style.visibility = "hidden";
}

function send(){
    var number_1 = document.getElementById("q_n1").value;
    var number_2 = document.getElementById("q_n2").value;
    var product = parseInt(number_1) * parseInt(number_2);

    console.log("The product of " + number_1 + " & " + number_2 + " is " + product);
    document.getElementById("output").style.visibility = "visible";
    document.getElementById("question").innerHTML =  number_1 + " x " + number_2;
    document.getElementById("q_n1").value = "";
    document.getElementById("q_n2").value = "";
}