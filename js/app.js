'strict'

var openHours = ['6am', '7am', '8am', '9am','10am','11am','12pm', '1pm', '2pm', '3pm', '4pm','5pm','6pm','7pm','8pm'];
var stores=[];

function SalmonStores(name, minimumCustomers, maxCustomers, averageCookies ){
    this.name = name;
    this.minimumCustomers = minimumCustomers;
    this.maxCustomers = maxCustomers;
    this.averageCookies = averageCookies;
    this.customers = [],      //holds the number of customers for each hour
    this.cookiesPerHour = [];
    this.sumCookies = 0;
    stores.push(this);
};



new SalmonStores ('Pikes Place', 23, 65, 6.3);

new SalmonStores('SeaTac Airport', 3, 24, 1.2);

new SalmonStores('Seattle Center', 11, 38, 3.7);

new SalmonStores('Capitol Hill', 20, 38, 2.3);

new SalmonStores('Alki', 2, 16, 4.6);
			




SalmonStores.prototype.ranNumGen=function(){
    return Math.ceil(Math.random() * ( this.maxCustomers - this.minimumCustomers + 1) + this.minimumCustomers);  //via MDN
};

SalmonStores.prototype.storeHours = function(){
    for (var i = 0; i <openHours.length; i++){
// console.log(this.ranNumGen);
        var ranNumber = this.ranNumGen();
        // console.log(ranNumber);
        this.customers.push(ranNumber);
                
        }
};

SalmonStores.prototype.calcCookiesPerHour = function(){
    this.storeHours();
    
    for(var i=0; i < openHours.length; i++){
        
        Math.floor(this.cookiesPerHour[i] = this.customers[i] * 6.3);//why not working


        this.sumCookies = this.sumCookies + Math.floor(this.cookiesPerHour[i]);
         }
};


SalmonStores.prototype.render = function() {
this.calcCookiesPerHour();                 //calls the calcCookiesPerHour
    // grab the parent from the DOM
    var ulEl = document.getElementById('sales')   //creates variable called ulEL and stores html id in it
    for (var i = 0; i < openHours.length; i++) {       //creates loop of length 14 
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

function renderAllStores(){
    for (var i =0; i < stores.length; i++){
        console.log(i);
        stores[i].render();
    }
};
renderAllStores();

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