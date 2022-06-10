function hideTab(){
    document.getElementById('tab').style.display ="none";
    document.getElementById('exit').style.display ="block";
    document.getElementById('showTab').style.display ="none"
    document.getElementById('xxxx').style.width ="100%";
}

function showTab(){
    document.getElementById('tab').style.display ="block";
    document.getElementById('showTab').style.display ="block"
    document.getElementById('exit').style.display ="none";
    document.getElementById('xxxx').style.width ="85%";
}

function getCast(){
    var x =  "";
    var list = JSON.parse(localStorage.getItem('cast')) || [];
    list.map((value,index)=>{
        x += 
                    `
                    <option value="${value.names}">${value.names}</option>
                    `;
        
    })
    $('#udtcas').html(x);
}
getCast()

function getCate(){
    var y =  "";
    var cat = JSON.parse(localStorage.getItem('category')) || [];
    cat.map((value,index)=>{
        y += 
                    `
                    <option value="${value.names}">${value.names}</option>
                    `;
        
    })
    $('#udtcat').html(y);
}
getCate()


function getUser(){
    var u =  "";
    var user = JSON.parse(localStorage.getItem('user')) || [];
    user.map((value,index)=>{
        u += 
                    `
                    <div class="hello-user" >Welcome ${value.username}</div>
                    `;
        
    })
    $('#welcome').html(u);
}
getUser()