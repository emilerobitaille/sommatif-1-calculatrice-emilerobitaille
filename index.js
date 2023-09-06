function onHandleClick(){

    let réponse;
    
    const value1 = parseFloat(document.getElementById('valeur1').value);
    const value2 = parseFloat(document.getElementById('valeur2').value);
    const operateur = document.getElementById('operateur').value;
    
    switch (operateur){
        case '+': 
            réponse = value1 + value2
            break;
        case '-':
            réponse = value1 - value2
            break;
        case '*':
            réponse = value1 * value2
            break;
        case '/':
            réponse = value1 / value2
            break;
        case '**':
            réponse = Math.pow(value1, value2);
            break;
        default:
            réponse = "${value1}{value2}"
            break;
    }

    const texteSolution = document.getElementById('solution');
    texteSolution.textContent = `${value1} ${operateur} ${value2} = ${réponse}`;
}