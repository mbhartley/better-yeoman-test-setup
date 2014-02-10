function Collection (models) {
 this.models = models || [];
 
 this.find = function(students) {
  var result;

 if (typeof(id) != 'string') {
    throw new Error("Sorry, this is not a string!");
 };

 if (this.models)_.contains(models) != true;
    return (undefined);
 
};

this.add = function(addObject){
  var students = addObject;

  if (_.isEmpty(addObject)){
    throw new Error("Nope!");
}; 

  if ('id' in students != true){  
    throw new Error("No id present!");
}; 

  this.models.push(addObject);
  };

this.remove = function(students){
  var removeObject = students;
};

this.empty = function(students){
  var students;
};

this.random = function(students){
  var students;
};

this.length = function(students){
  var students;

};

}