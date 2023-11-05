<?php
	class Modelo{

		private $Modelo;
		private $db;
		
		public function __construct(){
			/******************************************/
			/**************  devSCMGPC  ***************/
			/******************************************/
			/**/	$servidor = '145.0.40.32';      /**/
			/**/	$usuario = 'id21498588_root';		/**/
			/**/	$clave = 'Cracker1104&';/**/
			/**/	$bd = 'devdeoeyg';				/**/
			/******************************************/
			/******************************************/

			$this->Modelo = array();
			$this->db = new PDO('mysql:host=localhost;dbname=id21498588_examen;charset=utf8mb4', $usuario, $clave);
			
		}

		/*Metodos CRUD*/

		public function insertar($tabla, $data){
			$consulta = 'INSERT INTO '.$tabla.' values('.$data.')';
			$resultado = $this->db->query($consulta);
			if($resultado){
				return true;
			}else{
				return false;
			}
		}

		public function mostrar($columnas, $tabla, $condicion){
			// $consulta = 'SELECT * FROM '.$tabla.' WHERE '.$condicion.';';
			$consulta = 'SELECT '.$columnas.' FROM '.$tabla.' WHERE '.$condicion.';';
			$resultado = $this -> db -> query($consulta);
			$count = $resultado->rowCount();

			if($count != "0"){
				while($filas = $resultado -> FETCHALL(PDO::FETCH_ASSOC)){
					$this -> filas[] = $filas;
				}
				return $this -> filas;
			}else{
				return NULL;
			}
			
		}

		public function actualizar($tabla, $data, $condicion){
			$consulta = 'UPDATE '.$tabla.' SET '.$data.' WHERE '.$condicion.';';
			$resultado = $this -> db -> query($consulta);
			if($resultado){
				return true;
			}else{
				return false;
			}
		}

		public function eliminar($tabla, $condicion){
			$eliminar = 'DELETE FROM '.$tabla.' WHERE '.$condicion.';';
			$respuesta = $this -> db -> query($eliminar);
			if($eliminar){
				return true;
			}else {
				return false;
			}
		}
	}

	if(isset($_POST["opcion"])){

		if($_POST['opcion'] == 'consulta'){

			$query = new Modelo();

			$c = $_POST['columnas']; // Columnas
			$t = $_POST['tabla']; // Tabla
			$con = $_POST['condicion']; // Condicion

			$dato = $query->mostrar($c, $t, $con);
			foreach($dato as $key => $value){
				//echo var_dump($dato);
				echo json_encode($value);
				/*foreach($value as $v){
					echo json_encode($value);
				}*/
			}

		}

		else if($_POST['opcion'] == 'datosip'){

			$ip = $_POST['ip'];

			$query = new Modelo();

			$c = 'DISTINCT(ip)'; // Columnas
			$t = 'examen'; // Tabla
			$con = 'ip = "'.$ip.'"'; // Condicion

			$dato = $query->mostrar($c, $t, $con);
			

			//var_dump($dato);
			if($dato != null){
				echo '1';
			}else{

				$ch = curl_init();

				$url = 'https://api.ipgeolocation.io/ipgeo?apiKey=9dc733bd64f0412ebb0bf10e65707716&ip='.$ip;
				
				curl_setopt($ch, CURLOPT_URL, $url);

				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

				curl_setopt($ch, CURLOPT_HEADER, false);

				$response =  curl_exec($ch);

				$datosIP = json_decode($response, true);

				if(curl_errno($ch)){
					$error_msg = curl_error($ch);
					echo 'Erro al conectarse a la API E0X00001';
				}else if(isset($datosIP['message'])){
					echo '2';
				}
				else{
					curl_close($ch);
					echo $response;

					
					
					$query = new Modelo();

					$c = "NULL,'".$datosIP['ip']."','".$datosIP['calling_code']."','".$datosIP['country_name']."','".$datosIP['city']."','".$datosIP['isp']."','".$datosIP['languages']."','".$datosIP['latitude']."','".$datosIP['longitude']."'"; // Columnas
					$t = 'examen (id,ip, code, name, city, isp, languages, lat, lng)'; // Tabla
					
					$dato = $query->insertar($t, $c);
				}
			}
		}

		else if($_POST['opcion'] == 'eliminarip'){
			$ip = $_POST['ip'];


			$query = new Modelo();
			
			$t = 'examen'; // Tabla
			$con = 'ip = "'.$ip.'"'; // Condicion

			$dato = $query->eliminar($t, $con);

		}
	}

	else{
		//echo 'Sin opcion Principal';
	}
?>