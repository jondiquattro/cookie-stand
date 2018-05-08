'strict'



// var pikesPlace = {

//     minimumCustomers: 23,
//     maxCustomers: 65,
//     averageCookies: 6.3,
// //num generator
//     ranNumGen: function(){
//         return Math.floor(Math.random() * (65 - 23 + 1)) + 23;
//        },
// // stores hours in array
    
// customers: [],
//     storeHours: function(){
        
//         for (var i = 0; i < 14; i++){

//             var ranNumber = this.ranNumGen();
//             console.log(ranNumber);
//             this.customers.push(ranNumber);
                    
//             }
//        },

//        //calculates cookies per hour
//        cookiesPerHour: [],
//        calcCookiesPerHour: function(){
//         for(i=0; i < this.customers.length; i++){
//         this.cookiesPerHour[i] = this.customers[i] * 6.3;
//         }

//         },//end function
//         sumCookies: 0,
//         calcTotalCookies: function(){
//             for(i=0; i < this.cookiesPerHour.length; i++){
//                 this.sumCookies = this.sumCookies + this.cookiesPerHour[i];
                
//                 }
              
//         }//end calctotal function
// }

// pikesPlace.storeHours();
// pikesPlace.calcCookiesPerHour();
// console.log(pikesPlace.cookiesPerHour);
// pikesPlace.calcTotalCookies();
// console.log(pikesPlace.sumCookies);
// console.log(pikesPlace.cookiesPerHour);


// ranNumGen();
// storeHours();
// calcCookiesPerHour();
// calcTotalCookies();




//make object containing pikesPlace
// var cookieStores ={
// salmonStores:[
//     {
//         store: 'Pikes Place',
//         //actual pikes object so I can print total cookies and cookies per hour.
var salmonStores = {
    storeName:[
        {
name: 'Pikes Place',
    minimumCustomers: 23,
    maxCustomers: 65,
    averageCookies: 6.3,
//num generator
    ranNumGen: function(){
        return Math.floor(Math.random() * (65 - 23 + 1)) + 23;
       },
// stores hours in array
    
customers: [],
    storeHours: function(){
        
        for (var i = 0; i < 14; i++){

            var ranNumber = this.ranNumGen();
            console.log(ranNumber);
            this.customers.push(ranNumber);
                    
            }
       },

       //calculates cookies per hour
       cookiesPerHour: [],
       calcCookiesPerHour: function(){
        for(i=0; i < this.customers.length; i++){
        this.cookiesPerHour[i] = this.customers[i] * 6.3;
        }

        },//end function
        sumCookies: 0,
        calcTotalCookies: function(){
            for(i=0; i < this.cookiesPerHour.length; i++){
                this.sumCookies = this.sumCookies + this.cookiesPerHour[i];
                
                }
              
        },//end calctotal function

        renderStore: function () {    //function that feeds to renderflavor
            
            var list = document.getElementById('ice-cream-list');
            var newLi = document.createElement('li');
            newLi.textContent = this.cookiesPerHour[0];  //what will be rendered
            list.appendChild(newLi);
            },
        }, //end of first index or pikes place
/////////////////////////////////////////////call all the required functions
        //  pikesPlace.storeHours(),
        // pikesPlace.calcCookiesPerHour(),
        // console.log(pikesPlace.cookiesPerHour),
        // pikesPlace.calcTotalCookies(),
        // console.log(pikesPlace.sumCookies),
        // console.log(pikesPlace.cookiesPerHour),
        
        
        
        // storeName.storeHours(),
        // storeName.calcCookiesPerHour(),
        // storeName.calcTotalCookies,
        // calcTotalCookies(),
//////////////////////////////////////////////////////////////////end function calls

        ], //end of store array
            renderStores: function () {
                for (var i = 0; i < salmonStores.storeName.length; i++) {
                    salmonStores.storeName[i].renderStore();
                }
            }

}    //ends salmonstores
        

storeName.ranNumGen(),
console.log(calcCookiesPerHour);
salmonStores.renderStores() //calls the renderFlavor function to output new li to screen




//having trouble getting the functions to instantiate, before I put pikes place in an object I had to 
//call the functions using pikesPlace.calcCookiesPerHour but I don't know how or where to call inside of object 
//to make function run.









