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
            //$("#clg1").text(d.d1);
            //$("#cname1").text(d.c1);
            //$("#cyear1").text(d.y1);
            //$("#cper1").text(d.p1);
            $("#btech").text(`${d.d1} - ${d.c1} - ${d.y1} - ${d.p1}`);
            //$("#clg2").text(d.d2);
            //$("#cname2").text(d.c2);
            //$("#cyear2").text(d.y2);
            //$("#cper2").text(d.p2);
            $("#clg").text(`${d.d2} - ${d.c2} - ${d.y2} - ${d.p2}`);
            //$("#clg3").text(d.d3);
            //$("#cname3").text(d.c3);
            //$("#cyear3").text(d.y3);
            //$("#cper3").text(d.p3);
            $("#schl").text(`${d.d3} - ${d.c3} - ${d.y3} - ${d.p3}`);
            $("#a1").text(d.a1);
            $("#a2").text(d.a2);
            $("#a3").text(d.a3);
            $("#a4").text(d.a4);
            $("#a5").text(d.a5);
            $("#father").text(`Father : ${d.fn}`);
            $("#gender").text(`Gender : ${d.g}`);
            $("#dob").text(`Date of Birth : ${d.dob}`);
            $("#nation").text(`Nationality : ${d.n}`);
            $("#state").text(`State : ${d.s}`);
            $("#h1").text(d.h1);
            $("#h2").text(d.h2);
            $("#h3").text(d.h3);
            $("#h4").text(d.h4);
            $("#h5").text(d.h5);
            $("#bt").hide();
        })
    });

});



