var express = require('express');
var request = require('request');

var app = express();
var port = 8090;

var exampleJson = [{"query":{"label":null,"params":"http://allegro.pl/listing/listing.php?a_mask%5B4386%5D%5B1%5D=1&a_enum%5B1256%5D%5B1%5D=1&a_enum%5B127448%5D%5B3%5D=3&standard_allegro=1&buyNew=1&offerTypeBuyNow=1&order=m&string=530+dual+sim&search_scope=category-250374"},"items":[{"premiumSeller":true,"buyNowPrice":449.00,"freeShipping":false,"thumbnailUrl":"http://img16.allegroimg.pl/photos/128x96/49/94/93/02/4994930275","url":"/lumia-530-dual-sim-ciemny-szary-pl-i4994930275.html","name":"Lumia 530 Dual Sim Ciemny Szary | PL","price":0.00,"priceWithDelivery":466.00,"bargainPrice":null},{"premiumSeller":true,"buyNowPrice":349.00,"freeShipping":true,"thumbnailUrl":"http://img12.allegroimg.pl/photos/128x96/49/91/28/65/4991286557","url":"/smartfon-nokia-lumia-530-dual-sim-quad-5mpx-i4991286557.html","name":"Smartfon NOKIA Lumia 530 Dual SIM QUAD 5MPx","price":0.00,"priceWithDelivery":349.00,"bargainPrice":null},{"premiumSeller":true,"buyNowPrice":329.00,"freeShipping":true,"thumbnailUrl":"http://img16.allegroimg.pl/photos/128x96/49/86/95/19/4986951951","url":"/nokia-lumia-530-dark-grey-szary-dual-sim-i4986951951.html","name":"= NOKIA LUMIA 530 Dark Grey = Szary = DUAL SIM","price":0.00,"priceWithDelivery":329.00,"bargainPrice":null},{"premiumSeller":true,"buyNowPrice":389.00,"freeShipping":true,"thumbnailUrl":"http://img17.allegroimg.pl/photos/128x96/49/77/62/95/4977629535","url":"/nokia-lumia-530-dual-sim-4gb-gps-5mpx-szary-100zl-i4977629535.html","name":"NOKIA Lumia 530 Dual SIM 4GB GPS 5Mpx Szary +100zĹ","price":0.00,"priceWithDelivery":389.00,"bargainPrice":null},{"premiumSeller":true,"buyNowPrice":349.00,"freeShipping":true,"thumbnailUrl":"http://img19.allegroimg.pl/photos/128x96/49/64/03/18/4964031824","url":"/nokia-lumia-530-dual-sim-bez-simlocka-fvat23-i4964031824.html","name":"NOKIA LUMIA 530 DUAL SIM | BEZ SIMLOCKA | FVAT23%","price":0.00,"priceWithDelivery":349.00,"bargainPrice":null},{"premiumSeller":true,"buyNowPrice":429.00,"freeShipping":true,"thumbnailUrl":"http://img13.allegroimg.pl/photos/128x96/49/97/93/34/4997933433","url":"/smartfon-nokia-lumia-530-4-5mp-dual-sim-szary-i4997933433.html","name":"Smartfon NOKIA Lumia 530 4'' 5MP Dual Sim Szary","price":0.00,"priceWithDelivery":429.00,"bargainPrice":null},{"premiumSeller":true,"buyNowPrice":429.00,"freeShipping":true,"thumbnailUrl":"http://img13.allegroimg.pl/photos/128x96/49/73/88/77/4973887748","url":"/smartfon-nokia-lumia-530-4-5mp-dual-sim-szary-i4973887748.html","name":"Smartfon NOKIA Lumia 530 4'' 5MP Dual Sim Szary","price":0.00,"priceWithDelivery":429.00,"bargainPrice":null}]}];

app.get('/favouriteQueries/user/:id', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exampleJson);
});

app.listen(port);

console.log('Express server started on port ' + port);
