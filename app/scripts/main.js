function Collection (models) {
 this.models = models || [];
 
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


}