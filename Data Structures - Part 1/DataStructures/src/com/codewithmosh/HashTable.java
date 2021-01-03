package com.codewithmosh;

import java.util.LinkedList;

public class HashTable {
	// Create an entry class to be used only inside our hash table
	private class Entry {
		// Set our two fields
		private int key;
		private String value;

		// Initialize constructor
		// Generate (cmd+N)-> Constructor -> Select both fields
		public Entry(int key, String value) {
			this.key = key;
			this.value = value;
		}
	}

	// Create an array of LinkedLists called 'entries' and initialize it as a new
	// LinkedList array. Specify initial size. Later you can add a constructor to
	// pass the initial capacity
	private LinkedList<Entry>[] entries = new LinkedList[5];

	// Implement the put method. We need two parameters: key/value.
	// First thing to do is figure out where in the entries array we should store
	// the key/value pair. THis is where we use our hash function
	public void put(int key, String value) {
		// First we try to look up that entry, if we have it we update the value.
		// Otherwise we create the bucket

		// We are trying to get or create a bucket. If the bucket is null we set it to a
		// new linked list
		// Now that we have a bucket we iterate over the bucket and compare the key of
		// every entry to the given key
		var entry = getEntry(key);
		if (entry != null) { // If the entry is not null it means we have it so we update the value and
													// return
			entry.value = value; // Set it to the new value
			return; // Return so we don't add the new entry to the end of the bucket
		}
		// If the bucket does not exist this method will create it with the new
		// key/value pair
		getOrCreateBucket(key).add(new Entry(key, value));
	}

	public String get(int key) {
		// We want to find an entry and remove its value
		// Call getEntry, give it its key, and store in a variable
		var entry = getEntry(key);

		// If we don't find that entry we return null, otherwise return entry.value
		// (this was refactored using a ternary operator)
		return (entry == null) ? null : entry.value;
	}

	public void remove(int key) {
		// Find entry: getEntry, give a key and store it in a variable
		var entry = getEntry(key);
		if (entry == null) // If entry is null throw an exception because we did not find it
			throw new IllegalStateException();

		// Otherwise calculate the hash and go to entries of index and remove it from
		// its bucket
		getBucket(key).remove(entry);
	}

	// Method to calculate the hash (getbucket)
	private LinkedList<Entry> getBucket(int key) {
		// same as setting var index = hash(key), creating a bucket=entries[index]; and
		// return bucket;
		return entries[hash(key)];
	}

	// Private method that given a key, looks for the bucket, if the bucket does not
	// exist it creates it
	private LinkedList<Entry> getOrCreateBucket(int key) {
		var index = hash(key); // Use hash function to get the index
		var bucket = entries[index]; // Go to the bucket at this index by looking up the bucket at entries of index
		if (bucket == null) // If bucket is null this means we don't have this entry and we create one by
												// setting entries of index to a new Linked List
			entries[index] = new LinkedList<>();

		return bucket; // return bucket
	}

	// Private method that returns an entry object, getEntry(). Give it a key
	private Entry getEntry(int key) {
		var bucket = getBucket(key); // Get
		if (bucket != null) { // If bucket is not null proceed through forloop
			for (var entry : bucket) { // Iterate over the bucket, look at each entry, if we find an entry with the
																	// same key we return it.
				if (entry.key == key)
					return entry;
			}
		}
		return null; // Otherwise return null at the end
	}

	// Create a hash function
	private int hash(int key) {
		return key % entries.length;
	}
}
