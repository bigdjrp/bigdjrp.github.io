---
layout: post
title: "Applying Advanced Algorithms using Java"
description: "Algorithms and Java"
categories: [project]
tags: [random]
redirect_from:
  - /2014/11/17/
---
* Algorithms and Code Snippets Table of Contents
{:toc .toc}

### BigInt.Java

```java
import java.math.*;

public class bigInt{
  public static void main (String [] args){
    int n = 100;
    int [] a = new int [n];

    // taking a random integer from 0 to 1 million
    for(int i = 0; i < n; i++){
      a[i] = (int)(Math.random()*1000000);

    System.out.println(a[i]);
    }
  }
}
```

### Using Node Class

1. Using just the Node class, create 4 different nodes and place in them: Last name, First name, Major, Class.  Link them so they go in that order.  Then write code which prints out the data, one piece of data per line, by starting at the first node and walking through the list.

```java
import java.math.*;

public class NodeTest{
  public static void main (String [] args){
    Character ch = new Character('$');
    BigInteger bi = new BigInteger("1234567890987654321");

    String lastName = "Porter";
    String firstName = "Jared";
    String major = "Computer Science";
    String className = "Junior";

    Node n1 = new Node(lastName);
    Node n2 = new Node(firstName, n1);
    Node n3 = new Node(major, n2);
    Node n4 = new Node(className, n3);

    System.out.println(n4.getNext().getNext().getNext().getObject());
    System.out.println(n4.getNext().getNext().getObject());
    System.out.println(n4.getNext().getObject());
    System.out.println(n4.getObject());
  }
}
```

2. Creating a simple List Class

```java
// Simple List Class

public class List{
   private Node firstNode;
   private Node lastNode;
   private String name;

   public List(){
     name = "default list";
     firstNode = null;
     lastNode = null;
   }

 public List(String s){
   name = s;
   firstNode = null;
   lastNode = null;
 }

 public void insertAtFront(Object insertItem){
   if(isEmpty()){
     firstNode = lastNode = new Node(insertItem);
   }
   else{
     firstNode = new Node(insertItem, firstNode);
   }
 }

 public Object removeFromFront(){
   Object removeItem = null;
   if(isEmpty()){
     removeItem = "This list is EMPTY!";
     return removeItem;
   }
   removeItem = firstNode.getObject();
   if(firstNode.equals(lastNode)){
     firstNode = lastNode = null;
   }
   else{
     firstNode = firstNode.getNext();
   }
   return removeItem;
 }

 public boolean isEmpty(){
   return (firstNode == null);
 }

 public String print(){
   String result = "";
   String newline = "\n";
   if(isEmpty()){
     result += "Empty " + name + newline;
     return result;
   }

   result += name + " contains: " + newline;
   Node current = firstNode;
   while(current != null){
     result += current.getObject() + newline;
     current = current.getNext();
   }
   return result;
  }
}

```

4. Test driver for List class

```java
//Test Driver for List
import java.math.*;

public class ListTest{
  public static void main (String[] args){
    Character ch = new Character('$');
    BigInteger bi = new BigInteger("1234567890987654321");
    String s = "now is the time";

    List myList = new List();

    myList.insertAtFront("Junior");
    myList.insertAtFront("Computer Science");
    myList.insertAtFront("Jared");
    myList.insertAtFront("Porter");

    System.out.println(myList.print());

    System.out.println();

    myList.removeFromFront();
    System.out.println(myList.print());
    myList.removeFromFront();
    System.out.println(myList.print());
    myList.removeFromFront();
    System.out.println(myList.print());
  }
}

```

5. Creating a list and fill it with the squares from 1 to 100, then print out the contents.

```java
public class ListOfSquares{
  public static void main (String [] args) {
    List squares = new List("SQUARES");

    for(int i = 1; i <= 100; i++){
      squares.insertAtFront((int)Math.pow(i,2));
    }

    System.out.println(squares.print());
  }
}
```

### Push | BigInteger | Tree Node Test | InOrderTraversal

1. Stack

```java
// Test Driver for Stack

public class StackTest2{
 public static void main(String [] args){
        Stack2 s = new Stack2();

        for(int i = 1; i <= 10; i++){
            int x = i*i;
 System.out.print(s.print() + " ");
 s.push(x);
        }

        while(!s.isEmpty()){
 System.out.print(s.print() + " ");
 s.pop();
        }
    }
}

```

```java
public class QueueTest{
  public static void main(String [] args){
    Queue q = new Queue();

    for(int i = 1; i <= 10; i++){
      int x = i*i;
      System.out.print(q.print() + " ");
      q.enqueue(x);
    }

    while(!q.isEmpty()){
      System.out.print(q.print() + " ");
      q.dequeue();
    }
  }
}

```

2. InOrderTraversal

```java
public class TreeTest{
  public static void main (String [] args){
    Tree myTree = new Tree(1000000);

    for(int i = 1; i <= 1000000; i++){
      int n = (int)(Math.random()*1000000000);
      //System.out.print(n + " ");
      myTree.insertNode(myTree.root, n);
    }

    long start = System.currentTimeMillis();
    //System.out.println();

    //System.out.println("After using 'inOrderTraversal': ");
    //System.out.println();
    myTree.inOrderTraversal(myTree.root);
    long end = System.currentTimeMillis();

    long results = end - start;
    System.out.println("Start: " + start);
    System.out.println();
    System.out.println("End: " + end);
    System.out.println();
    System.out.println("Results of 'inOrderTraversal' method: " + results + " milliseconds");
  }
}

```

3. Min/Max

```java
public int max(){
  TreeNode temp = root;
  while(temp.getRight() != null){
    temp = temp.getRight();
  }
  int max = temp.getKey();
  return max;
}

public int min(){
  TreeNode temp = root;
  while(temp.getLeft() != null){
    temp = temp.getLeft();
  }
  int min = temp.getKey();
  return min;
}

```

### HashTable

```java
// test driver for Hash Table
import java.math.*;

public class HashTester{

  public static void main (String [] args){
    List [] hashes = new List[151];

    for(int i = 0; i < 151; i++){
      hashes[i] = new List();
    }

    for(int i = 0; i < 100; i++){
      int value = (int)(Math.random()*1000000);
      int key = value % 151;
      hashes[key].insertAtFront(value);
    }

 // print
    for(int i = 0; i < 151; i++){
      System.out.println("key: " + i + " value: " + hashes[i].print());
    }
  }
}

```
```java
//Driver for Hash Table
import java.math.*;
import java.lang.Integer;

public class HashTester{

  public static void main (String [] args){
    String [] names ={"Chelsie" , "Riley" , "McKade" , "Jadyn" , "Marie" , "Jason" , "Slone" , "Vera" ,
                      "Landon" , "Matthew" , "Zane" , "Cass" , "Abby" , "Harper" , "Jared"};
    List [] hashes = new List[29];
    int hValue;
    for(int i = 0; i < 29; i++){
      hashes[i] = new List();
    }

    for(int i = 0; i < 15; i++){
      String value = names[i];
      hValue = names[i].hashCode();
      if(hValue < 0){
        hValue = hValue*(-1);
      }

      int key = hValue % 29;
      hashes[key].insertAtFront(value);
    }

 //print
    for(int i = 0; i < 29; i++){
      System.out.println("key: " + i + " " + hashes[i].print());
    }
  }
}

```
