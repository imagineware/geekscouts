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
        case "TESLACURRENT":
            $(location).attr("href", "/equipoTesla.html");
            break;
        case "TURINGMACHINE":
            $(location).attr("href", "/equipoTuring.html");
            break;
        case "STEAMWATT":
            $(location).attr("href", "/equipoWatt.html");
            break;
        case "CODEBYRON":
            $(location).attr("href", "/equipoByron.html");
            break;
        case "LINUXSYS":
            $(location).attr("href", "/equipoTorvalds.html");
            break;
        case "MSWORD":
            $(location).attr("href", "/equipoBrodie.html");
            break;
        case "UNIXCLAN":
            $(location).attr("href", "/equipoRitchie.html");
            break;
        case "MSDOSGATE":
            $(location).attr("href", "/equipoGates.html");
            break;
        default:
            alert("El código introducido no coincide con ningún equipo.")
        }
    });
});
