function failOrNot(){
    let note = parseFloat(document.getElementById("calif").value)

    if (note >= 9){
        document.getElementById("result").innerText =note+". Outstanding work, boss."
    } 
    else if (note<9 && note>7){
        document.getElementById("result").innerText =note+". Remarkable, boss."
    }
    
    else if (note<=7 && note>6){
        document.getElementById("result").innerText =note+". It's Okay, boss."
    }

    else if (note<=6 && note>5){
        document.getElementById("result").innerText =note+". It was enough, boss."
    }

    else if (note<=5 && note>3){
        document.getElementById("result").innerText =note+". Insufficient, boss."
    }

    else if (note<=3 && note>=0){
        document.getElementById("result").innerText =note+". Very poor, boss. Again."
    }

}