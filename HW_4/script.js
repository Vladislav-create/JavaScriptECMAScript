// ""Получение данных о пользователе""
// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

async function getUserData(id) {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  if (response.ok) {
    const findEl = data.find((el) => el.id === id);
    if (findEl == undefined) {
      console.log("Елемент отсутствует");
    } else {
      console.log(findEl);
    }
  } else {
    console.log("Error");
  }
}
getUserData(7);
//--------------------------------------------------------------------------------------------------------------------------------------------
// ""Отправка данных на сервер""
// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.
// *Подсказка *
// Пример использования функции
const user = {
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

function saveUserData(userData) {
  const serverUrl = "https://jsonplaceholder.typicode.com/users";
  let data = new FormData();
  data.append("json", JSON.stringify(userData));

  console.log(data.getAll(1));

  fetch(serverUrl, {
    method: "POST",
    body: data,
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(
          new Error(
            `Response failed: ${response.status} (${response.statusText})`
          )
        );
      }
      console.log("User data saved successfully");
      return response.json();
    })
    .then((data) => {
      const userinfojson = JSON.parse(data);
      console.log("User data: ", userinfojson);
    })
    .catch((error) => {
      console.log(error);
    });
}

saveUserData(user);

//----------------------------------------------------------------------------------------------------------------------------------------------------------
// "Изменение стиля элемента через заданное время"
// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.
// Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

function changeStyleDelayed (findEl, delay) {
    const el = document.querySelector(findEl);
    setTimeout(()=>{
        console.log(el);
        el.classList.replace('cart', 'cart__modification')
    },delay)
}

changeStyleDelayed('.cart', 2000);