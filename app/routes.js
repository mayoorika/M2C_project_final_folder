
module.exports = function(app) {


  app.get('/', function(req,res){
    res.sendfile('views/index.html')
  });





app.get("/service", (req, res) => {
   res.sendfile('views/service.html');
});




app.get("/mason", (req, res) => {
   res.sendfile('views/duct.html');
});


app.get("/about", (req, res) => {
   res.sendfile('views/about.html');
});




app.get("/contact", (req, res) => {
   res.sendfile('views/contact.html');
});

app.get("/stacks", (req, res) => {
   res.sendfile('views/stacks.html');
});


app.get("/tank", (req, res) => {
   res.sendfile('views/tanks.html');
});


app.get("/beam", (req, res) => {
   res.sendfile('views/beam.html');
});

//app.post("/addname", (req, res) => {
  //  var myData = new User(req.body);
  //myData.save()
    //    .then(item => {
    //        res.send("You are registered");
    //    })
      //  .catch(err => {
    //        res.status(400).send("Unable to save to database");
    //    });
// });



app.get("/form", (req, res) => {
   res.sendfile('views/form.html');
});


var User            = require('../app/models/user');

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("You are registered");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});





};
