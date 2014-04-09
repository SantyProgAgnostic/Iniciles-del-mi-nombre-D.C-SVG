
 window.onload = function()
 {
 	var color = "#0ff";
 	var dibujar = SVG('divsvg').size("100%", 300);
 	
 	var posOrg = [[0,0], [0, 200], [200, 300], [200, 0], [300, 0], [100,100], [310, 200], [200, 400], [400, 310]];
 	var posDestino = [[0, 300], [500, 300], [100, 100], [0, 300], [500, 300], [100, 100]];
 	var continua = dibujar.polyline(posOrg).fill("none").stroke({width : 4});
 	var animo = false;
 	nom_div("posLinea").addEventListener('click', function(event)
 	{
 		if(!animo)
 		{
 			continua.animate(5000).plot(posDestino);
 		}
 		else
 		{
 			continua.animate(1000).plot(posOrg);
 		}
 		animo = !animo;
 	});
 	function nom_div(div)
 	{
 		return document.getElementById(div);
 	}
 }
