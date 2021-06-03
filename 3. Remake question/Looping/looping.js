function looping() {
    const loopingButton = document.getElementById("loop");

    loopingButton.addEventListener("click", () => {
        const inputLoop = document.getElementById("input").value;
        const multipleLoop = document.getElementById("select").value;

        let sequence = [];
        for (let i = 1; i <= inputLoop; i++) {
            sequence.push(i);
        }

        const result = sequence.map((sequence) => {
            return sequence * multipleLoop;
        })

        document.getElementById("output").innerText = result;

    });

    return false;
}