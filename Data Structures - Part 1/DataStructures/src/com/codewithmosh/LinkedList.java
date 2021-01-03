package com.codewithmosh;

import java.util.NoSuchElementException;

public class LinkedList {
	private class Node {
		private int value;
		private Node next;

		public Node(int value) {// add a custom constructor value
			this.value = value;
		}
	}

	private Node first;
	private Node last;
	private int size;

	// Implement addLast method
	public void addLast(int item) {
		var node = new Node(item); // node object is always in a value state

		if (isEmpty()) // Check if list is empty
			first = last = node;
		else {
			last.next = node; // If list has values we link last node to new node;
			last = node; // then we need to update 'last' to point to new node
		}

		size++;
	}

	// Implement addFirst method
	public void addFirst(int item) {
		var node = new Node(item);

		if (isEmpty()) // If the list is empty we add the node
			first = last = node;
		else { // Else prepend the list
			node.next = first;
			first = node; // pointing var node to our first node
		}

		size++;
	}

	// Create method isEmpty to make code cleaner; use to check if nodes exist
	private boolean isEmpty() {
		return first == null;
	}

	// Implement indexOf Method
	public int indexOf(int item) {
		// We need to traverse the list from the beginning to the end, as soon as we
		// find an item with that value we will return the index of that item. BUT we
		// don't have indexes here so we have to figure out how to implement.
		int index = 0; // Declare variable index and set to zero; as we traverse variable we increment
										// index.
		var current = first;
		while (current != null) { // need another variable
			if (current.value == item) // as long as current is not null (which would mean we have reached the end of
																	// the list), we need to compare the value of the current node with 'item'; if
																	// they are equal return the index
				return index;
			current = current.next;// Otherwise we set current to the next node AND increment index
			index++;
		}
		return -1; // If we reach the end of the list and have not found our value return -1
	}

	// Traverse the list from beginning to end; IF we find item return true,
	// otherwise return false. We built this logic in our indexOf() method so we can
	// re-use the logic.
	public boolean contains(int item) {
		return indexOf(item) != -1; // If true we have value, id -1 does not exist
	}

	public void removeFirst() {
		if (isEmpty()) // If list is empty send error message to make sure we are not removing items
										// from an empty list.
			throw new NoSuchElementException();

		if (first == last) // Handle circumstance where the list has a single item
			first = last = null; // Set both fields to null then return;
		else {
			var second = first.next; // need to create two references to reassign 'first' node when one is deleted.
																// The 'second' variable is a placeholder so we can delete the link between the
																// first and second objects.
			first.next = null; // Removes link between first and second objects;
			first = second; // Update 'first' and set it to point to the second node.
		}

		size--;
	}

	public void removeLast() {
		if (isEmpty()) // Check if list is empty
			throw new NoSuchElementException();

		if (first == last) // Check if there is only 1 node
			first = last = null; // Set both fields to null
		else {
			var previous = getPrevious(last); // Call getPrevious, give it the last node, and store the result in a variable
																				// called 'previous'
			last = previous; // Change 'last' and have it point to 'previous'
			last.next = null; // Remove link
		}

		size--;
	}

	private Node getPrevious(Node node) { // give method a node to work with
		var current = first; // Declare variable, set it to first node
		while (current != null) { // As long as current is not null we go forward
			if (current.next == node) // Check to see if current.next equals last node; if it does return current
																// node.
				return current;
			current = current.next; // Otherwise we set current equal to the next node. Now we have the previous
															// node
		}
		return null; // If we traverse the list to the end and cannot find node we return null.
	}

	// Get size
	public int size() {
		return size;
	}

	public int[] toArray() { // Create a new array
		int[] array = new int[size]; // Initialize size of Java array
		var current = first; // Set variable current to the first node of the array
		var index = 0; // Create a new variable for keeping track of our index
		while (current != null) { // As long as current is not null Traverse list and as we discover each node we
															// add it to the array
			array[index++] = current.value; // With each iteration we add the current node to our array and increase the
																			// index;
			current = current.next; // Set current to reference the next node
		}

		return array; // Return the array
	}

	public void reverse() {
		// Validation
		if (isEmpty())
			return;

		// Set variables
		var previous = first; // Declare a variable called 'previous' and set it to first node
		var current = first.next; // Declare a variable 'current' and set it to first.next

		// Logic to change direction of the link
		while (current != null) { // Loop as long as current is not null go forward and reverse direction of links
			var next = current.next; // With each iteration we need to get a reference to the node after the current
																// node. So create a variable 'next' and set it to current.next
			current.next = previous; // Change the direction of the link
			previous = current; // Move our pointers one step forward. Set previous first so they both don't get
													// set to 'next'
			current = next; // Move our pointers one step forward
		}

		// Set last and first fields
		last = first; // reset the 'last' so it now points to the correct node which used to be the
									// 'first'
		last.next = null; // Clear the unused link of the 'last' node because it is not supposed to point
											// anywhere
		first = previous;
	}

	public int getKthFromTheEnd(int k) { // Give k paramenter
		if (isEmpty()) // Validation
			throw new IllegalStateException();

		// Declare two parameters and set them to the first node.
		var a = first;
		var b = first;
		for (int i = 0; i < k - 1; i++) { // Move b forward until it is at the right distance from the a giving both
																			// pointers at their starting positions to start traversing the linkedList
																			// together
			b = b.next; // With each iteration set b to b.next to move pointer forward
			if (b == null) // Validate k parameter. If b is null somewhere in our for loop that means k>
											// size of linkedList so throw IllegalArgumentException because k is too large.
				throw new IllegalArgumentException();
		}
		while (b != last) { // While b does not equal the last node we will move both pointers forward
			a = a.next;
			b = b.next;
		}
		return a.value; // When done with our loop 'b' references last step so we return value of 'a'
	}

	public void printMiddle() {
		if (isEmpty())
			throw new IllegalStateException();

		var a = first;
		var b = first;
		while (b != last && b.next != last) {
			b = b.next.next;
			a = a.next;
		}

		if (b == last)
			System.out.println(a.value);
		else
			System.out.println(a.value + ", " + a.next.value);
	}

	public boolean hasLoop() {
		var slow = first;
		var fast = first;

		while (fast != null && fast.next != null) {
			slow = slow.next;
			fast = fast.next.next;

			if (slow == fast)
				return true;
		}

		return false;
	}

	public static LinkedList createWithLoop() {
		var list = new LinkedList();
		list.addLast(10);
		list.addLast(20);
		list.addLast(30);

		// Get a reference to 30
		var node = list.last;

		list.addLast(40);
		list.addLast(50);

		// Create the loop
		list.last.next = node;

		return list;
	}
}
