
function whoIsOlder(){
    let names = [];
    let ages = [];

for (let i = 1; i <= 3; i++) {
    let name = document.getElementById(`name${i}`).value;
    let age = parseInt(document.getElementById(`age${i}`).value);

    names.push(name);
    ages.push(age);
    }

    let oldest = ages.indexOf(Math.max(...ages));
    let oldestName = names[oldest];
    document.getElementById("result").innerText ='The oldest person is: '+ oldestName
}
