function onChanged(text, value, updateValue){
    let numbers = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
            updateValue(value + text[i]);
        }
    }
}

export default onChanged;