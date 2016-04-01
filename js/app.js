
//en javascript todo debe tener un orden primero lo declaro luego lo instacio, despues lo inicialiso
var angapp= angular.module("miapp",[]);
//En este caso la variable contiene un modulo de angular -->
angapp.controller("contppt2",function($scope){
//el 1er parametro es el nombre, el 2do es la funcion, _
//scope es todo el body es un objeto que me trae todos los modelos que contiene el body-->

//ANGULAR
//EN angular la s

$scope.perdidas=0;
$scope.empatada=0;
$scope.empatadas=0;
$scope.mitest="Comenzar";
//eleccionMaquina="papel"
$scope.verificar= function(eleccionHumano)
{
	$scope.comezar();
	if(eleccionHumano==eleccionMaquina)
	{
		$scope.mitest="empataste. la maquina elegiò: " + eleccionMaquina + " y vos elegiste: " + eleccionHumano;
		$scope.empatadas++;		

	}
	else if(eleccionMaquina=="piedra")
	{
		$scope.mitest="vos ganastes. la maquina elegiò: " + eleccionMaquina + " y vos elegiste: " + eleccionHumano;
		$scope.ganadas++;
	}
	else
	{
		$scope.mitest="ganó la Maquina. la maquina elegiò: " + eleccionMaquina + " y vos elegiste: " + eleccionHumano;
		$scope.perdidas++;
	};
}//fin de 
/*
$scope.tijera=function ()
{
	$scope.comezar();
	eleccionHumano="tijera";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");
		$scope.empatadas++;		

	}
	else if(eleccionMaquina=="piedra")
	{
		alert("vos ganastes.");
		$scope.ganadas++;
	}
	else
	{
		alert("ganó la Maquina.");
		$scope.perdidas++;
	};
}//FIN DE LA FUNCIÓN
$scope.papel=function ()
{

	//alert("hola")
	$scope.comezar();
	eleccionHumano="papel";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");
		$scope.empatadas++;		

	}
	else if(eleccionMaquina=="piedra")
	{
		alert("vos ganastes.");
		$scope.ganadas++;
	}
	else
	{
		alert("ganó la Maquina.");
		$scope.perdidas++;
	};
	
}//FIN DE LA FUNCIÓN
$scope.piedra=function ()
{
	$scope.comezar();
	eleccionHumano="piedra";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");
		$scope.empatadas++;		

	}
	else if(eleccionMaquina=="piedra")
	{
		alert("vos ganastes.");
		$scope.ganadas++;
	}
	else
	{
		alert("ganó la Maquina.");
		$scope.perdidas++;
	};

}//FIN DE LA FUNCIÓN
*/
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
});