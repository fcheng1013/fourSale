var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
});

/* GET userlist page*/
router.get('/userlist', function(req,res){
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist',{
            "userlist" : docs
        });
    });
});

/*Get new user page*/

router.get('/newuser', function(req, res){
    res.render('newuser',{title: 'Add New User'});
});

/*Get new home page*/
router.get('/newhome', function(req, res){
    res.render('newhome',{title: 'Add New Home'});
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    var userType = req.body.usertype;
    var userPhone = req.body.userphone;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail,
        "usertype" : userType,
        "userphone" : userPhone,
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

/* POST to Add Home Service */
router.post('/addhome', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var homeAddress = req.body.homeaddress;
    var AgentName = req.body.agentname;
    var HomeType = req.body.hometype;
    var Size = req.body.homesize;
    var BedRoom = req.body.bedroom;
    var BathRoom = req.body.bathroom;
    var Price = req.body.homeprice;

    // Set our collection
    var collection = db.get('homecollection');

    // Submit to the DB
    collection.insert({
        "homeaddress" : homeAddress,
        "agentname" : AgentName,
        "hometype" : HomeType,
        "size" : Size,
        "bedroom" : BedRoom,
        "bathroom" : BathRoom,
        "homeprice" : Price,
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("homelist");
            // And forward to success page
            res.redirect("homelist");
        }
    });
});

/* GET homelist page*/
router.get('/homelist', function(req,res){
    var db = req.db;
    var collection = db.get('homecollection');
    collection.find({},{},function(e,docs){
        res.render('homelist',{
            "homelist" : docs
        });
    });
});

module.exports = router;
