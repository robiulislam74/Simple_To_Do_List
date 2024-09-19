let sum = 0;
document.querySelector('#add_btn').addEventListener('click',function(){
    const input = document.querySelector('#text_input')
    sum = sum + 1

    const mainTopContainer = document.querySelector('#write_container')
    const divContainer = document.querySelector('#newAdding_box')
    const btnBox = document.querySelector('#btn_box')
    const divCreate = document.createElement('div')
    divCreate.setAttribute('class','flex justify-between items-center')
    // divCreate.innerHTML=`
    //     <div class="flex justify-between items-center">
    //         <h5>${sum}</h5>
    //         <h5 class="w-2/4">${input.value}</h5>
    //         <button id="delete_btn" class="btn btn-sm btn-error">Delete</button>
    //      </div>
    // `
    // divContainer.appendChild(divCreate)
    const countNumber = document.createElement('h5')
    countNumber.innerText = sum;
    const description = document.createElement('p')
    description.innerText = input.value;
    description.setAttribute('class','w-2/4')
    // delete button create
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute('class','btn btn-sm btn-error')
    
    const clearNewBtn = document.getElementById('clearAll_btn')
    if(!clearNewBtn){
         // clearAll button create
        const clearButton = document.createElement('button')
        clearButton.innerText = "Clear All"
        clearButton.setAttribute('class','btn btn-active btn-secondary')
        clearButton.setAttribute('id','clearAll_btn')
        btnBox.appendChild(clearButton)
    }

    const reAddingBox = document.createElement('div')
    reAddingBox.setAttribute('id','newAdding_box')
    reAddingBox.classList.add('space-y-6')

    divCreate.append(countNumber,description,deleteBtn)
    divContainer.appendChild(divCreate)
    document.querySelector('#text_input').value = ""

    // item delete function here
    deleteBtn.addEventListener('click',function(){
        divCreate.remove()
    })
     // All items delete function here
     const clearAllButton =  document.querySelector('#clearAll_btn');
     clearAllButton.addEventListener('click',function(){
        const newAddingBox =  document.getElementById('newAdding_box')
        newAddingBox.remove()
        clearAllButton.remove()
        sum = 0;
        mainTopContainer.append(reAddingBox)
 })

})

