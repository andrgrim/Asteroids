#pragma strict

var laserSpeed:int;

function Start () {

}

function Update () {

	transform.Translate(Vector3.up*laserSpeed*Time.deltaTime);
}

function OnBecameInvisible(){

	Destroy(this.gameObject);
}

function OnTriggerEnter(other:Collider){

	if(other.gameObject.tag == "Asteroid")
	{
		Destroy(this.gameObject);
		Destroy(other.gameObject);
	}
}