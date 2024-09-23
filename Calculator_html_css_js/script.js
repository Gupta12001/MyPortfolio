function pick(val)
{
    document.getElementById("a").value +=val;
}

function solve()
{
    var x=document.getElementById("a").value;
    var y= eval(x);
    document.getElementById("a").value=y;

}

function clr()
{
    document.getElementById("a").value =("");
}

function toggleScientific() {
    const sciCalc = document.getElementById("scientific-calculator");
    sciCalc.style.display = sciCalc.style.display === "none" ? "block" : "none";
}

// Scientific calculator functions
function scientific(func) {
    const currentValue = parseFloat(document.getElementById("a").value);
    let result = 0;
    switch (func) {
        case 'sin':
            result = Math.sin(currentValue);
            break;
        case 'cos':
            result = Math.cos(currentValue);
            break;
        case 'tan':
            result = Math.tan(currentValue);
            break;
        case 'sqrt':
            result = Math.sqrt(currentValue);
            break;
        default:
            result = currentValue;
    }
    document.getElementById("a").value = result;
}