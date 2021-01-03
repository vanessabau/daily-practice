package com.codewithmosh;

import java.util.Arrays;

public class Stack {
	// Declare private field integer array, initialize it with 5 items so we can see
	// when our stack gets full.
	private int[] items = new int[5];
	private int count; // Initialize our counter variable

	// Declare pus method
	public void push(int item) {
		if (count == items.length) // If the number of items equals the size of the array then throw and exception.
			throw new StackOverflowError(); // This indicates our stack is full

		items[count++] = item; // Set items of count to this new item, and increment count by 1
	}

	public int pop() { // We want to return the item on top of the stack
		// We want to decrement count by one and also return the item at this index
		if (count == 0) // Validation in case stack is empty and we try to pop it. This means we cannot
										// perform this method with the current state of the object.
			throw new IllegalStateException();

		return items[--count];
	}

	public int peek() { // We want to return the item at the top of the stack without deleting it.
		if (count == 0)// Error handling for if stack is empty
			throw new IllegalStateException();

		return items[count - 1];
	}

	public boolean isEmpty() { // Check is count is 0
		return count == 0;
	}

	@Override // Copy the contents of our stack into a separate array and return the contents
						// as a string and override inherent properties of the class
	public String toString() {
		var content = Arrays.copyOfRange(items, 0, count); // Copy contents of the stack, pass the items array and specify
																												// the range of items we want to copy. We start at index 0 all
																												// the way to count. This returns a new array we store as
																												// 'content' then we convert that content array to a string
		return Arrays.toString(content);
	}
}
