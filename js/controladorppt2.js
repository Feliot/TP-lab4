

angapp.controller("contppt2",function($scope){
//el 1er parametro es el nombre, el 2do es la funcion, _
//scope es todo el body es un objeto que me trae todos los modelos que contiene el body-->

//ANGULAR
//EN angular la s
$scope.perdidas=0;
$scope.empatadas=0;
$scope.perdidas=0;
$scope.mitest="Comenzar";
eleccionMaquina="papel"
$scope.verificar= function(eleccionHumano)
{
	$scope.comezar();
	if(eleccionHumano==eleccionMaquina)
	{
		$scope.mitest="empataste. la maquina elegiò: " + eleccionMaquina + " y vos elegiste: " + eleccionHumano;
		$scope.empatadas++;		
	}
	else 
	{
		$scope.jugar(eleccionHumano);
	};
}//fin de verificar
$scope.jugar= function(eleccionHumano)
{
	
	switch(eleccionHumano) {
    case "piedra":
        if (eleccionMaquina== "papel")
		{
			$scope.mitest="vos ganastes. ";
			$scope.ganadas++;
		}
		else
		{
			$scope.mitest="Ganó la Maquina. ";
			$scope.perdidas++;
		}
        break;
    case "papel":
        if (eleccionMaquina=="piedra")
		{
			$scope.mitest="vos ganastes. ";
			$scope.ganadas++;
		}
		else if(eleccionMaquina=="tijera")
		{
			$scope.mitest="Ganó la Maquina. " ;
			$scope.perdidas++;
		}
        break;
    case "tijera":
        if (eleccionMaquina=="papel")
		{
			$scope.mitest="vos ganastes. ";
			$scope.ganadas++;
		}
		else if(eleccionMaquina=="piedra")
		{
			$scope.mitest="Ganó la Maquina. " ;
			$scope.perdidas++;
		}
        break;
	}
	$scope.mitest= $scope.mitest + "la maquina elegiò: " + eleccionMaquina + " y vos elegiste: " + eleccionHumano;
}

$scope.comezar= function()
{
 	//Genero el número RANDOM entre 1 y 3
	 	numeroSecreto =Math.floor( Math.random()*3)+1;
		//alert(numeroSecreto);
		switch(numeroSecreto)
		{
			case 1:
				eleccionMaquina="piedra";
				break;
			case 2:
				eleccionMaquina="papel";
				break;
			case 3:
				eleccionMaquina="tijera";
				break;

		}
}//fin de la funcion
//$scope.papel();
//Principio de funciones, puede faltar scope, faltan parentesis o esta llamada antes de definirla
});//fin de controller