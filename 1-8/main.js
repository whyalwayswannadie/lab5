//1
// let x = 6,
//   y = 15,
//   z = 4
// x += y - x++ * z
// console.log('x = ', x)
// z = --x - y * 5
// console.log('z = ', z)
// y /= x + (5 % z)
// console.log('y = ', y)
// z = x++ + y * 5
// console.log('z = ', z)
// x = y - x++ * z
// console.log('x = ', x)
//2
// let num1 = prompt('Введите целочисленное первое значение', '')
// let num2 = prompt('Введите целочисленное второе значение', '')
// let num3 = prompt('Введите целочисленное третье значение', '')
// console.log('Ваши данные: ', num1, ' ', num2, ' ', num3)
// let res = Number(
//   (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3,
// )
// console.log('Среднее арифметическое: ', Math.round(res).toFixed(2))

//3
//   let radius = prompt('Введіть значення радіуса циліндра', '')
//   let height = prompt('Введіть цілочисельне висоти циліндра', '')
//   if (radius < 0) radius = -radius
//   if (height < 0) height = -height
//   let rad = document.createElement('h2')
//     rad.innerHTML = `Radius = ${radius}`
// document.body.appendChild(rad)

// let heightDOM = document.createElement('h2')
// heightDOM.innerHTML = `Height = ${height}`
// document.body.appendChild(heightDOM)

//   let Volume = Math.round(Math.PI * Math.pow(radius, 2) * height).toFixed(2)
// let Square = Math.round(2 * Math.PI * (radius + height)).toFixed(2)
// let volumeDOM = document.createElement('h2')
// volumeDOM.innerHTML = `Volume = ${Volume}`
// document.body.appendChild(volumeDOM)

// let SquareDOM = document.createElement('h2')
// SquareDOM.innerHTML = `Square = ${Square}`
// document.body.appendChild(SquareDOM)

//4
// let a = prompt('Введите число A', '')
// let b = prompt('Введите число В, больше А', '')
// var sum = 0

// if (a < b) {
//   let title = document.createElement('h3')
//   title.innerHTML = `Вы ввели промежуток: [ ${a};${b} ]`
//   document.body.appendChild(title)
// } else {
//   let title = document.createElement('h3')
//   title.innerHTML = 'Вы ввели некорректные данные'
//   document.body.appendChild(title)
// }

// while (a < b) {
//   a++
//   if (a < b) sum += a
//   if (a % 2 != 0) {
//     let resultNum = document.createElement('h3')
//     resultNum.innerHTML = `<br> Нечетное значение:${a}`
//     document.body.appendChild(resultNum)
//   }
// }
// let Sum = document.createElement('h3')
// Sum.innerHTML = `Сумма: ${sum}`
// document.body.appendChild(Sum)
//5
// function factorial(n) {
//   let result = 1
//   while (n--) result *= n + 1
//   return result
// }

//   let x = prompt('Введите число', '')
//   let res = factorial(x)

//   let number = document.createElement('h3')
//   number.innerHTML = `Вы ввели следующее число: ${x}`
//   document.body.appendChild(number)
//   let newAnswer = document.createElement('h2')
//   newAnswer.innerHTML = `Результат:  ${res}`
//   document.body.appendChild(newAnswer)

//6

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 12; j++) {
//     document.write('*\n')
//   }
//   let br = document.createElement('br')
//   document.body.appendChild(br)
// }
// document.write('<hr>')

// for (let i = 0; i < 6; i++) {
//   for (let j = 0; j < i + 1; j++) {
//     document.write('*\n')
//   }
//   document.write('<br>')
// }
// document.write('<hr>')

// var line = 10
// var space = 9
// var star = 1

// for (let i = 0; i < line; i++) {
//   for (let j = 0; j < space; j++) {
//     document.write('&nbsp\n')
//   }
//   for (let k = 0; k < star; k++) {
//     document.write('*')
//   }
//   space -= 1
//   star += 2
//   document.write('<br>')
// }
// document.write('<hr>')

// let size = 14
// let center = size / 2

// for (let i = 0; i < size; i++) {
//   for (let j = 0; j < size; j++) {
//     if (i <= center) {
//       //верхняя половина
//       if (j >= center - i && j <= center + i) document.write('*')
//       else document.write('&nbsp')
//     } else {
//       //нижняя половина
//       if (j >= center + i - size + 1 && j <= center - i + size - 1)
//         document.write('*')
//       else document.write('&nbsp')
//     }
//   }
//   document.write('<br>')
// }

//7

// let n = 10
// let array = []
// let odd = []
// let sum = 0

// for (i = 0; i < n; i++) {
//   let a = Math.round(Math.random() * 100)
//   array.push(a)
// }

// let min = array[0]
// let max = min
// for (i = 0; i < n; i++) {
//   if (array[i] > max) max = array[i]
//   if (array[i] < min) min = array[i]

//   if (array[i] % 2 != 0) odd.push(array[i])
//   sum += array[i]
// }
// let averenge = sum / n
// console.log(sum)
// console.log(odd)

// let arr = document.createElement('h3')
// arr.innerHTML = `Array: [${array}]`
// document.body.appendChild(arr)
// let max1 = document.createElement('h4')
// max1.innerHTML = `Max= ${max}`
// document.body.appendChild(max1)

// let min1 = document.createElement('h4')
// min1.innerHTML = `Min= ${min}`
// document.body.appendChild(min1)

// let aver = document.createElement('h4')
// aver.innerHTML = `Averange = ${Math.round(averenge).toFixed(2)}`
// document.body.appendChild(aver)

// let odd1 = document.createElement('h4')
// odd1.innerHTML = `Odd = [${odd}]`
// document.body.appendChild(odd1)

// let summa = document.createElement('h4')
// summa.innerHTML = `All sum = ${sum}`
// document.body.appendChild(summa)
// 8 

  function arrayTable(rows, cols) {
    let newArray = new Array(rows)
    for (let i = 0; i < rows; i++) {
      newArray[i] = new Array(cols)
      for (let j = 0; j < cols; j++) {
        let a = Math.floor(Math.random() * (100 - 2) - 20)
        newArray[i][j] = a
      }
    }
    return newArray
}
let rows = prompt('Enter the value of rows', '')
let cols = prompt('Enter the value of columns', '')

const array = arrayTable(rows, cols)
document.write(`You entered rows = ${rows} <br/>`)
document.write(`You entered columns = ${cols}`)

  let arr = document.createElement('h3')
  arr.innerHTML = `Array: `
  document.body.appendChild(arr)

  let copy = []
  copy = Array.from(array)
  for (let i = 0; i < rows; i++) {
    let arr = document.createElement('h3')
    arr.innerHTML = `[${array[i]}]`
    document.body.appendChild(arr)
    for (let j = 0; j < cols; j++) {
      if (i == j) {
        if (copy[i][j] < 0) copy[i][j] = 0
        else copy[i][j] = 1
      }
    }
  }
  document.write('Result <br/>')
  for (let i = 0; i < rows; i++) {
    let arr = document.createElement('h3')
    arr.innerHTML = `[${copy[i]}]`
    document.body.appendChild(arr)

    }

