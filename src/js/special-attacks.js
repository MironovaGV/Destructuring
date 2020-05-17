export default function getSpecial(person) {
  const arr = [];
  person.special.forEach((obj) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = obj;
    arr.push({
      id, name, icon, description,
    });
  });
  return arr;
}
