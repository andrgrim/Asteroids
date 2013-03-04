#pragma strict

var direction:int;



function Start () {

	direction = Mathf.Round(Random.Range(1,2));
	print(direction);
	
	

}



function Update () {

	transform.Rotate(Vector3.forward*50*Time.deltaTime);

	if (direction == 1){
		
		transform.Translate(Vector3.left*10*Time.deltaTime,Space.World);
	}
	if (direction == 2){
		
		transform.Translate(Vector3.right*10*Time.deltaTime,Space.World);
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