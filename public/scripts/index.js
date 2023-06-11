class UserObject {
  constructor({ username, surname, age }) {
    this.username = username;
    this.surname = surname;
    this.age = age;
  }
}

const inputs = {
  username: document.getElementById("name") || null,
  surname: document.getElementById("surname") || null,
  age: document.getElementById("age") || null,
  email: document.getElementById("email") || null,
  password: document.getElementById("password") || null,
};

function getEachInputValue(inputs) {
  const inputsValue = Object.entries(inputs).map(
    ([eachInputName, eachInput]) => {
      if (!eachInput) return [eachInputName, ""];
      return [eachInputName, eachInput.value.trim()];
    }
  );
  return Object.fromEntries(inputsValue);
}

function handleButtonClick() {
  (async () => {
    const formData = getEachInputValue(inputs);
    const newUserFromFormData = new UserObject(formData);
    const rawResponse = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserFromFormData),
    });
    const response = await rawResponse.json();
    window.alert(JSON.stringify(response));
  })();
}

const button = document.getElementById("btn");
button.addEventListener("click", handleButtonClick);
