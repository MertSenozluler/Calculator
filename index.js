
const mathArray = [];
past = []
let displayArray;
let solution = 0
// MATEMATİKSEL İŞLEMLER

$('.content').on('click', '.btnCal', function(event){
    event.preventDefault();
    const pressedButton = $(this);
    console.log(pressedButton)
    pressedButton.each(function(){
        const pressedValue = pressedButton.text();
        if (pressedValue == "AC"){
            $('.digitalDisplay .displayArray, .digitalDisplay .solutionHtml').remove();
            solution = ''
            mathArray.length=0;
            const displayArray = mathArray.join('');
            const displayHtml = '<div class= "displayArray "><h4>' + displayArray + '</h4></div>';
            const solutionHtml = '<div class="solutionHtml solutionShow" style="float:right"><h4>' + solution + '</h4></div>'; 
            $('.resultDisplay').text('');
            $('.digitalDisplay').prepend(displayHtml);
         } else if (pressedValue == "+/-") {
            $('.digitalDisplay .displayArray, .digitalDisplay .solutionHtml').remove();
            mathArray[0]=mathArray[0]*(-1)
            const displayArray = mathArray.join('');
            const displayHtml = '<div class= "displayArray" style="float:right"><h4>' + displayArray + '</h4></div>';
            $('.digitalDisplay').prepend(displayHtml);
        } else if (pressedValue == "=") {
            $('.digitalDisplay .displayArray, .digitalDisplay .solutionHtml ,.solutionShow').remove();
            const displayArray = mathArray.join('');
            past.push(displayArray)
            //evaluate result
            solution = eval(displayArray);
                 ($.isNumeric(solution)) 
                    const solutionHtml = '<div class="solutionHtml solutionShow" style="float:right"><h4>' + solution + '</h4></div>'; 
                    $('.resultDisplay').prepend(solutionHtml);
                
                mathArray.length = 0;
        } else {
            //if any other button is pressed:
            console.log(solution)
           
             
             $('.digitalDisplay .displayArray , .digitalDisplay .solutionHtml').remove();
             if (solution != 0) {
                if (pressedButton.hasClass('hesap') && mathArray == "") {
                    mathArray.push(solution)
                    console.log("a = "+ mathArray)
                    console.log(solution)
                }
                else {
                    displayArray = mathArray.join('');
                    console.log('j = ' + displayArray); 
                }
            }
             mathArray.push(pressedValue); 
             displayArray = mathArray.join('');
             const displayHtml = '<div class= "displayArray" style="float:right"><h4>' + displayArray + '</h4></div>';
             $('.digitalDisplay').prepend(displayHtml);  
             console.log(displayArray) 
       }
    });
});



// ICON

$(document).ready(function () {
    $(".moon").click(function () {
        $("table").css({ "background-image": "linear-gradient(to bottom right, #132a3a, #144264)" });
        $(".content").css({"background-image": "linear-gradient(to bottom right, #192d3d, #343535)"});
        $(".line").css({"border-top": "3px solid #bcd4f"});
        $(".btnCal").css({"color":"white"});
        $(".sonuc>p").css({"color":"white"});
        $(".digitalDisplay").css({"color":"white"})
    });
});

$(document).ready(function () {
    $(".sun").click(function () {
        $("table").css({ "background-image": "linear-gradient(to bottom right, #8dbad0, #bcd4f3)" });
        $(".content").css({"background-image": "linear-gradient(to bottom right, white, rgb(222, 218, 218))"});
        $(".line").css({"border-top": "3px solid rgba(0, 0, 255, 0.305)"});
        $(".btnCal").css({"color":"black"});
        $(".sonuc>p").css({"color":"black"});
        $(".digitalDisplay").css({"color":"black"})
    });
});


// PAST

function displayArrayInList(){
 
    let output = `<ul>`
    for(let i = 0; i < past.length; i++){
        output += `<li>${past[i]}</li>`
    }
        output += `</ul>`
        
        document.getElementById('displayer').innerHTML = output;
   }
   

$(".past").click(function(){
	$(".history").toggleClass("history1 history2");
    displayArrayInList();

});




