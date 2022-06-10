

function addComment(){
    var account = JSON.parse(localStorage.getItem('user'));
    var username = account.tailkhoan;
    var content = document.getElementById('comment-form').value;
    var img = document.getElementById('imgxx').src;
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let second = d.getSeconds();
    
    var comment = { username: username, content: content,img:img,hour:hour,minutes:minutes,second:second };

    var list;
    if (localStorage.getItem('comment') == null) {
        list = [comment];
    } else {
        list = JSON.parse(localStorage.getItem('comment')) || [];
        list.push(comment);
        window.location.reload();
    }
    localStorage.setItem('comment', JSON.stringify(list));
    console.log(JSON.stringify(list))
}

function clearForm(){
    document.getElementById("comment-form").value='';
    document.getElementById("imgxx").style.display="none"
}

function upload(fileInput){
    if(fileInput.files && fileInput.files[0]){
    var reader = new FileReader();
    reader.onload = function(e){
        $('#imgxx').attr('src',e.target.result)
        document.getElementById('imgxx').style.display= "block"
    }
    reader.readAsDataURL(fileInput.files[0])
    }
}

var imgComment = document.getElementById('imgxx').src;
if(imgComment="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACACAMAAABDXWneAAAANlBMVEX///+hoaGYmJj8/PzNzc2wsLDR0dHs7Ozg4ODn5+fCwsLZ2dm1tbWbm5uenp719fW7u7uoqKi/7Z2tAAABk0lEQVR4nO3X3a6rIBBAYQERf8qg7/+yx1rbWHWfojfDxfoud0KyMpmNtKoAAAAAAAAAAAAAALjNNfUNSaU12GivirZXae3sNDQXjWqtj8tnBlp/erem5LLPKLc2k/FN7hnd1j6KkVhnnlFtTdYsQt4Z1dYhLqmxyztD629Lq5Ol1Z98OkN3vB90/7cGG0XsyVibaMfDH5XvrNQ/+pOptvNyHK8H7W/BKTc9l0P28y6ydVz2WGQ38RJb1+vByG5lC2wNa+phZctrdV7ercZ+fdEKad1cpuNnrLNpu7JltHZ+fEe129TvlS2iNVkR8xptEPPFbl6MJbQuG7pO0O9at4+wElpfG7pMsLf71PfAqyJa27VPQtUepjpfXJ9A/dbwmaDvjqXP2KGY1s2GTidjfcamQlrreNr3tbLeFdF6tqF/raz2+/X3VJ9sq9/qxpyxzqag3pqxrC/itVu73NTX81CzNRkbs9lBt7W9RLHVh6tqtVaZf/xdYiTqtKaHv6FVaa3cHTqpAAAAAAAAAAAAAID/+AeI4hprlM9EDAAAAABJRU5ErkJggg=="){
    document.getElementById('imgxx').style.display ="none"
}

