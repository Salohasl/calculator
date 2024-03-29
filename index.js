<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>Калькулятор</title>
 </head>
 <body>
     <div class="input">
        <input class="num1" value="" placeholder="1-ое число">
      <div class="button">
        <button class="divide">÷</button>
        <button class="multiply">*</button>
        <button class="minus">-</button>
        <button class="plus">+</button>
      </div>
        <input class="num2" value="" placeholder="2-ое число">
        <p>Результат</p>
     </div>
     
    <style>
        .input{
            display: flex;
            justify-items: center;
            align-items: center;
            flex-direction: column;
        }
        input{
            margin-top: 20px;
        }
        .button{
            flex-direction: row;
            text-align: center;
        }
        button{
            margin: 10px;
        }
        p{
          background-color: white;
          width: 20px;
          height: 20px;
        }
        .divide{    
            background-color: black;
            color: orange;
            border: none;
            font-size: 40px;
        }
        .multiply{
            background-color: black;
            color: orange;
            border: none;
            font-size: 40px
        }
        .minus{            
            background-color: black;
            color: orange;
            border: none;
            font-size: 40px;
        }
      
        .plus{
            background-color: black;
            color: orange;
            border: none;
            font-size: 40px;
        }
    </style>
  <script>
    let num1 = document.querySelector('.num1');
    let num2 = document.querySelector('.num2');
    let elem=document.querySelector('p');
    let divide=document.querySelector('.divide');
    let multiply=document.querySelector('.multiply');
    let minus=document.querySelector('.minus')
    let plus=document.querySelector('.plus');
    let number = 0;
   
    plus.addEventListener('click', ()=>{
    number = Number(num1.value) + Number(num2.value);
    elem.textContent = number;
    });
 
    minus.addEventListener('click', ()=>{
        number = Number(num1.value) - Number(num2.value);
        elem.textContent = number;
    });
    
    multiply.addEventListener('click', ()=>{
        number = Number(num1.value) * Number(num2.value);
        elem.textContent = number;
    });
    
    divide.addEventListener('click', ()=>{
        number = Number(num1.value) / Number(num2.value);
        elem.textContent = number;
    });
   
    </script>
 </body>
</html>
