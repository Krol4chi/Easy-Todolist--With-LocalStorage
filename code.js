let btn = document.getElementById(`btn`)
let myInput = document.getElementById(`myInput`)
let ulList = document.getElementById(`ulList`)

function createLi () {
  const createLi =  document.createElement(`li`)
  ulList.appendChild(createLi)
  createLi.textContent = myInput.value
console.log(createLi)

const createBtn = document.createElement(`button`)
createBtn.className = `btnDeleteStyle`
createBtn.textContent = `Удалить`
createLi.appendChild(createBtn)
createBtn.addEventListener(`click`, (e) => {
  ulList.removeChild(createLi)

})

}


btn.addEventListener(`click`, () => {
  if(myInput.value ===  `` ) {
    return ``
  }
  createLi(myInput.value)
  })





//  Функция loadFromStorage:Загружает данные из localStorage 
// при загрузке страницы.
//Для каждого элемента из localStorage вызывается createLi(), 
// чтобы создать список на основе сохраненных данных.

  
  function loadFromStorage() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach(item => {
      myInput.value = item; // Устанавливаем значение в input
      createLi(); // Создаем элемент списка
    });
  }
  



//Функция saveToStorage:
//Проходит по всем элементам списка ulList 
// и сохраняет их текстовое содержимое в массив.
//Этот массив затем записывается в localStorage.

  function saveToStorage() {
    const items = [];
    ulList.querySelectorAll('li').forEach(li => {
      items.push(li.firstChild.textContent); // Добавляем текст элемента списка
    });
    localStorage.setItem('items', JSON.stringify(items));
  }
  
  //Обновление localStorage:
//После нажатия кнопки добавления 
// (btn) вызывается saveToStorage.
//После нажатия кнопки удаления элемента (btnDeleteStyle) 
// также обновляется localStorage.

  btn.addEventListener('click', () => {
    if (myInput.value !== ``) {
      saveToStorage();
    }
  });
  
  // Обновление localStorage после удаления элемента
  ulList.addEventListener('click', (e) => {
    if (e.target.className === `btnDeleteStyle`) {
      saveToStorage();
    }
  });
  
  // Загрузка данных при загрузке страницы
  loadFromStorage();
























































// // let myInput = document.getElementById(`myInput`)
// let btnAdd = document.getElementById(`btnAdd`)
// let ulList = document.getElementById(`ulList`)
// let text = document.getElementById(`text`)



// function AddDelete () {

//   const newItem = document.createElement(`li`)
//   newItem.className = `StyleLi`
// ulList.appendChild(newItem)
// newItem.textContent = myInput.value


// btnAdd.addEventListener(`click`, () => {
//   if (myInput.value === ``) return
//   AddDelete(myInput.value)
//   })






// const btn = document.createElement(`button`)
// btn.className = `btn`
// btn.textContent = `Add`
// newItem.appendChild(btn)
// ulList.appendChild(newItem)


// btn.addEventListener(`click`, () => {
//   ulList.removeChild(newItem)



// })

// }


