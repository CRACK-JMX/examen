<?php
require('modelo/index.php');


	class modeloController{
		private $model;
		public function __construct(){
			$this->model = new Modelo();
		}

		//Mostrar
		static function index(){
			//$producto = new Modelo();
			//$dato = $producto->mostrar('poligonos_secc', 'seccion = "10"');
			//echo json_encode($dato);
			require_once('vista/index.php');
		}
	}
?>