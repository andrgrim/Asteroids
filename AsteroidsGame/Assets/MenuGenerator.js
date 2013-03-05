var x:int;
var y:int;
var theme:GUISkin;

function Start () {

 x = ((Screen.width)/2);
 y = ((Screen.height)/2);
}

function Update () {

}

function OnGUI () {

	GUI.skin = theme;
	
	GUI.color = Color.white;
	
	GUI.Label(Rect(x-50,y-10,100,20),"Asteroids");
	
	if (GUI.Button(Rect(x-50,y+28,100,30),"New Game")){
	
		print("New Game");
		Application.LoadLevel(1);
	}
	
	if (GUI.Button(Rect(x-50,y+63,100,30),"Exit")){
	
		print("Exit");
	}
}