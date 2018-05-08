'strict'

var openHours = ['6am', '7am', '8am', '9am','10am','11am','12pm', '1pm', '2pm', '3pm', '4pm','5pm','6pm','7pm','8pm'];
var allStores=[];

function SalmonStores(){
    name= '';
    minimumCustomers = 0;
    maxCustomers = 0;
    averageCookies = 0;
    customers = [],      //holds the number of customers for each hour
    cookiesPerHour = [];
    sumCookies = 0;
    allStores.push(this);
};

var pikeStore = new SalmonStores('Pikes Place', 23, 65, 6.3);

var seaTac = new SalmonStores('SeaTac Airport', 3, 24, 1.2);

var seattleCenter = new SalmonStores('Seattle Center', 11, 38, 3.7);

var capitolHill = new SalmonStores('Capitol Hill', 20, 38, 2.3);

var alki = new SalmonStores('Alki', 2, 16, 4.6);
			




SalmonStores.prototype.ranNumGen=function(){
    return Math.ceil(Math.random() * (65 - 23 + 1) + 23);  //via MDN
};

SalmonStores.prototype.storeHours = function(){
    for (var i = 0; i < 14; i++){

        var ranNumber = this.ranNumGen();
        console.log(ranNumber);
        this.customers.push(ranNumber);
                
        }
};

SalmonStores.prototype.calcCookiesPerHour = function(){
    for(i=0; i < this.customers.length; i++){
        Math.floor(this.cookiesPerHour[i] = this.customers[i] * 6.3);//why not working
         }
};

SalmonStores.prototype.calcTotalCookies=function(){
    this.calcCookiesPerHour
    for(i=0; i < this.cookiesPerHour.length; i++){
        this.sumCookies = this.sumCookies + this.cookiesPerHour[i];
         
        }
};

SalmonStores.prototype.render = function() {
this.calcCookiesPerHour();                 //calls the calcCookiesPerHour
    // grab the parent from the DOM
    var ulEl = document.getElementById('sales')   //creates variable called ulEL and stores html id in it
    for (var i = 0; i < this.customers.length; i++) {       //creates loop of length 14 
      // create an element
      var liEl = document.createElement('li');      //creates variable to store li in
      // give the element content
      liEl.textContent = openHours[i] + ': ' + Math.floor(this.cookiesPerHour[i]) + ' cookies'
     
        // append the child to the parent
      ulEl.appendChild(liEl);
    }//ends loop
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + Math.ceil(this.sumCookies) + ' cookies';
    ulEl.appendChild(liEl);
};



//   var pikesPlace = {
    //     name: 'Pikes Place Market',
//     minimumCustomers: 23,
//     maxCustomers: 65,
//     averageCookies: 6.3,
//     customers: [],      //holds the number of customers for each hour
//     cookiesPerHour: [],
//     sumCookies: 0
//   };


//   pikesPlace.ranNumGen();
//   pikesPlace.storeHours();
//   pikesPlace.calcCookiesPerHour();
//   pikesPlace.calcTotalCookies();
//   console.log(pikesPlace.cookiesPerHour[i]);
//   pikesPlace.render();


  /////////////////////////////////////////////////////
  //constructor for object
  /////////////////////////////////////////////////////
///////////////////////////////////////
///////     /////////////     ////////
/////////////////////////////////////
 ////////////          ////////////
  ///////////         ///////////
   ////////////////////////////
    /////////////////////////

    //num generator
    // pikesPlace.ranNumGen=function(){
    //     return Math.floor(Math.random() * (65 - 23 + 1) + 23);  //via MDN
    //    };



    // pikesPlace.storeHours=function(){
       
    //     for (var i = 0; i < 14; i++){

    //         var ranNumber = this.ranNumGen();
    //         console.log(ranNumber);
    //         this.customers.push(ranNumber);
                    
    //         }
    //    };


    // pikesPlace.calcCookiesPerHour=function(){
    //     for(i=0; i < this.customers.length; i++){
    //    Math.floor(this.cookiesPerHour[i] = this.customers[i] * 6.3);//why not working
    //     }

    //     };//end function




//     pikesPlace.calcTotalCookies=function(){
//         this.calcCookiesPerHour
//        for(i=0; i < this.cookiesPerHour.length; i++){
//            this.sumCookies = this.sumCookies + this.cookiesPerHour[i];
            
//            }
         
//    }//end calctotal function

// pikesPlace.render = function() {                 //makes the function
//     pikesPlace.calcCookiesPerHour();                 //calls the calcCookiesPerHour
//     // grab the parent from the DOM
//     var ulEl = document.getElementById('sales')   //creates variable called ulEL and stores html id in it
//     for (var i = 0; i < this.customers.length; i++) {       //creates loop of length 14 
//       // create an element
//       var liEl = document.createElement('li');      //creates variable to store li in
//       // give the element content
//       liEl.textContent = openHours[i] + ': ' + Math.floor(this.cookiesPerHour[i]) + ' cookies'
     
//         // append the child to the parent
//       ulEl.appendChild(liEl);
//     }//ends loop
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + Math.ceil(this.sumCookies) + ' cookies';
//     ulEl.appendChild(liEl);
//   }