function isPangram(str: string) {
    const ALPHA = LETTERS.slice();
    str = str.toLocaleLowerCase();

    LETTERS.forEach(x => {
        if (str.includes(x)) {
            ALPHA.splice(ALPHA.indexOf(x), 1);
        }
    })
    return ALPHA.length === 0;
  }

const LETTERS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]