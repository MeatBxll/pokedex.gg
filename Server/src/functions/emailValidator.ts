const emailValidator = (val: string): boolean => {
  return /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val);
};

export default emailValidator;
