export const checkEmail = (email: string) => {
  const pattern = /[a-zA-Z0-9.-\_]{1,}@[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}/;
  if (email) {
    return pattern.test(email);
  } else {
    return false;
  }
};
