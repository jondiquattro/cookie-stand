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
    var teEl = document.getElementById('table');   //creates variable called teEl and stores html id in it
    var trEl = document.createElement('tr'); //creates a table row
    for (var i = 0; i < openHours.length; i++) {       //creates loop of length 14 
      // create an element
      var tdEl = document.createElement('td');      //creates 14 table data columns
      // give the element content
      tdEl.textContent =  Math.floor(this.cookiesPerHour[i]);
     
        // append the child to the parent
      trEl.appendChild(tdEl);
    }//ends loop
    //table head
    var thEl = document.getElementById('table');
    
//teEl = document.createElement('th');     didn't work
    

    
    tdEl = document.createElement('td');
    tdEl.textContent =  Math.ceil(this.sumCookies);
    trEl.appendChild(tdEl);
    teEl.appendChild(trEl);


   // thEl.appendChild(teEl); // apends teEl to thEl    didnt work
};

//please god dont delete my shit






function renderAllStores(){
    for (var i =0; i < stores.length; i++){
        console.log(i);
        stores[i].render();
    }
};
renderAllStores();

