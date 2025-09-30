export function decimalNumbersToStringMapper(value: number) {
  const stringNumber = value.toString();

  if (stringNumber.length < 4) {
    return stringNumber;
  } else if (stringNumber.length < 12) {
    return `${stringNumber.substring(0, stringNumber.length - 1)}${numberPrefix(stringNumber.length)}`;
  }

  return value.toString();
}


function numberPrefix (valueLength: number): string {
  if (valueLength < 5) {
    return 'K';
  } else if (valueLength < 9) {
    return 'M';
  } else if (valueLength < 12) {
    return `B`;
  } else  {
    return '';
  }
}
