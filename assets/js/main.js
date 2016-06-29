$(function () {
    //Initialize Firebase
    var config = {
        apiKey: "AIzaSyAsN8mLHNDRP8adWRor9W_S3wFZojE7MTU"
        , authDomain: "project-1639472462353612307.firebaseapp.com"
        , databaseURL: "https://project-1639472462353612307.firebaseio.com"
        , storageBucket: ""
    , };
    firebase.initializeApp(config);

    $("#btn-entrar").click(function (e) {
        e.preventDefault();
        var $team = $("#code-text").val();
        switch ($team) {
        case "TEAM-PRUEBA":
            $(location).attr("href", "/equipo.html");
            break;
        case TEAM1:
            $(location).attr("href", "/#.html");
            break;
        case TEAM2:
            $(location).attr("href", "/#.html");
            break;
        case TEAM3:
            $(location).attr("href", "/#.html");
            break;
        case TEAM4:
            $(location).attr("href", "/#.html");
            break;
        default:
            alert("El código introducido no coincide con ningún equipo.")
        }
    });
});
