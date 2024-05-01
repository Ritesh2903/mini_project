console.log("Script loaded");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    let pp={
        name,
        email,
        phone
    }
    let sd = JSON.parse(localStorage.getItem('users'));
    if(sd==null || !Array.isArray(sd))
    {
        sd=[];
    }
    sd.push(pp);
    localStorage.setItem('users',JSON.stringify(sd));
    console.log(sd);
});
