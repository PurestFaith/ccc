function init() {
  return [1, 2, 3, 'add']
}
const response = init()
console.log(response)

const arr = []
const add = () => {
  arr.push('hello')
  console.log(arr)
}
add()
