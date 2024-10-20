//let username = " wassim";
//console.log(username.charAt(0));
//console.log(username.lastIndexOf("s"));
//console.log(username.length);

//username = username.trim();
//username = username.toLocaleUpperCase();
//username = username.repeat(10);
//let r = username.startsWith("w");

//let r = username.indexof(" ");

//let r = username.includes(" ");


//exampel//

//if(r){
 //   console.log("your name cant begin with ``");
//}

//let phonnum = "123-456-789";

//phonnum = phonnum.replaceAll("-","");
//console.log(phonnum);


let phonnum = "123-456-789";

phonnum = phonnum.padEnd(15,9);

console.log(phonnum);





const fulln = "wassim mallouk";



let firstn = fulln.slice(0, fulln.indexOf(" "));

let lastn = fulln.slice(fulln.indexOf(" ")+1);
  

console.log(firstn);
console.log(lastn);





const email = "wassim@gmail.com";

let n = email.slice(0,email.indexOf("@"));

console.log(n);










//let username1 = "W Aisi m";

// إزالة جميع المسافات
//let usernamer = username1.replaceAll(" ", "");

//let userchart = usernamer.charAt(0).toUpperCase() + usernamer.slice(1).toLowerCase();

//console.log(userchart); // الناتج: "Waisim"

//let username = "rassim";

//let charname = username.charAt(0).toUpperCase() + charname.slice(1).toLowerCase();
//console.log(charname);




const temp = 50;


if (temp >=0 && temp <=30){
    console.log("it is good");
}
    else{
        console.log("its bad");
    }


    let pi=3.14;


//    if (pi == "3.14"){
   //     if (pi === "3.14"){
    //        if (pi !== "3.14"){
                if (pi != "3.14"){
                    console.log("that is pi");
    }

    else{

        console.log("thats not pi");
    }

    


    //let username = "";

   
        
    //while (username === "" || username == null){
       // window.prompt("you cant enter this name");
   // }

    
 //       consol.log(`thankyou ${username}`);


//let roflog = document.getElementById('r-of-l');
 
 //let submit = document.getElementById('submit');


//submit.onclick =function(){


  //  let username =document.getElementById('username').value ;
    //let password = document.getElementById('password').value;


    //if (username === "wassimgaming" && password === 'wassim1234'){

      //  roflog.textContent=`you can enter`;
    
    //}
    
    
    //else{
      //  roflog.textContent= 'wrong password ';
//    }
    
    

//}



//for(let i = 1;  i <=20; i++){

//if (i=== 13)
//break;
//console.log(i)
//}


const max = 100;
const min = 1;
const random = Math.floor(Math.random()*(max-min +1));


let attemps = 0;
let gusses = ;
let running = true;

while(running){
  gusses = window.prompt('gusses a num beteen ${}${}');
}









