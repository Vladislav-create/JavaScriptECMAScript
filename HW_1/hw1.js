// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [10, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
  let counter = 0;

  return (obj = {
    increment: function () {
      return () => {
        return ++counter;
      };
    },
    decrement: function () {
      return () => {
        return --counter;
      };
    },
  });
};

const getCounterDecrement = createCounter().decrement();
const getCounterIncrement = createCounter().increment();

console.log(getCounterDecrement());
console.log(getCounterDecrement());
console.log(getCounterDecrement());
console.log(getCounterDecrement());
console.log(getCounterDecrement());
console.log(getCounterIncrement());
console.log(getCounterIncrement());
console.log(getCounterIncrement());
console.log(getCounterIncrement());
console.log(getCounterIncrement());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

const findElementByClass = (root, serchEl) => {
  let parent = root;

  let childrens = Array.from(parent.children);

  childrens.forEach((element) => {
    if (element.className == serchEl) {
      console.log(element);
    } else {
      findElementByClass(element, serchEl);
    }
  });
};

const rootEl = document.querySelector(".root");
const searchClass = "goal";

findElementByClass(rootEl, searchClass);
