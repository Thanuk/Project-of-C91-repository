player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":" ;
document.getElementById("player2_name").innerHTML = player2_name + ":" ;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("PlayerQuestion").innerHTML = "Question Turn : " + player1_name;
document.getElementById("PlayerAnswer").innerHTML = "Answer Turn : " + player2_name;

function Send_the_question_to_the_player2(){
    get_word = document.getElementById("Question_of_the_player_input").value;
    word = get_word.toLowerCase();
    console.log("Word in Lower Case " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    word_length = Math.floor(word.length/2);
    charAt2 = word.charAt(word_length);
    console.log(charAt2);

    length_minus = word.length-1;
    charAt3 = word.charAt(length_minus);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1 , "_");
    remove_charAt2 = remove_charAt1.replace(charAt2 , "_");
    remove_charAt3 = remove_charAt2.replace(charAt3 , "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q." + remove_charAt3 + "</h4>";
    input = "<br>Answer : <input type = 'text' id= 'input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_word + input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}