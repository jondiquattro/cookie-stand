'strict'

var customers = [0];


//get random number and store in an array to represent customers

function ranNumGen(){
    var getRan = Math.floor(Math.random() * (65 - 23 + 1)) + 23;
   
   return getRan;
   }
   
   ranNumGen();
   

   function storeHours(){
    for (var i = 0; i < 14; i++){
        customers[i] = ranNumGen();
                
        }
   }
   storeHours();
//to get sales per and hour, ranNumGen() * 6.3

console.log(customers);
for(i=0; i < customers.length; i++){
customers[i] =customers[i] * 6.3;
  
}

var cookiesPerHour = [0];



function calcCookiesPerHour(){
    for(i=0; i < customers.length; i++){
    cookiesPerHour[i] = customers[i] * 6.3;
    }
    }//end function


    var sumCookies = 0;
    for(i=0; i < cookiesPerHour.length; i++){
    sumCookies = sumCookies + cookiesPerHour[i];
    }


var sumCookies = 0;             //calcs total cookies for day
function calcTotalCookies(){

for(i=0; i < cookiesPerHour.length; i++){
sumCookies = sumCookies + cookiesPerHour[i];

}
}