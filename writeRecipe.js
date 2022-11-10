// 레시피 대표사진 올릴 때 파일 드래그 앤 드롭 기능으로 올리기
var uploadFiles = [];
var $drop = $("#drop");

$drop.on("dragenter", function (e) { //드래그 요소가 들어왔을떄
    $(this).addClass('drag-over');
}).on("dragleave", function (e) { //드래그 요소가 나갔을때
    $(this).removeClass('drag-over');
}).on("dragover", function (e) {
    e.stopPropagation();
    e.preventDefault();
}).on('drop', function (e) { //드래그한 항목을 떨어뜨렸을때
    e.preventDefault();
    $(this).removeClass('drag-over');

    var files = e.originalEvent.dataTransfer.files; //드래그&드랍 항목
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var size = uploadFiles.push(file); //업로드 목록에 추가
        preview(file, size - 1); //미리보기 만들기
    }
});

function preview(file, idx) {
    var reader = new FileReader();
    reader.onload = (function (f, idx) {
        return function (e) {
            var div = '<div class="thumb"> \
        <div class="close" data-idx="' + idx + '">X</div> \
        <img src="' + e.target.result + '" title="' + escape(f.name) + '"/> \
      </div>';
            $("#thumbnails").append(div);
        };
    })(file, idx);
    reader.readAsDataURL(file);
}
$("#btnSubmit").on("click", function () {
    var formData = new FormData();
    $.each(uploadFiles, function (i, file) {
        if (file.upload != 'disable') //삭제하지 않은 이미지만 업로드 항목으로 추가
            formData.append('upload-file', file, file.name);
    });
    $.ajax({
        url: '/api/etc/file/upload',
        data: formData,
        type: 'post',
        contentType: false,
        processData: false,
        success: function (ret) {
            alert("완료");
        }
    });
});
$("#thumbnails").on("click", ".close", function (e) {
    var $target = $(e.target);
    var idx = $target.attr('data-idx');
    uploadFiles[idx].upload = 'disable'; //삭제된 항목은 업로드하지 않기 위해 플래그 생성
    $target.parent().remove(); //프리뷰 삭제
});


//레시피 카테고리 입력할 때 선택한 셀렉트 박스 값 인풋에다가 넣기

function handleOnChange1(e1) {
    // 선택된 데이터의 텍스트값 가져오기
    const text = e1.options[e1.selectedIndex].text;
    
    console.log(e1.options);
    console.log(text);
    
    if(document.getElementById("tag1")) {
        console.log("yes")
    }

    document.getElementById("tag1").value = text

  }

function handleOnChange2(e2) {
    // 선택된 데이터의 텍스트값 가져오기
    const text = e2.options[e2.selectedIndex].text;
    
    console.log(e2.options);
    console.log(text);

    if(document.getElementById("tag2")) {
        console.log("yes")
    }

    document.getElementById("tag2").value = text

  }

  function handleOnChange3(e3) {
    // 선택된 데이터의 텍스트값 가져오기
    const text = e3.options[e3.selectedIndex].text;
    
    console.log(e3.options);
    console.log(text);

    if(document.getElementById("tag3")) {
        console.log("yes")
    }

    document.getElementById("tag3").value = text

  }

  function handleOnChange4(e4) {
    // 선택된 데이터의 텍스트값 가져오기
    const text = e4.options[e4.selectedIndex].text;
    
    console.log(e4.options);
    console.log(text);

    if(document.getElementById("tag4")) {
        console.log("yes")
    }

    document.getElementById("tag4").value = text

  }

  function handleOnChange5(e5) {
    // 선택된 데이터의 텍스트값 가져오기
    const text = e5.options[e5.selectedIndex].text;
    
    console.log(e5.options);
    console.log(text);

    if(document.getElementById("human")) {
        console.log("yes")
    }

    document.getElementById("human").value = text

  }


  //버튼 누르면 재료 입력하는 칸 추가
//   function add() {
//     document.getElementById("add").onclick (function() {
//         document.getElementById("add").append("<br>  <input type='infood' class='#' placeholder='재료 입력' style='width:250px;'> ")
//     })
//   }

// $(document).add(function(){
//     $('#add').click(function(){
//       console.log('t');
//     })
// })