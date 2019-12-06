function start() {
    var r, g, b;
    var dots = document.querySelectorAll('.dot');
    var dotChoice = Math.floor(Math.random() * 6);

    for(i = 0; i < dots.length; i++) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);

        if (i == dotChoice) {
            document.querySelector('#red').innerHTML = r; 
            document.querySelector('#green').innerHTML = g; 
            document.querySelector('#blue').innerHTML = b;
        }

        dots[i].style.backgroundColor = `rgb(${r},${g},${b})`;
        dots[i].style.borderColor = `rgb(${r},${g},${b})`;

        dots[i].onclick = function() {
            document.querySelector('#red').innerHTML = r; 
            document.querySelector('#green').innerHTML = g; 
            document.querySelector('#blue').innerHTML = b; 
            
            if (this.style.backgroundColor == `rgb(${r}, ${g}, ${b})`){
                document.querySelector('#answer').innerHTML = 'Correct!';
            } else {
                document.querySelector('#answer').innerHTML = 'False!';
            }
        };
    };
};

document.querySelector('#resetButton').onclick = function() {
    alert('Reset!');
    start();
}

start();
