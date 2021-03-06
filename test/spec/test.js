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
        it("should throw an error when given an argument that is not a string", function(){
          var students = new Collection([{name: 'Matt'}]);

          expect(function(){students.find([Matt])}).to.throw(Error);
        });
        
        it("should return undefined if the property does not exist in the array ", function(){
          var students = new Collection([{name: 'Matt'}]);

          expect(students.find('Sarah')).to.equal(undefined);
        });

        it("should return the corresponding object when passed an index value", function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);

          expect(students.find[1]).to.equal('Harry');
        });

        it("should return undefined for indexes which have never been assigned values", function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);

          expect(students.find[7]).to.equal(undefined);
        });

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
        it("should remove the corresponding object from the array when given an index value", function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
          students.remove('Matt');

          expect(students.models).to.equal([{name: 'Harry'}, {name: 'Henderson'}])
        });

        it("should decrease the models property's length by 1", function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
          students.remove[0];

          expect(students.models.length).to.equal(2);
        });

        it("should only accept a single string as an id argument", function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);

          expect(function(){students.remove([])}).to.throw(Error);
        });

        it("should decrease the length of the array by 1 upon successful remove", function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
          var startingLength = students.length;
            students.remove({name: 'Matt'});

            expect(students.length).to.equal(startingLength - 1); 
        });
      })
      describe("has an .empty() method", function(){
        it('should clear out all elements from within the array', function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
            students.empty();

        expect(students.models).to.equal([]);
        });

        it('should clear out all nested elements from within the array', function(){
          var students = new Collection ([{name: {first: 'Matt'}}]);

          expect(students.models).to.equal([]);
        });

        it('should throw an error if an argument is passed', function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
          students.empty(2);

          expect(function(){students.empty()}).to.throw(Error);
        });

        it('should throw an error if the array is already empty', function(){
          var students = new Collection ([]);
          students.empty()

          expect(function(){students.empty()}).to.throw(Error);
        });
      })
 
      describe("has an .random() method", function(){
        it('should return an object', function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
          students.random();

          expect(students.random).to.be.a('object');
        });
        it('should return a random object from the models array', function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
          students.random();

           expect(students.random()).to.equal(students.models[0]).or.equal(students.models[1]).or.equal(students.random[2]);
        });

        it('should return the specified number of random objects', function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
          var result = students.random(2);

          expect(students.length).to.equal(2);
        });
          
        it('should throw an error if the number of random objects passed exceeds the number present in the array', function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
          students.random(4);

          expect(function(){students.random(4)}).to.throw(Error);
        });

      });
 
      describe("has a .length() method", function(){
        it('should return the length of the models array', function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);

          expect(students.length).to.equal(3);
        });

        it('should throw and error if an argument is passed', function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
          students.length('equals');

          expect(students.length).to.throw(Error);
        });

        it('should increase by one when the number of objects in the array increases by one', function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
          students.name = ('Joey');

          expect(students.length).to.equal(4);
        });

        it('should not mutate the array', function(){
          var students = new Collection ([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
          students.length();

          expect(students).to.equal([{name: 'Matt'}, {name: 'Harry'}, {name: 'Henderson'}]);
        });
      })
    })
})();