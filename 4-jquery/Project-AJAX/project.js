var ourRequest= new XMLHttpRequest();
var pageCounter=1;
var animalContainer=document.getElementById('animal-info');
var button=document.getElementById('btn');
button.addEventListener("click",()=>{
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    ourRequest.onload=()=>{
        if(ourRequest.status>=200&&ourRequest.status<400){
            var ourData=JSON.parse(ourRequest.responseText);
            //console.log(ourData[0]);
            renderHTML(ourData);
        }
        else{
            alert('Server Error!');
        }
    }
    ourRequest.send();
    pageCounter++;
    if(pageCounter>3){
        button.classList.add("hide-me");
    }
});

ourRequest.onerror=()=>{
    alert('Connection Error!');
}

function renderHTML(data){
    var htmlString="";
    for(let i=0;i<data.length;i++){
        htmlString+="<p>"+data[i].name+" is a " +data[i].species+"</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend',htmlString);
}
