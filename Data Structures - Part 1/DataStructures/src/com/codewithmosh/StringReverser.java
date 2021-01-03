package com.codewithmosh;

import java.util.Stack;

public class StringReverser {
	public String reverse(String input) { // Create our string method with a string input
		// Create a stack to hold each character. Iterate over the string, get each
		// character and store it in our stack. Then we pop each character and they come
		// out in the reverse order.

		// Validation to make sure we are not passing 'null' value, and if it is passed
		// we send back the appropriate error message
		if (input == null)
			throw new IllegalArgumentException();

		// Initialize a stack of characters called 'Stack'
		Stack<Character> stack = new Stack<>();

		// Iterate over the string and get each character at a time. You can use a
		// traditional forloop or a cleaner way:
		// For each character in 'input' (forEach does not work on a string in Java but
		// we can convert the string to a character array and easily do a forEach loop
		// on the array). Call toCharArray() and use a forEach loop to iterate over the
		// array. For each iteration call stack.push(ch) and pass ch.
		for (char ch : input.toCharArray())
			stack.push(ch);

		// Now that we've pushed each character to our stack we need to pop them one by
		// one and add them to a string.

		StringBuffer reversed = new StringBuffer(); // Declare a string called reverse and set it to an empty string.
		while (!stack.empty()) // As long as our stack is not empty
			reversed.append(stack.pop()); // Pop the characters one at a time. We call stack.pop() and append it to our
																		// reversed string.

		return reversed.toString(); // Return our reversed string
	}
}
