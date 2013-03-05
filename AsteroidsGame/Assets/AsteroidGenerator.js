#pragma strict

var asteroidPrefab:Rigidbody;
var maxAsteroids:int;
var i:int;

function createAsteroids () {

	
	var x:float;
	var y:float;
	
	x = 0;
	y = Random.Range(-10,10);
	
	//create a fish instance
	
	Instantiate(asteroidPrefab,Vector3(x,y,2),Quaternion.identity);
}


function Start () {

	for (i=0; i <= 5; i++){
	
		createAsteroids();
	}

}

function Update () {

	if (GameObject.FindGameObjectsWithTag("Asteroid").Length < 5){
	
		createAsteroids();
	}
	

}