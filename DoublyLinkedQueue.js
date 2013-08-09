function DNode(prev, next, data){
	this._prev = prev;
	this._next = next;
	this._data = data;
}

function Queue(){

	this._back   = null;
	this._front  = null;
	this._length = 0;
}

Queue.prototype = {
	push : function (data){
		var temp = new DNode(null,null,data);
		if( this._length == 0 ){
			this._back  = temp;
			this._front = temp;
			this._length++;
		} else {
			temp._next = this._back;
			this._back._prev = temp;
			this._back = temp;
			this._length++;
		}
	},

	pop : function(){
		var data = this._back._data;
		this._back = this._back._next;
		this._back._prev = null;
		this._length--;
		return data;
	}
}

var q = new Queue;

q.push( {color: "red"} );
q.push( {color: "green"});
q.push( {color: "blue"});
console.log("Whole Queue");
console.log(q);
console.log("BACK")
console.log(q._back);
console.log("FRONT")
console.log(q._front);
console.log("\n")
console.log("pop");
q.pop();
console.log("Whole Queue");
console.log(q);
console.log("BACK")
console.log(q._back);
console.log("FRONT")
console.log(q._front);

