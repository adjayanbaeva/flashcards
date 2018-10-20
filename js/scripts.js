$(document).ready(function(){
// Javascript Flashcard FE logic
  $("#javascript-clickable").click(function(){
    $("p#javascriptDefinition").slideToggle();
    $("h1#javascript").slideToggle();
  });

// Operators flashcard FE Logic
  $("#operators-clickable").click(function(){
    $("p#operatorsDefinition").slideToggle();
    $("h1#operators").slideToggle();
  })

// Variables flashcard FE logic
  $("#variables-clickable").click(function(){
    $("h1#variables").slideToggle();
    $("p#variablesDefinition").slideToggle();
  })

// Variable naming conventions flashcard FE Logic
  $("#naming-clickable").click(function(){
    $("h1#naming-conventions").slideToggle();
    $("p#namingDefinition").slideToggle();
  })

//functions flashcard FE logic
  $("#functions-clickable").click(function(){
    $("h1#functions").slideToggle();
    $("p#functionsDefinition").slideToggle();
  })

//jQuery flashcard FE logic
  $("#jquery-clickable").click(function(){
    $("h1#jquery").slideToggle();
    $("p#jqueryDefinition").slideToggle();
  })





})
