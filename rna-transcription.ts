function toRna(DNA: string) {
    let res: string = "";
    DNA.split("").forEach((char) => {
        if (!Object.keys(TRANSCRIPTION).includes(char)) {
            throw Error('Invalid input DNA.');
        }
        res += TRANSCRIPTION[char]
    });

    return res;
}

const TRANSCRIPTION: { [key: string]: string} = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U",
}

console.log(toRna('ACGTGGTCTTAA'));
// console.log(TRANSCRIPTION["A"]);

