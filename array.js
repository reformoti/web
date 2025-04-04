// const names = ["Rostyslav", "Yulia", "Olena", "Igor"]

// names.push("Ruslan") // v kinec'
// names.unshift("Ruslan") // na pochatok (princip roboti) perepisue index vsih elementiv, povniy cikl
// const firstName = names.shift() // vidalyae 1 element
// const name = names.pop() // vidalyaye z kincya
// console.log(names.shift())
// console.log(firstName)
// console.log(name)
// console.log("names:", names, firstName);
// console.log(names.reverse()) // zvorotniy poryadok (mytye masiv, zminyue yogo)
// console.log(names.toReversed()) // ne zminyue stariy masiv, lishaye original NEW METHOD
// console.log(names)
// console.log(names.toReversed()); // ne zminyue stariy masiv, lishaye original NEW METHOD

const letters = ["1", "3", "2", "5"]

// const a = letters.sort(function (a, b) {
//   return b - a
// })

// letters.sort((a, b) => b - a)

// console.log(a)

// console.log(letters.toSorted()) // sortye
// console.log(letters)

// console.log(names.splice(2, 2)) // virizaye ELementi po index'y tezh ye toSpliced

// const greatWoman = "Yulia"
// const index = names.indexOf(greatWoman) // yaksho nema to vivede -1
// const newNames = names.with(index, "Yulia Sergiivna")
// names[index] = "Yulia Sergiivna"
// console.log(index)
// console.log(names)
// console.log(newNames)

/**
 * VAJLIVO
 */

const names = ["Rostyslav", "Yulia", "Olena", "Igor"]

// const capitalNames = names.map(function (n) {
//   const newName = "!" + n + "Rostyk"
//   // return undefined
//   return newName
// })
// console.log(capitalNames) // bez returna = undefined

// const capitalNames = names.map(function (name) {
//   return name.toLowerCase()
// })
// console.log(capitalNames)

// const capitalNames = names.map(function (name, index) {
//   if (index === 1) {
//     return "Yulia Sergiivna"
//   }
//   return name
// })
// console.log(capitalNames)

// console.log(names.includes("Rostyslav")) // true or false
// console.log(names.indexOf("Rosaasadtyslav") !== -1)

const people = [
  { name: "Rostyslav", budget: 4200 },
  { name: "Yulia", budget: 11100 },
  { name: "Olena", budget: 300 },
  { name: "Igor", budget: 8350 },
]

// console.log(people.indexOf({budget: 8350})) // tak ne byde pracyuvati rizni ssilki v oblasti pamyati, tomy js dymae sho rizni danni

// let findedPerson

// for (let person of people) {
//     if (person.budget === 8350) {
//         findedPerson = person
//     }
// }

// const findedPerson = people.find(function(person) {
//     // if (person.budget === 8350) {
//     //     return true // NYUANS NAGOLOSITI
//     // }
//     return person.budget === 8350
// })

// const finded = people.find((p) => p.budget === 8350) // Strilkova func
// console.log (finded)

// const findedPerson = people.findIndex(function(person) { // Tej verne -1 yaksho nema
//         return person.budget === 8350
//     })

// console.log(people[findedPerson])

// let sumBudget = 0
// const filtered = people.filter (function (p) {
//     return p.budget > 5000
// })
// console.log(filtered)
// filtered.forEach(function (p) {
//     sumBudget = sumBudget + p.budget
//     sumBudget += p.budget
// })

// Porahyvati sumarniy budjet lyudei > 5k
