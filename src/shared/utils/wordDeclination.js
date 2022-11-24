const wordDeclination = (number, words) => {
  const lastOneDigit = Math.abs(number) % 10;
  const lastTwoDigits = Math.abs(number) % 100;
  if (lastTwoDigits > 10 && lastTwoDigits < 20) return words[2];
  if (lastOneDigit > 1 && lastOneDigit < 5) return words[1];
  if (lastOneDigit === 1) return words[0];
  return words[2];
};

export default wordDeclination;
