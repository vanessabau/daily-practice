package com.codewithmosh;

import java.util.Arrays;

public class PriorityQueue {
	// We want to iterate over our array from the end and find the position to
	// insert our new item. IF the item is greater than the value we want to insert
	// then we want to shift the item forward

	// At each iteration we get the item at the current index
	private int[] items = new int[5]; // Create an array to store our new items
	private int count; // Count the number of items in our Q

	// O(n)
	public void add(int item) {
		if (isFull()) // Before inserting items check to see if the array is full
			throw new IllegalStateException(); // You could also allow array to be resized automatically

		var i = shiftItemsToInsert(item);
		items[i] = item; // insert item to the right of current index
		count++; // increment count
	}

	public boolean isFull() {
		return count == items.length;
	}

	private int shiftItemsToInsert(int item) {
		// This returns the position where we want to insert the new item

		int i; // Declare outside of loop so we can use after loop to insert our item at the
						// i+1 index
		// Forloop to shift items
		for (i = count - 1; i >= 0; i--) { // Sets i to the index of the last item in the Q which is the count-1. As long
																				// as i is greater than or equal to 0 we decrement i at every iteration. This is
																				// how we iterate the array from the end to the beginning
			if (items[i] > item) // At each iteration we get the item at the current index (items of i items[i]).
														// If items[i] is greater than the item we want to insert we want to shift the
														// current item which means we copy the item at the current cell to the right.
				items[i + 1] = items[i]; // copy value at current cell to the right cell
			else // If current item is not greater than item at current index that means we have
						// found where we want to insert our item and we are done with the shifting.
				break; // So we break out of the forloop
		}
		return i + 1; // insert our item to the right side of the current item
	}

	// O(1)
	public int remove() {
		if (isEmpty()) // Validation for if count is 0
			throw new IllegalStateException();

		return items[--count]; // decerement count first then return items of count
	}

	public boolean isEmpty() {
		return count == 0;
	}

	@Override // OVerride to string method and convert to string
	public String toString() {
		return Arrays.toString(items);
	}
}
