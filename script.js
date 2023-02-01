//Defining variables
var modal = document.getElementById("myModal");
var imgcount1 =true;
let imgcount2 =0;
let imgcount3 =0;
let imgcount4 =0;
var diceCount=0;
// images can only be clicked once and in a specific order
var img1flag=false;
var img2flag=true;
var img3flag=true;
var img4flag=true;
//imges 4
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");
let img4=document.getElementById("img4");
var chance=0; //for only 2 time chance

  img1.addEventListener("click",()=>{
    if(img1flag==false){
      modal.style.display="block";
      imgcount1=false;
      img2flag=false;
    }
    img1flag=true;
  });
 var name,email,username;
  var btnsubmit =document.getElementById("btnsubmit");
  btnsubmit.addEventListener('click',()=>{
    img2flag=false;
      name =document.getElementById("name").value;
      email =document.getElementById("email").value;
      username =document.getElementById("username").value;
     // modal.style.display="none";
     alert("registered");
    
})

var details = document.getElementById("detail");
var cong = document.getElementById("congrat");

img2.addEventListener("click",()=>{
  if(img2flag==false){
    img3flag=false;
    modal.style.display="none";
    details.style.display="block";
    document.getElementById("displayName").innerHTML=name;
    document.getElementById("displayusername").innerHTML=username;
  }
img2flag=true;

});
var sum=0;
var dice = document.getElementById("dice");
img3.addEventListener("click",()=>{
  if(img3flag==false){
modal.style.display="none";
details.style.display="none";
dice.style.display="block";
}
img3flag=true;

function dicefun(){
  img4flag=false;
  if(chance<=2){
  diceCount++;
  if(diceCount <= 3) {
    const diceRoll = Math.floor(Math.random() * 6) + 1;  
    sum +=diceRoll;
    document.getElementById("sumT").innerHTML="sum is "+ sum;
    if(sum>10){
      //document.getElementById("mess").innerHTML="Your Score more then 10 you clicked on 4th image"
      chance++;
    }
  }
  else {
    if(chance<=2){
    diceCount=0;
    sum=0;
    document.getElementById("sumT").innerHTML="sum is "+ sum;
    chance++;
    }
  }
  }
}
dice.addEventListener("click",dicefun)
})
img4.addEventListener("click",()=>{
  dice.style.display="none"
  document.getElementById("sumT").style.display="none"
  if(img4flag==false){
    if(sum>10){
      document.getElementById("h1").innerHTML="generated as a coupon => "+generateString(12);
      cong.style.display="block";
    }else{
      document.getElementById("error").style.display="block";
    }
  }
  img4flag=true;
  img1flag=false;
  
})

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
name=""
username=""