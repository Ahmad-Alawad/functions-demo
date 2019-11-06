'use strict'
var createGreet = function(){
  var hourNow;
  hourNow = prompt('What is the time now? 0-23');
  var name;
  name = prompt('What`s your name?')
  var greeting;

  if (hourNow > 18 && hourNow<=23  ) {
    greeting = 'Good evening!';
  } else if (hourNow > 12 && hourNow<=18) {
    greeting = 'Good afternoon!';
  } else if (hourNow >= 0 && hourNow<=12) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Please eneter a valid hour';
  }

  return '<h3>' + greeting + ' ' + name + '</h3>';

}


function writeGreet(){
  var hourNow;
  hourNow = prompt('What is the time now? 0-23');
  var name;
  name = prompt('What`s your name?')
  var greeting;

  if (hourNow > 18 && hourNow<=23  ) {
    greeting = 'Good evening!';
  } else if (hourNow > 12 && hourNow<=18) {
    greeting = 'Good afternoon!';
  } else if (hourNow >= 0 && hourNow<=12) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Please eneter a valid hour';
  }

  document.write('<h3>' + greeting + ' ' + name + '</h3>');

}