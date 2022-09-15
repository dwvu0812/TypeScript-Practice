// function count(sentence: string) {
//   const filteredString: string = removeEscapeChar(sentence);
//   const splittedString: string[] = filteredString.split(" ");
//   const counted = new Map<string, number>();

//   for (let char of splittedString) {
//     if (char == " ") continue;
//     char = char.toLowerCase();
//     let count: number = counted.get(char) || 0;
//     counted.set(char, count + 1);
//   }
//   console.log(counted);
  

//   return counted;
// }
function count(sentence: string) {
    const filteredString: string = removeEscapeChar(sentence)
    const splittedString: string[] = filteredString.split(' ')
    console.log(splittedString);
    
    const counted = new Map<string, number>()
    for (let char of splittedString) {
      if (char == '') continue
      char = char.toLocaleLowerCase()
      let count: number = counted.get(char) || 0
      counted.set(char, count + 1)
    }
    console.log(counted);
    
    return counted
  }

function removeEscapeChar(sentence: string) {
  let filtered = "";

  for (const char of sentence) {
    if (char == "\n" || char == "\t") {
      filtered += " ";
    } else {
      filtered += char;
    }
  }

  return filtered;
}

// function removeEscapeChar(sentence: string): string {
//     let filtered: string = ''
//     for (const char of sentence) {
//         console.log(char);

//       if (char == '\n' || char == '\t') filtered += ' '
//       else filtered += char

//     }
//     return filtered
//   }

count("hello\nworld    ");
