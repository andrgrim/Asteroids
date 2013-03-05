#pragma strict

var asteroidPrefab:Rigidbody;
var maxAsteroids:int;

function createAsteroids () {
	if (GameObject.FindGameObjectsWithTag("Asteroid").Length < 5)
	{
	
	var x:float;
	var y:float;
	
	x = 0;
	y = Random.Range(-10,10);
	
	//create a fish instance
	
	Instantiate(asteroidPrefab,Vector3(x,y,2),Quaternion.identity);
	}
}


function Start () {

	InvokeRepeating("createAsteroids",0,2.0);

}

function Update () {

}