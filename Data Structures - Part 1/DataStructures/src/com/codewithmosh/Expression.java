package com.codewithmosh;

import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class Expression {
	// Declare an arrayList of characters called 'leftBrackets'. Use Arrays class
	// with helper method asList() to initiate list. We can pass a varying number of
	// arguments to this method.
	private final List<Character> leftBrackets = Arrays.asList('(', '<', '[', '{'); // Initialize our list of left
																																									// brackets once. Call as 'final' so
																																									// we do not accidentally reset the
																																									// list.
	// Call the method and pass the list of our left brackets. This creates and
	// initializes our array list in one go. Store the result in a variable.
	private final List<Character> rightBrackets = Arrays.asList(')', '>', ']', '}'); // Initialize the list of right
																																										// brackets.

	// Method that returns a boolean value, give it a string parameter 'input'
	public boolean isBalanced(String input) {
		Stack<Character> stack = new Stack<>(); // Create a stack of characters to store our left brackets

		// Iterate over our input string. For each character in our input
		for (char ch : input.toCharArray()) {
			if (isLeftBracket(ch)) // If the character is a left bracket we will push it to the top of our stack
				stack.push(ch);

			if (isRightBracket(ch)) { // If it is a right bracket we need to pop one item from our stack
				if (stack.empty())
					return false; // Check to make sure stack is not empty which would mean we did not have an
												// opening bracket and our stack is not balanced. In this case we immediately
												// return false.

				var top = stack.pop(); // When we pop the item on the top of the stack we need to compare it to make
																// sure the characters match. We will store the result in a variable called
																// 'top'
				if (!bracketsMatch(top, ch))
					return false; // If top and ch do not match then we immediately return false.
			}
		}

		return stack.empty(); // When we are done we check if the stack is empty
	}

	private boolean isLeftBracket(char ch) {
		return leftBrackets.contains(ch);// If the list of left brackets contains the current character this returns
																			// true.
	}

	private boolean isRightBracket(char ch) {
		return rightBrackets.contains(ch);
	}

	private boolean bracketsMatch(char left, char right) { // Go to left brackets array and find the indexOf our left
																													// character, then compare it to the index of the right
																													// character in our right brackets array. If the indexes are
																													// equal it means the brackets match. Return. This is a
																													// boolean expression.
		return leftBrackets.indexOf(left) == rightBrackets.indexOf(right);
	}
}
