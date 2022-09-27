function showAllClass() {
    //1. lay du lieu tu phia backend
    $.ajax({
        //loai cua request: GET, POST, PUT, ....
        type: "GET",
        cors: true ,
        crossDomain: true,
        contentType:'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        //duong dan cua API
        url: "http://localhost:8080/api/customers",
        //xu ly luc thanh cong
        success: function (data) {
            //2. ve lai cai bang
            console.log(data);
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += `<tr><td>${data[i].id}</td>x x
      <td>${data[i].name}</td>
      <td><a href="${data[i].id}" onclick="deleteClass(this)">Xoa</a></td></tr>`;
            }
            document.getElementById("tbody").innerHTML = content;
        }
    });
}
showAllClass();

function deleteClass(element) {
    // lay id
    let id = element.getAttribute("href");
    //goi API phia backend
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/api/customers/" + id,
        success: function (data) {
            console.log("Xoa thanh cong id " + id);
            //xoa the
            // thay doi giao dien
            showAllClass();
        }
    });
    //chan su kien mac dinh cua the
    event.preventDefault();
}
function create() {
    //lay ten
    let name = document.getElementById("name").value;
    //chuyen sang doi tuong
    let ob = {
        name: name
    };

    $.ajax({
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:63342",
            "Access-Control-Allow-Credentials": "true"
        },
        type: "POST",
        data: JSON.stringify(ob),
        url: "http://localhost:8080/api/customers",
        success: function () {
            showAllClass();
        }
    });
}
