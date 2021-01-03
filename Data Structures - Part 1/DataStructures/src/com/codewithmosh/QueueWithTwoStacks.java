package com.codewithmosh;

import java.util.Stack;

public class QueueWithTwoStacks {
	// INstantiate our two stacks
	private Stack<Integer> stack1 = new Stack<>();
	private Stack<Integer> stack2 = new Stack<>();

	// O(1)
	public void enqueue(int item) {
		stack1.push(item); // Always add items to our fist stack
	}

	// O(n)
	public int dequeue() {
		if (isEmpty()) // Check to see if the second stack is empty. You don't want to move items from
										// S1 to S2 if there are items in S2 because it will mess up the order of S2.
			throw new IllegalStateException();

		moveStack1ToStack2(); // Refactor to create a method
		// If S2 is empty we move all items from 1st stack to 2nd stack

		// Now items are in the correct order and we can pop and return
		return stack2.pop();
	}

	private void moveStack1ToStack2() {
		if (stack2.isEmpty())
			while (!stack1.isEmpty()) // As long as the S1 is not empty we pop items and push them to S2
				stack2.push(stack1.pop());
	}

	public int peek() {
		// Similar to dequeue method, but instead of popping item from second stack we
		// simply return it
		if (isEmpty())
			throw new IllegalStateException();

		moveStack1ToStack2();

		return stack2.peek();
	}

	public boolean isEmpty() {
		// Check if stacks are empty and throw appropriate exception if they are
		return stack1.isEmpty() && stack2.isEmpty();
	}
}
