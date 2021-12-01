
function sum() {
    let weight = document.getElementById('weight').value

    let height = document.getElementById('height').value

    let age = document.getElementById('age').value

    let bmi = Math.round(weight / (height / 100) ** 2 * 10) / 10;
    document.getElementById('bmi').innerHTML = bmi

    if (document.getElementById('gender').value == 'male'){
        let idealBmi = Math.round(0.5 * weight / (height / 100) ** 2 + 11.5);
        document.getElementById('ideal-bmi').innerHTML = idealBmi
    }
    else (document.getElementById('gender').value == 'female');{
        let idealBmi = Math.round(0.5 * weight / (height / 100) ** 2 + 0.03 * age + 11);
        document.getElementById('ideal-bmi').innerHTML = idealBmi
    }
}

function clearInputs(){
    document.getElementById('weight').value = ''
    document.getElementById('height').value = ''
    document.getElementById('age').value = ''
    document.getElementById('gender').value = ''
    document.getElementById('bmi').innerHTML = ''
    document.getElementById('ideal-bmi').innerHTML = ''
}
function disable(){
    let lock = document.getElementById('gender').value;
    if ( lock == 'male') {
        document.getElementById('age').disabled = true;
    }else{
        document.getElementById('age').disabled = false;
    }
}
