export const checkFields = (email, password) => {
    console.log(password)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password.trim());
console.log(emailRegex)
console.log(passwordRegex)
  if (!emailRegex) return "Email Not valid";
  if (!passwordRegex) return "Password not valid";

  return null;
};
