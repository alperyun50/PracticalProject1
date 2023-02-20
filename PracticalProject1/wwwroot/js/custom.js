$(document).ready(function() {
    ShowDepartmentsData();
    ShowNamesData();
    
});

function ShowDepartmentsData() {
    $.ajax({
        url: '/Home/GetDepartments',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, statu, xhr) {
            var object = '';
            $.each(result, function (index, item) {
                object += '<tr>';
                //object += '<td>' + item.id + '</td>';
                object += '<td>' + item.code + '</td>';
                object += '<td><a href="#" class="Clink" id="listdept">' + item.department + '</a></td>';
                object += '<td><a href="#" class="btn btn-primary" id="btnEdit" onclick="GetDepartment('+item.id+')" >Edit </a></td>';
                object += '</tr>';
            });
            $('#department_data').html(object);
        },
        error: function () { 
            alert("Data can't get!..")
        }
    });
};


$("#listdept").click(function () {
    $("#listnames").css("color", "red");
});


//$("#listdept").click(function () {
//    var hedefHucre = $("#listnames").parent().next().next();
    
//    hedefHucre.css("color", "red");
//});


function ShowNamesData() {
    $.ajax({
        url: '/Home/GetNames',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, statu, xhr) {
            var object = '';
            $.each(result, function (index, item) {
                object += '<tr>';
                //object += '<td>' + item.id + '</td>';
                object += '<td>' + item.code + '</td>';
                object += '<td id="listnames">' + item.names + '</td>';
                object += '</tr>';
            });
            $('#name_data').html(object);
        },
        error: function () {
            alert("Data can't get!..")
        }
    });
};


function GetDepartment(id) {
    debugger
    $.ajax({
        url: '/Home/GetDepartment?id=' + id,
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (response) {
            $('#editModal').modal('show');
            $('#deptId').val(response.id);
            $('#Code').val(response.code);
            $('#Department').val(response.department);
        },
        error: function () {
            alert("Data not found!..")
        }
    });
}; 


function UpdateDepartment() {
    var objData = {
       Id: $('#deptId').val(),
       Code: $('#Code').val(),
       Department: $('#Department').val()
    } 

    $.ajax({
        url: '/Home/UpdateDepartments',
        type: 'Post',
        data: objData,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded ;charset=utf-8;',
        success: function (response) {
            alert("Data edited..");
            ShowDepartmentsData();
            hidePopup();
        },
        error: function () {
            alert("Data not edited!..")
        }
    });
}



//$('#btnEditb').click(function () {
//    $('#editModal').modal('show');
//});


//function AddDepartment() {
//    var objData = {
//       Name: $('#Code').val(),
//       Department: $('#Department').val()
//    }

//    $.ajax({
//        url: '/Home/',
//        type: 'Post',
//        data: objData,
//        dataType: 'json',
//        contentType: 'application/x-www-form-urlencoded ;charset=utf-8;',
//        success: function (response) {
//            alert("Data saved..");
//            ShowDepartmentsData();
//            hidePopup();
//        },
//        error: function () {
//            alert("Data not edited!..")
//        }
//    });
//};


function hidePopup() {
    $('#editModal').modal('hide');
}