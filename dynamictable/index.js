let btn = document.getElementById("btn");
btn.addEventListener('click',()=>{
    let x = document.getElementById("t1").value;
    let y = document.getElementById("t2").value; // Getting the value of the element
    let arr = x.split('#');
    let arr2 = y.split('#');
    let n1 = parseInt(arr[0]); // Convert strings to integers
    let m1 = parseInt(arr[1]);
    let num1 = parseInt(arr[2]);
    let n2 = parseInt(arr2[0]);
    let m2 = parseInt(arr2[1]);
    let num2 = parseInt(arr2[2]);
    let mat=[];
    let mat1=[];
    let r='';
    let z= '';
    for(let i=0; i<n1; i++) {
        let rr=[];
        r='';
        let num = num1*(i+1);
        r+='<tr>';
        for(let j=0; j<m1; j++) {
            r+=`<td>${num}</td>`;
            rr.push(num);
            num+=(i+1);
        }
        mat.push(rr);
        r+='</tr>';
        z+=r;
    }
    let table1 = document.getElementById("table1");
    table1.innerHTML=z;
    r='';
    z= '';
    for(let i=0; i<n2; i++) {
        let rr=[];
        r='';
        let num = num2*(i+1);
        r+='<tr>';
        for(let j=0; j<m2; j++) {
            r+=`<td>${num}</td>`;
            rr.push(num);
            num+=(i+1);
        }
        mat1.push(rr);
        r+='</tr>';
        z+=r;
    }
    let table2 = document.getElementById("table2");
    table2.innerHTML=z;
    let table3 = document.getElementById("res");

    if(num1==num2)
    {
        table3.innerHTML=z;
    }
    else
    {
        let zz='';
        for(let i=0;i<n1;i++)
        {
            let rr='';
            rr+='<tr>'
            for(let j=0;j<m1;j++)
            {
                let aa = mat[i][j] * mat1[i][j];
                rr+=`<td>${aa}</td>`;
            }
            rr+='</tr>';
            zz+=rr;
        }
        table3.innerHTML=zz;
    }
})
