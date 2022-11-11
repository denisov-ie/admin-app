export function parseDateFromString(date) {
  const regExp = /(\d{2}).(\d{2}).(\d{4})/;

  return new Date(regExp.exec(date)[0].replace(regExp, "$2/$1/$3"));
}

export function parseDateTimeFromString(date) {
  const regExp = /(\d{2}).(\d{2}).(\d{4})/;

  return new Date(date.replace(regExp, "$2/$1/$3"));
}
