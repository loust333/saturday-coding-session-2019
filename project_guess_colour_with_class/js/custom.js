function start() {
    document.querySelector("#result").innerHTML = '';
    
    var random, red, green, blue, chosenDot;

    chosenDot = Math.floor(Math.random() * 6);

    var dotElements = document.querySelectorAll('.dot');
    // i++ is the same as i + 1
    for(var i = 0; i < dotElements.length; i++) {
        random = Math.random() * 256; 
        red = Math.floor(random);

        random = Math.random() * 256; 
        green = Math.floor(random);

        random = Math.random() * 256; 
        blue = Math.floor(random);

        if (chosenDot == i) {
            document.querySelector("#red").innerHTML = red;
            document.querySelector("#green").innerHTML = green;
            document.querySelector("#blue").innerHTML = blue;
        }
        
        dotElements[i].style.backgroundColor = `rgb(${red} , ${green}, ${blue})`;

        console.log('Works');
        dotElements[i].onclick = function() {
            var currentDotBackgroundColor = this.style.backgroundColor;
            red = document.querySelector("#red").innerHTML;
            green = document.querySelector("#green").innerHTML;
            blue = document.querySelector("#blue").innerHTML;
            if (currentDotBackgroundColor == `rgb(${red}, ${green}, ${blue})`) {
                // alert('Correct!');
                document.querySelector("#result").innerHTML = 'Correct!';
            } else {
                document.querySelector("#result").innerHTML = 'False!';
            }
        };
    }
};

start();

document.querySelector('.resetButton').onclick = function() {
    start();
};
