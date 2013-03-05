#pragma strict

var direction:float;
var goingleft:boolean;
var goingup:boolean;


function Start () {

	direction = Mathf.Round(Random.Range(1,5));
	print(direction);
	
	if(direction==1){
	
		goingleft = true;
		transform.position.x = BorderScript.rightmost;
	}
	if(direction==2){
		goingleft = false;
		transform.position.x = BorderScript.leftmost;
	}
	if(direction==3){
		goingup = true;
		transform.position.y = BorderScript.bottommost;
	}
	if(direction==4){
		goingup = false;
		transform.position.x = BorderScript.topmost;
	}
}



function Update () {

	transform.Rotate(Vector3.forward*50*Time.deltaTime);

	if (direction == 1){
		
		transform.Translate(Vector3.right*-10*Time.deltaTime,Space.World);
	}
	if (direction == 2){
		
		transform.Translate(Vector3.right*10*Time.deltaTime,Space.World);
	}
	if (direction == 3){
		
		transform.Translate(Vector3.up*10*Time.deltaTime,Space.World);
	}
	if (direction == 4){
		
		transform.Translate(Vector3.up*-10*Time.deltaTime,Space.World);
	}		
	
	if(transform.position.x > BorderScript.rightmost){
		Destroy(this.gameObject);
	}	
	if(transform.position.x < BorderScript.leftmost){
		Destroy(this.gameObject);
	}
	if(transform.position.y < BorderScript.bottommost){
		Destroy(this.gameObject);
	}
	if(transform.position.y > BorderScript.topmost){
		Destroy(this.gameObject);
	}		
}

function OnTriggerEnter(other:Collider){

	if(other.gameObject.tag == "Asteroid")
	{
		Destroy(this.gameObject);
		Destroy(other.gameObject);
	}
}