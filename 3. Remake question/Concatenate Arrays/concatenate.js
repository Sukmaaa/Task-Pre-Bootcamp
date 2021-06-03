function concatenate() {
    const concate1 = parseInt(document.getElementById("concate1").value).toString().split("");
    const concate2 = parseInt(document.getElementById("concate2").value).toString().split("");

    for (let i = 0; i <= concate1.length - 1; i++) {
        for (let j = 0; j <= concate2.length - 1; j++) {
            if (concate1[i] == concate2[j]) {
                concate1[i] = "hapus";
            }
        }
    }

    //gabungkan dan sortir angka 
    let joinConcate = concate1.concat(concate2).sort();
    //jumlah hapus data array
    let limit = joinConcate.toString().split("hapus").length - 1;
    //hapus data
    joinConcate.splice(joinConcate.length - limit, limit);

    joinConcate.map(number => console.log(number));

    const sumArr = joinConcate.reduce((accumulator, currenValue) => accumulator + currenValue)

    document.getElementById("output").innerHTML = sumArr;

    return false;
}