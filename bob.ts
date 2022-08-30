enum ResponeType {
  question = "Sure.",
  yell = "Whoa, chill out!",
  yellQuestion = "Calm down, I know what I'm doing!",
  gibberish = "Fine. Be that way!",
  rest = "Whatever.",
}

function hey(message: string) {
  const typeOfRespone = regconizeResponeType(message);
  return typeOfRespone;
}

function regconizeResponeType(message: string): ResponeType {
  const clearedMessage = removeSpace(message);

  if (!message || !clearedMessage) {
    return ResponeType.gibberish;
  }

  const isUpperCase = clearedMessage.toUpperCase() === clearedMessage;

  if (hasLetters(message) === false) {
    return isQuestion(clearedMessage)
      ? ResponeType.question
      : ResponeType.rest;
  }

  if (isQuestion(clearedMessage)) {
    return isUpperCase ? ResponeType.yellQuestion: ResponeType.question
  }

  if (isUpperCase) {
    return ResponeType.yell;
  }

  return ResponeType.rest;
}

function removeSpace(message: string) {
  return message.replace(/\s+/g, "");
}

function hasLetters(message: string) {
  return /[a-zA-Z]/g.test(message);
}

function isQuestion(message: string) {
  const lastChar = message.slice(-1);
  return lastChar === "?";
}
