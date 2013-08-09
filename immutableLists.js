
//Declaring Node Class
function Node( head, rest ){
	this._head = head;
	this._rest = rest;

	this.cons  = function( head, tail ){
			return new Node( head, tail );
		};
	this.head  = function( node ){
			return node._head
		};
	this.rest  = function( node ){
			return node._rest
		};
	this.push  = function( data, list){
			return this.cons( data, list );
		};
	this.pop   = function( list ){
			this._rest( list )		
		};
	this.peek  = function ( list ){
			this._head( list ).head
		};

}

var n = new Node();

n.push( {"color":"red"}, n);

console.log( n );