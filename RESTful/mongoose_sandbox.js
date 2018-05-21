'use strict';

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sandbox");

var db = mongoose.connection;

db.on("error", function(){
    console.log("There were problems", err);
});

db.once("open", function(){
    console.log("looks like db connection works bro");

    var Schema = mongoose.Schema;
    var AnimalSchema = new Schema({
        type: {type: String, default: "goldfish" },
        size: String,
        color:{type: String, default: "yellow" },
        mass: {type: Number, default: "1"},
        name: {type: String, default: "Jim"}
    });

    AnimalSchema.pre("save", function(next){
        if(this.mass >= 100) {
            this.size = "big";
        } else (this.size = "small");
        next();
    });

    //define a custom method "find Size" to use 
    AnimalSchema.statics.findSize = function(size, callback){
        //this == Animal
        return this.find({size: size}, callback);
    }

    AnimalSchema.methods.findSameColor = function(callback){
        //this == document
        return this.model("Animal").find({color: this.color}, callback);
    }

    var Animal = mongoose.model("Animal", AnimalSchema);

    var elephant = new Animal({
        type: "elephant",
        color: "grey",
        mass: "500",
        name: "Lawrence"
    });

    var animal = new Animal({});

    var whale = new Animal({
        type: "whale",
        mass: 1990,
        name: "Fig"
    });


    var animalData = [
        {
            type: "mouse",
            color: "grey",
            mass: 1,
            name: "Sam"  
        },
        {
            type: "cat",
            color: "orange",
            mass: 5,
            name: "Creeper"
        },
        elephant,
        animal,
        whale
    ]


    Animal.remove({}, function(err){
        if (err) console.error(err);
        Animal.create(animalData, function(err, animals){
            if (err) console.error(err);
            Animal.findOne({type: "elephant"}, function(err, elephant) {
            //Animal.findSize("big", function(err, animals) {
                elephant.findSameColor(function(err, animals){
                    if (err) console.error(err);
                    animals.forEach(function(animal){
                        console.log(animal.name + " the " + animal.color + " " + animal.type + " is a " + animal.size + " animal.")
                    });
                    db.close(function(){
                        console.log("db connection closed.");
                    });        
                });    
            });
        });
    });
});