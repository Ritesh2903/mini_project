let display=(()=>{
    let db = JSON.parse(localStorage.getItem('users'));
    let tb = document.getElementById("tbody")
    tb.innerHTML='';
    db.map(
        dbs=>(
            tb.innerHTML+=`<tr>
            
            <td>${dbs.name}</td>
            <td>${dbs.email}</td>
            <td>${dbs.phone}</td>
            </tr>
            `
        )
    )
})

display();