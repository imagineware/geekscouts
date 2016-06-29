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
    var $team = $("#team-name").text();

    console.log($team);
    //set medals
    updateMedals($team);
});

function updateMedals(team) {
    var teamRef = firebase.database().ref('teams/' + team)
        , m1, m2, m3, m4;

    teamRef.once("value")
        .then(function (snapshot) {
            m1 = snapshot.child("medalla1").val();
            m2 = snapshot.child("medalla2").val();
            m3 = snapshot.child("medalla3").val();
            m4 = snapshot.child("medalla4").val();
            console.log(m1);
            console.log(m2);
            console.log(m3);
            console.log(m4);
            if (m1) {
                $("#btn-start-1").text("Información");
                $("#btn-complete-1").prop({
                    hidden: true
                });
                $("#btn-done-1").prop({
                    hidden: false
                });
            } else {
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
            } else {
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
            } else {
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
            } else {
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

function setMedal(team, medal, val) {
    //medal: "medal1", "medal2", "medal3" OR "medal4"
    //val: true OR false
    firebase.database().ref('teams/' + team).set({
        medal: val
    });
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
