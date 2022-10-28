const btnAdd = document.querySelector('.fab')
const list = document.getElementsByClassName('task_list')[0]
const listItem = document.querySelector('.task_list_item')

const node = document.createElement('li')

btnAdd.addEventListener('click', function () {
  list.appendChild(listItem)
})