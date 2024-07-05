const newGridBtn = document.getElementById("new_grid")



newGridBtn.addEventListener('click', ()=>{
    while(true){
        num = parseInt(prompt('Size of the new grid (1-100)'))
        if (num >= 1 && num <= 100){
            cleanGrid()
            create_grid(num)
            break
        }else{
            alert('NUmber has to be between 1-100')
        }
    }
})

function create_grid(n){
    for(let i=0; i < n; i++){
        const row = document.createElement('div')
        row.classList.add('row')
        document.getElementById('container').appendChild(row)
        row.setAttribute('id', `row${i}`)
        for(let j=0; j < n; j++){
            const column = document.createElement('div')
            column.classList.add('column')
            column.addEventListener('mouseover', ()=>{
                column.style.backgroundColor = 'gray'
            })
            document.getElementById(`row${i}`).appendChild(column)
        }
    }
}

function cleanGrid(){
    document.getElementById('container').innerHTML = ''
}



create_grid(16)

