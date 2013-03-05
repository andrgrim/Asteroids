#pragma strict

var speed:int;
var normalspeed:int;
var turbospeed:int;
var lives:int;

var laserPrefab:Rigidbody;

lives = 10; 

function Start () {

}

function Update () {

	transform.Translate(Vector3.up*speed*Input.GetAxis("Vertical")*Time.deltaTime);
	transform.Rotate(Vector3.forward*-10*speed*Input.GetAxis("Horizontal")*Time.deltaTime);
	
	
	if(transform.position.x > BorderScript.rightmost){
		transform.position.x = BorderScript.leftmost;
	}	
	if(transform.position.x < BorderScript.leftmost){
		transform.position.x = BorderScript.rightmost;
	}		
	if(transform.position.y < BorderScript.bottommost){
		transform.position.y = BorderScript.topmost;
	}
	if(transform.position.y > BorderScript.topmost){
		transform.position.y = BorderScript.bottommost;
	}
	
	if (lives==0){
	
		Destroy(this.gameObject);
	}
	
	speed = normalspeed;
	
	if (Input.GetKey(KeyCode.Space)){
		
		speed = turbospeed;
	}
	
	if (Input.GetKeyDown(KeyCode.LeftControl)){
	
		Instantiate(laserPrefab,transform.position,transform.rotation);
	}
}

function OnTriggerEnter(other:Collider){

	if(other.gameObject.tag == "Asteroid")
	{
		print(lives);
		lives--;
	}
}

function OnGUI(){

	GUI.color = Color.red;
	
	GUI.Label(Rect(10,30,300,20),"Lives: " +lives);
	GUI.Label(Rect(10,40,300,20),"Speed: " +speed);
}
