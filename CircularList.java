/**
 * Created with IntelliJ IDEA.
 * User: charles
 * 2013
 */
public class CircularList {
    class Node {
        public Node next = null;
        public Object data = null;
        public Node(Object data, Node next){
            this.next = next;
            this.data = data;
        }
    }

    Node tail = null;

    public CircularList(){};

    public boolean isEmpty() {
        return (tail == null);
    }

    Node head(){
        if (isEmpty()) return null;
        else return tail.next;
    }

    public void push(Object data){
        if (isEmpty()){
            tail = new Node(data, null);
            tail.next = tail;
        }
        else {
            tail.next = new Node(data, head());
        }
    }

    public Object peek(){
        if (isEmpty()) return null;
        return head().data;
    }

    protected Node popNode() throws EmptyListException {
        if (isEmpty()) throw new EmptyListException();
        if (head() == tail) {
            Node p = head();
            tail = null;
            return p;
        }
        Node p = head();
        tail.next = head().next;
        return p;
    }

    public Object pop() throws EmptyListException {
        return popNode().data;
    }

    public void rotate(){
        tail = head();
    }

    public void rotate(int n){
        for(int i=0; i<n; i++){
            rotate();
        }
    }

    protected Node nth(int n){
        if (isEmpty()) return null;
        Node p = head();
        for(int i=0; i<n; i++)
            p=p.next;
        return p;
    }

    protected Object deleteAfterNth(int n) throws EmptyListException {
        if (isEmpty()) throw new EmptyListException();
        if (head() == tail) {  // only one node
            Node deleted = tail;
            tail = null;
            return deleted.data;
        }
        Node p = nth(n);
        Node deleted = p.next;
        p.next = p.next.next;
        return deleted.data;
    }

    public Object deleteNth(int n) throws EmptyListException {
        if (n<0) throw new IllegalArgumentException();
        if (n==0) return popNode();
        return deleteAfterNth(n-1);
    }

    public void insertAfter(int n, Object o) throws EmptyListException {
        if (isEmpty()) throw new EmptyListException();
        Node p = nth(n);
        p.next = new Node(o, p.next);

    }

    public int distanceTo(Object o) throws EmptyListException, DataNotFoundException {
        if (isEmpty()) throw new EmptyListException();
        int distance = 0;
        Node p = head();
        while(!p.data.equals(o)){
            p=p.next;
            if (p==head()) throw new DataNotFoundException();
            distance++;
        }
        return distance;
    }

    public void rotateTo(Object o) throws EmptyListException, DataNotFoundException {
        rotate(distanceTo(o));
    }

    public  class EmptyListException extends Throwable {
    }

    public class DataNotFoundException extends Throwable {
    }
}
