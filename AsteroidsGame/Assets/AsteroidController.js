#pragma strict

var direction:float;
var goingleft:boolean;


function Start () {

	direction = Mathf.Round(Random.Range(1,3));
	print(direction);
	
	if(direction==1){
	
		goingleft = true;
		transform.position.x = BorderScript.rightmost;
	}
	else{
		goingleft = false;
		transform.position.x = BorderScript.leftmost;
	}
}



function Update () {

	transform.Rotate(Vector3.forward*50*Time.deltaTime);

	if (direction == 1){
		
		transform.Translate(Vector3.right*-10*Time.deltaTime,Space.World);
	}
	else{
		
		transform.Translate(Vector3.right*10*Time.deltaTime,Space.World);
	}
	
	if(transform.position.x > BorderScript.rightmost){
		Destroy(this.gameObject);
	}	
	if(transform.position.x < BorderScript.leftmost){
		Destroy(this.gameObject);
	}		
}