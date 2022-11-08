const pluralize = (text, count) => {
  if (count > 1 || count === 0) {
    return text + "s";
  }

  return text;
};

export default pluralize;
