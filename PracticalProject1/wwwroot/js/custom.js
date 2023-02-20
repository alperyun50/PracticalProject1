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
                object += '<td><a href="javascript:void(0)" class="Clink" id="listdept" onclick="ChangeColor(' + item.id +')">' + item.department + '</a></td>';
                object += '<td><a href="#" class="btn btn-primary" id="btnEdit" onclick="GetDepartment(' + item.id + ')" >Edit </a></td>';
                object += '</tr>';
            });
            $('#department_data').html(object);
        },
        error: function () { 
            alert("Data can't get!..")
        }
    });
};



var departmentIndex;

function selectedRow() {
    
     var table = document.getElementById("department_data");

    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].onclick = function ()
        {
            departmentIndex = this.rowIndex;
            //this.classList.toggle("selected");
            //return index;
        };     
    }
}

selectedRow();

$$("#department_data").click(function () {   
    selectedRow();
    var namecell = document.getElementById("name_data");
   
    $.each(namecell, function (nameIndex, item) {
        if (nameIndex == 0 && departmentIndex == 0) {
            $(item).css("color", "blue");
        }
        if (nameIndex == 1 && departmentIndex == 1) {
            $(item).css("color", "purple");
        }
        if (nameIndex == 2 && departmentIndex == 1) {
            $(item).css("color", "purple");
        }
        if (nameIndex == 3 && departmentIndex == 2) {
            $(item).css("color", "green");
        }
    });
});

//$("#listdept").click(function () {   
//    var linkIndex = $(this).parent().index();
//    var cells = $("#listnames");
//    if (linkIndex == 0) {
//        var link0 = linkIndex;
//    }
//    else if (linkIndex == 1) {
//        var link1 = linkIndex;
//    }
//    else if (linkIndex == 2) {
//        var link2 = linkIndex;
//    }
    
//    $.each(cells, function (index, item) {
//        if (index == link0) {
//            $(item).css("color", "blue");
//        }
//        else if (index == link1) {
//            $(item).css("color", "purple");
//        }
//        else if (index == link2) {
//            $(item).css("color", "green");
//        }
        
//    });
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
    //debugger
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


function hidePopup() {
    $('#editModal').modal('hide');
}