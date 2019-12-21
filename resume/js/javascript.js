$(document).ready(function(){
    $("#bt").click(function(){
        $.getJSON("/data",function(d){
            $("#name").text(d.name);
            $("#mail").text(d.mailId);
            $("#phone").text(d.mobileNo);
            $("#image").attr("src","/vamshi");
            $("#tc1").text(d.tc1);
            $("#tc2").text(d.tc2);
            $("#tc3").text(d.tc3);
            $("#tc4").text(d.tc4);
            $("#tc5").text(d.tc5);
            $("#clg1").text(d.d1);
            $("#cname1").text(d.c1);
            $("#cyear1").text(d.y1);
            $("#cper1").text(d.p1);
            $("#clg2").text(d.d2);
            $("#cname2").text(d.c2);
            $("#cyear2").text(d.y2);
            $("#cper2").text(d.p2);
            $("#clg3").text(d.d3);
            $("#cname3").text(d.c3);
            $("#cyear3").text(d.y3);
            $("#cper3").text(d.p3);
            $("#a1").text(d.a1);
            $("#a2").text(d.a2);
            $("#a3").text(d.a3);
            $("#a4").text(d.a4);
            $("#a5").text(d.a5);
            $("#fn").text(d.fn);
            $("#g").text(d.g);
            $("#dob").text(d.dob);
            $("#n").text(d.n);
            $("#s").text(d.s);
            $("#h1").text(d.h1);
            $("#h2").text(d.h2);
            $("#h3").text(d.h3);
            $("#h4").text(d.h4);
            $("#h5").text(d.h5);
            $("#bt").hide();
        })
    });

});



