//div#header-1 img
// 1. get the Elements
const header1 = document.querySelector('div#header-1 img')
const hideBtn = document.querySelector('#hide-img')
const showBtn = document.querySelector('#show-img')
const changeRadiusBtn = document.querySelector('#change-radius')

hideBtn.addEventListener('click', function () {
  // perform this action:
  header1.style.display = 'none'
})

showBtn.addEventListener('click', function () {
  header1.style.display = 'block'
})

const sample = "empty"