class Stark{
	name: string = "Augusteen";
	static castle: string = "KUM KUM";
	saying: string;

	constructor (){
		this.saying = Stark.castle;
	}	
}

var ned = new Stark();

ned.saying = "Winter is coming";

console.log(Stark.castle);