var Calculadora = (function (){
    var ValueOne = 0
    var ValueTwo = 0
    var ValueOperation = ''

    function CambioBoton (){
        var LstButtons = document.querySelectorAll('.tecla')
        
        LstButtons.forEach(element => {
            element.onmousedown = function(e) {
                e.preventDefault()
                this.style.transform = 'scale(0.8)'
            }

            element.onmouseup = function(e) {
                e.preventDefault()
                this.style.transform = 'scale(1)'
            }

            element.onmouseleave = function(e) {
                e.preventDefault()
                this.style.transform = 'scale(1)'
            }

            element.onclick = function(e) {
                e.preventDefault()
                PressButton(this.id)
            }
        }) 
    }
    function PressButton (code){
        let display = document.getElementById('display')
        let Value = display.innerHTML
        let NewValue = ''
        
        switch (code) {
            case '0':
                NewValue = code
                break
            case '1':
                NewValue = code
                break
            case '2':
                NewValue = code
                break
            case '3':
                NewValue = code
                break
            case '4':
                NewValue = code
                break
            case '5':
                NewValue = code
                break
            case '6':
                NewValue = code
                break
            case '7':
                NewValue = code
                break
            case '8':
                NewValue = code
                break
            case '9':
                NewValue = code
                break
            case 'on':
                NewValue = code
                break
            case 'sign':
                NewValue = code
                break
            case 'raiz':
                NewValue = code
                break
            case 'dividido':
                NewValue = code
                break
            case 'por':
                NewValue = code
                break
            case 'menos':
                NewValue = code
                break
            case 'punto':
                NewValue = code
                break
            case 'igual':
                NewValue = code
                break
            case 'mas':
                NewValue = code
                break
        }

        if (NewValue == 'on'){
            display.innerHTML = '0'
            ValueOne = 0
            ValueTwo = 0
            ValueOperation = ''
        } else if(NewValue == 'punto' && Value.length<7 ){
            display.innerHTML = Point(Value)
        } else if(NewValue == 'mas'){
            AddValue(Value,NewValue,display)
        } else if(NewValue == 'menos'){
            AddValue(Value,NewValue,display)
        } else if(NewValue == 'por'){
            AddValue(Value,NewValue,display)
        } else if(NewValue == 'dividido'){
            AddValue(Value,NewValue,display)
        } else if(NewValue == 'raiz'){
            display.innerHTML = SquareRoot(Value)
        } else if(NewValue == 'sign'){
            display.innerHTML = Convert(Value)
        } else if(NewValue == 'igual'){
            display.innerHTML = Result(Value)
        }
        else {
            if (Value == '0') {
                display.innerHTML = NewValue;
            }else{
                if (Value.length<8) {
                    display.innerHTML = display.innerHTML + NewValue;
                }                
            }
        }
    }
    function Point(Value){
        if (Value.length==0){
            Value = '0.'    
        }else{
            if (Value.indexOf('.')<0){
                Value = Value + '.'
            }
        }
        return Value
    }
    function Convert(Value){
        if (Value!='0'){
            if (Value.indexOf('-')<0){
                Value = '-' + Value
            } else {
                Value = Value.replace('-','')
            }
        }
        return Value       
    }
    function AddValue(Value,Operation,Display){
        ValueOne = parseFloat(Value)
        ValueOperation = Operation
        Display.innerHTML = ''
    }
    function Add(ValueOne,ValueTwo){
        return ValueOne + ValueTwo
    }
    function Subtract(ValueOne,ValueTwo){
        return ValueOne - ValueTwo
    }
    function Multiply(ValueOne,ValueTwo){
        return ValueOne * ValueTwo
    }
    function Divide(ValueOne,ValueTwo){
        return ValueOne / ValueTwo
    }
    function SquareRoot(Value){
        let FinalValue = 0
        let FinalString = ''
        
        ValueOne = parseFloat(Value)
        FinalValue = Math.sqrt(ValueOne)
        FinalString = FinalValue.toString()

        if(FinalString.length>8){
            FinalString = FinalString.substr(0,8)
        }

        return FinalString
    }

    function Result(Value){
        let FinalValue = 0
        let FinalString = ''
        
        if (Value!=''){
            ValueTwo = parseFloat(Value)
        }else {
            ValueTwo = 0
        }

        switch(ValueOperation){
            case 'mas':
                FinalValue = Add(ValueOne,ValueTwo)
                break
            case 'menos':
                FinalValue = Subtract(ValueOne,ValueTwo)
                break
            case 'por':
                FinalValue = Multiply(ValueOne,ValueTwo)
                break
            case 'dividido':
                FinalValue = Divide(ValueOne,ValueTwo)
                break
        }

        FinalString = FinalValue.toString()
        if(FinalString.length>8){
            FinalString = FinalString.substr(0,8)
        }

        return FinalString
    }

    return  {
        init : function(){
            CambioBoton()
        }       
    }
})();

Calculadora.init()