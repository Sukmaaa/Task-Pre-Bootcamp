function fibonacci() {
    const from = document.getElementById("from").value;
    const limit = document.getElementById("until").value;


    let fibonacci = [];
    let number;
    for (let i = 0; i <= limit; i++) {
        if (i < 2) {
            number = i;
        } else {
            number = fibonacci[i - 1] + fibonacci[i - 2];
        }
        fibonacci.push(number);
    }

    const newfibonacci = fibonacci.filter((numbers) => {
        return numbers >= from;
    });

    document.getElementById("output").innerHTML = newfibonacci;

    return false;
}


