let String = "";
let buttons=document.querySelectorAll('.button');
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.innerHTML == '=') {
        String = eval(String);
        document.querySelector('input').value = String;
      } else if (e.target.innerHTML == 'AC') {
        String = "";
        document.querySelector('input').value = String;
      } 
      else if(e.target.innerHTML == '+/-' ){
        String = String * -1;
        document.querySelector('input').value = String;
      }
      else if(e.target.innerHTML == 'X' ){
        String = String + '*';
        document.querySelector('input').value = String;
      }
      else {
        String = String + e.target.innerText;
        document.querySelector('input').value = String;
      }
    });
  });