function cast(){
    var name = document.getElementById("casname").value;
    var decr = document.getElementById("casdes").value;
    var year = document.getElementById('yearBorn').value;
    var country = document.getElementById('country').value;
    var cast= {
        names:name,
        decr:decr,
        year:year,
        country:country
    }
    return cast
}

function AddCas(cast) {
    // debugger;
   
    var list;
    if (localStorage.getItem('cast') == null) {
        list = [cast];
    } else {
        list = JSON.parse(localStorage.getItem('cast')) || [];
        list.push(cast);
        alert("Đã thêm vao yeu thich thanh cong!");
        window.location.reload();
    }
    localStorage.setItem('cast', JSON.stringify(list));
    console.log(JSON.stringify(list))
    
}

function LoadDataCas() {
    var infor =  "";
    var data = JSON.parse(localStorage.getItem('cast')) || [];
    data.map((value,index)=>{
        infor += 
                    `
                    <tr>
                        <td >${index+1}</td>
                        <td>${value.names}</td>
                        <td>${value.decr}</td>
                        <td>${value.year}</td>
                        <td>${value.country}</td>
                        <td >
                            <div id="show" ><i class="fa-solid fa-pen-to-square" onclick="getContentCas(${index})" ></i></div>
                        </td>
                        <td><i onclick="XoaCas(${index+1})" class="fa fa-remove" ></i></td>
                  
                    </tr>
                    `;
    })
    
    $('#render_data_cas').html(infor);
    
} 
LoadDataCas()  

function getContentCas(index){
    list = JSON.parse(localStorage.getItem('cast')) || [];
    document.getElementById('index_cas').value = index;
    document.getElementById('casname').value = list[index].names;
    document.getElementById('casdes').value = list[index].decr;
    document.getElementById('yearBorn').value = list[index].year;
    document.getElementById('country').value = list[index].country;

    document.getElementById('update_cas').style.display ="inline-block";
    document.getElementById('add_cas').style.display = "none";
}

function updateCas(){
    list = JSON.parse(localStorage.getItem('cast')) || [];
    var index = document.getElementById('index_cas').value;
    list[index] = {
        id : index+1,
        names:document.getElementById('casname').value,
        decr:document.getElementById('casdes').value,
        year:document.getElementById('yearBorn').value,
        country:document.getElementById('country').value
    }
    localStorage.setItem('cast', JSON.stringify(list));
    
    window.location.reload();
    LoadDataCas()  

}

function XoaCas(id) {
    var list = JSON.parse(localStorage.getItem('cast'));

    if(confirm('Bạn có chắc chắn muốn xóa diễn viên này?')){
        var index = list.findIndex(x => x.id == id);
        list.splice(index,1);
        localStorage.setItem('cast', JSON.stringify(list));
        window.location.reload();
    }
    LoadData();
}

function XoaCasts() {
    if (confirm("Bạn muốn xóa tất cả diễn viên đã có?")) {
        localStorage.setItem('cast', null);
        location.reload();
    }
}