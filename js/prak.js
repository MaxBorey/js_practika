//---------------------- Завдання 1:--------------------------------------

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення



// function calculateTotalPrice(order) {
//     let totalPrice = 0;
//     for (let i = 0; i < order.length; i++) {
//     totalPrice += order[i];
//     }
//     return totalPrice
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//---------------------- Завдання 2:--------------------------------------

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//     let array = [];
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) { array.push(i) } else {array}
//     }
//     return array;
// }

// console.log(getEvenNumbers(3, 11));

//---------------------- Завдання 3:--------------------------------------


// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//     let lowerItem = item.toLowerCase();
//     let message = storage.includes(lowerItem) ? `${lowerItem} is available to order!` : "Sorry! We are out of stock!";
//     return message;
// }

// console.log(checkStorage(["apple", "plum", "pear"], "pLu"));

//---------------------- Завдання 4:--------------------------------------



// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.
// function getCommonElements(array1, array2) {
//     let array3 = [];
//     for (let i = 0; i < array1.length; i++) {
//         let elem = array1[i];
//         if (array2.includes(elem)) {
//             array3.push(elem);
//         }
//            continue
//     }
//      return array3;
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

//---------------------- Завдання 5:--------------------------------------


// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.

// function calculateTotalPrice(order) {
//     let totalPrice = 0;
//     for (const price of order) {
//     totalPrice += price;
//     }
//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));


//---------------------- Завдання 6:--------------------------------------

// Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray() {
//   // Перетворюємо об'єкт arguments у звичайний масив
//   const arr = Array.from(arguments);
//   // Повертаємо перевернутий масив
//   return arr.reverse();
// }

// function createReversedArray() {
//     const array = Array.from(arguments);
//     if (arguments.length !== 0) {
//         for (const arg of arguments) {
//             return array.toReversed();
//         }
//     } else {
//         return array;
//     }
// }

// console.log(createReversedArray(1, 2));

//---------------------- Завдання 7:--------------------------------------

// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//     let totalTax;
//     totalTax = `${amount}` * `${taxRate}`;
//     return totalTax;
// }
// console.log(calculateTax(100));


// Ось цікава задачка по циклах:

// Задача: Числа Фібоначчі
// Напиши функцію fibonacci(n), яка приймає число n і повертає масив із перших n чисел Фібоначчі.

// 📌 Числа Фібоначчі — це послідовність, у якій:

// Перші два числа — 0 і 1.
// Кожне наступне число дорівнює сумі двох попередніх.

// 🎯 Вимоги:

// Використовуй цикл (for або while).
// Функція має повертати масив.

// function fibonacci(n) {
//     if (n === 1) return [0];

//     let arrayFibonacci = [0, 1];
//     for (let i = 2; i < n; i++) {
//         let element = (arrayFibonacci[i-2]) + (arrayFibonacci[i - 1]);
//         arrayFibonacci.push(element);
//     }
    
//     return arrayFibonacci;
// }

// function fibonacci(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(i < 2 ? i : arr.at(-1) + arr.at(-2));
//   }
//   return arr;
// }

// console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// function fibonacci(n) {
// if (n === 1) return [0];
// const arr = [0, 1];
// let i = 1;
//   while (arr.length < n) {
//     arr.push(arr[i - 1] + arr[i++]);
//   }
//   return arr;
// }

// const fibonacci = n => [...Array(n)].map((_, i, arr) => arr[i] = i && arr[i-1] + arr[i-2] || i);

// console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
// console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// let Fibonacci=[1,2,3,4];
// console.log(Fibonacci[1]);


// function fillArray(min, max) {
//     let arr = [];
//     for (let i = min; i <= max; i += 2) {
//       return arr.push(i)
//     }
// }

// console.log(fillArray(2, 10));

 
// Задача: Пошук найбільшої цифри в числі
// Напиши функцію maxDigit(n), яка приймає додатне ціле число n і повертає його найбільшу цифру.

// 📌 Наприклад:

// javascript
// Копировать
// Редактировать
// console.log(maxDigit(829)); // 9
// console.log(maxDigit(4825)); // 8
// console.log(maxDigit(123456789)); // 9
// console.log(maxDigit(305)); // 5
// 🎯 Вимоги:

// Використовуй цикл (while або for).
// Не перетворюй число в рядок (без .toString() або .split()).


// function maxDigit(n) {
//     let strN = n.toString();
//     let maxNum = 0;

//     for (let i = 0; i < strN.length; i++) {
//         let currentDigit = parseInt(strN[i]);
//         if (currentDigit > maxNum) {
//             maxNum = currentDigit;
//         }
//     }
    
//     return maxNum;
// }


// console.log(maxDigit(829)); // 9
// console.log(maxDigit(4825)); // 8
// console.log(maxDigit(123456789)); // 9
// console.log(maxDigit(305)); // 5


// Задача: Сума всіх чисел від 1 до N
// Напиши функцію sumNumbers(n), яка приймає число n і повертає суму всіх чисел від 1 до n.

// 🔹 Приклад роботи:

// javascript
// Копировать
// Редактировать
// console.log(sumNumbers(5)); // 15 (1 + 2 + 3 + 4 + 5)
// console.log(sumNumbers(10)); // 55 (1 + 2 + ... + 10)
// console.log(sumNumbers(3)); // 6 (1 + 2 + 3)
// 🎯 Що треба зробити?

// Використовуй цикл (for або while).
// Додай усі числа від 1 до n і поверни суму.

// function sumNumbers(n) {
//     let numbers = 0;
//     for (let i = 0; i <= n; i++) {
//         numbers += i;
//     }
//     return numbers;
// }

// console.log(sumNumbers(5)); // 15 (1 + 2 + 3 + 4 + 5)
// console.log(sumNumbers(10)); // 55 (1 + 2 + ... + 10)
// console.log(sumNumbers(3)); // 6 (1 + 2 + 3)


// Задача: Вивести парні числа
// Напиши функцію evenNumbers(n), яка приймає число n і повертає масив усіх парних чисел від 1 до n.

// 🔹 Приклад роботи:

// javascript
// Копировать
// Редактировать
// console.log(evenNumbers(10)); // [2, 4, 6, 8, 10]
// console.log(evenNumbers(7));  // [2, 4, 6]
// console.log(evenNumbers(1));  // []
// 🎯 Що потрібно зробити?

// Використовуй цикл (for).
// Додай усі парні числа в масив.
// Поверни цей масив.

// function evenNumbers(n) {
//     let arrayEvenNumbers = [];
//     for (let i = 0; i <= n; i++) {
//         if (i !==0 && i % 2 === 0) {
//             arrayEvenNumbers.push(i);
//         }
//     }
//     return arrayEvenNumbers;
// }



// console.log(evenNumbers(10)); // [2, 4, 6, 8, 10]
// console.log(evenNumbers(7));  // [2, 4, 6]
// console.log(evenNumbers(1));  // []



// Задача: Число — паліндром
// Напиши функцію isPalindrome(n), яка приймає число n і повертає true, якщо число є паліндромом, і false — якщо ні.

// 📌 Паліндром — це число, яке читається однаково зліва направо і справа наліво.

// 🔹 Приклад роботи:

// javascript
// Копировать
// Редактировать
// console.log(isPalindrome(121));   // true
// console.log(isPalindrome(123));   // false
// console.log(isPalindrome(1221));  // true
// console.log(isPalindrome(10));    // false
// console.log(isPalindrome(7));     // true (одна цифра завжди паліндром)
// 🎯 Що потрібно зробити?

// Перетворити число в рядок (toString()).
// Перевірити, чи рівний цей рядок своєму перевернутому варіанту.
// Повернути true або false.

// function isPalindrome(n) {
//     let number = n.toString(); // Перетворюємо число в рядок
//     let reversed = number.split("").reverse().join(""); // Перевертаємо рядок
    
//     return number === reversed; // Порівнюємо з початковим рядком
// }

// console.log(isPalindrome(121));   // true
// console.log(isPalindrome(123));   // false
// console.log(isPalindrome(1221));  // true
// console.log(isPalindrome(10));    // false
// console.log(isPalindrome(7));     // true (одна цифра завжди паліндром)