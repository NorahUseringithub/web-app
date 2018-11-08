var img1 = document.getElementById('img1'),
    img2 = document.getElementById('img2'),
    img3 = document.getElementById('img3'),
    img4 = document.getElementById('img4'),
    score = 0;
 

$(document).ready(function (){
    
   $('#page2').hide();
   $('#page3').hide();
   $('#page4').hide();
});
//page 1
$('#img1').click(function (){
    score = score + 1;
    $('#page1').hide();
    $('#page2').show();
    document.getElementById('dd').innerHTML = score;
});
$('#img2').click(function (){
    $('#page1').hide();
    $('#page2').show();
    document.getElementById('dd').innerHTML = score;
});

//page 2
$('#img3').click(function (){
    score = score + 1;
    $('#page2').hide();
    $('#page3').show();
    document.getElementById('dd').innerHTML = score;
});
$('#img4').click(function (){
    $('#page2').hide();
    $('#page3').show();
    document.getElementById('dd').innerHTML = score;
});

//page 3
$('#img5').click(function (){
    score = score + 1;
    $('#page3').hide();
    $('#page4').show();
    document.getElementById('dd').innerHTML = score;
});
$('#img6').click(function (){
    $('#page3').hide();
    $('#page4').show();
    document.getElementById('dd').innerHTML = score;
});

//page 4
$('#img7').click(function (){
    score = score + 1;
    $('#page4').hide();
    //$('#page2').show();
    document.getElementById('dd').innerHTML = score;
});
$('#img8').click(function (){
    $('#page4').hide();
    //$('#page2').show();
    document.getElementById('dd').innerHTML = score;
});

