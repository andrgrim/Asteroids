#pragma strict

var speed:int;

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
}