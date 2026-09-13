const liCatalogue = document.querySelector('#categories')
console.log(`Number of categories: ${liCatalogue.children.length}`)

const catName = liCatalogue.querySelectorAll('.item').forEach(name => {
  console.log(`Category: ${name.firstElementChild.innerText}`)
  console.log(`Elements: ${name.lastElementChild.childElementCount}`)
})

// const catEl = liCatalogue.querySelectorAll('ul').forEach(name => {
//   console.log(`Elements: ${name.children.length}`)
// })
