// setTimeout(() => {
//     console.log('hello world')
// }, 5000)

// const myStr = 'kgkjkjf';
// console.log(myStr instanceof String);
// const upperCase = myStr.toUpperCase()
// console.log(upperCase)


// const a = 'Good morning'
// const newS = a.replace('morning', 'evening')
// console.log(newS);

// const myA = [1, 3, '434ese']
// myA.push('555')
// const myA2 = [...myA, 5, 6, 0, 'ggg']
// myA2.forEach(e => console.log(e))

// let interval
// interval = setInterval(() => { console.log('gggg123'), 1000 })

// if (interval) {
//     setTimeout(() => { clearInterval(interval) }, 2000)
// }

// const myA = [1, 3, '434ese']
// myA.unshift('hello')
// console.log(myA)

// let exampleObj = {
//     book: "Sherlock Holmes",
//     author: "Arthur Conan Doyle",
//     genre: "Mystery"
// };

// for (let key in exampleObj) {
//     if (exampleObj.hasOwnProperty(key)) {
//         console.log(exampleObj[key])
//     }
// }

// console.log((Math.random() * (1 - 5) + 5).toFixed())
// let arr = [1, 4]

// function genereteRandomNum(min, max) {
//     return (Math.random() * (max - min) + min).toFixed();
// }

// function addToArr(arr) {
//     const random = genereteRandomNum(1, 5);
//     let newArr = [...arr]

//     if (!arr.includes(random)) {
//         newArr.push(random)
//     }

//     return newArr
// }

// console.log(addToArr(arr))
// console.log(addToArr(arr))


// let a = 3;
// let i = a === 5 ? console.log(5) : a === 3 ? console.log(3) : console.log('hhg')

// function cityInfo(index, element) {
//     return `${element} at index ${index}`
// }

// const arr = ['London', 'Oslo', 'Kiev'];

// arr.map((el, ind) => {
//     return console.log(cityInfo(ind, el))
// })

// const ob = {
//     name: 'Mariia',
//     age: '25',
//     height: '170'
// }

// console.log(JSON.parse(JSON.stringify(ob)))

// const posts = [
//     { id: 1, name: 'fjjfjfkjkjkdf' },
//     { id: 3, name: 'nfjhjh00000' },
//     { id: 6, name: '333333' },
// ]

// function findPostById(pid, posts) {
//     let pos = posts.find(post => post.id === pid)
//     return pos?.name

// }

// console.log(findPostById(6, posts))

// const ar1 = [1, 2, 3]
// const ar2 = [1, 2, 6]

// function compareArr(ar1 = [], el = 0) {
//     let check = ar1.find(ela => ela === el)
//     if (check) {
//         return check
//     }

//     return ar1

// }

// console.log(compareArr(ar1, 1))
// const posts = [
//     { postId: 1, qtyComment: 4 },
//     { postId: 2, qtyComment: 8 },
//     { postId: 3, qtyComment: 10 },
// ]

// function popularPost(posts, minQtyComment) {
//     return posts.reduce((accumulator, el) => {
//         el.qtyComment >= minQtyComment ? accumulator.push(el.postId) : false;
//         return accumulator
//     }, [])
// }
// console.log(popularPost(posts, 8))

// const posts = [
//     { postId: 1, qtyComment: 4, category: 'animal' },
//     { postId: 2, qtyComment: 8, category: 'tech' },
//     { postId: 3, qtyComment: 10, category: 'tech' },
//     { postId: 4, qtyComment: 4, category: 'animal' },
// ]
// if (!accumulator.category) {
//     accumulator.category = elem.category
//     accumulator.qty = elem.qtyComment
// } else {
//     accumulator.qty += elem.qtyComment
// }

// function countPosts(posts) {
//     return posts.reduce((accumulator, elem) => {

//         if (accumulator[elem.category]) {
//             accumulator[elem.category] += elem.qtyComment
//         } else {
//             accumulator[elem.category] = elem.qtyComment
//         }

//         return accumulator
//     }, {})
// }

// console.log(countPosts(posts))

// const product = [
//     { postId: 1, qty: 4, category: 'animal' },
//     { postId: 2, qty: 8, category: 'tech' },
//     { postId: 3, qty: 10, category: 'tech' },
//     { postId: 4, qty: 4, category: 'animal' },
// ]

// function sortProd(prod) {
//     let copyP = [...prod];

//     return copyP.sort((i, j) => j.qty - i.qty);

// }
// console.log(sortProd(product))

// function meanSqre(...numbers) {
//     let sum = numbers.reduce((ac, el) => (ac + el / numbers.length), 0)
//     return sum.toFixed(2)
// }

// console.log(meanSqre(2, 2, 1, 1, 4, 4, 10, 10, 10, 10, 10))

// function minMax(...nums) {
//     return [Math.min(...nums), Math.max(...nums)]
// }

// let min, max

// [min, max] = minMax(1, 3, 4, 6, 8, 9)
// console.log(min, max)

// function personInfo(obj) {

//     return obj.map(el => {
//         return {
//             postId: el.postId,
//             postComment: el.comment,
//             postTitle: el.title
//         }
//     })

// }

// const info = {
//     postId: 1,
//     comment: 2,
//     title: 'klkkl'
// }
// const { title, ...i } = info

// console.log(i)

// class ExtendetArr extends Array {
//     sum() {
//         return this.reduce((accum, el) => accum + el, 0)
//     }

//     onlyNumb() {
//         return this.filter(el => typeof el === 'number')
//     }
// }

// const n = new ExtendetArr(2, 1, 1, 1, 'a')

// console.log(n.onlyNumb())


// class CostomArr extends Array {
//     customPush(el) {

//         this[this.length] = el
//         return this
//     }
// }

// const a = new CostomArr(1, 2, 3, 'k')

// console.log(a.customPush(9))
// console.log(a.customPush(99))
// console.log(a.length)

// function sumN(...n) {
//     return n.reduceRight((ac, el) => ac + el, 0)
// }
// console.log(sumN(1, 1, 2, 3, 4, 2))


// let count = 0;
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const str = 'Today is the best day of my life';
// str.split('').map((e) => {
//     if (vowels.includes(e)) {
//         count++
//         return count
//     }

//     return count
// })

// console.log(count)

// let a = 1;
// let b = 2;
// [a, b] = [b, a]
// console.log(a)
// console.log(b)


// function createGreeting() {
//     let t = 'Hey, this is'

//     function greet(name) {
//         return `${t} ${name}!`
//     }

//     function changeT(tN) {
//         t = tN
//         return t
//     }

//     return {
//         greet,
//         changeT
//     }
// }

// const check = createGreeting();
// console.log(check.greet('Bob'))
// console.log(check.changeT('Hello my friend'))
// console.log(check.greet('BOlob'))

// class Fruit {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     getPrice() {
//         return this.price
//     }
// }

// const apple = new Fruit('Apple', 10);
// console.log(apple.getPrice())

// const obj = {
//     a: 1, b: 3, c: 4
// }

// let count = 0;

// function f() {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             return obj[key]
//         }
//     }
// }

// console.log(f())

const a = [1, 2, -4, -9, 0, 3];

function f(a) {
    let pos = 0;
    let neg = 0;
    a.forEach(el => {
        if (el >= 0) {
            pos += el;
        } else {
            neg += el
        }
    })

    return [pos, neg]
}
console.log(f(a))