var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
var z;
// router.get('/find2', function(req, res) {
	
// 	var object=req.body;
//     console.log("theeee body"+req.body)
//     var db = req.db;
//     var temp;
//     console.log("valkuee of zz"+object['protocol'])
//     if(object['protocol']==1)
//     	temp="SOAP";

//     db.collection('api').find({protocols:temp}).toArray(function (err, items) {
//         res.json(items);
//     });
// });

router.get('/userlist', function(req, res) {
    var db = req.db;
    db.collection('api').find().toArray(function (err, items) {
        res.json(items);
    });
});

router.post('/find3', function(req, res) {
var db = req.db;
var obj=req.body
var temp={}
if(obj['year']!='')
temp['updated']=new Date(obj['year']);
if(obj['apiName']!='')
temp['api']=obj['apiName'];
if(obj['tag']!='')
temp['tag']=obj['tag']

console.log(req.body)
z=obj;
// res.json(obj);

var temp={};
    console.log("valkuee of zz"+obj['year'])

    	    db.collection('mashup').find(temp).toArray(function (err, items) {
        res.json(items);
    });

//req.redirect('/find2');

});
router.post('/find4', function(req, res) {
var db = req.db;
var obj=req.body
console.log(obj)
//db.mashup.find({$text:{$search :obj['year']}})
    	    db.collection('mashup').find({$text:{$search :obj['year']}}).toArray(function (err, items) {
        res.json(items);
    });

//req.redirect('/find2');

});
router.post('/find5', function(req, res) {
var db = req.db;
var obj=req.body
console.log(obj)
//db.mashup.find({$text:{$search :obj['year']}})
    	    db.collection('mashup').find({$text:{$search :obj['year']}}).toArray(function (err, items) {
        res.json(items);
    });

//req.redirect('/find2');

});


router.post('/find1', function(req, res) {
console.log(req.body);
var obj=req.body
z=obj;
// res.json(obj);
console.log("meee"+obj);
var temp={};
    console.log("valkuee of zz"+obj['protocol'])
    var ratingRange;
    if(obj['rating']!='')
    {if(obj['ratingRange']==0)
    temp['rating']={$lt:parseFloat(obj['rating'])};
else
	 if(obj['ratingRange']==1)
    temp['rating']={$gt:parseFloat(obj['rating'])};
else
	temp['rating']=parseFloat(obj['rating']);}
if(temp['protocols']!='')
	temp['protocols']=obj['protocol'];
// 	if(obj['year']!=''){
// 	if(obj['yearRange']==0)	
//    	temp['updated']={$lt:new Date(obj['year'])};
//    else
//    		if(obj['yearRange']==1)	
//    	temp['updated']={$gt:new Date(obj['year'])};
//    else
//    	temp['updated']=new Date(obj['year']);
// }
   	if(obj['category']!='')
   	temp['category']=obj['category'];
    var db = req.db;
    console.log("THE QUERy");
  
    console.log(temp);
    	    db.collection('api').find(temp).toArray(function (err, items) {
        res.json(items);
    });

//req.redirect('/find2');

});

console.log("Object:--"+z);
router.get('/list2', function(req, res) {
    var db = req.db;

    db.collection('api').find({protocols:"SOAP"}).toArray(function (err, items) {
        res.json(items);
    });
});


module.exports = router;
module.exports = router;
