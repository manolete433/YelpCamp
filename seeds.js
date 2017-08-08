var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Cloud's Rest", 
        image:"https://cdn.pixabay.com/photo/2016/08/28/17/05/camping-1626412__340.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"Desert Mesa", 
        image:"https://cdn.pixabay.com/photo/2016/06/06/08/32/tent-1439061__340.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"Canyon Floor", 
        image:"https://cdn.pixabay.com/photo/2013/09/16/19/15/camp-182951__340.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("Removed campgrounds");
        //     //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //       if(err){
        //           console.log(err);
        //       } else{
        //           console.log("Added '" + campground.name + "' campground.");
        //           //Create a comment
        //           Comment.create(
        //               {
        //                   text: "This place is greate, but I wished there was internet",
        //                   author: "Homer"
        //               }, function(err, comment){
        //                   if(err){
        //                       console.log(err);
        //                   }else{
        //                         campground.comments.push(comment);
        //                         campground.save();   
        //                         console.log("Created New comment");
        //                   }
        //               });
        //       }
        //   });
        // });
    });
}


module.exports = seedDB;
