/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*

* 1 - Window Binding: Inside a 'regular function' this points to the window, or global object
      depending on your environment.

* 2 - Implicit Binding: When a method is called, `this` context will be tied to the object that
      is on the left side of dot 'when the method is invoked'

* 3 - New Binding: When dealing with a function that's being called as a constructor, 'this' will
      point to the object that the constructor is creating.

* 4 - Explicit Binding: Explicit binding using bind, apply, or call gives you the control to
      determine the context of the 'this' value
*
* write out a code example of each explanation above
*/

// console.log('hello world!');

// Principle 1
// code example for Window Binding
const windowThis = () => console.log(this);
windowThis();

// Principle 2
// code example for Implicit Binding
const aSong = {
  trackTitle: function () {
    console.log(this);
  },
};
aSong.trackTitle();

// Principle 3
// code example for New Binding
function Person(favoriteFilm) {
  this.favoriteFilm = favoriteFilm;
}

const julian = new Person('Blade Runner 2049');
console.log(julian); // {favoriteFilm: 'Blade Runner 2049'}

// Principle 4
// code example for Explicit Binding
function logThis() {
  console.log(this);
}
logThis.call(julian);
