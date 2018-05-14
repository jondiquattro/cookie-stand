'strict'

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var stores = [];

var submitForm = document.getElementById('store-form'); //attaches the html id="store-form"






submitForm.addEventListener('submit', storeNewinfo);

function storeNewinfo(event) {
    event.preventDefault();
    var newStorName = event.target.store.value;
    var minCustomers = event.target.minimumCustomersPerHour.value;
    var maxNumbers = event.target.maxCustomersPerHour.value;
    var averageSales = event.target.averageSalePerCustomer.value;
    new SalmonStores(newStorName, minCustomers, maxNumbers, averageSales);
    // document.getElementById('table').setinnerHTML('');
    document.getElementById('table').innerHTML = '';
    renderAllStores();

};

function SalmonStores(name, minimumCustomers, maxCustomers, averageCookies) {
    this.name = name;
    this.minimumCustomers = minimumCustomers;
    this.maxCustomers = maxCustomers;
    this.averageCookies = averageCookies;
    this.customers = [],      //holds the number of customers for each hour
    this.cookiesPerHour = [];
    this.sumCookies = 0;
    stores.push(this);

};


//
new SalmonStores('Pikes Place', 23, 65, 6.3);


new SalmonStores('SeaTac Airport', 3, 24, 1.2);

new SalmonStores('Seattle Center', 11, 38, 3.7);

new SalmonStores('Capitol Hill', 20, 38, 2.3);

new SalmonStores('Alki', 2, 16, 4.6);


SalmonStores.prototype.ranNumGen = function () {
    return Math.ceil(Math.random() * (this.maxCustomers - this.minimumCustomers + 1) + this.minimumCustomers);  //via MDN
};

SalmonStores.prototype.storeHours = function () {
    for (var i = 0; i < openHours.length; i++) {
        // console.log(this.ranNumGen);
        var ranNumber = this.ranNumGen();
        // console.log(ranNumber);
        this.customers.push(ranNumber);

    }
};

SalmonStores.prototype.calcCookiesPerHour = function () {
    this.storeHours();

    for (var i = 0; i < openHours.length; i++) {

        Math.floor(this.cookiesPerHour[i] = this.customers[i] * 6.3);//why not working
        this.sumCookies = this.sumCookies + Math.floor(this.cookiesPerHour[i]);
    }
};









SalmonStores.prototype.render = function () {
    this.calcCookiesPerHour();                 //calls the calcCookiesPerHour

// console.log(this);
    // grab the parent from the DOM
    var teEl = document.getElementById('table');   //creates variable called teEl and stores html id in it
    var trEl = document.createElement('tr'); //creates a table row
    var thEl = document.createElement('th');


    
    thEl.textContent=this.name;
        trEl.appendChild(thEl);

    for (var i = 0; i < openHours.length; i++) {       //creates loop of length 14 
        // create an element
        var tdEl = document.createElement('td');      //creates 14 table data columns
        tdEl.textContent = Math.floor(this.cookiesPerHour[i]); //text content is a function that places text inside the veriable
        trEl.appendChild(tdEl);//is the content that I want to put into trEL
    }//ends loop

    tdEl = document.createElement('td');
    tdEl.textContent = Math.ceil(this.sumCookies);
    trEl.appendChild(tdEl);
    teEl.appendChild(trEl);


    

};


function renderAllStores() {
    for (var i = 0; i < stores.length; i++) {
        // console.log(i);
        stores[i].render();
    }

};
renderAllStores();



var hourSum =[];
function calcHourlyTotal() {
    
    
    for(var j =0; j < stores[0].cookiesPerHour.length; j ++){
        var sumHour=0

    for (var i = 0; i<stores.length; i ++){
 
 sumHour = Math.ceil(stores[i].cookiesPerHour[j] + sumHour); //end up with hourSum =809
 
};
hourSum.push(sumHour);



};//outer forloop


};//function closes

    calcHourlyTotal();


function renderBottomRow() {

    
    var teEl = document.getElementById('bottomRow');
    var trEl = document.createElement('tr'); 
    var thEl = document.createElement('th');
        
    thEl.textContent='Hourly Totals:';
        trEl.appendChild(thEl);

    for (var i = 0; i < openHours.length; i++) {
        // create an element
        var tdEl = document.createElement('td'); 
        tdEl.textContent = hourSum[i]; 
        trEl.appendChild(tdEl);
    }//ends loop
    tdEl = document.createElement('td');
    tdEl.textContent = 'Hourly Total';

    trEl.appendChild(tdEl);
    teEl.appendChild(trEl);

};
renderBottomRow();