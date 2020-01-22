$(document).ready(function() {
  
  $("form#wordPuzzle").submit(function() {
    var userInput = $("input#userInput").val();
    var splitInput = userInput.split("");
    var output = splitInput.map(function(sliptLetter) {
      return sliptLetter.replace('a', '-').replace('e', '-').replace('i', '-').replace('o', '-').replace('u', '-');   
    });
    var stringOutput = output.join(''); 
    $("#wordPuzzle").hide();
    $("#output").append(stringOutput);  
    $("#output").show();
    event.preventDefault();
    });
    $("#answer").click(function() {
      $("#output").append($("input#userInput").val());
    });
});