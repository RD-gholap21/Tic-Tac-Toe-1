flag=true;
var state=[1,0,1,1,0,1,0,1,0];
var winnerDiv=document.getElementById('winner')
let count1=1;
let count2=1;





document.getElementById('btn').addEventListener('click', A=()=>{
    // alert('hii')
    let A=document.getElementById('box');
    let B=document.getElementById('index');
    if(A.style.display==='block'){
        A.style.display='none';
    }
    else{
        A.style.display='block';
        B.style.display='none';
    }

    let PL1=document.getElementById("player1");
    let PL2=document.getElementById("player2");
    let name1=document.getElementById("user1-name")
    let name2=document.getElementById("user2-name")
    name1.innerHTML=PL1.value;
    name2.innerHTML=PL2.value;

    if(PL1.value=="" || PL2.value==""){
        alert('please enter your name');  
        B.style.display='block';
        A.style.display='none';
    }
    
})

document.getElementById('table').addEventListener('click', e=(ONE)=>{
    // console.log(ONE.target);
    element(ONE.target);
});


function element(div){
    id=div.id;
    if(flag){
        if(state[id]==0 || state[id]==1){

            document.getElementById(id).innerHTML='X';
            flag=!flag;
            state[id]='X'
            checkwin(!flag);

        }
        else{
            alert('No click');
        }
}
else{
    if(state[id]==0 || state[id]==1){

        document.getElementById(id).innerHTML='O';
        flag=!flag;
        state[id]='O'
        checkwin(!flag);

    }
    else{
        alert('No click');
    }
}
// console.log(state)

}


function checkwin(type){

        let winnercon=[
            [0,1,2],
            [3,4,5],
            [6,7,8,],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i=0; i<winnercon.length; i++){
            let[a,b,c]=winnercon[i];

            if(state[a]==state[b]&& state[a]==state[c]){
                if(type){
                    winnerDiv.innerHTML='<h1>CONGRATULATIONS</h1><h1>winner X</h1>'
                    document.getElementById("user1-score").innerHTML=count1++
                    setdisable();
                    break;
                }
                else{
                    winnerDiv.innerHTML='<h1>CONGRATULATIONS</h1><h1>winner O</h1>'
                    document.getElementById("user2-score").innerHTML=count2++

                    setdisable();
                    break;

                }
            }
        }
        
        let tempt=0;
        for(let i=0; i<state.length; i++){
            if(state[i]==1 || state[i]==0 || state[i]==null){
                tempt+=1;
            }
        }
        console.log(tempt);
        if(tempt==0){
            winnerDiv.innerHTML='try again fail again!fail better.'
        }



}

function setdisable(){

    for(let i=0; i<state.length;i++){
        if(state[i]==1 || state[i]==0){
            state[i]=null;

        }
    }
}


document.getElementById("btn1").addEventListener('click',() =>{
   let rest1= confirm('Are You Sure');
   if(rest1){

       location.reload()
   }
})

document.getElementById('btn2').addEventListener('click', ()=>{
    let reset=confirm("Are You Sure You Want To Reset")
    if(reset){

    flag=true;
    state=[1,0,1,1,0,1,0,1,0];  
tdcollection=document.querySelectorAll('.box table td');
allindex=document.querySelectorAll('td');
for(let i=0; i < allindex.length; i++){
    allindex[i].innerHTML='';
    winnerDiv.innerHTML='';
}
}
})



















































































































