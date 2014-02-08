/* global describe, it */
 
(function () {
    'use strict';
 
    describe('A Collection constructor', function () {
        describe('when run', function () {
            it('should return a new object', function () {
              var students = new Collection;
 
              expect(students.constructor.name).to.equal("Collection");
            });
 
            it('stores its first param in a property called models', function(){
             var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id:'2'}]
              var students = new Collection(toBeAdded)
              
              expect(students.models).to.be.a('Array');
              expect(students.models[1].name).to.equal('Jack');
            });
 
        });
    });
 
    describe("A Collection instance", function(){
      describe("has a .find() method",function(){
        it("should return an object when given an id that is present in the models");
        it("should not return an object when that id is not present in the models");
        it("should return undefined when that id is not present in the models");
        it("should throw an error when given an arguemnt other than a string");
      });
//my work begins here for commit 1//
      describe("has an .add() method",function(){
        it("should add the object it's given to the models property", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
            students.add({name: 'Billy Jo', id: '8'});

            expect(students.models[1]).to.deep.equal({name: 'Billy Jo', id: '8'});
        });

        it("should throw an error if an empty object is passed as an argument", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);

          expect(function(){students.add({})}).to.throw(Error);
        });

        it("should throw an error when given an object without an id property", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);

          expect(function(){students.add({name: 'Joey'})}).to.throw(Error);
        });

        it("should increase the length of the array by 1 when a new object is added", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
            var startingLength = students.length;
            students.add({name: 'Sally', id: '23'});

            expect(students.length).to.equal(startingLength + 1);  
        });    
      });
 
      describe("has a .remove() method",function(){
        it("should, when given an id, remove the corresponding object from the models property");
        it("should decrease the models property's length by 1");
        it("should only accept a single string as an id argument");
        it("should return true on successful removal");
      })
      describe("has an .empty() method", function(){
        it('should clear out the models array');
      })
 
      describe("has an .random() method", function(){
        it('should return a random object from the models array');
      });
 
      describe("has a .length() method", function(){
        it('should return the length models array');
      })
    })
})();