const items = ['DESING  ', 'DESARROLLO  ', 'INSTITUCIONAL  ',  'MARKETING  ', 'TIENDA  ', 'ATERRIZAJE  ', 'CATALOGO  ', 'SOCIAL MEDIA  ']; // keep a space after array items

let index = 0; // index of array
let charIndex = 0; // index of character in string

function typing() {
  if (index === items.length) {
    index = 0;
    setTimeout(typing, 1000);
  } else if (charIndex >= items[index].length) {
    setTimeout(deleteTxt, 1000);
  } else if (charIndex < items[index].length) {
    const addChar = items[index].substr(-items[index].length, charIndex);
    document.querySelector('.type').innerHTML = addChar;
    charIndex += 1;
    setTimeout(typing, 100); // typing speed
  }
};

function typing() {
  if (index === items.length) {
    index = 0;
    setTimeout(typing, 1000);
  } else if (charIndex >= items[index].length) {
    setTimeout(deleteTxt, 1000);
  } else if (charIndex < items[index].length) {
    const addChar = items[index].substr(-items[index].length, charIndex);
    document.querySelector('.type').innerHTML = addChar;
    charIndex += 1;
    setTimeout(typing, 100); // typing speed
  }
};

function deleteTxt() {
  if (charIndex >= 0) {
    const delChar = items[index].substr(-items[index].length, charIndex);
    document.querySelector('.type').innerHTML = delChar;
    charIndex -= 1;
    setTimeout(deleteTxt, 50); // delete speed
  } else if (index <= items.length -1) {
    index += 1;
    typing();
  } else {
    typing();
  }
};  

document.addEventListener("DOMContentLoaded", typing());


function plan(id) {
  if (!id) {
    switch (id) {
      case 'PlanAterrizaje':
        console.log('PlanAterrizaje');
        break;
      case 'PlanTurnos':
        console.log('PlanTurnos');
        break;
      case 'PlanTienda':
        console.log('PlanTienda');
        break;
      default:
        console.log('Muchas gracias por elegir: ' + expr + '.');
    }
  }
};

document.getElementById("btnAterrizaje").onclick = function () {
  $("#message").val("Buenos dias! Me interesa saber mas acerca el Plan Aterrizaje, ");
};

document.getElementById("btnTurnos").onclick = function () {
  $("#message").val("Buenos dias! Me interesa saber mas acerca el Plan Turnos, ");
};
document.getElementById("btnTienda").onclick = function () {
  $("#message").val("Buenos dias! Me interesa saber mas acerca el Plan Tienda, ");
};


/* EMAIL */

$(function() {
    ["email", "name", "message"].forEach(function(field) {
      $("#" + field).attr("required", true);
      $("#" + field).focus(function() {
        $(".success-help").fadeOut("fast");
      });
    });
  
    $("#SendEMAIL").submit(function(e) {
      $(".mdl-spinner").fadeIn("slow").css("display", "inline-block");
      e.preventDefault();
      var from = $("#email").val();
      var name = $("#name").val();
      var emailbody = $("#message").val();
      $.ajax({
        url: "https://mybench-sendingemail.backbench.io/send",
        data: {
          from: from,
          to: "ohmyweb.io@gmail.com",
          subject: "OMW de nombre:" + name ,
          emailbody: emailbody
        },
        error: function() {
          $(".mdl-spinner").fadeOut("fast");
          $(".success-help").html("An error has occurred").fadeIn("slow");
        },
        success: function(data) {
          $(".mdl-spinner").fadeOut("fast");
          ["email", "name", "message"].forEach(function(field) {
            $("#" + field).val("");
          });
          $(".success-help").fadeIn("slow");
        },
        type: "POST"
      });
    });
  });