item.addEventListener('keypress',functionName(e));
//only triggers when key is pressed
item.addEventListener('keyup',functionName(e));
//only triggers when key is released
item.addEventListener('keydown',functionName(e));
//triggers when key is pressed continously
const keydown = functionName(e) {
    console.log(e.key);
    if(e.key === 'enter') {
        alert('Enter key pressed');
    }
    if(e.keycode === 13) {
        alert('Enter key pressed');
    }
    if(e.code === Digit1)
    {
        alert('1 key pressed');
    }
    if(e.repeat)
    {
        alert(' key is being pressed');
        e.shiftKey;
        e.ctrlKey;
        e.altKey;
    }
}
