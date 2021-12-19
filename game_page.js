player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":" ;
document.getElementById("player2_name").innerHTML = player2_name + ":" ;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("Questioner_turn").innerHTML = "Question Turn : " + player1_name;
document.getElementById("Answer_turn").innerHTML = "Answer Turn : " + player2_name;

function send(){
    number1 = document.getElementById("Number1_input").value;
    number2 = document.getElementById("Number2_input").value;
    actual_number = parseInt(number1) * parseInt(number2)

    question_word = "<h4 id='word_display'>" + number1 + "x" + number2 + "</h4>";
    input = "<br>Answer : <input type = 'text' id= 'input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_word + input + check_button;  
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1_Input").value = "";
    document.getElementById("Number2_Input").value = ""
}