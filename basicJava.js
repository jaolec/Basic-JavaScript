// Increase Counter by 1
function tickUp() {
    let counter = parseInt(document.getElementById("counter").innerText);
    counter++;
    console.log(counter);
    document.getElementById("counter").innerText = counter;
}
// Decrease Counter by 1
function tickDown() {
    let counter = parseInt(document.getElementById("counter").innerText);
    counter--;
    console.log(counter);
    document.getElementById("counter").innerText = counter;
}

// For Loop: Prints 0 - Current Counter Value
function runForLoop() 
{
    let counter = parseInt(document.getElementById("counter").innerText);
    for(let i = 0; i <= counter; i++) 
    {
        console.log(i);
        document.getElementById("forLoopResult").innerText += i;
    }
}

// Loop: Prints odd # 1 - Current Counter Value

// Array: Print to console multiples of 5 under counter value in reverse order, if < 5 return empty array

// Objects and Form Fields: Accept/Load input from form then print to console.

// Objects and Form Fields: Upon button click, load car data found in footer of html into the form

// Changing Styles: Upon button click, change text color of paragraph to corresponding color, (red,green,blue)