console.log('hello')

function create_grid(n){
    for(let i=0; i < n; i++){
        const row = document.createElement('div')
        row.classList.add('row')
        document.getElementById('container').appendChild(row)
        row.setAttribute('id', `row${i}`)
        for(let j=0; j < n; j++){
            const column = document.createElement('div')
            column.classList.add('column')
            document.getElementById(`row${i}`).appendChild(column)
        }
    }
}

create_grid(16)