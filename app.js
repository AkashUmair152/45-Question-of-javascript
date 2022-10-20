//    problem no 1


//     problem no 2

let Name = ("Akash");
let massage = `“Hello ${Name}, would you like to learn some javascript today?” `
console.log(massage);



            // problem no 3

let Name1 = ("Akash umair, MUHAMD hanif, MUassab UMAIr");

console.log(Name1.toUpperCase());
console.log(Name1.toLowerCase());
function titleCase(Name1) {
    var titleCase = Name1.toLowerCase().split(" ");
    for(var i = 0; i< titleCase.length; i++){
       titleCase[i] = titleCase[i][0].toUpperCase() + titleCase[i].slice(1);
    }
 console.log(titleCase.join(" "));
 return titleCase;
 }
 titleCase(Name1);

 
    //    problem no 4

 let name = ("Albert Einstein");
 let Quote = (`“A person who never made a mistake never tried anything new.”`);

 let FamousQuote =(`${name} once said, ${Quote}`);
 console.log(FamousQuote);


        //  problem no 5

let famous_person = ("Albert Einstein");
let massage1 =(`${famous_person} once said, “A person who never made a mistake never tried anything new.” `);

console.log(massage1);


//          problem no 6

 let personName = (" \t \t AKASH UMAIR \t \t \n");
 console.log(personName);
  let StrippingName = personName.trim();
 console.log(StrippingName);


            //   problem no 1

console.log( 4 + 4 );
console.log( 2 * 4 );
console.log( 12 - 4 );
console.log( 16 / 2 );



                //     problem no 9

   const favoriteNunber = 5;
   let massage2 = (`The number ${favoriteNunber} is my lucky number`);
   console.log(massage2);


// // 10.	Adding Comments: Choose two of the programs you’ve written,
// // and add at least one comment to each. If you don’t have anything specific to write




//             problem no 11


const Names = ["Akash", "Uzair", "Massab", "ikram", "Ali", "bilal","Osama" ];

console.log(Names[0]);
console.log(Names[1]);
console.log(Names[2]);
console.log(Names[3]);
console.log(Names[4]);
console.log(Names[5]);
console.log(Names[6]);



             // problem no 12

const Names1 = ["Akash", "Uzair", "Massab", "ikram", "Ali", "bilal","Osama" ];

for (let i = 0; i < Names1.length; i++) {
    console.log ("Hello " + Names1[i] + " How Are you??");
  }

  
                     // problem no 13
let own =
  [
    ["BMW", " is my favorite car:"],
    ["bike", "i have honda 70: "],
    ["bus", "bus is very good for local people:"],
    ["tractor","i have a tractor also:"]
];

 for (let i = 0; i<own.length; i++) {
    console.log(own[i] + "\n");
  }
  


               // problem no 14

let Guest =
[

    "Akash",
    "Umair",
    "Ali"

];
 for(let i = 0; i<Guest.length; i++){

    console.log(` hi ${Guest[i]} hOPE YOU R FINE!:\n "This year was full of drama and you deserve a break. Come to a festive dinner with us for a fun and relaxing evening"\n` )
}

            
             // problem no 15

console.log( `${Guest[1]} can not make it`);
Guest[1] ="Raza";
console.log(Guest);

for(let i = 0; i<Guest.length; i++){

    console.log(` hi ${Guest[i]} hOPE YOU R FINE!:\n "This year was full of drama and you deserve a break. Come to a festive dinner with us for a fun and relaxing evening"\n` )
}

             // problem no 16


for(let i = 0; i<Guest.length; i++){

    console.log(` hi ${Guest[i]} hOPE YOU R FINE!:\n "actually I found a bigger dinner table"\n` )
}
console.log(Guest.unshift("Hadir"));

console.log(Guest.splice(3, 0, "Adeel" ));
console.log(Guest.push("Umer"));
console.log(Guest);

for(let i = 0; i<Guest.length; i++){

    console.log(` hi ${Guest[i]} hOPE YOU R FINE!:\n "This year was full of drama and you deserve a break. Come to a festive dinner with us for a fun and relaxing evening"\n` )
}


             // problem no 17


for(let i = 0; i<Guest.length; i++){

    console.log(` Hi ${Guest[i]} Hope You r Fine!:\n "i just can invite two people"\n` )
}

console.log(Guest.pop());

console.log(Guest);

Guest.splice(0, Guest.length);
console.log(Guest);


             // problem no 18

let favoriteCity =[
    "MAKHA",
    "Paris",
    "Istanbul",
    "Islamabad",
    "Lahore"

];
console.log(favoriteCity);
console.log(favoriteCity.reverse());
console.log(favoriteCity.reverse());
console.log(favoriteCity.sort().reverse());


             // problem no 19


console.log(` ${Guest.length} people is invited `);


             // problem no 20

let favoriteCity1 =[
    "MAKHA",
    "Paris",
    "Istanbul",
    "Islamabad",
    "Lahore"

    ];
    for( let i = 0; i<favoriteCity1.length; i++){
        console.log([i] + " :) " + favoriteCity1[i] );

    };


             // problem no 21


 let student = {
    Fname: 'Akash',
    Lname: "Umair",
    email: "akashumair5@gmail.com",
    phone: '03014478922'
};

console.log(student);


 // problem no 22

let a = 100;
 let b= (a === 1000)? "True": "false";
 console.log(b);
  b = (a > 1000)? "True": "false";
 console.log(b);
 b = (a >= 1000)? "True": "false";
 console.log(b);
 b = (a == 100)? "True": "false";
 console.log(b);
 b = (a > 1 )? "True": "false";
 console.log(b);
 b = (a == 10)? "True": "false";
 console.log(b);
 b = (a >= 120)? "True": "false";
 console.log(b);
 b = (a > 0 )? "True": "false";
 console.log(b);
 b = (a < 123)? "True": "false";
 console.log(b);
 

             // problem no 23

let ab = ("car");
let ba = ("Car");

let c = (ab === ba )? "true": "false";
console.log(c); 

 ab = ("car");
 ba = ("car");

  c = (ab === ba )? "true": "false";
 console.log(c);


             // problem no 24

let Number1 = 12;
let Number2 = 20;
let TN = (Number1 > Number2)? "true": "false";
console.log(TN);
TN = (Number1 <= Number2)? "true": "false";
console.log(TN);
TN = (Number1 != Number2)? "true": "false";
console.log(TN);
TN = (Number1 >= Number2)? "true": "false";
console.log(TN);
TN = (Number1 == Number2)? "true": "false";
console.log(TN);


             // problem no 25

let arry =["mango", "banana", "apple"];
let incld = arry.includes("apple")? "true": "false";
console.log(incld);



             // problem no 26



let alien_color = ("green");
   
if (alien_color === "green" ) {
    greeting = "the player just earned 5 points";
    console.log(greeting);
  }
if (alien_color === "red" ) {
    greeting = "the player just earned 5 points";
    console.log(greeting);
  }


             // problem no 27


if (alien_color === "yellow" ) {
    greeting = "the player just earned 5 points for shooting the alien.";
    console.log(greeting);
  }else{
    greeting = "the player just earned 10 points.";
    console.log(greeting);

  }
  if (alien_color === "green" ) {
    greeting = "the player just earned 5 points for shooting the alien.";
    console.log(greeting);
  }else{
    greeting = "the player just earned 10 points.";
    console.log(greeting);

  }



             // problem no 28


 let alien_color2 = ("green");

if (alien_color2 == "green") {
    greeting = "the player earned 5 points";
  } else if (alien_color2 == "yellow") {
    greeting = "the player earned 10 points";
  }else if (alien_color2 == "red") {
    greeting = "the player earned 15 points";
  }else {
    greeting = "Please enter the color";
  }

  console.log(greeting);


  alien_color2 = ("yellow");

if (alien_color2 == "green") {
    greeting = "the player earned 5 points";
  } else if (alien_color2 == "yellow") {
    greeting = "the player earned 10 points";
  }else if (alien_color2 == "red") {
    greeting = "the player earned 15 points";
  }else {
    greeting = "Please enter the color";
  }

  console.log(greeting);

  alien_color2 = ("red");


             
  alien_color2 = ("blue");

if (alien_color2 == "green") {
    greeting = "the player earned 5 points";
  } else if (alien_color2 == "yellow") {
    greeting = "the player earned 10 points";
  }else if (alien_color2 == "red") {
    greeting = "the player earned 15 points";
  }else {
    greeting = "Please enter the color";
  }

  console.log(greeting);



             // problem no 29  

let age = prompt("enter the age");

if(age >= 2 && age < 4 ){
  let masge ="the person is a toddler.";
}else if(age >= 4 && age < 13 ){
    masge ="the person is a kid.";
}else if(age >= 13 && age < 20 ){
    masge ="the person is a teenager.";
}else if(age >= 20 && age < 65 ){
    masge ="the person is a adult.";
}else if(age >= 65 && age > 65  ){
    masge ="the person is a toddler.";
}
else{
    masge = "the person is a baby.";
}
console.log(masge);


           // // problem no 29



let favorite_fruits = ["mango", "banana", "apple"];
for( var i = 0; i<favorite_fruits.length; i++){
    
    let text = "";
    if(i==0 ){
        text =("I really like " + favorite_fruits[i]);
    }else if(i == 1){
        text =("I really like " + favorite_fruits[i]);
    }else if(i == 1){
        text =("I really like " + favorite_fruits[i]);
    }else if(i == 2){
        text =("I really like " + favorite_fruits[i]);
    }else{
        text ="fruits are good for health";
    }
    console.log(text);
}


            // problem no 30



let user_names = ['Akash', 'Umair', 'Admin', 'Raza', 'Ikram'];
 
for (user in user_names){
if (user_names[user] ==='Admin'){
    console.log("Hello admin, would you like to see a status report?");

}else{
    console.log("Hello " + user_names[user] + ", thank you for logging in again!");

}
}



let user_names1 = ['Akash', 'Umair', 'Admin', 'Raza', 'Ikram'];
if(user_names1.length === 0 ){
    console.log("We need to find some users!");

}else{
    console.log("We have some users!"); 
}
//   to remove all elements of arry

console.log(user_names1.splice(0,user_names1.length));

      // problem no 31


if(user_names.length === 0 ){
    console.log("We need to find some users!");

}else{
    console.log("We have some users!"); 
}


 let current_users = [ "Umair", "Ali", "Osama","Irfan","Motto" ];

let new_users = [ "Umar", "Ali", "Jahtaka","Patlo","Motto" ];

current_users = current_users.map(function (e) { 
    return e.toUpperCase()
});
new_users = new_users.map(function (e) { 
    return e.toUpperCase()
});

            // problem no 32


for (username in new_users){
    if (username in current_users){
        console.log("Username available.");
    }else 
    {
        console.log("enter a new username.");
    
    }

}



 // problem no 33

let OrdinalNumber = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9 ];

   

    for (number in OrdinalNumber){
        if (number == 1){
            console.log(number  + "st.");
        }else if (number == 2){
            console.log(number + "nd.");   
        }else if (number == 3){
            console.log(number + "rd.");
        }else{
            console.log(number + "th.");
        }
    }




 // problem no 34

let Pizza = ["Veggie Pizza", "Pepperoni Pizza", "Meat Pizza"];

for( var i = 0; i<Pizza.length; i++){

     if( i == 0 ){
        console.log( " i like " +  Pizza[0]);
     }else if(i == 1){
        console.log( " i love " +  Pizza[1]);

     }else{
        console.log( " i want to eat " +  Pizza[1]);

     }
     
}
console.log("1) My favourite food is pizza. 2)  It is a famous Italian food. 3) It is one of the favourite food specially among kids. 4) I love to eat double cheese Pizza.")




 // problem no 35




let animals =["cow", "baffalo", "goat"];

for( var i = 0; i<animals.length; i++){

         if( i == 0 ){
            console.log(  animals[0] + " : Cows have with a visual field of 330° almost an all-around view \n\n\n" );
        }else if(i == 1){
    console.log( animals[1] + " : Buffalo's are large and may reach 6.8 to 11 feet in length. Up to 5.6 height and weigh in at between 660 to 1900 pounds.\n\n\n");
    
         }else{
         console.log( animals[2]  +" : the milk of goat is very healthy and sweet\n\n\n" );
    
      }
         
 }

console.log("Cattle, goats, sheep and buffalo chew the cud. They are ruminants. The stomach of a ruminant has four chambers. The first chamber is very large and is called the rumen")



//               // problem no 36




function make_shirt(size, message){
    // let Summarize =  ("Summarize the shirt that's going to be made.");
    console.log("\n I'm going to make a " + size + " t-shirt.")
    console.log('It will say, "' + message + '"');

  

}

make_shirt( 'large', ' i love  coding');

make_shirt('small', 'coding is not hard making logic is hard')



//       problem   no 37 


function favoriteCity3 ( city , country ='PAKISTAN' ){

    
    console.log(city + " is most beautifull CITY in " + country);

}



        //     problem no 38


favoriteCity3();
favoriteCity3(' Dubai ', 'UAE')
favoriteCity3('ISLAMABAD');




                // problem no 39


function city_country(city, country){

    console.log(`"${city}" , "${country}"`);


}

city_country('DUBI', 'UAE');
city_country('ISLAMABAD', 'PAKISTAN');




        //  problem no 40

function make_album(artist_name, album_title, songs ) {
  var obj = {
    artist_name: artist_name,
    album_title: album_title,
    Number_of_tracks: songs

  }
  return obj;
}
let albumDetail = make_album("Attaullah Khan", "Kameez Teri Kali", "12");
console.log(albumDetail);





             // problem no 41



 let magicians = ["moto", "patlo", "doctor" ];
show_magic(magicians);
function show_magic(magic){
    for(var i = 0; i < magic.length; i++ ){
        console.log(magic[i]);
    }
}




    //   problem no 42



 magicians = ["moto", "patlo", "doctor" ];
make_great(magicians);
function make_great(magic){
    for(var i = 0; i < magic.length; i++ ){
        console.log(magic[i] + " is a great Magician");
    }
}

        //       problem no 43


let new_arry_magicians = [...magicians];
function show_magicians(){
    for( var i = 0; i < new_arry_magicians.length; i++){

        console.log(new_arry_magicians[i] + " is a great magician");
    }

}
let great_magician = show_magicians();
console.log(great_magician); 

                

                 // problem no 45
            

function cars(manufacturer, model_name, color, additional_features ) {
    var car_features = {
        manufacturer: manufacturer,
      model_name: model_name,
      color: color,
      additional_features: additional_features
  
    }
    return car_features;
  }
  let carDeatails = cars("Honda", "model 2022", "black","this is the most comfottable car");
  console.log(carDeatails);























































