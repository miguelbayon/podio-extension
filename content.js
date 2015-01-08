/* Listen for messages */
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

	switch(message.type) {

		case "creaSancion":

			var alumno = $("table tr:eq(2) td:eq(1)").text();	
			
			var descripcionSancion = $("table tr:eq(6) td:eq(1)").text();

			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();

			if(dd<10) {
			    dd='0'+ dd;
			} 

			if(mm<10) {
			    mm='0'+ mm;
			} 

			today = dd+'/'+mm+'/'+yyyy;		


			var html = '<h1>';
			html    += '<img class="imagen-logo" src="https://googledrive.com/host/0BwMgXZ83HVDlOUQwMHc5SFdsUEk/logo.png"/>';
			html    += '<div class="subtitulo">Instituto de E.S.O., Bachillerato y Ciclos Formativos</div>';
			html    += '<div class="datos-instituto">';
			html    += 'Avda. del Romeral 125, 24191, Villabalter, León (España)';
			html    += ' Tlf: 987 84 63 15';
			html    += 'ies-san.andres@jcyl.es';
			html    += '</div>';
			html    += '</h1>';

			html    += '<h2>';
			html    += '<span>SANCIÓN</span>';
			html    += '</h2>';

			html    += '<h3>' + alumno + '</h3>';

			html    += '<div class="introduccion-parte">';
			html    += '<p>La Jefatura de Estudios del IES San Andrés, por Delegación de la Directora, en cumplimiento del Decreto 51/2007 de 17 de mayo de 2007, por el que se regulan los derechos y deberes de los alumnos y se establecen las normas de convivencia en los Centros Educativos de Castilla y León y al Decreto 23/2014, de 12 de junio, por el que se establece el marco del gobierno y autonomía de los centros docentes, impone la sanción que se indica a continuación al alumno/a ' + alumno + ':</p>';
			html    += '</div>';

			html    += '<div class="titulo-descripcion">Descripción de los hechos</div>';
			html    += '<div class="descripcion">' + descripcionSancion + '</div>';

			html    += '<div class="parteInferior">';
			html    += '<div id="fecha">';
			html    += '<p>En Villabalter, a ' + today + '</p>';
			html    += '<p>Fdo. Jefatura de Estudios</p>';
			html    += '</div>';
			html    += '</div>';

			html    += '<div class="recortable-inferior">';
			html    += '<div class="cabecera-recortable">';
			html    += 'D/Dª ….................................................................................................................................. padre/madre del alumno ' + alumno + ', manifiesta haber recibido la comunicación de la sanción impuesta a su hijo/a en fecha ' + today + ' y acepta el cumplimiento de la misma.';
			html    += '</div>';
			html    += '<div class="pie-recortable">';
			html    += '<p>En …..............................................., a ….......... de …...................................... de …..................</p>';
			html    += '<p>Firma del padre/madre:</p>';
			html    += '</div>';
			html    += '</div>';
			html    += '</div>';
			html    += '';
    
    

			$('body').html(html);

			$("table tr:eq(0)").css("display", "none");
			$("table tr:eq(1)").css("display", "none");
			$("table tr:eq(2)").css("display", "none");
			$("table tr:eq(3)").css("display", "none");
			$("table tr:eq(4)").css("display", "none");
			$("table tr:eq(5)").css("display", "none");
			$("table tr:eq(6)").css("display", "none");


		break;


		case "creaAmonestacion":

			var alumno = $("table tr:eq(1) td:eq(1)").text();	
			
			var descripcion = $("table tr:eq(3) td:eq(1)").text();

			var fecha = $("table tr:eq(2) td:eq(1)").text();


			var html = '<h1>';
			html    += '<img class="imagen-logo" src="https://googledrive.com/host/0BwMgXZ83HVDlOUQwMHc5SFdsUEk/logo.png"/>';
			html    += '<div class="subtitulo">Instituto de E.S.O., Bachillerato y Ciclos Formativos</div>';
			html    += '<div class="datos-instituto">';
			html    += 'Avda. del Romeral 125, 24191, Villabalter, León (España)';
			html    += ' Tlf: 987 84 63 15';
			html    += 'ies-san.andres@jcyl.es';
			html    += '</div>';
			html    += '</h1>';

			html    += '<h2>';
			html    += '<span>AMONESTACIÓN</span>';
			html    += '</h2>';

			html    += '<h3>' + alumno + '</h3>';

			html    += '<div class="introduccion-parte">';
			html    += '<p>La Jefatura de Estudios del IES San Andrés, por Delegación de la Directora, en cumplimiento del Decreto 51/2007 de 17 de mayo de 2007, por el que se regulan los derechos y deberes de los alumnos y se establecen las normas de convivencia en los Centros Educativos de Castilla y León, sanciona con esta amonestación por escrito la siguiente conducta contraria a las normas de convivencia del Centro (según art. 37 del Real Decreto 51/2007) del alumno/a' + alumno + ':</p>';
			html    += '</div>';

			html    += '<div class="titulo-descripcion">Descripción de los hechos</div>';
			html    += '<div class="descripcion">' + descripcion + '</div>';

			html    += '<div class="parteInferior">';
			html    += '<div id="fecha">';
			html    += '<p>En Villabalter, a ' + fecha + '</p>';
			html    += '<p>Fdo. Jefatura de Estudios</p>';
			html    += '</div>';
			html    += '</div>';

			html    += '<div class="recortable-inferior">';
			html    += '<div class="cabecera-recortable">';
			html    += 'D/Dª ….................................................................................................................................. padre/madre del alumno ' + alumno + ', manifiesta haber recibido la comunicación de la amonestación impuesta a su hijo/a en fecha ' + fecha + ' que indica una conducta contraria a las normas de convivencia del IES San Andrés.';
			html    += '</div>';
			html    += '<div class="pie-recortable">';
			html    += '<p>En …..............................................., a ….......... de …...................................... de …..................</p>';
			html    += '<p>Firma del padre/madre:</p>';
			html    += '</div>';
			html    += '</div>';
			html    += '</div>';
			html    += '';
    
    

			$('body').html(html);

			$("table tr:eq(0)").css("display", "none");
			$("table tr:eq(1)").css("display", "none");
			$("table tr:eq(2)").css("display", "none");
			$("table tr:eq(3)").css("display", "none");
			$("table tr:eq(4)").css("display", "none");
			$("table tr:eq(5)").css("display", "none");
			$("table tr:eq(6)").css("display", "none");


		break;

	}


});