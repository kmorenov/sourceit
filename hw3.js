let task = 'Homework 3'
console.log(task);
task = '1.(циклы) Вывести числа от 4 до 400 на экран.'
for (i = 4; i < 401; i++) {
    document.write(i)
    document.write('<br/>')
}

task = '2. (циклы) Вывести числа в последовательности: 4 7 10 13 с помощью цикла.'
for (let i = 4; i < 14; i += 3) {
    document.write(i);
    document.write('<br/>');
}

task = '3. (циклы) Вывести числа 654 653 652 до нуля.'
for (let i = 654; i >= 0; i--) {
    document.write(i)
    document.write('<br/>')
}
task = '4. (циклы) Вывести все годы с 1983 до 2017.'
for (let i = 1983; i < 2018; i++) {
    document.write(i + '<br/>')
}

task = '5. (циклы) Вывести числа -4 -2 0 2 4 6 ...100.'
for (let i = -4; i <= 100; i++) {
    if (i % 2 == 0) {
        document.write(i + '<br/>')
    }
}

task = '6. (циклы) С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.'
for (let i = 1; i < 10; i++) {
        document.write(i*7 + '')
}

task = '7. (циклы) Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число; Например ӆ'
for (let i = 1000; i <= 2000; i++) {
        document.write('&#' * i)
}

task = '8. (циклы) Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).'
let total = 0
for (let i = 0; i <= 100; i++) {
     total += i
}
console.log(task, total)

task = '9. (циклы) С помощью цикла вывести произведение чисел от 1 до 50.'
total = 1
for (let i = 2; i <= 50; i++) {
     total *= i
}
console.log(task, total)

task = `10. Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.`
let size = prompt('Please enter array size', '5')
document.write(size)
let result = []
result[0] = 'x'
for (let i = 1; i <= size; i++) {
    result[i] = result[i-1] + 'x'
    // document.write(result)
}
console.log(task, result)

task = `11. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.`
size = prompt('Please enter array size', '5')
document.write(size)
result = []
result[0] = '1'
for (let i = 1; i <= size; i++) {
     result[i] = result[i-1] + result[i-1];
     // document.write(result)
}
console.log(task, result)

task = '12. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.'
result = [1,2,3,4,5,6,7,8,9,10,11,14]
total = 0
i = 0;
for (i = 0; i < result.length; i++) {
     total += result[i];
     if (total > 10) {break}
}
console.log(task, i + 1 + ' elements')

task = '13. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.'
result = [1,2,3,4,5,6,7,8,9,10,11,14]
let resultNew = [];
for (let i = 0; i < result.length; i++) {
     resultNew[i] = result[result.length-1 - i];
}
console.log(task, resultNew)

task = '14. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.'
result = [1, 4, 0, 78, 43, 4, 53, 7, 10, 8, 34, 3]
resultNew = []
let j = 0
for (let i = 0; i < result.length; i++) {
     let intVal = result[i]
     if (intVal > 0 && intVal < 10) {
          resultNew[j] = result[i]
          j++
     }
}
console.log(task, resultNew)


task = '15. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.'
resultNew = [];
j = 0;
for (let i = 0; i < result.length; i++) {
     if (result[i] % 2 == 0) {
          resultNew[j] = result[i]
          j++;
     }
}
console.log(task, resultNew)

task = '16. Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]'
result = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < result.length; i+=2) {
     let temp = result[i]
     result[i] = result[i+1]
     result[i+1] = temp
}
console.log(task, result)

task = '17. Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2]'
result = [1, 2, 3, 4, 5, 6]
result.unshift(result[5])
result.unshift(result[5])
result.pop()
result.pop()
result.push(result[2])
result.push(result[3])
result.splice(2,2)
console.log(task, result)