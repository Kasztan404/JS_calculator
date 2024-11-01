
let buttons = document.querySelectorAll('button');
let screenCalc = document.querySelector('.screen');
let screenText =[];


buttons.forEach( button => button.addEventListener('click', () => buttonAction(button) ));
    

function buttonAction(button){

    const buttonText = button.textContent;
    if(buttonText == 'CLEAR'){
        screenText = [0];
        refreshScreen();
    }
    else if (buttonText == '=')
    {
        
        let result = eval( screenText.join(''));
        console.log(result);
        screenText.splice(0,screenText.length);
        screenText.push(...String(result).split(','));
        refreshScreen();
    }
       else{
        screenText.push(buttonText);
        refreshScreen();
    }
}

function refreshScreen(){
    screenCalc.textContent = screenText.join('');
    console.log ( screenText.join(''));
}

