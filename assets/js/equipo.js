$(function () {
    //Initialize Firebase
    var config = {
        apiKey: "AIzaSyAsN8mLHNDRP8adWRor9W_S3wFZojE7MTU"
        , authDomain: "project-1639472462353612307.firebaseapp.com"
        , databaseURL: "https://project-1639472462353612307.firebaseio.com"
        , storageBucket: ""
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    //get user vars
    var $team = $("#team-name").text()
        , $medalCode1, $medalCode2, $medalCode4;
    //set medal codes
    switch ($team) {
    case "Tesla":
        $medalCode1 = "AHSDFN";
        $medalCode3 = "BCCCABBA";
        $medalCode4 = "AWHP";
        break;
    case "Turing":
        $medalCode1 = "ASNFAI";
        $medalCode3 = "CCBBCBBA";
        $medalCode4 = "PAHW";
        break;
    case "Watt":
        $medalCode1 = "OFJASS";
        $medalCode3 = "CACBAABA";
        $medalCode4 = "PWHA";
        break;
    case "Byron":
        $medalCode1 = "PASDDI";
        $medalCode3 = "CBABCACC";
        $medalCode4 = "WAPH";
        break;
    case "Torvalds":
        $medalCode1 = "OISDHI";
        $medalCode3 = "BCCABABC";
        $medalCode4 = "WPHA";
        break;
    case "Brodie":
        $medalCode1 = "POASJD";
        $medalCode3 = "AABACBAB";
        $medalCode4 = "APWH";
        break;
    case "Ritchie":
        $medalCode1 = "MCINAG";
        $medalCode3 = "CBCBACAB";
        $medalCode4 = "HPAW";
        break;
    case "Gates":
        $medalCode1 = "EYUIWE";
        $medalCode3 = "CABCBACA";
        $medalCode4 = "HAWP";
        break;
    default:
        //
    }
    //set modals btn acitons
    $("#btn-entrar-1").click(function (e) {
        e.preventDefault();
        var text = $("#code-text-1").val();
        if ($medalCode1 === text) {
            obtainMedal($team, 1);
            $("#medal-modal-1").modal('hide');
            updateMedals($team);
        }
        else {
            alert("¡El código no coincide!");
        }
    });
    $("#btn-entrar-2").click(function (e) {
        e.preventDefault();
        var text = $("#code-text-2").val();
        if ($medalCode2 == text) {
            obtainMedal($team, 2);
            $("#medal-modal-2").modal('hide');
            updateMedals($team);
        }
        else {
            alert("¡El código no coincide!");
        }
    });
    $("#btn-entrar-3").click(function (e) {
        e.preventDefault();
        var text = $("#code-text-3").val();
        if ($medalCode3 == text) {
            obtainMedal($team, 3);
            $("#medal-modal-3").modal('hide');
            updateMedals($team);
        }
        else {
            alert("¡El código no coincide!");
        }
    });
    $("#btn-entrar-4").click(function (e) {
        e.preventDefault();
        var text = $("#code-text-4").val();
        if ($medalCode4 == text) {
            obtainMedal($team, 4);
            $("#medal-modal-4").modal('hide');
            updateMedals($team);
        }
        else {
            alert("¡El código no coincide!");
        }
    });
    $("#btn-salir").click(function (e) {
        e.preventDefault();
        $(location).attr("href", "/index.html");
    });
    $("#btn-more").click(function (e) {
        e.preventDefault();
        animateScroll(document.querySelector('#page-wrapper'), 1000, "easeInOutQuint", 0, null);
    });
    //set medals
    updateMedals($team);
});

function updateMedals(team) {
    var teamRef = firebase.database().ref('teams/' + team)
        , m1, m2, m3, m4;
    teamRef.once("value").then(function (snapshot) {
        m1 = snapshot.child("medalla1").val();
        m2 = snapshot.child("medalla2").val();
        m3 = snapshot.child("medalla3").val();
        m4 = snapshot.child("medalla4").val();
        if (m1) {
            $("#btn-start-1").text("Información");
            $("#btn-complete-1").prop({
                hidden: true
            });
            $("#btn-done-1").prop({
                hidden: false
            });
        }
        else {
            $("#btn-start-1").text("Comenzar");
            $("#btn-complete-1").prop({
                hidden: false
            });
            $("#btn-done-1").prop({
                hidden: true
            });
        }
        if (m2) {
            $("#btn-start-2").text("Información");
            $("#btn-complete-2").prop({
                hidden: true
            });
            $("#btn-done-2").prop({
                hidden: false
            });
        }
        else {
            $("#btn-start-2").text("Comenzar");
            $("#btn-complete-2").prop({
                hidden: false
            });
            $("#btn-done-2").prop({
                hidden: true
            });
        }
        if (m3) {
            $("#btn-start-3").text("Información");
            $("#btn-complete-3").prop({
                hidden: true
            });
            $("#btn-done-3").prop({
                hidden: false
            });
        }
        else {
            $("#btn-start-3").text("Comenzar");
            $("#btn-complete-3").prop({
                hidden: false
            });
            $("#btn-done-3").prop({
                hidden: true
            });
        }
        if (m4) {
            $("#btn-start-4").text("Información");
            $("#btn-complete-4").prop({
                hidden: true
            });
            $("#btn-done-4").prop({
                hidden: false
            });
        }
        else {
            $("#btn-start-4").text("Comenzar");
            $("#btn-complete-4").prop({
                hidden: false
            });
            $("#btn-done-4").prop({
                hidden: true
            });
        }
    });
}

function obtainMedal(team, medal) {
    //medal: 1, 2, 3, 4
    var ref = firebase.database().ref('teams/' + team);
    switch (medal) {
    case 1:
        ref.update({
            "medalla1": true
        });
        break;
    case 2:
        ref.update({
            "medalla2": true
        });
        break;
    case 3:
        ref.update({
            "medalla3": true
        });
        break;
    case 4:
        ref.update({
            "medalla4": true
        });
        break;
    }
}
/* DATABASE DATA STRUCT {
    "teams": {
        "TEAM-PRUEBA": {
            "medal1": false,
            "medal2": false,
            "medal3": false,
            "medal4": false
        },

        TEAM1: {
            "medal1": false,
            "medal2": false,
            "medal3": false,
            "medal4": false
        },

        TEAM2: {
            "medal1": false,
            "medal2": false,
            "medal3": false,
            "medal4": false
        },

        TEAM3: {
            "medal1": false,
            "medal2": false,
            "medal3": false,
            "medal4": false
        },

        TEAM4: {
            "medal1": false,
            "medal2": false,
            "medal3": false,
            "medal4": false
        }
    }
} */
