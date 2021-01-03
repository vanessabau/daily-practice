package com.codewithmosh;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class CharFinder {
	// Add method to find first non-repeating char and give it a string
	public char findFirstNonRepeatingChar(String str) {
		// We need a hash table so we create a variable holding a map of characters
		// because our keys are going to be characters and their values are going to
		// integers, then we import it and set it to a new hash map
		Map<Character, Integer> map = new HashMap<>();

		// Iterate over the string. Note we are calling the toCharArray because in Java
		// we cannot iterate over a string. We have to convert it to a character array
		var chars = str.toCharArray(); // Initialize our string to a charArray so we can iterate over it without having
																		// to continually keep converting it.

		for (var ch : chars) {
			// In each iteration we need to see if we have this character in our hash table.
			// If we have it we will increment its count by one, otherwise we insert it into
			// our hash table
			// Refactored, here we calculate the count, use a terinary operator, type a
			// boolean expression 'map.containsKey(ch)'?, if we have this we set with
			// map.get(ch) otherwise we set count to zero
			var count = map.containsKey(ch) ? map.get(ch) : 0; // map.get reads the value the key and we store the result in a
																													// variable called 'count' then update it by calling the 'put'
																													// method.
			map.put(ch, count + 1); // Update this character with this count
		}

		for (var ch : chars) // If map.get=1 we immediately return it as the first character
			if (map.get(ch) == 1)
				return ch;

		return Character.MIN_VALUE; // If all characters in our string repeat at least once we return
																// Character.MIN_VALUE which represents that it is non existent.
	}

	public char findFirstRepeatedChar(String str) {
		// Create a new method to find first repeated character

		// Create a new instance of a hashset class
		Set<Character> set = new HashSet<>();

		// Next we need to iterate over our input string

		// For each character in this string ask our set if it contains this character.
		// If it contains it it means it is repeated so we return it immediately.
		// Otherwise if our set does not have the character we need to add it there.
		for (var ch : str.toCharArray()) {
			if (set.contains(ch)) // If set contains this character we return it
				return ch;

			set.add(ch); // Otherwise we add this character to our set
		}

		// Return Character.MIN_VALUE if no characters repeat
		return Character.MIN_VALUE;
	}

}
