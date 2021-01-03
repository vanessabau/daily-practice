package com.codewithmosh;

import java.util.Arrays;

public class ArrayQueue {
	private int[] items; // Declare array of integers
	private int rear; // Declare the rear pointer so we now where we should insert the new item
	private int front; // Declare front pointer
	private int count; // Keep track of items in the Q

	public ArrayQueue(int capacity) { // constructor which gets capacity and use it to allocate memory for our array
		items = new int[capacity];
	}

	public void enqueue(int item) { // Empliment the enqueue method which takes an item
		if (isFull()) // Check if Q is full and throw exception
			throw new IllegalStateException();

		items[rear] = item; // Set items of rear to our new item
		rear = (rear + 1) % items.length; // update rear pointer and create circular array
		count++; // Every time we add anew item to ou field we need to increment count
	}

	public int dequeue() { // No parameters needed, simply return the item at the front of the Q
		if (isEmpty())
			throw new IllegalStateException();

		var item = items[front]; // Store item at the front in a variable
		items[front] = 0; // Set the item to zero to clear it
		front = (front + 1) % items.length; // update front pointer and create circular array
		count--; // Decrement count

		return item; // return the item
	}

	public int peek() {
		if (isEmpty())
			throw new IllegalStateException();

		return items[front];
	}

	public boolean isEmpty() {
		return count == 0;
	}

	public boolean isFull() {
		return count == items.length; // Check if count is the same as the length of our array which means the Q is
																	// full
	}

	@Override // Override toString method
	public String toString() {
		return Arrays.toString(items); // Convert items array to a string and return the result
	}
}
