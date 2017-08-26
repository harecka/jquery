"use strict";

$(function(){
//    Pobieranie tekstu
    var tekstParagrafuPierwszego = $ ("#paragraf").text();
    console.log(tekstParagrafuPierwszego);
    
//    dodawanie tekstu
    $(".paragraf").text(tekstParagrafuPierwszego);
    
//    dodawanie HTML
    $(".paragrafnext").html("To jest <strong> paragraf </strong> z dodanym <br> HTML");
    
    //dodanie tresci na koncu selektora
    
    $(".paragrafnext").append("treść na końcu selektora");
    
    //dodanie tresci za selektorem
    $(".paragrafnext").after("tresc za selektorem");
    
    //usuwanie elementów i jego zawartosci
    $("strong").remove();
    
    //usuwanie TYLKO zawartośći elementu
    $(".paragraf").empty();
    
//  dodaw klasy
    $("h1").addClass("blue");
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})