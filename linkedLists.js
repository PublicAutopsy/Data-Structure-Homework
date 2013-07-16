//Declaring a function is JS class definition
//i dont know what your experience with JS is

//Declaring List Class
function LinkedList(){
  this._length = 0;
  this._head = null;
}

//Declaring Node Class
function Node( data, next ){
  this.data = data;
  this.next = next;
}

LinkedList.prototype = {
  push   : function( data ){
              var temp = new Node( data );
              temp.next = this._head;
              this._head = temp;
              this._length++;
           },

  pop    : function (){
              this._head = this._head.next;
              this._length--;
           },

  insert : function(n, data){
            var temp = new Node( data , null );
            var ins  = this._head;

            for( var x = 0; x < n; x++){
              ins = ins.next;
            }
            temp.next = ins.next;
            ins.next = temp;

            this._length++;
        },
  insertAfter : function(obj, data){
            var temp = new Node( data , null );
            var ins  = this._head;

            for( var x = 0; x < this._length; x++){
              if (ins.data == obj){
                temp.next = ins.next;
                ins.next = temp; 
                this._length++;
                break;
              } else {
                ins = ins.next; 
              }
            }
        },
  del    : function(n){
            var temp = this._head;
            for ( var x = 0; x < n; x++){
              temp = temp.next;
            }
            temp.next = temp.next.next;
            this._length--;
        },
  delAfter    : function(obj){
            var temp = this._head;
            for ( var x = 0; x < this._length; x++){
              if ( temp.data == obj ){
                if(temp.next.next != null){
                  temp.next = temp.next.next;
                  this._length--;
                  break;
                } else {
                  console.log("End of list");
                }
              }
              temp = temp.next;
            }
        },
  list   : function(){
            var temp = this._head;
            var tempList = [];
            for (var x = 0; x < this._length; x++){
              tempList.push(temp.data);
              temp = temp.next;
            }
            return tempList;
        }

}

var colors = new LinkedList();

console.log("Push");
colors.push("red");
console.log(JSON.stringify(colors));
console.log("\n");

console.log("Push");
colors.push("orange");
console.log(JSON.stringify(colors));
console.log("\n");

console.log("Push");
colors.push("blue");
console.log(JSON.stringify(colors));
console.log("\n");

console.log("Insert");
colors.insert(1 ,"purple");
console.log(JSON.stringify(colors));
console.log("\n");

console.log("insertAfter");
colors.insertAfter("blue", "green");
console.log(JSON.stringify(colors));
console.log("\n");

console.log("List");
console.log(colors.list());
console.log("\n");

console.log("Delete");
colors.del( 2 );
console.log(JSON.stringify(colors));
console.log("\n");

console.log("Delete After");
colors.delAfter( "blue" );
console.log(JSON.stringify(colors));
console.log("\n");

console.log("Pop");
colors.pop();
console.log(JSON.stringify(colors));
console.log("\n");


//Output
// Push
// {"_length":1,"_head":{"data":"red","next":null}}


// Push
// {"_length":2,"_head":{"data":"orange","next":{"data":"red","next":null}}}


// Push
// {"_length":3,"_head":{"data":"blue","next":{"data":"orange","next":{"data":"red","next":null}}}}


// Insert
// {"_length":4,"_head":{"data":"blue","next":{"data":"orange","next":{"data":"purple","next":{"data":"red","next":null}}}}}


// insertAfter
// {"_length":5,"_head":{"data":"blue","next":{"data":"green","next":{"data":"orange","next":{"data":"purple","next":{"data":"red","next":null}}}}}}


// List
// [ 'blue', 'green', 'orange', 'purple', 'red' ]


// Delete
// {"_length":4,"_head":{"data":"blue","next":{"data":"green","next":{"data":"orange","next":{"data":"red","next":null}}}}}


// Delete After
// {"_length":3,"_head":{"data":"blue","next":{"data":"orange","next":{"data":"red","next":null}}}}


// Pop
// {"_length":2,"_head":{"data":"orange","next":{"data":"red","next":null}}}
