function showresult(){
  var yes = 0;
  var no = 0;
  for(var i = 0; i < 3; i++){
    try{
    var radio = document.querySelector(`input[name = "q${i+1}"]:checked`); //deleti it and student can not rewrite it.
    if(radio.value == "yes"){
      yes++
      }
    else{
      no++;
    }
    }
    catch{
      alert("answer all questions");
      return false;
    } 
  }
  alert(`yes:${yes} no:${no}`);
}

