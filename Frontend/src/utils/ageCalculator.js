function calculateAge(date_of_birth) {
  if (date_of_birth === "") return null;
  const [day, month, year] = date_of_birth.split("-").map(Number);
  if (day === "" && month === "" && year === "") return null;

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  console.log(age);
  return age;
}

export default calculateAge;
