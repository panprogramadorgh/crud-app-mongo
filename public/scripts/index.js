class UserObject {
  constructor({ name, surname, age }) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

const inputs = {
  name: document.getElementById("name") || null,
  surname: document.getElementById("surname") || null,
  age: document.getElementById("age") || null,
  email: document.getElementById("email") || null,
  password: document.getElementById("password") || null,
};

function getEachInputValue(inputs) {
  const inputsValue = Object.entries(inputs).map(
    ([eachInputName, eachInput]) => {
      if (!eachInput) return [eachInputName, ""];
      return [eachInputName, eachInput.value];
    }
  );
  return Object.fromEntries(inputsValue);
}

function handleButtonClick() {
  const inputsValue = getEachInputValue(inputs);
  const newUser = new UserObject(inputsValue);
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "appliaction/json",
      Accept: "*/*",
    },
    body: JSON.stringify({
      title: "nuevo video mi gente",
    }),
  });
}

const button = document.getElementById("btn");
button.addEventListener("click", handleButtonClick);
