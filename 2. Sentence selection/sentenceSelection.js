function sentenceSelection() {
    let paragraph = document.getElementById("paragraph").value.toLowerCase().split(".");
    let sentence = document.getElementById("sentence").value.toLowerCase();

    //lakukan filter lalu buat function setelah itu includes 
    const result = paragraph.filter(selecSentence => selecSentence.includes(sentence));

    document.getElementById("output").innerHTML = result;

    return false;
}
