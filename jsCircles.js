function CircularList(){

	function Node(next, data){
		this._next = next;
		this._data = data;
	}

	this._tail = new Node();

	var isEmpty = function(){
		console.log(this._tail);
		if (!this._tail === undefined){
			console.log("Not Empty");
			return false;
		} else {
			console.log("Is Empty");
			return true;
		}
	}

	this.push = function( data ){
		if(isEmpty()){
			this._tail = new Node(null, data);
			this._tail._next = this._tail;
		} else {
			this._tail._next = new Node(this.head(), this._tail);
		}
	}

	this.head = function(){
		if(isEmpty()){
			return null;
		} else {
			return this._tail._next;
		}
	}

	this.peek = function(){
		if(isEmpty()){
			return null;
		} else {
			return this.head()._next;
		}
	}

	this.popNode = function(){
		if(isEmpty()){
			return null;
		} else {
			if (head() == tail){
				var p = this.head();
				this._tail = null
				return p
			} else {
				var p = this.head();
				this._tail._next = this.head()._next;
				return p;
			}
		}
	}

	this.rotate = function(){
		this._tail = this.head();
	}

	this.rotateDist = function( n ){
		for( var i = 0; i < n; i++){
			this.rotate();
		}
	}

	this.nth = function( n ){
		if(isEmpty()){
			return null;
		} else {
			var p = head();
			for( var i = 0; i < n; i++){
				p = p._next;
			}
			return p;
		}
	}

	this.deleteAfterNth = function( n ){
		if(isEmpty()){
			return null;
		} else {
			if(this.head() == this._tail){
				var deleted = this._tail;
				this._tail = null;
				return deleted.data;
			} else {
				var p = this.nth( n );
				var deleted = p._next;
				p._next = p._next._next;
				return deleted.data;
			}
		}
	}

	this.deleteNth = function( n ) {
		if (n < 0){
			return null;
		} else if (n==0){
			return this.popNode();
		} else {
			return deleteAfterNth( n-1 );
		}

	}

	this.insertAfter = function(n, o){
		if(isEmpty()){
			return null
		} else {
			var p = this.nth(n);
			p._next = new Node(o , p._next);
		}
	}

	this.distanceTo = function( o ){
		if(isEmpty()){
			var distance = 0;
			var p = this.head();
			while(!p.data == o.data){
				p = p._next;
				if( p == this.head()){
					return null;
				}
				distance++;
			}
			return distance;
		}
	}

	this.rotateTo = function( o ){
		rotate(distanceTo( o ));
	}

}

var circle = new CircularList();
circle.push({color : "red"});
circle.push({color : "blue"});
circle.push({color : "green"});


console.log(circle._tail);
console.log(circle._tail._next);
console.log(circle._tail._next._next);
console.log(circle.head());


