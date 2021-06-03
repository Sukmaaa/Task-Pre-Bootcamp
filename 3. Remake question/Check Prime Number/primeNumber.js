const number = document.getElementById("prime").value;

const primeNumber = (number) => {
    let divider = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divider++
        }
    }
    if (divider === 2) {
        document.getElementById("output").innerHTML = number + " Adalah Bilangan Prima";

    } else {
        document.getElementById("output").innerHTML = number + " Adalah Bilangan Prima";
    }

    return false
}
