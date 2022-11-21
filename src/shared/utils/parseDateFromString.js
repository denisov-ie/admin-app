export const parseDateFromString = (date) => {
  if (!date) return null;
  const regExp = /(\d{2}).(\d{2}).(\d{4})/;

  return new Date(regExp.exec(date)[0].replace(regExp, "$2/$1/$3"));
};

export const parseDateTimeFromString = (date) => {
  if (!date) return null;
  const regExp = /(\d{2}).(\d{2}).(\d{4})/;

  return new Date(date.replace(regExp, "$2/$1/$3"));
};
