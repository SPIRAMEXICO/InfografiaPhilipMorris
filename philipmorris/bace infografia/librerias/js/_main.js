var vistos=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var vista=0;
var scalePage = 1;
function playContenidoDesk() {
    if(navigator.userAgent.match(/Firefox/) || navigator.userAgent.match(/Edge/)){
        $(".aFx").each(function() {
            var margenTop = "";
            var margenLeft = "";
            var cadena = $(this).attr("style");
            var cadena2 = cadena.replace(/ /gi, "");
            var bloqueGral = cadena2.split(";");
            for(var i=0;i<bloqueGral.length;i++){
                var bloqueCadena = bloqueGral[i].split(":");
                if(bloqueCadena[0] == "margin-top"){
                    margenTop = parseFloat(bloqueCadena[1].replace(/vw/gi, ""));
                    $(this).css("margin-top", (margenTop*2)+"vw");          
                }
                if(bloqueCadena[0] == "margin-left"){
                    margenLeft = parseFloat(bloqueCadena[1].replace(/vw/gi, ""));
                    $(this).css("margin-left", (margenLeft*2)+"vw");
                }
            }            
        });       
        document.getElementById("menuNav").classList.add('menuNavEdge');
        document.querySelectorAll(".btnsNav").forEach(
            elemento => {elemento.classList.add('navEdge')}
        );   
        
    }
    
  slide0(0).addTo(controller);
  slide1(1).addTo(controller);
  slide2(2).addTo(controller);
  slide3(3).addTo(controller);
  slide4(4).addTo(controller);
  slide5(5).addTo(controller);
  slide6(6).addTo(controller);
  slide7(7).addTo(controller);
  slide8(8).addTo(controller);
  slide9(9).addTo(controller);
  slide10(10).addTo(controller);
  slide11(11).addTo(controller);
  slide12(12).addTo(controller);
  slide13(13).addTo(controller);
  slide14(14).addTo(controller);
  slide15(15).addTo(controller);
  slide16(16).addTo(controller);
  slide17(17).addTo(controller);
  slide18(18).addTo(controller);
  slide19(19).addTo(controller);
  slide20(20).addTo(controller);
  slide21(21).addTo(controller);
  slide22(22).addTo(controller);
  slide23(23).addTo(controller);
  slide24(24).addTo(controller);
  slide25(25).addTo(controller);
  slide26(26).addTo(controller);
  slide27(27).addTo(controller);
  slide28(28).addTo(controller);
  slide29(29).addTo(controller);
  slide30(30).addTo(controller);
  slide31(31).addTo(controller);
  slide32(32).addTo(controller);
  slide33(33).addTo(controller);
  slide34(34).addTo(controller);
  slide35(35).addTo(controller);
  
  iniciarMenu();
    
}

function slide0(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#portada", 0.5 ,{delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#portada_fondo", .5,{delay:.5, css:{ opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img1", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img2", .5,{delay:1.5, css:{"margin-top": "-10vh",opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img3", .5,{delay:2,css:{scale:3, opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img4", .5,{delay:2.5,css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img5", .5,{delay:3,css:{"margin-left": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img6", .5,{delay:3.5,css:{"margin-top": "50vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#menuNav", 1,{css:{"margin-top": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from(".indice-text", 1,{css:{"margin-top": "30vh", opacity:0}}),0);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#portada"
        
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';
        vistos[i]=1;
    }).on("enter leave", function () {
        console.log("portada");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide1(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace1", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace1_img1", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace1_img2", .5,{delay:.8, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace1_img3", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#bace1_img4", .5,{delay:1.5,css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace1_img5", .5,{delay:2,css:{top:"1vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace1_img6", .5,{delay:2.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace1_img7", .5,{delay:3, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace1_img8", .5,{delay:3.5, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#bace1_img9", .5,{delay:4,css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace1_img10", .5,{delay:4.5,css:{top:"1vw", opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace1"
    }).on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("bace1");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide2(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace2", 0.5,{delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace2_img1", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace2_img2", .5,{delay:1,css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#bace2_img3", .5,{delay:1.5,css:{"margin-top": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace2_img4", .5,{delay:1.8,css:{"margin-top": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace2_img5", .5,{delay:2.5,css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace2_img6", .5,{delay:3,css:{"margin-left": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace2_img7", .5,{delay:4,css:{"margin-top": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace2_img8", .5,{delay:4.5,css:{"margin-top": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace2_img9", .5,{delay:5,css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace2_img10", .5,{delay:5.5,css:{"margin-left": "30vh", opacity:0}}),0);
        
    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace2"
    }).on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("bace2");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide3(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace3", 0.5,{delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace3_img1", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace3_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#bace3_img3", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace3_img4", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace3_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#bace3_img6", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace3_img7", .5,{delay:3.3, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace3_img8", .5,{delay:3.6, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace3_img9", .5,{delay:4, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace3_img10", .5,{delay:4.3, css:{"margin-left": "30vw", opacity:0}}),0);
    
    
    $("#bace3 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace3"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("bace3");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide4(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace4", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace4_img1", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace4_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#bace4_img3", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);

    timeline.add(TweenMax.from("#bace4_img4", .5,{delay:2, css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace4_img5", .5,{delay:2.4, css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace4_img6", .5,{delay:2.8, css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace4_img7", .5,{delay:3.2, css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace4_img8", .5,{delay:3.6, css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace4_img9", .5,{delay:4, css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace4_img10", .5,{delay:4.4, css:{"margin-left": "-30vh", opacity:0}}),0);
    
    timeline.add(TweenMax.from("#bace4_img11", .5,{delay:5, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    $("#bace4 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace4"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("bace4");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide5(i) {
    document.getElementById("bace5Video1").controls = false; 
    /*document.getElementById("bace5Video1").autoplay = true;*/ 
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace5", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace5_img1", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0); 
    timeline.add(TweenMax.from("#bace5_img2", .5,{delay:.5 ,css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#bace5_img3", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace5_img4", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#bace5_img5", .5,{delay:1.5, css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace5_img6", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    
    $("#bace5 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace5"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
        $('#bace5Video1')[0].play();
    })
    .on("leave", function () {
        console.log("bace5");
        $('#bace5Video1')[0].pause();
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide6 (i) {    
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace6", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace6_img1", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace6_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#bace6_img3", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace6_img4", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace6_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#bace6_img6", .5,{delay:3.3 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace6_img7", .5,{delay:3.6, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace6_img8", .5,{delay:4, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace6_img9", .5,{delay:4.5, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#bace6_img10", .5,{delay:6 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace6_img11", .5,{delay:6.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace6_img12", .5,{delay:7, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace6_img13", .5,{delay:7.5, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    
    $("#bace6 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace6"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("bace5");
        $('#bace5Video1')[0].pause();
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide7(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace7", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace7_img1", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace7_img2", .5,{delay:1, css:{"margin-top": "-30vw", opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace7"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("bace7");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide8 (i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace8", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace8_img1", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace8_img2", .5,{delay:1, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace8_img3", .5,{delay:1.5, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#bace8_img4", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace8_img5", .5,{delay:2.5, css:{"margin-top": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace8_img6", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0); 
    timeline.add(TweenMax.from("#bace8_img7", .5,{delay:3.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace8_img8", .5,{delay:4, css:{"margin-top": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace8_img9", .5,{delay:4.5, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0); 
    timeline.add(TweenMax.from("#bace8_img10", .5,{delay:5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace8_img11", .5,{delay:5.5, css:{"margin-top": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace8_img12", .5,{delay:6, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);    
    
    $("#bace8 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace8"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("bace8");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide9(i){
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace9", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace9_img1", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);   
    timeline.add(TweenMax.from("#bace9_img2", .5,{delay:1, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace9_img3", .5,{delay:1.5, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#bace9_img4", .5,{delay:2.5, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#bace9_img5", .5,{delay:2.5, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#bace9_img6", .5,{delay:2, css:{"margin-top": "30vw", opacity:0}}),0);
       
    
    $("#bace9 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace9"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("bace9");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide10 (i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace10", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace10_img1", .5,{delay:.5, css:{"margin-top": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace10_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#bace10_img3", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace10"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("bace10");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide11(i) {
    document.getElementById("bace11Video2").controls = true; 
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace11", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace11_img1", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0); 
    timeline.add(TweenMax.from("#bace11_img2", .5,{delay:1, css:{opacity: 0}}),0);
    timeline.add(TweenMax.from("#bace11_img3", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace11"
    })
    .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
      /*$('#bace11Video2')[0].play();*/
  })
  .on("leave", function () {
      console.log("bace5");
      $('#bace11Video2')[0].pause();
      colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide12 (i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace12", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace12_img1", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0); 
    timeline.add(TweenMax.from("#bace12_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#bace12_img3", .5,{delay:1.5,css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#bace12_img4", .5,{delay:2.5,css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#bace12_img5", .5,{delay:2.8,css:{"margin-left": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace12_img6", .5,{delay:3,css:{"margin-left": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace12_img7", .5,{delay:3.5,css:{"margin-left": "30vh", opacity:0}}),0);
        
    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace12"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("bace12");
        $('#bace11Video2')[0].pause();
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide13 (i) {    
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#bace13", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#bace13_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace13_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace13_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace13_img4", .5,{delay:2.5,  css:{"margin-right": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#bace13_img5", .5,{delay:3.2, css:{"margin-right": "30vw", opacity:0}}),0);
    
    
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#bace13"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("bace13");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide14 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace14", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace14_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace14_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace14_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace14_img4", .5,{delay:2.5,  css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace14_img5", .5,{delay:3.2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace14_img6", .5,{delay:3.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace14_img7", .5,{delay:4, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace14_img8", .5,{delay:4.2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace14_img9", .5,{delay:4.5,  css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace14_img10", .5,{delay:5, css:{"margin-right": "30vw", opacity:0}}),0);
  
  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace14"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace14");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide15 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace15", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace15_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace15_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace15_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace15_img4", .5,{delay:2.5,  css:{"margin-right": "30vw", opacity:0}}),0);
  
  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace15"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace15");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide16 (i) {    
  var timeline = new TimelineMax({paused: true});
  /*timeline.add(TweenMax.from("#bace16", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));*/
  timeline.add(TweenMax.from("#bace16_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace16_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace16_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace16_img4", .5,{delay:2.5,  css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace16_img5", .5,{delay:3.2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace16_img6", .5,{delay:3.6, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace16_img7", .5,{delay:4, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace16_img8", .5,{delay:4.2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace16_img9", .5,{delay:4.6,  css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace16_img10", .5,{delay:5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace16_img11", .5,{delay:5.5, css:{"margin-right": "30vw", opacity:0}}),0);

  
  $("#bace16_img12").fadeOut();
  $("#bace16_img13").fadeOut();
  $("#bace16_img14").fadeOut();
  $("#bace16_img15").fadeOut();
  $("#bace16_img16").fadeOut();
  $("#bace16_img17").fadeOut();
  $("#bace16_img18").fadeOut();
  $("#bace16_img19").fadeOut();
  $("#bace16_img20").fadeOut();

  $("#click2").fadeOut();
  $("#click3").fadeOut();
  $("#click4").fadeOut();
  $("#click5").fadeOut();
  $("#click6").fadeOut();
  $("#click7").fadeOut();
  $("#click8").fadeOut();
  $("#click9").fadeOut();
  $("#click10").fadeOut();


  $("#click1").click(function(){
       
    $("#bace16_img16").fadeIn();
    $("#bace16_img11").fadeOut();
    $("#click1").fadeOut();
    $("#click2").fadeIn();
  });

  $("#click2").click(function(){
       
  $("#bace16_img16").fadeOut();
  $("#bace16_img12").fadeIn();
  $("#click2").fadeOut();
  $("#click3").fadeIn();
  });

  $("#click3").click(function(){
       
  $("#bace16_img17").fadeIn();
  $("#bace16_img12").fadeOut();
  $("#click3").fadeOut();
  $("#click4").fadeIn();
  });
  
  $("#click4").click(function(){
       
  $("#bace16_img17").fadeOut();
  $("#bace16_img13").fadeIn();
  $("#click4").fadeOut();
  $("#click5").fadeIn();
  });

  $("#click5").click(function(){
       
  $("#bace16_img18").fadeIn();
  $("#bace16_img13").fadeOut();
  $("#click5").fadeOut();
  $("#click6").fadeIn();
  });

  $("#click6").click(function(){
       
  $("#bace16_img18").fadeOut();
  $("#bace16_img14").fadeIn();
  $("#click6").fadeOut();
  $("#click7").fadeIn();
  });

  $("#click7").click(function(){
       
  $("#bace16_img19").fadeIn();
  $("#bace16_img14").fadeOut();
  $("#click7").fadeOut();
  $("#click8").fadeIn();
  });

  $("#click8").click(function(){
       
  $("#bace16_img19").fadeOut();
  $("#bace16_img15").fadeIn();
  $("#click8").fadeOut();
  $("#click9").fadeIn();
  });

  $("#click9").click(function(){
       
  $("#bace16_img20").fadeIn();
  $("#bace16_img15").fadeOut();
  $("#click9").fadeOut();
  $("#click10").fadeIn();
  });

  $("#click10").click(function(){
       
  $("#bace16_img20").fadeOut();
  $("#click10").fadeOut();
  });

  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace16"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace16");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide17 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace17", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace17_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace17_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace17_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace17_img4", .5,{delay:2.5,  css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace17_img5", .5,{delay:3, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace17_img6", .5,{delay:3.5, css:{"margin-left": "30vw", opacity:0}}),0);
 
  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace17"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace17");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide18 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace18", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace18_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace18_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace18_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace18_img4", .5,{delay:2.5,  css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace18_img5", .5,{delay:3, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace18_img6", .5,{delay:3.5, css:{"margin-left": "30vw", opacity:0}}),0);
 
  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace18"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace18");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide19 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace19", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace19_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img4", .5,{delay:2.5,  css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img5", .5,{delay:3, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img6", .5,{delay:3.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img7", .5,{delay:4, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img8", .5,{delay:4.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img9", .5,{delay:5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img10", .5,{delay:5.5,  css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img11", .5,{delay:6, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img12", .5,{delay:6.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img13", .5,{delay:7, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img14", .5,{delay:7.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace19_img15", .5,{delay:8, css:{"margin-right": "30vw", opacity:0}}),0);
  
  
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace19"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace19");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide20 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace20", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace20_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace20_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace20_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace20_img4", .5,{delay:2.5,  css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace20_img5", .5,{delay:3, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace20_img6", .5,{delay:3.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace20_img7", .5,{delay:4, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace20_img8", .5,{delay:4.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace20_img9", .5,{delay:5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace20_img10", .5,{delay:5.5,  css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace20_img11", .5,{delay:6, css:{"margin-top": "30vw", opacity:0}}),0);
    
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace20"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace20");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide21 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace21", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace21_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace21_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace21_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace21_img4", .5,{delay:2.5,  css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace21_img5", .5,{delay:3, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace21_img6", .5,{delay:3.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace21_img7", .5,{delay:4, css:{"margin-top": "30vw", opacity:0}}),0);
  
    
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace21"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace21");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide22 (i) {    
  document.getElementById("bace22Video3").controls = true; 
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace22", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace22_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace22_img2", .5,{delay:.3, css:{opacity:0}}),0);
  timeline.add(TweenMax.from("#bace22_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  
    
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace22"
  })
  .on('enter', function(){
    (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    /*$('#bace11Video2')[0].play();*/
})
.on("leave", function () {
    console.log("bace5");
    $('#bace22Video3')[0].pause();
    colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide23 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace23", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace23_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace23_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace23_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace23_img4", .5,{delay:2.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace23_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace23_img6", .5,{delay:3.5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace23_img7", .5,{delay:4, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace23_img8", .5,{delay:4.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace23_img9", .5,{delay:5, css:{"margin-right": "30vw", opacity:0}}),0);
  
    
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace23"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace23");
      $('#bace22Video3')[0].pause();
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide24 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace24", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace24_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace24_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace24_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace24_img4", .5,{delay:2.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace24_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace24_img6", .5,{delay:3.5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace24_img7", .5,{delay:4, css:{"margin-top": "30vw", opacity:0}}),0);
    
    
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace24"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace24");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide25 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace25", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace25_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace25_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace25_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace25_img4", .5,{delay:2.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace25_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace25_img6", .5,{delay:3.5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace25_img7", .5,{delay:4, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace25_img8", .5,{delay:4.5, css:{"margin-left": "30vw", opacity:0}}),0);
  
    
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace25"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace25");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide26 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace26", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace26_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace26_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace26_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace26_img4", .5,{delay:2.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace26_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace26_img6", .5,{delay:3.5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace26_img7", .5,{delay:4, css:{"margin-top": "30vw", opacity:0}}),0);
    
    
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace26"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace26");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide27 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace27", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace27_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace27_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace27_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace27_img4", .5,{delay:2.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace27_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace27_img6", .5,{delay:3.5, css:{"margin-right": "30vw", opacity:0}}),0);
     
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace27"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace27");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide28 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace28", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace28_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace28_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace28_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace28_img4", .5,{delay:2.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace28_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace28_img6", .5,{delay:3.5, css:{"margin-right": "30vw", opacity:0}}),0);
     
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace28"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace28");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide29 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace29", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace29_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace29_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace29_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace29_img4", .5,{delay:2.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace29_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace29_img6", .5,{delay:3.5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace29_img7", .5,{delay:4, css:{"margin-right": "30vw", opacity:0}}),0);
     
  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace29"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace29");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide30 (i) {  
  document.getElementById("bace30Video4").controls = false;   
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace30", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace30_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace30_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace30_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace30_img4", .5,{delay:2.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace30_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace30_img6", .5,{delay:3.5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace30_img7", .5,{delay:4, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace30_img8", .5,{delay:.3, css:{ opacity:0}}),0);
        

  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace30"
  })
  .on('enter', function(){
    (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    $('#bace30Video4')[0].play();
})
.on("leave", function () {
    console.log("bace5");
    $('#bace30Video4')[0].pause();
    colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide31 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace31", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace31_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace31_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace31_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace31_img4", .5,{delay:2.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace31_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace31_img6", .5,{delay:3.5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace31_img7", .5,{delay:4, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace31_img8", .5,{delay:4.5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace31_img9", .5,{delay:5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace31_img10", .5,{delay:5.5, css:{"margin-right": "30vw", opacity:0}}),0);
        

  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace31"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace31");
      $('#bace30Video4')[0].pause();
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide32 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace32", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace32_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace32_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace32_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace32_img4", .5,{delay:2.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace32_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace32_img6", .5,{delay:3.5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace32_img7", .5,{delay:4, css:{"margin-right": "30vw", opacity:0}}),0);
  
        

  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace32"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace32");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide33 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace33", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace33_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace33_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace33_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace33_img4", .5,{delay:2.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace33_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace33_img6", .5,{delay:3.5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace33_img7", .5,{delay:4, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace33_img8", .5,{delay:4.5, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace33_img9", .5,{delay:5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace33_img10", .5,{delay:5.5, css:{"margin-right": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace33_img11", .5,{delay:6, css:{"margin-right": "30vw", opacity:0}}),0);
  
        

  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace33"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace33");
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide34 (i) {   
  document.getElementById("bace34Video5").controls = true;  
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace34", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace34_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace34_img2", .5,{delay:.3, css:{opacity:0}}),0);
  
        

  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace34"
  })
  .on('enter', function(){
    (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    /*$('#bace34Video5')[0].play();*/
})
.on("leave", function () {
    console.log("bace5");
    $('#bace34Video5')[0].pause();
    colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function slide35 (i) {    
  var timeline = new TimelineMax({paused: true});
  timeline.add(TweenMax.from("#bace35", 0.5, {delay:.5,css:{opacity:.7, top:"1vw"}}));
  timeline.add(TweenMax.from("#bace35_img1", .5,{delay:1, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace35_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace35_img3", .5,{delay:2, css:{"margin-top": "30vw", opacity:0}}),0);
  timeline.add(TweenMax.from("#bace35_img4", .5,{delay:2.5, css:{"margin-left": "30vw", opacity:0}}),0);
  
        

  var scene = new ScrollMagic.Scene({
      triggerElement: "#bace35"
  })
  .on('enter', function(){
      (vistos[i]==0)?timeline.play():'';vistos[i]=1;
  }).on("enter leave", function () {
      console.log("bace35");
      $('#bace34Video5')[0].pause();
      colocarMenuPorMarca(0);
  });
  return processScene(scene);
}

function iniciarMenu(){
  console.log("soy inicio");
  
  $("#btn1").hover(function(){TweenMax.to("#btn1Tag", .5, {css:{opacity:1}});});
  $("#btn1").mouseout(function(){TweenMax.to("#btn1Tag", .5, {css:{opacity:0}});});
  $("#btn2").hover(function(){TweenMax.to("#btn2Tag", .5, {css:{opacity:1}});});
  $("#btn2").mouseout(function(){TweenMax.to("#btn2Tag", .5, {css:{opacity:0}});});
  $("#btn3").hover(function(){TweenMax.to("#btn3Tag", .5, {css:{opacity:1}});});
  $("#btn3").mouseout(function(){TweenMax.to("#btn3Tag", .5, {css:{opacity:0}});});
    
   

    $("#btn1").on('click', function(event) {
        $("html").animate({ scrollTop : $("#bace2").offset().top}, 5000);
    });
    $("#btn2").on('click', function(event) {
        $("html").animate({ scrollTop : $("#bace12").offset().top}, 5000);
    });
    $("#btn3").on('click', function(event) {
        $("html").animate({ scrollTop : $("#bace23").offset().top}, 5000);
    });
    
}

function iniciarMenubace(){
    $("#btn1bace").hover(function(){TweenMax.to("#btn1Tagbace", .5, {css:{opacity:1}});});
    $("#btn1bace").mouseout(function(){TweenMax.to("#btn1Tagbace", .5, {css:{opacity:1}});});
    $("#btn2bace").hover(function(){TweenMax.to("#btn2Tagbace", .5, {css:{opacity:1}});});
    $("#btn2bace").mouseout(function(){TweenMax.to("#btn2Tagbace", .5, {css:{opacity:1}});});
    $("#btn3bace").hover(function(){TweenMax.to("#btn3Tagbace", .5, {css:{opacity:1}});});
    $("#btn3bace").mouseout(function(){TweenMax.to("#btn3Tagbace", .5, {css:{opacity:1}});});
    $("#btn4bace").hover(function(){TweenMax.to("#btn4Tagbace", .5, {css:{opacity:1}});});
    $("#btn4bace").mouseout(function(){TweenMax.to("#btn4Tagbace", .5, {css:{opacity:1}});});
    $("#btn5bace").hover(function(){TweenMax.to("#btn5Tagbace", .5, {css:{opacity:1}});});
    $("#btn5bace").mouseout(function(){TweenMax.to("#btn5Tagbace", .5, {css:{opacity:1}});});
    $("#btn6bace").hover(function(){TweenMax.to("#btn6Tagbace", .5, {css:{opacity:1}});});
    $("#btn6bace").mouseout(function(){TweenMax.to("#btn6Tagbace", .5, {css:{opacity:1}});});
    $("#btn7bace").hover(function(){TweenMax.to("#btn7Tagbace", .5, {css:{opacity:1}});});
    $("#btn7bace").mouseout(function(){TweenMax.to("#btn7Tagbace", .5, {css:{opacity:1}});});
   

    $("#btn1bace").on('click', function(event) {
        $("html").animate({ scrollTop : $("#bace3").offset().top}, 5000);
    });
    $("#btn2bace").on('click', function(event) {
        $("html").animate({ scrollTop : $("#bace4").offset().top}, 5000);
    });
    $("#btn3bace").on('click', function(event) {
        $("html").animate({ scrollTop : $("#bace5").offset().top}, 5000);
    });
    $("#btn4bace").on('click', function(event) {
        $("html").animate({ scrollTop : $("#bace6").offset().top}, 5000);
    });
    $("#btn5bace").on('click', function(event) {
        $("html").animate({ scrollTop : $("#bace7").offset().top}, 5000);
    });
    $("#btn6bace").on('click', function(event) {
        $("html").animate({ scrollTop : $("#bace8").offset().top}, 5000);
    });
    $("#btn7bace").on('click', function(event) {
        $("html").animate({ scrollTop : $("#bace9").offset().top}, 5000);
    });   
}

function iniciarMenuSIX(){
    $("#btn1SIX").hover(function(){TweenMax.to("#btn1TagSIX", .5, {css:{opacity:1}});});
    $("#btn1SIX").mouseout(function(){TweenMax.to("#btn1TagSIX", .5, {css:{opacity:1}});});
    $("#btn2SIX").hover(function(){TweenMax.to("#btn2TagSIX", .5, {css:{opacity:1}});});
    $("#btn2SIX").mouseout(function(){TweenMax.to("#btn2TagSIX", .5, {css:{opacity:1}});});
    $("#btn3SIX").hover(function(){TweenMax.to("#btn3TagSIX", .5, {css:{opacity:1}});});
    $("#btn3SIX").mouseout(function(){TweenMax.to("#btn3TagSIX", .5, {css:{opacity:1}});});
    $("#btn4SIX").hover(function(){TweenMax.to("#btn4TagSIX", .5, {css:{opacity:1}});});
    $("#btn4SIX").mouseout(function(){TweenMax.to("#btn4TagSIX", .5, {css:{opacity:1}});});
    $("#btn5SIX").hover(function(){TweenMax.to("#btn5TagSIX", .5, {css:{opacity:1}});});
    $("#btn5SIX").mouseout(function(){TweenMax.to("#btn5TagSIX", .5, {css:{opacity:1}});});
    $("#btn6SIX").hover(function(){TweenMax.to("#btn6TagSIX", .5, {css:{opacity:1}});});
    $("#btn6SIX").mouseout(function(){TweenMax.to("#btn6TagSIX", .5, {css:{opacity:1}});});
    $("#btn7SIX").hover(function(){TweenMax.to("#btn7TagSIX", .5, {css:{opacity:1}});});
    $("#btn7SIX").mouseout(function(){TweenMax.to("#btn7TagSIX", .5, {css:{opacity:1}});});
    $("#btn8SIX").hover(function(){TweenMax.to("#btn8TagSIX", .5, {css:{opacity:1}});});
    $("#btn8SIX").mouseout(function(){TweenMax.to("#btn8TagSIX", .5, {css:{opacity:1}});});
    
   

    $("#btn1SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six3").offset().top}, 5000);
    });
    $("#btn2SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six5").offset().top}, 5000);
    });
    $("#btn3SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six6").offset().top}, 5000);
    });
    $("#btn4SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six7").offset().top}, 5000);
    });
    $("#btn5SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six9").offset().top}, 5000);
    });
    $("#btn6SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six11").offset().top}, 5000);
    });
    $("#btn7SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six13").offset().top}, 5000);
    }); 
   $("#btn8SIX").on('click', function(event) {
        $("html").animate({ scrollTop : $("#six15").offset().top}, 5000);
    });   
}

function iniciarMenuRetail(){
    $("#btn1Retail").hover(function(){TweenMax.to("#btn1TagRetail", .5, {css:{opacity:1}});});
    $("#btn1Retail").mouseout(function(){TweenMax.to("#btn1TagRetail", .5, {css:{opacity:1}});});
    $("#btn2Retail").hover(function(){TweenMax.to("#btn2TagRetail", .5, {css:{opacity:1}});});
    $("#btn2Retail").mouseout(function(){TweenMax.to("#btn2TagRetail", .5, {css:{opacity:1}});});
    $("#btn3Retail").hover(function(){TweenMax.to("#btn3TagRetail", .5, {css:{opacity:1}});});
    $("#btn3Retail").mouseout(function(){TweenMax.to("#btn3TagRetail", .5, {css:{opacity:1}});});
    $("#btn4Retail").hover(function(){TweenMax.to("#btn4TagRetail", .5, {css:{opacity:1}});});
    $("#btn4Retail").mouseout(function(){TweenMax.to("#btn4TagRetail", .5, {css:{opacity:1}});});
    $("#btn5Retail").hover(function(){TweenMax.to("#btn5TagRetail", .5, {css:{opacity:1}});});
    $("#btn5Retail").mouseout(function(){TweenMax.to("#btn5TagRetail", .5, {css:{opacity:1}});});
    $("#btn6Retail").hover(function(){TweenMax.to("#btn6TagRetail", .5, {css:{opacity:1}});});
    $("#btn6Retail").mouseout(function(){TweenMax.to("#btn6TagRetail", .5, {css:{opacity:1}});});
    $("#btn7Retail").hover(function(){TweenMax.to("#btn7TagRetail", .5, {css:{opacity:1}});});
    $("#btn7Retail").mouseout(function(){TweenMax.to("#btn7TagRetail", .5, {css:{opacity:1}});});
    $("#btn8Retail").hover(function(){TweenMax.to("#btn8TagRetail", .5, {css:{opacity:1}});});
    $("#btn8Retail").mouseout(function(){TweenMax.to("#btn8TagRetail", .5, {css:{opacity:1}});});
    $("#btn9Retail").hover(function(){TweenMax.to("#btn9TagRetail", .5, {css:{opacity:1}});});
    $("#btn9Retail").mouseout(function(){TweenMax.to("#btn9TagRetail", .5, {css:{opacity:1}});});
   

    $("#btn1Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail3").offset().top}, 5000);
    });
    $("#btn2Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail5").offset().top}, 5000);
    });
    $("#btn3Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail6").offset().top}, 5000);
    });
    $("#btn4Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail7").offset().top}, 5000);
    });
    $("#btn5Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail9").offset().top}, 5000);
    });
    $("#btn6Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail11").offset().top}, 5000);
    });
    $("#btn7Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail2").offset().top}, 5000);
    });
    $("#btn8Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail13").offset().top}, 5000);
    });
    $("#btn9Retail").on('click', function(event) {
        $("html").animate({ scrollTop : $("#retail14").offset().top}, 5000);
    });   
}
/*
    sin menu =0
    bace = 1
    six = 2
    retail = 3
*/
function colocarMenuPorMarca(marca){
    var Nom="";
    if(marca==0){
        animacion_salida($("#contenedorMenubace"),"default", 0);
        animacion_salida($("#contenedorMenuSIX"),"default", 0);
        animacion_salida($("#contenedorMenuRetail"),"default", 0);
    }else if(marca==1){
        Nom="#contenedorMenubace";
        animacion_salida($("#contenedorMenuSIX"),"default", 0);
        animacion_salida($("#contenedorMenuRetail"),"default", 0);
    }else if(marca==2){
        Nom="#contenedorMenuSIX";
        animacion_salida($("#contenedorMenubace"),"default", 0);
        animacion_salida($("#contenedorMenuRetail"),"default", 0);
    }else if(marca==3){
        Nom="#contenedorMenuRetail";
        animacion_salida($("#contenedorMenubace"),"default", 0);
        animacion_salida($("#contenedorMenuSIX"),"default", 0);
    }
    if(marca != vista){
        if(marca !=0){
            animacion_entrada($(Nom),"izquierda_derecha", 0.5);
        }
        vista = marca;
    }
}

function animacion_entrada(objeto, tipo, retardo, funcion_sigue) {
    //tipos de animación: "default", "arriba_abajo", "abajo_arriba", "izquierda_derecha", "derecha_izquierda", "ampliar", "reducir" */
    TweenMax.killTweensOf(objeto);
    var animaciones = new Array("default", "arriba_abajo", "abajo_arriba", "izquierda_derecha", "derecha_izquierda");
    var tiempo_animacion = 0.5;
    if (tipo == undefined) {
      tipo = "default";
    }
    if (retardo == undefined) {
      retardo = 0;
    }
    if (tipo == "aleatorio") {
      tipo = animaciones[Math.floor(Math.random() * animaciones.length)];
    }
    objeto.css("display", "block");
    if (funcion_sigue == undefined) {
      switch (tipo) {
        case "default":
          TweenMax.to(objeto, tiempo_animacion, { alpha: 1, ease: Quart.easeOut, delay: retardo });
          break;
        case "arriba_abajo":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage + 80 },
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { top: parseInt(objeto.attr("_origeny")) * scalePage - 80 },
              { top: parseInt(objeto.attr("_origeny")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          }
          break;
        case "abajo_arriba":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage - 80 },
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { top: parseInt(objeto.attr("_origeny")) * scalePage + 80 },
              { top: parseInt(objeto.attr("_origeny")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          }
          break;
        case "izquierda_derecha":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { right: parseInt(objeto.attr("_origenx")) * scalePage + 150 },
              { right: parseInt(objeto.attr("_origenx")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { left: parseInt(objeto.attr("_origenx")) * scalePage - 150 },
              { left: parseInt(objeto.attr("_origenx")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          }
          break;
        case "derecha_izquierda":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { right: parseInt(objeto.attr("_origenx")) * scalePage - 150 },
              { right: parseInt(objeto.attr("_origenx")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { left: parseInt(objeto.attr("_origenx")) * scalePage + 150 },
              { left: parseInt(objeto.attr("_origenx")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          }
          break;
      }
    } else {
      switch (tipo) {
        case "default":
          TweenMax.to(objeto, tiempo_animacion, {
            alpha: 1,
            ease: Quart.easeOut,
            delay: retardo,
            onComplete: funcion_sigue
          });
          break;
        case "arriba_abajo":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage + 80 },
              {
                bottom: parseInt(objeto.attr("_origeny")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { top: parseInt(objeto.attr("_origeny")) * scalePage - 80 },
              {
                top: parseInt(objeto.attr("_origeny")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          }
          break;
        case "abajo_arriba":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage - 80 },
              {
                bottom: parseInt(objeto.attr("_origeny")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { top: parseInt(objeto.attr("_origeny")) * scalePage + 80 },
              {
                top: parseInt(objeto.attr("_origeny")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          }
          break;
        case "izquierda_derecha":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { right: parseInt(objeto.attr("_origenx")) * scalePage + 150 },
              {
                right: parseInt(objeto.attr("_origenx")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { left: parseInt(objeto.attr("_origenx")) * scalePage - 150 },
              {
                left: parseInt(objeto.attr("_origenx")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          }
          break;
        case "derecha_izquierda":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { right: parseInt(objeto.attr("_origenx")) * scalePage - 150 },
              {
                right: parseInt(objeto.attr("_origenx")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { left: parseInt(objeto.attr("_origenx")) * scalePage + 150 },
              {
                left: parseInt(objeto.attr("_origenx")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          }
          break;
      }
    }
  }

  function animacion_salida(objeto, tipo, retardo, funcion_sigue) {
    var animaciones = new Array("default", "arriba_abajo", "abajo_arriba", "izquierda_derecha", "derecha_izquierda");
    var tiempo_animacion = 1;
    if (tipo == undefined) {
      tipo = "default";
    }
    if (retardo == undefined) {
      retardo = 0;
    }
    if (tipo == "aleatorio") {
      tipo = animaciones[random(animaciones.length - 1)];
    }
    if (funcion_sigue == undefined) {
      switch (tipo) {
        case "default":
          TweenMax.to(objeto, tiempo_animacion, { alpha: 0, ease: Quart.easeOut, delay: retardo, display: "none" });
          break;
        case "arriba_abajo":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.to(objeto, tiempo_animacion, {
              bottom: parseInt(objeto.css("bottom")) - 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              top: parseInt(objeto.css("top")) + 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          }
          break;
        case "abajo_arriba":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.to(objeto, tiempo_animacion, {
              bottom: parseInt(objeto.css("bottom")) + 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              top: parseInt(objeto.css("top")) - 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          }
          break;
        case "izquierda_derecha":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.to(objeto, tiempo_animacion, {
              right: parseInt(objeto.css("right")) - 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              left: parseInt(objeto.css("left")) + 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          }
          break;
        case "derecha_izquierda":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.to(objeto, tiempo_animacion, {
              right: parseInt(objeto.css("right")) + 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              left: parseInt(objeto.css("left")) - 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          }
          break;
      }
    } else {
      switch (tipo) {
        case "default":
          TweenMax.to(objeto, tiempo_animacion, {
            alpha: 0,
            ease: Quart.easeOut,
            delay: retardo,
            onComplete: funcion_sigue
          });
          break;
        case "arriba_abajo":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.to(objeto, tiempo_animacion, {
              bottom: parseInt(objeto.css("bottom")) - 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              top: parseInt(objeto.css("top")) + 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          }
          break;
        case "abajo_arriba":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.to(objeto, tiempo_animacion, {
              bottom: parseInt(objeto.css("bottom")) + 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              top: parseInt(objeto.css("top")) - 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          }
          break;
        case "izquierda_derecha":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.to(objeto, tiempo_animacion, {
              right: parseInt(objeto.css("right")) - 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              left: parseInt(objeto.css("left")) + 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          }
          break;
        case "derecha_izquierda":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.to(objeto, tiempo_animacion, {
              right: parseInt(objeto.css("right")) + 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              left: parseInt(objeto.css("left")) - 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          }
          break;
      }
    }
  }