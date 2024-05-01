let fetchData=()=>{
    let xmr = new XMLHttpRequest();
    xmr.open("get","");
    xmr.send();
    xmr.onload=()=>{
        let res  = JSON.parse(xmr.responseText);
        console.log(res);
        localStorage.setItem('users',JSON.stringify(res));
        displayData();
    };

};

let displayData=()=>{
    let tbody = document.getElementById("tbody");
    tbody.innerHTML='';
    let st =  localStorage.getItem('user');
    st.map(
        (user, index) =>
          (tbody.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.address.city}</td>
                       
                    </tr>`)
      );
    
};

let btn  = document.getElementById("btn");
btn.addEventListener("click",()=>
{
    
})