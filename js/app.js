let map, bounds;

function cargar_(){
  async function datos(){

    try{
      await loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB7wqaaeacGuJCt5slAmi6BfhpB9zv8k30&callback=initMap&v=beta&libraries=marker");
      await loadScript("js/markerwithlabel.js");
    }catch{
      console.log('Error en la Cosulta');
    }
  }
  datos();
}


function obtenerDatosIP(){

		var ip = document.getElementById("ip").value;

			

		//return new Promise((resolve, reject) => {
				var xmlhttp;

				if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
					xmlhttp=new XMLHttpRequest();
				}
				else{// code for IE6, IE5
				    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				
				xmlhttp.onreadystatechange=function(){
				  	if (xmlhttp.readyState==4 && xmlhttp.status==200){
				     
				     	 	//console.log("Datos:"+ xmlhttp.responseText);

                if(xmlhttp.responseText == '1'){
                 $('#myModal').modal('show'); // abrir
                }else if(xmlhttp.responseText == '2'){
                  alert('IP no válida');
                }
                else{
                    let datos = JSON.parse(xmlhttp.responseText);

                    var tabla = document.getElementById("tabla_resumen");

                 
                    var tblBody = document.createElement("tbody");

                    
                      // Crea un elemento <tr y td>
                     

                      var hilera2 = document.createElement("tr");

                        var celda3 = document.createElement("td");
                          var textoCelda3 = document.createTextNode('IP:',);
                            celda3.appendChild(textoCelda3);
                        hilera2.appendChild(celda3);

                        var celda4 = document.createElement("td");
                          var textoCelda4 = document.createTextNode(datos.ip,);
                            celda4.appendChild(textoCelda4);
                        hilera2.appendChild(celda4);

                      var hilera3 = document.createElement("tr");

                        var celda5 = document.createElement("td");
                          var textoCelda5 = document.createTextNode('Código de país:',);
                            celda5.appendChild(textoCelda5);
                        hilera3.appendChild(celda5);

                        var celda6 = document.createElement("td");
                          var textoCelda6 = document.createTextNode(datos.calling_code,);
                            celda6.appendChild(textoCelda6);
                        hilera3.appendChild(celda6);

                      var hilera4 = document.createElement("tr");

                        var celda7 = document.createElement("td");
                          var textoCelda7 = document.createTextNode('País:',);
                            celda7.appendChild(textoCelda7);
                        hilera4.appendChild(celda7);

                        var celda8 = document.createElement("td");
                          var textoCelda8 = document.createTextNode(datos.country_name,);
                            celda8.appendChild(textoCelda8);
                        hilera4.appendChild(celda8);

                      var hilera5 = document.createElement("tr");

                        var celda9 = document.createElement("td");
                          var textoCelda9 = document.createTextNode('Municipio:',);
                            celda9.appendChild(textoCelda9);
                        hilera5.appendChild(celda9);

                        var celda10 = document.createElement("td");
                          var textoCelda10 = document.createTextNode(datos.city,);
                            celda10.appendChild(textoCelda10);
                        hilera5.appendChild(celda10);

                      var hilera6 = document.createElement("tr");

                        var celda11 = document.createElement("td");
                          var textoCelda11 = document.createTextNode('ISP:',);
                            celda11.appendChild(textoCelda11);
                        hilera6.appendChild(celda11);

                        var celda12 = document.createElement("td");
                          var textoCelda12 = document.createTextNode(datos.isp,);
                            celda12.appendChild(textoCelda12);
                        hilera6.appendChild(celda12);

                      var hilera7 = document.createElement("tr");

                        var celda13 = document.createElement("td");
                          var textoCelda13 = document.createTextNode('Lenguajes:',);
                            celda13.appendChild(textoCelda13);
                          hilera7.appendChild(celda13);

                        var celda14 = document.createElement("td");
                          var textoCelda14 = document.createTextNode(datos.languages,);
                            celda14.appendChild(textoCelda14);
                        hilera7.appendChild(celda14);

                        var hilera8 = document.createElement("tr");

                          var celda15 = document.createElement("td");
                            var textoCelda15 = document.createTextNode('Latitud:',);
                              celda15.appendChild(textoCelda15);
                          hilera8.appendChild(celda15);

                          var celda16 = document.createElement("td");
                            var textoCelda16 = document.createTextNode(datos.latitude,);
                              celda16.appendChild(textoCelda16);
                          hilera8.appendChild(celda16);

                        var hilera9 = document.createElement("tr");

                          var celda17 = document.createElement("td");
                            var textoCelda17 = document.createTextNode('Longitud',);
                              celda17.appendChild(textoCelda17);
                            hilera9.appendChild(celda17);

                          var celda18 = document.createElement("td");
                            var textoCelda18 = document.createTextNode(datos.longitude,);
                              celda18.appendChild(textoCelda18);
                          hilera9.appendChild(celda18);

                      // posiciona el <tbody> debajo del elemento <table>
                      
                      tblBody.appendChild(hilera2);
                      tblBody.appendChild(hilera3);
                      tblBody.appendChild(hilera4);
                      tblBody.appendChild(hilera5);
                      tblBody.appendChild(hilera6);
                      tblBody.appendChild(hilera7);
                      tblBody.appendChild(hilera8);
                      tblBody.appendChild(hilera9);

                      tabla.appendChild(tblBody);


                      var tablah = document.getElementById("tabla_historico");
                      var tblBodyh = document.getElementById("tbodyh");

                        var hilera1h = document.createElement("tr");
                        hilera1h.setAttribute('id', datos.ip);

                      
                          var celda2 = document.createElement("td");
                            var textoCelda2 = document.createTextNode(datos.ip,);
                              celda2.appendChild(textoCelda2);
                          hilera1h.appendChild(celda2);

                          var celda3 = document.createElement("td");
                            var textoCelda3 = document.createTextNode(datos.calling_code,);
                              celda3.appendChild(textoCelda3);
                          hilera1h.appendChild(celda3);

                          var celda4 = document.createElement("td");
                            var textoCelda4 = document.createTextNode(datos.country_name,);
                              celda4.appendChild(textoCelda4);
                          hilera1h.appendChild(celda4);

                          var celda5 = document.createElement("td");
                            var textoCelda5 = document.createTextNode(datos.city,);
                              celda5.appendChild(textoCelda5);
                          hilera1h.appendChild(celda5);

                          var celda6 = document.createElement("td");
                            var textoCelda6 = document.createTextNode(datos.isp,);
                              celda6.appendChild(textoCelda6);
                          hilera1h.appendChild(celda6);

                          var celda7 = document.createElement("td");
                            var textoCelda7 = document.createTextNode(datos.languages,);
                              celda7.appendChild(textoCelda7);
                          hilera1h.appendChild(celda7);

                          var celda8 = document.createElement("td");
                            var textoCelda8 = document.createTextNode(datos.latitude,);
                              celda8.appendChild(textoCelda8);
                          hilera1h.appendChild(celda8);

                          var celda9 = document.createElement("td");
                            var textoCelda9 = document.createTextNode(datos.longitude,);
                              celda9.appendChild(textoCelda9);
                          hilera1h.appendChild(celda9);

                          var celda10 = document.createElement("td");
                            var btn10 = document.createElement('button',);
                              btn10.setAttribute('onclick', 'eliminar(\''+datos.ip+'\')');
                              btn10.textContent = 'Eliminar';
                              celda10.appendChild(btn10);
                          hilera1h.appendChild(celda10);                

                          // agrega la hilera al final de la tabla (al final del elemento tblbody)
                          tblBodyh.appendChild(hilera1h);
                      

                        // posiciona el <tbody> debajo del elemento <table>
                        tablah.appendChild(tblBodyh)

                        document.getElementById('map1').style.display='block';
                          var etiqueta = String(datos.ip);

                   let coordenadas = { lat: parseFloat(datos.latitude.replace(/\s+/g, "")), lng: parseFloat(datos.longitude.replace(/\s+/g, "")) };
                    bounds.extend(coordenadas);

                  

                   let contentString =
          '<div id="content">'+
            '<div id="siteNotice">' +
            '</div>' +
            ' <h3 id="firstHeading" class="firstHeading">IP: '+datos.ip+'</h3>' +
            '<div id="bodyContent">' +
              '<table id = "tablamapa" border="1" align="center" class = "table table-striped  table-responsive table-condensed" style="color: #956BB0">'+
                '<tr>' +
                  '<td>Código de país</td>' +
                  '<td>' + datos.calling_code + '</td>' +
                '</tr>'+
                '<tr>' +
                  '<td>País</td>' +
                  '<td>' + datos.country_name + '</td>' +
                '</tr>'+
                '<tr>' +
                  '<td>Municipio</td>' +
                  '<td>' + datos.city + '</td>' +
                '</tr>'+
                '<tr>' +
                  '<td>ISP</td>' +
                  '<td>' + datos.isp + '</td>' +
                '</tr>'+
                '<tr>' +
                  '<td>Lenguajes</td>' +
                  '<td id = "pobInegi">' + datos.languages + '</td>' +
                '</tr>'+
                '<tr>' +
                  '<td>Latitud</td>' +
                  '<td>' + datos.latitude + '</td>' +
                '</tr>'+
                '<tr>' +
                  '<td>Longitud</td>' +
                  '<td>' + datos.longitude + '</td>' +
                '</tr>'+
              '</table>'+        
            '</div>' +
          '</div>';




                  let marker = new MarkerWithLabel({
                     position: coordenadas,
                     draggable: false,
                     raiseOnDrag: true,
                     map: map,
                     //icon: '/',
                     labelContent: etiqueta,
                     labelAnchor: new google.maps.Point(22, 0),
                     //labelClass: "labels", // the CSS class for the label
                     labelStyle: {opacity: 0.75}
                  });


                  let iw = new google.maps.InfoWindow({
                     content: contentString,
                  });

                  google.maps.event.addListener(marker, "click", function (e) { iw.open(map, this); });


                 map.fitBounds(bounds);
                }
				   //  return resolve('Resumen');
				    //}
			  		}};
				xmlhttp.open("POST","modelo/index.php",true);
				xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xmlhttp.send("opcion=datosip&ip="+ip);
}

function historico(columnas, tabla, condicion){


		return new Promise((resolve, reject) => {
				var xmlhttp;

				if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
					xmlhttp=new XMLHttpRequest();
				}
				else{// code for IE6, IE5
				    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				
				xmlhttp.onreadystatechange=function(){
				  	if (xmlhttp.readyState==4 && xmlhttp.status==200){
				     
				     	//console.log("Datos:"+ xmlhttp.responseText);

				      let datos = JSON.parse(xmlhttp.responseText);


				      
				     
							var tabla = document.getElementById("tabla_historico");
              var tblBody = document.createElement("tbody");
              tblBody.setAttribute('id', 'tbodyh');

              for(i = 0; i < datos.length; i++){
                // Crea un elemento <tr y td>
                var hilera1 = document.createElement("tr");
                hilera1.setAttribute('id', datos[i].ip);

                  var celda2 = document.createElement("td");
                  	var textoCelda2 = document.createTextNode(datos[i].ip,);
                      celda2.appendChild(textoCelda2);
                  hilera1.appendChild(celda2);

                  var celda3 = document.createElement("td");
                  	var textoCelda3 = document.createTextNode(datos[i].code,);
                      celda3.appendChild(textoCelda3);
                  hilera1.appendChild(celda3);

                  var celda4 = document.createElement("td");
                  	var textoCelda4 = document.createTextNode(datos[i].name,);
                      celda4.appendChild(textoCelda4);
                  hilera1.appendChild(celda4);

                  var celda5 = document.createElement("td");
                  	var textoCelda5 = document.createTextNode(datos[i].city,);
                      celda5.appendChild(textoCelda5);
                  hilera1.appendChild(celda5);

                  var celda6 = document.createElement("td");
                  	var textoCelda6 = document.createTextNode(datos[i].isp,);
                      celda6.appendChild(textoCelda6);
                  hilera1.appendChild(celda6);

                  var celda7 = document.createElement("td");
                  	var textoCelda7 = document.createTextNode(datos[i].languages,);
                      celda7.appendChild(textoCelda7);
                  hilera1.appendChild(celda7);

                  var celda8 = document.createElement("td");
                  	var textoCelda8 = document.createTextNode(datos[i].lat,);
                      celda8.appendChild(textoCelda8);
                  hilera1.appendChild(celda8);

                  var celda9 = document.createElement("td");
                  	var textoCelda9 = document.createTextNode(datos[i].lng,);
                      celda9.appendChild(textoCelda9);
                  hilera1.appendChild(celda9);  

                  var celda10 = document.createElement("td");
                    var btn10 = document.createElement('button',);
                      btn10.setAttribute('onclick', 'eliminar(\''+datos[i].ip+'\')');
                      btn10.textContent = 'Eliminar';
                      celda10.appendChild(btn10);
                  hilera1.appendChild(celda10);           

                  // agrega la hilera al final de la tabla (al final del elemento tblbody)
                  tblBody.appendChild(hilera1);

                
              }

                // posiciona el <tbody> debajo del elemento <table>
                tabla.appendChild(tblBody);
				      return resolve('DTs');
				    }
			  }
				xmlhttp.open("POST","modelo/index.php",true);
				xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xmlhttp.send("opcion=consulta&columnas="+columnas+"&tabla="+tabla+"&condicion="+condicion);
		});
}

function cerrarModal(){
  $('#myModal').modal('hide');
}

function eliminar(ip){
  var xmlhttp;

  if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else{// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function(){
      if (xmlhttp.readyState==4 && xmlhttp.status==200){
         document.getElementById(ip).remove();
      }};
  xmlhttp.open("POST","modelo/index.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("opcion=eliminarip&ip="+ip);
}

function initMap(){	
			
			bounds = new google.maps.LatLngBounds();
	    map = new google.maps.Map(document.getElementById('map1'), {
	       	center: { lat: 19.432777, lng: -99.133217 },
	       	// Rotaciín inicial
					heading: 180,
					tilt: 60,
					mapId: "90f87356969d889c",
					zoom: 18,
					//mapTypeId: "terrain"
			       	//mapTypeId: google.maps.MapTypeId.ROADMAP
	    });

		  const buttons = [
			["Rotar a la \nizquierda", "rotate", 20, google.maps.ControlPosition.LEFT_CENTER],
			["Rotar a la \nderecha", "rotate", -20, google.maps.ControlPosition.RIGHT_CENTER],
			["Inclinar hacia abajo", "tilt", 20, google.maps.ControlPosition.TOP_CENTER],
			["Inclinar hacia arriba", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER],
			];

			buttons.forEach(([text, mode, amount, position]) => {
			const controlDiv = document.createElement("div");
			const controlUI = document.createElement("button");

			controlUI.classList.add("ui-button");
			controlUI.innerText = `${text}`;
			controlUI.addEventListener("click", () => {
			  adjustMap(mode, amount);
			});
			controlDiv.appendChild(controlUI);
			map.controls[position].push(controlDiv);
			});

			const adjustMap = function (mode, amount) {
			switch (mode) {
			  case "tilt":
			    map.setTilt(map.getTilt() + amount);
			    break;
			  case "rotate":
			    map.setHeading(map.getHeading() + amount);
			    break;
			  default:
			    break;
			}
			};
    historico("*", "examen"," ip is not NULL");
}

function loadScript(src) {
	return new Promise((resolve, reject) => {
		let script = document.createElement('script');
	  script.src = src;
	  script.async = false;
	  document.body.append(script);

	  return resolve('Scripts');
	});
}


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tabla_historico tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, j, visible;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabla_historico");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < tr.length; i++) {
    visible = false;
    /* Obtenemos todas las celdas de la fila, no sólo la primera */
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        visible = true;
      }
    }
    if (visible === true) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}