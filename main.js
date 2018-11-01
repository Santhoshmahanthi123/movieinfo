$(document).ready(function(){
console.log("connected to Jquery!");
$("#submit").click(function (){

    $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/search/movie",//?query=$("#place").value()&api_key=b4a1075610d1d2635029b2fb484ef101&language=en-US",
        data: {
            query: $("#place").val(),
            api_key:'b4a1075610d1d2635029b2fb484ef101'
        } ,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            console.log("Ajax request made to api")
            var a=console.log(r);
        }
    });

    return false;
});
});
