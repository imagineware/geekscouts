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
    var database = firebase.database();

    var initialData = {
      medal1: false,
      medal2: false,
      medal3: false
    }

    $("#btn-restore-db").click(function () {
      var updates = {};
      updates['Tesla'] = initialData;
      updates['Brodie'] = initialData;
      updates['Byron'] = initialData;
      updates['Gates'] = initialData;
      updates['Torvalds'] = initialData;
      updates['Turing'] = initialData;
      updates['Watt'] = initialData;

      return database.ref().update(updates);
    });
});
