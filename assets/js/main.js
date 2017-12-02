$(function () {
    //Initialize Firebase
    var config = {
      apiKey: "AIzaSyBMoXHt_bIy28UvkG-ax53vxBjF35shXAs",
      authDomain: "geekscouts-3badd.firebaseapp.com",
      databaseURL: "https://geekscouts-3badd.firebaseio.com",
      projectId: "geekscouts-3badd",
      storageBucket: "geekscouts-3badd.appspot.com",
      messagingSenderId: "637403357840"
    };
    firebase.initializeApp(config);
    $("#btn-entrar").click(function (e) {
        e.preventDefault();
        var $team = $("#code-text").val();
        switch ($team) {
        case "TEAM-PRUEBA":
            $(location).attr("href", "./equipo.html");
            break;
        case "TESLACURRENT":
            $(location).attr("href", "./equipoTesla.html");
            break;
        case "TURINGMACHINE":
            $(location).attr("href", "./equipoTuring.html");
            break;
        case "STEAMWATT":
            $(location).attr("href", "./equipoWatt.html");
            break;
        case "CODEBYRON":
            $(location).attr("href", "./equipoByron.html");
            break;
        case "LINUXSYS":
            $(location).attr("href", "/equipoTorvalds.html");
            break;
        case "MSWORD":
            $(location).attr("href", "./equipoBrodie.html");
            break;
        //Este no:
        case "UNIXCLAN":
            $(location).attr("href", "./equipoRitchie.html");
            break;
        case "MSDOSGATE":
            $(location).attr("href", "./equipoGates.html");
            break;
        default:
            alert("El código introducido no coincide con ningún equipo.")
        }
    });

    $("#btn-restore-db").click(function () {
      firebase.initializeApp(config);
      var database = firebase.database();
    });
});
