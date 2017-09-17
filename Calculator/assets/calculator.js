// jquery Coding 
$(document).ready(function()
{   $("#display").html("");
    var final = "", ans = "", result = "", value_res = "";
    $(".standard").click(function(){
        var value = $(this).val();     // Getting the value of the button clicked
        ans = $("#answer").val();      // Getting the value on the screen
        if(ans == 0) 
          ans = "";                    
        $("#answer").val(ans+value);   
        $("#display").html($("#display").html() + value);// Displaying on the memory pad
        final = $("#answer").val();   
    });
    $(".equals").click(function(){
        result = eval(final);          // Evalauating the result on equals to press 
        $("#answer").val(result);   
        var a = result.toFixed(2);
         $("#display").html($("#display").html() + "=" + a+ "<br>" + a);// Displaying on memory pad
    }); 
    $(".sc_operator").click(function(){ 
        sc_op = $(this).val();         // taking the values of the scientific operators 
        if(result == ""){              // Checking the result 
          result = final; 
        } 
        if(sc_op == 'sin'){               
          result = Math.sin(result);
        }
        if(sc_op == 'cos'){          
          result = Math.cos(result);
        }
        if(sc_op == 'tan'){           
          result = Math.tan(result);
        }
        if(sc_op == 'asin'){          
          result = Math.asin(result);
        }
        if(sc_op == 'acos'){          
          result = Math.acos(result);
        }
        if(sc_op == 'atan'){           
          result = Math.atan(result);
        }
        if(sc_op == 'ln'){           // for ln
          result = Math.log(result);
        }
        if(sc_op == 'log'){           // for log
          result = (Math.log(result) / Math.LN10);
        }
        if(sc_op == 'e(x)'){           // for e(x)
          result = Math.exp(result);
        }
        if(sc_op == '10^x'){           // for 10(x)
          result = Math.pow(10,result);
        } 
        if(sc_op == '2^x'){           // for 2(x)
          result = Math.pow(2,result);
        }
        if(sc_op == 'x²'){           // for x^2
          result = Math.pow(result,2);
        }
        if(sc_op == 'x³'){           // for x^3
          result = Math.pow(result,3);
        }
        if(sc_op == '√x'){           // for x^1/2
          result = Math.sqrt(result);
        }
        if(sc_op == '∛x'){           // for x^1/3
          result = Math.pow(result,1/3);
        }
        if(sc_op == '1/x'){           // for 1/x
          result = (1 / result);
        }
        function factorial(number)
        {
           var fact =1 ;
           for(i = 1; i <= number; i++){
              fact = fact * i ;
          }
          return fact;
        }
        if(sc_op == 'x!'){   // for factorial
           result = factorial(result);
        }
        if(sc_op == 'nCr'){
            var answer = "", res2 = "", x ="";
            if(result == 0){
              result = "Invalid";
            }
            else{
              $("#display").html($("#display").html() + "<b>C</b>");
              var number = Math.floor(result);
              result = " ";
              $(".number").click(function(){
                  var x = $(this).val();
                  res2 = res2 + x;
              });
            }
            $(".equals").click(function(){
            var no2 = Number(res2);
            var no1 = Number(number);
            if(no2 > no1){
                $("#answer").val("Invalid");
            }
            else{
                var r = factorial(no2);
                var n = factorial(no1);
                var a = factorial(no1 - no2);
                result = n/(r * a);
                $("#answer").val(result);
                $("#display").html($("#display").html() + "=" + result + "<br>");
            }
         });
        }
        if(sc_op == 'nPr'){
            var answer = "", res2 = "", x ="";
            if(result == 0){
                result = "Invalid";
            }
            else{
                $("#display").html($("#display").html() + "<b>P</b>");
                var number = Math.floor(result);
                result = "";
                $(".number").click(function(){
                var x = $(this).val();
                res2 = res2 + x;
              });
            }
            $(".equals").click(function(){
            var no2 = Number(res2);
            var no1 = Number(number);
            if(no2 > no1){
                $("#answer").val("Invalid");
            }
            else{
                var n = factorial(no1);
                var a = factorial(no1 - no2);
                result = n/(a);
                $("#answer").val(result);
                $("#display").html($("#display").html() + "=" + result + "<br>");
            }
           });
        }
        if(sc_op == 'floor'){           
          result = Math.floor(result);
        }
        if(sc_op == 'ceil'){           
          result = Math.ceil(result);
        }
        if(sc_op == 'e'){           
          result = Math.E;
        }
        if(sc_op == 'ln10'){           
          result = Math.LN10;
        }
        if(sc_op == '√1/2'){         
          result = Math.SQRT1_2;
        }
        if(sc_op == '√2'){          
          result = Math.SQRT2;
        }
        if(sc_op == 'ln2'){         
          result = Math.LN2;
        }
        if(sc_op == 'Pi'){         
          result = Math.PI;
        }
        if(sc_op == 'to_oct'){         
          var j = result, octal = ""; 
          while(j>0){ 
              octal = (j%8) + octal;
              j = Math.floor(j/8);
          }
         result = octal; 
        }
        if(sc_op == 'to_hd'){
          var j = result, hd = "";
          while(j >0){
              hd = (j % 16) + hd;
              if(hd == '10') {
                hd ='A';
               }  
              if(hd == '11') {
                hd ='B';
               }
              if(hd == '12') {
                hd ='C';
               }
              if(hd == '13') {
                hd ='D';
               } 
              if(hd == '14') {
                hd ='E';
               }
              if(hd == '15') {
                hd ='F';
                }
            j = Math.floor(j / 16);
          }
          result = hd;
        }
        if(sc_op == 'to_bin'){           // for ln
         result = (result >>> 0).toString(2);
        }
        $("#answer").val(result);
         if(sc_op == "e" || sc_op == "ln10" || sc_op == "ln2" || sc_op == "Pi" || sc_op == "√2" || sc_op == "√1/2"){
             $("#display").html($("#display").html() + "<br>(" + sc_op + ") = " + result.toFixed(4) + "<br>" + result.toFixed(4));
         }
        else 
            if(sc_op == "to_oct" || sc_op == "to_hd" || sc_op == "to_bin"){
              $("#display").html($("#display").html() + " " + sc_op + "=" + result + "<br>" + result);
            }
         else{
             $("#display").html($("#display").html() + "(" + sc_op + ") = " + result.toFixed(4) + "<br>" + result.toFixed(4));
         }
        
        
  });
    $(".cl").click(function(){         // Clearing all results
        result = 0;
        $("#answer").val(result);
        $("#display").html("");
    });
    $(".clear").click(function(){     // Clearing the values
        if(result == ""){
            result = final;
        }
        result = result.toString();
        var len = result.length;
        result = result.substr(0,(len - 1)); 
        $("#answer").val(result);
        r = $("#display").html();
        res = $("#display").html().length;
        $("#display").html(r.substr(0,res-1));
    });
});  
//Js Coding
var i = document.getElementById("instruct");
var m = document.getElementById("memory");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
function instruct(){
    i.style.display = "block";
    m.style.display = "none";
}
function memory(){
     i.style.display = "none";
     m.style.display = "block"; 
}