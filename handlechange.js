//레시피 카테고리 입력할 때 선택한 셀렉트 박스 값 인풋에다가 넣기

function handleOnChange1(e1) {
  // 선택된 데이터의 텍스트값 가져오기
  const text = e1.options[e1.selectedIndex].text;

  console.log(e1.options);
  console.log(text);

  if (document.getElementById("tag1")) {
      console.log("yes")
  }

  document.getElementById("tag1").value = text

}

function handleOnChange2(e2) {
  // 선택된 데이터의 텍스트값 가져오기
  const text = e2.options[e2.selectedIndex].text;

  console.log(e2.options);
  console.log(text);

  if (document.getElementById("tag2")) {
      console.log("yes")
  }

  document.getElementById("tag2").value = text

}

function handleOnChange3(e3) {
  // 선택된 데이터의 텍스트값 가져오기
  const text = e3.options[e3.selectedIndex].text;

  console.log(e3.options);
  console.log(text);

  if (document.getElementById("tag3")) {
      console.log("yes")
  }

  document.getElementById("tag3").value = text

}

function handleOnChange4(e4) {
  // 선택된 데이터의 텍스트값 가져오기
  const text = e4.options[e4.selectedIndex].text;

  console.log(e4.options);
  console.log(text);

  if (document.getElementById("tag4")) {
      console.log("yes")
  }

  document.getElementById("tag4").value = text

}

function handleOnChange5(e5) {
  // 선택된 데이터의 텍스트값 가져오기
  const text = e5.options[e5.selectedIndex].text;

  console.log(e5.options);
  console.log(text);

  if (document.getElementById("human")) {
      console.log("yes")
  }

  document.getElementById("human").value = text

}