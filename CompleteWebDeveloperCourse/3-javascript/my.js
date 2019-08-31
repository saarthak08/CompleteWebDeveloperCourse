
        var x=0;
        var myArray=new Array();
        myArray[0]="Pizza";
        myArray[1]="Burger";
        console.log(myArray[1]);
        document.getElementById('myButton').onclick=function(){
            document.getElementById('text').innerHTML='Hello Saarthak!';
            for(var i=1;i<=5;i++){
                console.log(i);
            }
            if(x==0){
                document.getElementById('text2').innerHTML=document.getElementById('text2').innerHTML+" awesome..";
                x++;
            }
            document.getElementById('header1').innerHTML="Hey There!";
            document.getElementById('styletext').style.color="red";
            document.getElementById('styletext').style.fontSize="50px";
        }
        document.getElementById('red_circle').onclick=function(){
            alert(myArray[0]);
            document.getElementById('red_circle').style.display="none";      
        }
        document.getElementById('blue_circle').onclick=function(){
            document.getElementById('blue_circle').style.display="none";      
        }
        document.getElementById('yellow_circle').onclick=function(){
            document.getElementById('yellow_circle').style.display="none";      
        }

            
