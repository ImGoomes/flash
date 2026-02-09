import type { Flashcard, Topic } from "../types";

export const topics: Topic[] = [
  {
    id: "big-o",
    name: "Big-O / Complexity",
    icon: "📐",
    description: "Algorithmic complexity and asymptotic analysis",
    cardCount: 0,
  },
  {
    id: "arrays",
    name: "Arrays",
    icon: "📊",
    description: "Array operations, time complexity, and techniques",
    cardCount: 0,
  },
  {
    id: "linked-lists",
    name: "Linked Lists",
    icon: "🔗",
    description: "Singly, doubly linked lists and operations",
    cardCount: 0,
  },
  {
    id: "stacks",
    name: "Stacks",
    icon: "📚",
    description: "LIFO data structure and applications",
    cardCount: 0,
  },
  {
    id: "queues",
    name: "Queues",
    icon: "🚶",
    description: "FIFO data structure and variations",
    cardCount: 0,
  },
  {
    id: "hash-tables",
    name: "Hash Tables",
    icon: "🗂️",
    description: "Hashing, collisions, and hash map implementations",
    cardCount: 0,
  },
  {
    id: "binary-search",
    name: "Binary Search",
    icon: "🔍",
    description: "Binary search algorithm and variations",
    cardCount: 0,
  },
  {
    id: "bitwise",
    name: "Bitwise Operations",
    icon: "⚡",
    description: "Bit manipulation tricks and operations",
    cardCount: 0,
  },
  {
    id: "trees",
    name: "Trees",
    icon: "🌳",
    description: "BSTs, heaps, traversals, and balanced trees",
    cardCount: 0,
  },
  {
    id: "sorting",
    name: "Sorting",
    icon: "🔢",
    description: "Sorting algorithms and their trade-offs",
    cardCount: 0,
  },
  {
    id: "graphs",
    name: "Graphs",
    icon: "🕸️",
    description: "Graph representations, BFS, DFS, and algorithms",
    cardCount: 0,
  },
  {
    id: "recursion",
    name: "Recursion",
    icon: "🔄",
    description: "Recursive thinking, base cases, and call stacks",
    cardCount: 0,
  },
  {
    id: "dynamic-programming",
    name: "Dynamic Programming",
    icon: "🧩",
    description: "Memoization, tabulation, and optimal substructure",
    cardCount: 0,
  },
  {
    id: "design-patterns",
    name: "Design Patterns",
    icon: "🏗️",
    description: "Common software design patterns",
    cardCount: 0,
  },
  {
    id: "caches",
    name: "Caches",
    icon: "💾",
    description: "Caching strategies and cache invalidation",
    cardCount: 0,
  },
  {
    id: "processes-threads",
    name: "Processes & Threads",
    icon: "⚙️",
    description: "Concurrency, parallelism, and synchronization",
    cardCount: 0,
  },
  {
    id: "networking",
    name: "Networking",
    icon: "🌐",
    description: "TCP/IP, HTTP, DNS, and network fundamentals",
    cardCount: 0,
  },
  {
    id: "tries",
    name: "Tries",
    icon: "🔤",
    description: "Prefix trees and string-based data structures",
    cardCount: 0,
  },
  {
    id: "system-design",
    name: "System Design",
    icon: "🏛️",
    description: "Scalability, load balancing, and distributed systems",
    cardCount: 0,
  },
  {
    id: "string-manipulation",
    name: "String Manipulation",
    icon: "✂️",
    description: "String algorithms and pattern matching",
    cardCount: 0,
  },
];

export const flashcards: Flashcard[] = [
  // ─── BIG-O / COMPLEXITY ───────────────────────────────────────
  {
    id: "bo-1",
    topic: "big-o",
    difficulty: "beginner",
    question: "What does O(1) mean?",
    answer:
      "Constant time — the operation takes the same amount of time regardless of input size. Examples: array index access, hash table lookup (average case), pushing to a stack.",
  },
  {
    id: "bo-2",
    topic: "big-o",
    difficulty: "beginner",
    question: "What is the time complexity of iterating through an array of n elements?",
    answer: "O(n) — linear time. You visit each element exactly once.",
  },
  {
    id: "bo-3",
    topic: "big-o",
    difficulty: "intermediate",
    question: "What is the time complexity of this code?",
    answer:
      "O(n²) — quadratic time. The nested loop means for each of the n elements, we do n more operations.",
    codeSnippet: `for i in range(n):
    for j in range(n):
        pass  # O(1) operation`,
    language: "python",
  },
  {
    id: "bo-4",
    topic: "big-o",
    difficulty: "intermediate",
    question: "What's the difference between O(n log n) and O(n²)?",
    answer:
      "O(n log n) is significantly faster for large inputs. For n=1,000,000: n log n ≈ 20 million operations vs n² = 1 trillion operations. Most efficient comparison-based sorting algorithms are O(n log n).",
  },
  {
    id: "bo-5",
    topic: "big-o",
    difficulty: "beginner",
    question: "What does Big-O notation describe?",
    answer:
      "Big-O describes the upper bound of an algorithm's growth rate — how the time or space requirement grows as the input size increases. It focuses on the worst-case scenario and drops constants and lower-order terms.",
  },
  {
    id: "bo-6",
    topic: "big-o",
    difficulty: "advanced",
    question: "What is amortized O(1) and where is it used?",
    answer:
      "Amortized O(1) means that while a single operation might occasionally be expensive (e.g., O(n)), the average over a sequence of operations is O(1). Example: dynamic array (ArrayList) append — most appends are O(1), but resizing is O(n). Over n appends, total cost is ~2n, so amortized O(1).",
  },
  {
    id: "bo-7",
    topic: "big-o",
    difficulty: "intermediate",
    question: "Rank these complexities from fastest to slowest: O(n!), O(2ⁿ), O(n²), O(n log n), O(n), O(log n), O(1)",
    answer:
      "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)\n\nFrom constant to factorial — each jump is a significant increase in growth rate.",
  },
  {
    id: "bo-8",
    topic: "big-o",
    difficulty: "advanced",
    question: "What is the time complexity of this recursive function?",
    answer:
      "O(2ⁿ) — exponential time. Each call branches into two recursive calls, creating a binary tree of calls with depth n.",
    codeSnippet: `def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)`,
    language: "python",
  },
  {
    id: "bo-9",
    topic: "big-o",
    difficulty: "intermediate",
    question: "What is the difference between time complexity and space complexity?",
    answer:
      "Time complexity measures how the runtime grows with input size. Space complexity measures how the memory usage grows with input size. An algorithm can be time-efficient but space-heavy (e.g., memoization trades space for time).",
  },
  {
    id: "bo-10",
    topic: "big-o",
    difficulty: "advanced",
    question: "What is the time complexity of this function?",
    answer:
      "O(log n) — the input is halved on each recursive call, so the number of calls is log₂(n).",
    codeSnippet: `def mystery(n):
    if n <= 1:
        return 0
    return 1 + mystery(n // 2)`,
    language: "python",
  },

  // ─── ARRAYS ───────────────────────────────────────────────────
  {
    id: "arr-1",
    topic: "arrays",
    difficulty: "beginner",
    question: "What is the time complexity of accessing an element by index in an array?",
    answer:
      "O(1) — constant time. Arrays store elements contiguously in memory, so the address of any element can be calculated directly: base_address + (index × element_size).",
  },
  {
    id: "arr-2",
    topic: "arrays",
    difficulty: "beginner",
    question: "What is the time complexity of inserting an element at the beginning of an array?",
    answer:
      "O(n) — all existing elements must be shifted one position to the right to make room for the new element.",
  },
  {
    id: "arr-3",
    topic: "arrays",
    difficulty: "intermediate",
    question: "What is the Two Pointer technique?",
    answer:
      "A technique using two indices that traverse the array (often from opposite ends or at different speeds) to solve problems in O(n) time. Common uses: finding pairs that sum to a target, removing duplicates in-place, reversing an array.",
    codeSnippet: `def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        s = arr[left] + arr[right]
        if s == target:
            return [left, right]
        elif s < target:
            left += 1
        else:
            right -= 1
    return []`,
    language: "python",
  },
  {
    id: "arr-4",
    topic: "arrays",
    difficulty: "intermediate",
    question: "What's the difference between a static array and a dynamic array?",
    answer:
      "Static array: fixed size, allocated at creation. Dynamic array (e.g., ArrayList, vector): automatically resizes when full by allocating a larger array (usually 2x) and copying elements over. Dynamic arrays have amortized O(1) append.",
  },
  {
    id: "arr-5",
    topic: "arrays",
    difficulty: "intermediate",
    question: "What is the Sliding Window technique?",
    answer:
      "A technique for processing contiguous subarrays. Maintain a window [left, right] and expand/shrink it to find optimal subarrays. Used for: max sum subarray of size k, longest substring without repeating chars, minimum window substring.",
    codeSnippet: `def max_sum_subarray(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum`,
    language: "python",
  },
  {
    id: "arr-6",
    topic: "arrays",
    difficulty: "advanced",
    question: "How does the Kadane's Algorithm work for maximum subarray sum?",
    answer:
      "Keep track of the maximum sum ending at the current position (local max) and the overall maximum. At each position, either extend the previous subarray or start a new one. Time: O(n), Space: O(1).",
    codeSnippet: `def max_subarray(nums):
    max_sum = current = nums[0]
    for num in nums[1:]:
        current = max(num, current + num)
        max_sum = max(max_sum, current)
    return max_sum`,
    language: "python",
  },
  {
    id: "arr-7",
    topic: "arrays",
    difficulty: "beginner",
    question: "What is the time complexity of searching for an element in an unsorted array?",
    answer:
      "O(n) — in the worst case, you must check every element. If the array is sorted, you can use binary search for O(log n).",
  },
  {
    id: "arr-8",
    topic: "arrays",
    difficulty: "advanced",
    question: "What is a prefix sum array and when is it useful?",
    answer:
      "A prefix sum array where prefix[i] = sum of elements from index 0 to i. Allows computing the sum of any subarray [l, r] in O(1): prefix[r] - prefix[l-1]. Useful for range sum queries.",
    codeSnippet: `# Build prefix sum
from itertools import accumulate
prefix = list(accumulate(nums))
# Sum of range [l, r]
def range_sum(l, r):
    return prefix[r] - (prefix[l - 1] if l > 0 else 0)`,
    language: "python",
  },

  // ─── LINKED LISTS ─────────────────────────────────────────────
  {
    id: "ll-1",
    topic: "linked-lists",
    difficulty: "beginner",
    question: "What is a linked list and how does it differ from an array?",
    answer:
      "A linked list stores elements in nodes where each node points to the next. Unlike arrays, elements are not contiguous in memory. Trade-offs: O(1) insertion/deletion at known position (vs O(n) for arrays), but O(n) access by index (vs O(1) for arrays).",
  },
  {
    id: "ll-2",
    topic: "linked-lists",
    difficulty: "beginner",
    question: "What are the types of linked lists?",
    answer:
      "1. Singly Linked List — each node points to the next\n2. Doubly Linked List — each node points to both next and previous\n3. Circular Linked List — the last node points back to the first",
  },
  {
    id: "ll-3",
    topic: "linked-lists",
    difficulty: "intermediate",
    question: "How do you detect a cycle in a linked list?",
    answer:
      "Floyd's Cycle Detection (Tortoise and Hare): Use two pointers — slow moves 1 step, fast moves 2 steps. If they meet, there's a cycle. Time: O(n), Space: O(1).",
    codeSnippet: `def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`,
    language: "python",
  },
  {
    id: "ll-4",
    topic: "linked-lists",
    difficulty: "intermediate",
    question: "How do you reverse a singly linked list?",
    answer:
      "Iterate through the list, reversing each node's next pointer to point to the previous node. Use three pointers: prev, current, next. Time: O(n), Space: O(1).",
    codeSnippet: `def reverse_list(head):
    prev = None
    current = head
    while current:
        nxt = current.next
        current.next = prev
        prev = current
        current = nxt
    return prev`,
    language: "python",
  },
  {
    id: "ll-5",
    topic: "linked-lists",
    difficulty: "intermediate",
    question: "How do you find the middle of a linked list?",
    answer:
      "Use slow/fast pointer technique. Slow moves 1 step, fast moves 2 steps. When fast reaches the end, slow is at the middle.",
    codeSnippet: `def find_middle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow`,
    language: "python",
  },
  {
    id: "ll-6",
    topic: "linked-lists",
    difficulty: "advanced",
    question: "How do you merge two sorted linked lists?",
    answer:
      "Use a dummy head node and compare nodes from both lists, appending the smaller one. Time: O(n + m), Space: O(1).",
    codeSnippet: `def merge_two_lists(l1, l2):
    dummy = ListNode(0)
    tail = dummy
    while l1 and l2:
        if l1.val <= l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    tail.next = l1 or l2
    return dummy.next`,
    language: "python",
  },
  {
    id: "ll-7",
    topic: "linked-lists",
    difficulty: "advanced",
    question: "What is an LRU Cache and how do linked lists help implement it?",
    answer:
      "An LRU (Least Recently Used) Cache evicts the least recently accessed item when full. It uses a doubly linked list (for O(1) move/remove) + a hash map (for O(1) lookup). Most recently used items stay at the head; evict from the tail.",
  },

  // ─── STACKS ───────────────────────────────────────────────────
  {
    id: "st-1",
    topic: "stacks",
    difficulty: "beginner",
    question: "What is a Stack and what principle does it follow?",
    answer:
      "A Stack is a linear data structure that follows LIFO (Last In, First Out). The last element added is the first one removed. Core operations: push (add to top), pop (remove from top), peek (view top). All O(1).",
  },
  {
    id: "st-2",
    topic: "stacks",
    difficulty: "intermediate",
    question: "How do you check if parentheses are balanced using a stack?",
    answer:
      "Push opening brackets onto the stack. For each closing bracket, check if it matches the top of the stack. If the stack is empty at the end, the string is balanced.",
    codeSnippet: `def is_valid(s):
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}
    for c in s:
        if c in pairs:
            if not stack or stack.pop() != pairs[c]:
                return False
        else:
            stack.append(c)
    return len(stack) == 0`,
    language: "python",
  },
  {
    id: "st-3",
    topic: "stacks",
    difficulty: "beginner",
    question: "Name 3 real-world uses of stacks.",
    answer:
      "1. Function call stack — tracks active function calls and local variables\n2. Undo/Redo — editors push actions onto a stack\n3. Browser history — back button pops from the history stack\n4. Expression evaluation — parsing and evaluating mathematical expressions",
  },
  {
    id: "st-4",
    topic: "stacks",
    difficulty: "intermediate",
    question: "What is a Monotonic Stack?",
    answer:
      "A stack that maintains elements in a strictly increasing or decreasing order. Used to efficiently solve 'next greater/smaller element' problems in O(n) time.",
    codeSnippet: `def next_greater_element(nums):
    result = [-1] * len(nums)
    stack = []  # stores indices
    for i in range(len(nums)):
        while stack and nums[i] > nums[stack[-1]]:
            result[stack.pop()] = nums[i]
        stack.append(i)
    return result`,
    language: "python",
  },
  {
    id: "st-5",
    topic: "stacks",
    difficulty: "advanced",
    question: "How would you implement a stack that supports getMin() in O(1)?",
    answer:
      "Use two stacks: one for values and one for minimums. When pushing, also push to the min stack if the value is ≤ the current min. When popping, also pop from the min stack if the value equals the current min.",
    codeSnippet: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val):
        self.stack.append(val)
        if not self.min_stack or val <= self.get_min():
            self.min_stack.append(val)

    def pop(self):
        if self.stack.pop() == self.get_min():
            self.min_stack.pop()

    def get_min(self):
        return self.min_stack[-1]`,
    language: "python",
  },

  // ─── QUEUES ───────────────────────────────────────────────────
  {
    id: "qu-1",
    topic: "queues",
    difficulty: "beginner",
    question: "What is a Queue and what principle does it follow?",
    answer:
      "A Queue is a linear data structure that follows FIFO (First In, First Out). The first element added is the first one removed. Core operations: enqueue (add to back), dequeue (remove from front). Both O(1) with proper implementation.",
  },
  {
    id: "qu-2",
    topic: "queues",
    difficulty: "intermediate",
    question: "What is a Priority Queue?",
    answer:
      "A queue where each element has a priority. Elements with higher priority are dequeued first regardless of insertion order. Typically implemented with a binary heap. Insert: O(log n), Extract min/max: O(log n).",
  },
  {
    id: "qu-3",
    topic: "queues",
    difficulty: "intermediate",
    question: "How do you implement a queue using two stacks?",
    answer:
      "Use an 'inbox' stack for enqueue and an 'outbox' stack for dequeue. On dequeue, if outbox is empty, transfer all elements from inbox to outbox (reverses the order). Amortized O(1) for both operations.",
    codeSnippet: `class QueueWithStacks:
    def __init__(self):
        self.inbox = []
        self.outbox = []

    def enqueue(self, val):
        self.inbox.append(val)

    def dequeue(self):
        if not self.outbox:
            while self.inbox:
                self.outbox.append(self.inbox.pop())
        return self.outbox.pop() if self.outbox else None`,
    language: "python",
  },
  {
    id: "qu-4",
    topic: "queues",
    difficulty: "beginner",
    question: "What is a circular queue (ring buffer)?",
    answer:
      "A fixed-size queue that wraps around using modulo arithmetic. When the end is reached, it continues from the beginning. Efficient: no shifting needed. Used in: buffering (I/O, audio), BFS with bounded memory.",
  },
  {
    id: "qu-5",
    topic: "queues",
    difficulty: "intermediate",
    question: "What is a Deque (Double-Ended Queue)?",
    answer:
      "A data structure that allows insertion and deletion at both ends in O(1) time. Combines the capabilities of both stacks and queues. Used in sliding window problems, work-stealing schedulers, and palindrome checking.",
  },

  // ─── HASH TABLES ──────────────────────────────────────────────
  {
    id: "ht-1",
    topic: "hash-tables",
    difficulty: "beginner",
    question: "What is a hash table and what are its average time complexities?",
    answer:
      "A hash table maps keys to values using a hash function. Average case: O(1) for insert, lookup, and delete. Worst case: O(n) when all keys hash to the same bucket (collision).",
  },
  {
    id: "ht-2",
    topic: "hash-tables",
    difficulty: "intermediate",
    question: "What are the main collision resolution strategies?",
    answer:
      "1. Chaining — each bucket holds a linked list of entries\n2. Open Addressing — find another empty slot:\n   - Linear probing: check next slot\n   - Quadratic probing: check i² slots away\n   - Double hashing: use a second hash function",
  },
  {
    id: "ht-3",
    topic: "hash-tables",
    difficulty: "intermediate",
    question: "What is the load factor and why does it matter?",
    answer:
      "Load factor = number of entries / number of buckets. As it increases, collision probability rises and performance degrades. Most implementations resize (rehash) when load factor exceeds a threshold (e.g., 0.75 in Java's HashMap).",
  },
  {
    id: "ht-4",
    topic: "hash-tables",
    difficulty: "intermediate",
    question: "Solve Two Sum using a hash table.",
    answer:
      "For each element, check if (target - element) exists in the map. If yes, return the pair. If no, add current element to the map. Single pass, O(n) time, O(n) space.",
    codeSnippet: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
    language: "python",
  },
  {
    id: "ht-5",
    topic: "hash-tables",
    difficulty: "advanced",
    question: "What makes a good hash function?",
    answer:
      "A good hash function: 1) Distributes keys uniformly across buckets, 2) Is deterministic (same input = same output), 3) Is fast to compute, 4) Minimizes collisions. For strings, polynomial rolling hash is common. For integers, multiplicative hashing works well.",
  },
  {
    id: "ht-6",
    topic: "hash-tables",
    difficulty: "beginner",
    question: "What is the difference between a HashMap and a HashSet?",
    answer:
      "HashMap stores key-value pairs. HashSet stores only keys (unique values). A HashSet is essentially a HashMap where you only care about the keys. Both offer O(1) average-case operations.",
  },

  // ─── BINARY SEARCH ────────────────────────────────────────────
  {
    id: "bs-1",
    topic: "binary-search",
    difficulty: "beginner",
    question: "What is binary search and what is its time complexity?",
    answer:
      "Binary search finds a target in a sorted array by repeatedly halving the search space. Compare the target with the middle element — if smaller go left, if larger go right. Time: O(log n), Space: O(1) iterative.",
  },
  {
    id: "bs-2",
    topic: "binary-search",
    difficulty: "intermediate",
    question: "Implement binary search iteratively.",
    answer:
      "Use two pointers (left, right) and narrow the range by comparing with the middle element.",
    codeSnippet: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1  # not found`,
    language: "python",
  },
  {
    id: "bs-3",
    topic: "binary-search",
    difficulty: "intermediate",
    question: "Why use left + (right - left) / 2 instead of (left + right) / 2?",
    answer:
      "To prevent integer overflow. If left and right are both large numbers, their sum could exceed the maximum integer value. left + (right - left) / 2 avoids this by computing the difference first.",
  },
  {
    id: "bs-4",
    topic: "binary-search",
    difficulty: "advanced",
    question: "How do you find the first occurrence of a target in a sorted array with duplicates?",
    answer:
      "Modified binary search: when you find the target, don't return immediately — instead, record it and continue searching left (right = mid - 1) to find an earlier occurrence.",
    codeSnippet: `def first_occurrence(arr, target):
    left, right, result = 0, len(arr) - 1, -1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            result = mid
            right = mid - 1  # keep searching left
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return result`,
    language: "python",
  },
  {
    id: "bs-5",
    topic: "binary-search",
    difficulty: "advanced",
    question: "How do you search in a rotated sorted array?",
    answer:
      "Modified binary search. At each step, one half is always sorted. Determine which half is sorted, then check if the target lies in that half. If yes, search there; otherwise, search the other half.",
    codeSnippet: `def search_rotated(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            # Left half is sorted
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            # Right half is sorted
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1`,
    language: "python",
  },

  // ─── BITWISE OPERATIONS ───────────────────────────────────────
  {
    id: "bw-1",
    topic: "bitwise",
    difficulty: "beginner",
    question: "What are the basic bitwise operators?",
    answer:
      "AND (&): both bits 1 → 1\nOR (|): either bit 1 → 1\nXOR (^): bits differ → 1\nNOT (~): flip all bits\nLeft shift (<<): multiply by 2\nRight shift (>>): divide by 2",
  },
  {
    id: "bw-2",
    topic: "bitwise",
    difficulty: "intermediate",
    question: "How do you check if a number is a power of 2?",
    answer:
      "A power of 2 has exactly one bit set. n & (n - 1) removes the lowest set bit. If the result is 0, n is a power of 2.",
    codeSnippet: `def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0
# 8  = 1000, 7  = 0111, 8 & 7 = 0000 → True
# 10 = 1010, 9  = 1001, 10 & 9 = 1000 → False`,
    language: "python",
  },
  {
    id: "bw-3",
    topic: "bitwise",
    difficulty: "intermediate",
    question: "How do you find the single number in an array where every other number appears twice?",
    answer:
      "XOR all numbers together. XOR of a number with itself is 0, and XOR with 0 is the number itself. The result is the single number. Time: O(n), Space: O(1).",
    codeSnippet: `from functools import reduce
from operator import xor

def single_number(nums):
    return reduce(xor, nums)
# [4, 1, 2, 1, 2] → 4^1^2^1^2 → 4`,
    language: "python",
  },
  {
    id: "bw-4",
    topic: "bitwise",
    difficulty: "advanced",
    question: "How do you count the number of set bits (1s) in an integer?",
    answer:
      "Brian Kernighan's algorithm: repeatedly clear the lowest set bit using n & (n-1) until n becomes 0. Count the iterations. Each iteration removes exactly one set bit.",
    codeSnippet: `def count_bits(n):
    count = 0
    while n:
        n &= n - 1  # clear lowest set bit
        count += 1
    return count`,
    language: "python",
  },
  {
    id: "bw-5",
    topic: "bitwise",
    difficulty: "intermediate",
    question: "How do you swap two numbers without a temporary variable?",
    answer: "Use XOR: a ^= b; b ^= a; a ^= b. This works because XOR is its own inverse.",
    codeSnippet: `a, b = 5, 3
a ^= b  # a = 5^3 = 6
b ^= a  # b = 3^6 = 5
a ^= b  # a = 6^5 = 3
# now a=3, b=5
# Pythonic way: a, b = b, a`,
    language: "python",
  },

  // ─── TREES ────────────────────────────────────────────────────
  {
    id: "tr-1",
    topic: "trees",
    difficulty: "beginner",
    question: "What is a Binary Search Tree (BST) and what property does it maintain?",
    answer:
      "A BST is a binary tree where for each node: all values in the left subtree are less than the node, and all values in the right subtree are greater. This enables O(log n) average-case search, insert, and delete.",
  },
  {
    id: "tr-2",
    topic: "trees",
    difficulty: "intermediate",
    question: "What are the tree traversal orders and what do they produce on a BST?",
    answer:
      "In-order (Left, Root, Right): produces sorted order in BST\nPre-order (Root, Left, Right): useful for copying/serializing a tree\nPost-order (Left, Right, Root): useful for deleting a tree\nLevel-order (BFS): visits nodes level by level",
  },
  {
    id: "tr-3",
    topic: "trees",
    difficulty: "intermediate",
    question: "Implement in-order traversal iteratively.",
    answer:
      "Use a stack. Go as far left as possible, pushing nodes. When you can't go left, pop, process, then go right.",
    codeSnippet: `def inorder(root):
    result = []
    stack = []
    current = root
    while current or stack:
        while current:
            stack.append(current)
            current = current.left
        current = stack.pop()
        result.append(current.val)
        current = current.right
    return result`,
    language: "python",
  },
  {
    id: "tr-4",
    topic: "trees",
    difficulty: "intermediate",
    question: "What is a Binary Heap and how is it used as a Priority Queue?",
    answer:
      "A Binary Heap is a complete binary tree where parent ≤ children (min-heap) or parent ≥ children (max-heap). Stored as an array. Insert: add at end, bubble up — O(log n). Extract min/max: swap root with last, bubble down — O(log n). Building a heap from array: O(n).",
  },
  {
    id: "tr-5",
    topic: "trees",
    difficulty: "intermediate",
    question: "How do you find the height of a binary tree?",
    answer:
      "Recursively: height = 1 + max(height(left), height(right)). Base case: null node returns -1 (or 0 depending on convention). Time: O(n).",
    codeSnippet: `def height(root):
    if not root:
        return -1
    return 1 + max(
        height(root.left),
        height(root.right)
    )`,
    language: "python",
  },
  {
    id: "tr-6",
    topic: "trees",
    difficulty: "advanced",
    question: "What is the difference between a balanced BST and an unbalanced one?",
    answer:
      "A balanced BST (AVL, Red-Black) maintains O(log n) height by rebalancing after insertions/deletions. An unbalanced BST can degrade to a linked list (O(n) operations) if elements are inserted in sorted order. Self-balancing trees guarantee O(log n) worst-case.",
  },
  {
    id: "tr-7",
    topic: "trees",
    difficulty: "advanced",
    question: "How do you validate if a binary tree is a valid BST?",
    answer:
      "Pass valid range (min, max) to each node. For each node, check if its value is within range. Left child gets (-∞, parent.val), right child gets (parent.val, +∞).",
    codeSnippet: `def is_valid_bst(node, min_val=float('-inf'), max_val=float('inf')):
    if not node:
        return True
    if node.val <= min_val or node.val >= max_val:
        return False
    return (
        is_valid_bst(node.left, min_val, node.val) and
        is_valid_bst(node.right, node.val, max_val)
    )`,
    language: "python",
  },
  {
    id: "tr-8",
    topic: "trees",
    difficulty: "intermediate",
    question: "What is BFS (Level-Order Traversal) on a tree?",
    answer:
      "Visit nodes level by level using a queue. Start with root, dequeue a node, process it, then enqueue its children. Time: O(n), Space: O(w) where w is max width.",
    codeSnippet: `from collections import deque

def level_order(root):
    if not root:
        return []
    result = []
    queue = deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)
    return result`,
    language: "python",
  },

  // ─── SORTING ──────────────────────────────────────────────────
  {
    id: "so-1",
    topic: "sorting",
    difficulty: "beginner",
    question: "What is the time complexity of common sorting algorithms?",
    answer:
      "Bubble Sort: O(n²)\nSelection Sort: O(n²)\nInsertion Sort: O(n²) worst, O(n) best (nearly sorted)\nMerge Sort: O(n log n) always\nQuick Sort: O(n log n) avg, O(n²) worst\nHeap Sort: O(n log n) always\nCounting/Radix Sort: O(n+k) / O(nk) — non-comparison based",
  },
  {
    id: "so-2",
    topic: "sorting",
    difficulty: "intermediate",
    question: "How does QuickSort work?",
    answer:
      "1. Choose a pivot element\n2. Partition: rearrange so elements < pivot are left, elements > pivot are right\n3. Recursively sort the two partitions\nAvg: O(n log n), Worst: O(n²) with bad pivot. In-place, not stable.",
    codeSnippet: `def quick_sort(arr, lo=0, hi=None):
    if hi is None:
        hi = len(arr) - 1
    if lo >= hi:
        return
    pivot = arr[hi]
    i = lo
    for j in range(lo, hi):
        if arr[j] < pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    arr[i], arr[hi] = arr[hi], arr[i]
    quick_sort(arr, lo, i - 1)
    quick_sort(arr, i + 1, hi)`,
    language: "python",
  },
  {
    id: "so-3",
    topic: "sorting",
    difficulty: "intermediate",
    question: "How does MergeSort work?",
    answer:
      "1. Divide array in half recursively until single elements\n2. Merge sorted halves by comparing elements from each\nAlways O(n log n), stable, but uses O(n) extra space.",
    codeSnippet: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(a, b):
    result = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            result.append(a[i]); i += 1
        else:
            result.append(b[j]); j += 1
    return result + a[i:] + b[j:]`,
    language: "python",
  },
  {
    id: "so-4",
    topic: "sorting",
    difficulty: "beginner",
    question: "What does it mean for a sorting algorithm to be 'stable'?",
    answer:
      "A stable sort preserves the relative order of elements with equal keys. Example: sorting students by grade — stable sort keeps alphabetical order among students with the same grade. Stable: Merge Sort, Insertion Sort. Unstable: Quick Sort, Heap Sort.",
  },
  {
    id: "so-5",
    topic: "sorting",
    difficulty: "advanced",
    question: "What is the lower bound for comparison-based sorting?",
    answer:
      "Ω(n log n). Any comparison-based sorting algorithm must make at least n log n comparisons in the worst case. This is proven via decision tree analysis — there are n! possible orderings, requiring log₂(n!) ≈ n log n comparisons to distinguish them.",
  },
  {
    id: "so-6",
    topic: "sorting",
    difficulty: "intermediate",
    question: "When would you use Insertion Sort over QuickSort?",
    answer:
      "Insertion Sort is preferred for: 1) Small arrays (n < ~20) — less overhead, 2) Nearly sorted data — O(n) best case, 3) Online sorting — can sort as data arrives. Many QuickSort implementations switch to Insertion Sort for small partitions (hybrid approach).",
  },

  // ─── GRAPHS ───────────────────────────────────────────────────
  {
    id: "gr-1",
    topic: "graphs",
    difficulty: "beginner",
    question: "What are the two common ways to represent a graph?",
    answer:
      "1. Adjacency Matrix: 2D array where matrix[i][j] = 1 if edge exists. O(1) edge lookup, O(V²) space.\n2. Adjacency List: array of lists where list[i] contains neighbors of vertex i. O(V + E) space, better for sparse graphs.",
  },
  {
    id: "gr-2",
    topic: "graphs",
    difficulty: "intermediate",
    question: "What is the difference between BFS and DFS on a graph?",
    answer:
      "BFS (Breadth-First Search): uses a queue, explores level by level. Finds shortest path in unweighted graphs. Time: O(V + E).\nDFS (Depth-First Search): uses a stack/recursion, explores as deep as possible first. Used for: cycle detection, topological sort, connected components. Time: O(V + E).",
  },
  {
    id: "gr-3",
    topic: "graphs",
    difficulty: "intermediate",
    question: "Implement BFS on a graph.",
    answer:
      "Start from a source node, use a queue and visited set. Process each node, then enqueue all unvisited neighbors.",
    codeSnippet: `from collections import deque

def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return order`,
    language: "python",
  },
  {
    id: "gr-4",
    topic: "graphs",
    difficulty: "intermediate",
    question: "What is topological sorting and when is it used?",
    answer:
      "Topological sort orders vertices of a DAG (Directed Acyclic Graph) such that for every edge u→v, u comes before v. Used for: task scheduling, build systems, course prerequisites. Can be done with DFS or Kahn's algorithm (BFS with in-degrees).",
  },
  {
    id: "gr-5",
    topic: "graphs",
    difficulty: "advanced",
    question: "What is Dijkstra's algorithm?",
    answer:
      "Finds shortest paths from a source to all vertices in a weighted graph with non-negative weights. Uses a priority queue (min-heap). Greedily selects the closest unvisited vertex and relaxes its edges. Time: O((V + E) log V) with binary heap.",
    codeSnippet: `import heapq

def dijkstra(graph, start):
    dist = {start: 0}
    pq = [(0, start)]  # (distance, node)
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist.get(u, float('inf')):
            continue
        for v, w in graph.get(u, []):
            new_dist = d + w
            if new_dist < dist.get(v, float('inf')):
                dist[v] = new_dist
                heapq.heappush(pq, (new_dist, v))
    return dist`,
    language: "python",
  },
  {
    id: "gr-6",
    topic: "graphs",
    difficulty: "intermediate",
    question: "How do you detect a cycle in a directed graph?",
    answer:
      "Use DFS with 3 states: white (unvisited), gray (in current path), black (fully processed). If you encounter a gray node during DFS, there's a cycle. Alternative: topological sort fails if there's a cycle.",
  },
  {
    id: "gr-7",
    topic: "graphs",
    difficulty: "advanced",
    question: "What is the difference between Dijkstra's and Bellman-Ford?",
    answer:
      "Dijkstra's: O((V+E) log V), only non-negative weights, greedy approach.\nBellman-Ford: O(VE), handles negative weights, can detect negative cycles. Relaxes all edges V-1 times. If any edge can still be relaxed after V-1 iterations, a negative cycle exists.",
  },

  // ─── RECURSION ────────────────────────────────────────────────
  {
    id: "rc-1",
    topic: "recursion",
    difficulty: "beginner",
    question: "What are the two essential parts of every recursive function?",
    answer:
      "1. Base case — the condition that stops recursion (prevents infinite loops)\n2. Recursive case — the function calls itself with a smaller/simpler input, making progress toward the base case.",
  },
  {
    id: "rc-2",
    topic: "recursion",
    difficulty: "intermediate",
    question: "What is tail recursion and why does it matter?",
    answer:
      "Tail recursion is when the recursive call is the last operation in the function — no computation after it. Some compilers optimize tail recursion to avoid stack overflow by reusing the current stack frame (tail call optimization).",
    codeSnippet: `# Not tail recursive — multiplication happens AFTER the call
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Tail recursive — recursive call is the last thing
def factorial_tail(n, acc=1):
    if n <= 1:
        return acc
    return factorial_tail(n - 1, n * acc)`,
    language: "python",
  },
  {
    id: "rc-3",
    topic: "recursion",
    difficulty: "intermediate",
    question: "How do you generate all subsets of an array recursively?",
    answer:
      "For each element, make two choices: include it or exclude it. This creates a binary decision tree with 2ⁿ leaves (subsets).",
    codeSnippet: `def subsets(nums):
    result = []
    def backtrack(start, current):
        result.append(current[:])
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
    backtrack(0, [])
    return result`,
    language: "python",
  },
  {
    id: "rc-4",
    topic: "recursion",
    difficulty: "beginner",
    question: "What is the call stack and how does it relate to recursion?",
    answer:
      "The call stack stores information about active function calls. Each recursive call adds a new frame to the stack. When the base case is reached, frames are popped as calls return. Too many recursive calls without reaching base case causes a stack overflow.",
  },
  {
    id: "rc-5",
    topic: "recursion",
    difficulty: "advanced",
    question: "What is backtracking?",
    answer:
      "A systematic way to explore all possible solutions by making choices, exploring further, and undoing (backtracking) choices that lead to dead ends. Used for: N-Queens, Sudoku solver, permutations, combination sum. Time is often exponential.",
  },

  // ─── DYNAMIC PROGRAMMING ─────────────────────────────────────
  {
    id: "dp-1",
    topic: "dynamic-programming",
    difficulty: "beginner",
    question: "What is Dynamic Programming and when should you use it?",
    answer:
      "DP solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation. Use it when a problem has: 1) Optimal substructure (optimal solution uses optimal solutions to subproblems) and 2) Overlapping subproblems (same subproblems solved multiple times).",
  },
  {
    id: "dp-2",
    topic: "dynamic-programming",
    difficulty: "intermediate",
    question: "What's the difference between memoization (top-down) and tabulation (bottom-up)?",
    answer:
      "Memoization: recursive + cache. Solve top-level problem, cache subproblems as needed. Easier to write but has recursion overhead.\nTabulation: iterative. Build solution from smallest subproblems up. No recursion overhead, often better cache performance.",
  },
  {
    id: "dp-3",
    topic: "dynamic-programming",
    difficulty: "intermediate",
    question: "Solve the Climbing Stairs problem with DP.",
    answer:
      "You can climb 1 or 2 stairs at a time. Ways to reach step n = ways to reach step (n-1) + ways to reach step (n-2). This is the Fibonacci sequence!",
    codeSnippet: `def climb_stairs(n):
    if n <= 2:
        return n
    prev2, prev1 = 1, 2
    for _ in range(3, n + 1):
        prev2, prev1 = prev1, prev1 + prev2
    return prev1`,
    language: "python",
  },
  {
    id: "dp-4",
    topic: "dynamic-programming",
    difficulty: "advanced",
    question: "How do you solve the 0/1 Knapsack problem?",
    answer:
      "For each item, choose to include it or not. dp[i][w] = max value using first i items with capacity w. dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i]). Time: O(nW), Space: O(nW), optimizable to O(W).",
    codeSnippet: `def knapsack(weights, values, W):
    dp = [0] * (W + 1)
    for i in range(len(weights)):
        for w in range(W, weights[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    return dp[W]`,
    language: "python",
  },
  {
    id: "dp-5",
    topic: "dynamic-programming",
    difficulty: "intermediate",
    question: "What is the Longest Common Subsequence (LCS) problem?",
    answer:
      "Find the longest subsequence common to two strings. If chars match, LCS(i,j) = 1 + LCS(i+1,j+1). If not, LCS(i,j) = max(LCS(i+1,j), LCS(i,j+1)). Time: O(mn), Space: O(mn).",
    codeSnippet: `def lcs(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]`,
    language: "python",
  },
  {
    id: "dp-6",
    topic: "dynamic-programming",
    difficulty: "advanced",
    question: "How do you identify the DP state and transition for a new problem?",
    answer:
      "1. Identify what changes between subproblems (index, remaining capacity, etc.) — these become your state variables\n2. Define what dp[state] represents (min cost, max value, number of ways, etc.)\n3. Find the recurrence: how does dp[state] relate to smaller states?\n4. Identify base cases\n5. Determine traversal order (which states depend on which)",
  },

  // ─── DESIGN PATTERNS ─────────────────────────────────────────
  {
    id: "pat-1",
    topic: "design-patterns",
    difficulty: "beginner",
    question: "What is the Singleton pattern?",
    answer:
      "Ensures a class has only one instance and provides a global access point to it. Use cases: database connections, configuration, logging. Be cautious — singletons can make testing harder and introduce hidden dependencies.",
    codeSnippet: `class Database:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

# Usage
db1 = Database()
db2 = Database()
# db1 is db2 → True`,
    language: "python",
  },
  {
    id: "pat-2",
    topic: "design-patterns",
    difficulty: "intermediate",
    question: "What is the Observer pattern?",
    answer:
      "Defines a one-to-many dependency. When the subject changes state, all observers are notified automatically. Used in: event systems, pub/sub, reactive programming (RxJS), MVC architecture.",
  },
  {
    id: "pat-3",
    topic: "design-patterns",
    difficulty: "intermediate",
    question: "What is the Strategy pattern?",
    answer:
      "Defines a family of algorithms, encapsulates each one, and makes them interchangeable. The algorithm varies independently from clients that use it. Example: different sorting strategies, payment methods, compression algorithms.",
    codeSnippet: `from abc import ABC, abstractmethod

class SortStrategy(ABC):
    @abstractmethod
    def sort(self, data): pass

class QuickSortStrategy(SortStrategy):
    def sort(self, data):
        # quicksort implementation
        return data

class MergeSortStrategy(SortStrategy):
    def sort(self, data):
        # mergesort implementation
        return data

class Sorter:
    def __init__(self, strategy):
        self.strategy = strategy
    def sort(self, data):
        return self.strategy.sort(data)`,
    language: "python",
  },
  {
    id: "pat-4",
    topic: "design-patterns",
    difficulty: "intermediate",
    question: "What is the Factory pattern?",
    answer:
      "Creates objects without specifying the exact class. A factory method returns an object of a common interface but decides which class to instantiate. Decouples object creation from usage. Use when: creation logic is complex, you need flexibility in what gets created.",
  },
  {
    id: "pat-5",
    topic: "design-patterns",
    difficulty: "advanced",
    question: "What is the Decorator pattern?",
    answer:
      "Dynamically adds behavior to an object without modifying its class. Wraps the original object with decorator objects that add functionality. Follows the Open/Closed Principle. Example: adding logging, caching, or authentication to a service.",
  },

  // ─── CACHES ───────────────────────────────────────────────────
  {
    id: "ca-1",
    topic: "caches",
    difficulty: "beginner",
    question: "What is a cache and why use one?",
    answer:
      "A cache stores frequently accessed data in a faster storage layer to reduce latency and load on the primary data source. Trade-off: uses more memory but significantly reduces access time. Common in: CPU caches (L1/L2/L3), web browsers, CDNs, database query caches.",
  },
  {
    id: "ca-2",
    topic: "caches",
    difficulty: "intermediate",
    question: "What are common cache eviction policies?",
    answer:
      "LRU (Least Recently Used): evict the item accessed longest ago\nLFU (Least Frequently Used): evict the item used fewest times\nFIFO (First In, First Out): evict the oldest item\nRandom: evict a random item\nTTL (Time To Live): evict after a set duration",
  },
  {
    id: "ca-3",
    topic: "caches",
    difficulty: "intermediate",
    question: "What is a cache hit vs a cache miss?",
    answer:
      "Cache hit: requested data is found in the cache — fast! Cache miss: data is not in cache, must be fetched from the slower primary source. Hit rate = hits / (hits + misses). A good cache has a high hit rate (>90%).",
  },
  {
    id: "ca-4",
    topic: "caches",
    difficulty: "advanced",
    question: "What is the 'cache invalidation' problem?",
    answer:
      "\"There are only two hard things in CS: cache invalidation and naming things.\" — Phil Karlton. The problem: how to keep cached data consistent with the source of truth? Strategies: write-through (update cache + DB together), write-behind (update cache, async write to DB), cache-aside (app manages cache explicitly).",
  },
  {
    id: "ca-5",
    topic: "caches",
    difficulty: "advanced",
    question: "What is cache locality and why does it matter for performance?",
    answer:
      "Temporal locality: recently accessed data is likely to be accessed again soon. Spatial locality: data near recently accessed data is likely to be accessed soon. CPUs exploit this with cache lines (~64 bytes). Iterating an array is fast (spatial locality); traversing a linked list is slower (nodes scattered in memory).",
  },

  // ─── PROCESSES & THREADS ──────────────────────────────────────
  {
    id: "pt-1",
    topic: "processes-threads",
    difficulty: "beginner",
    question: "What is the difference between a process and a thread?",
    answer:
      "Process: independent execution unit with its own memory space. Threads: lightweight units within a process that share the same memory. Processes are isolated (safer), threads are faster to create and switch between (shared memory).",
  },
  {
    id: "pt-2",
    topic: "processes-threads",
    difficulty: "intermediate",
    question: "What is a deadlock and what are its four conditions?",
    answer:
      "Deadlock: two or more threads wait forever for each other to release resources. Four conditions (all must hold): 1) Mutual exclusion, 2) Hold and wait, 3) No preemption, 4) Circular wait. Prevent by breaking any one condition.",
  },
  {
    id: "pt-3",
    topic: "processes-threads",
    difficulty: "intermediate",
    question: "What is a race condition?",
    answer:
      "A race condition occurs when multiple threads access shared data concurrently and at least one modifies it, leading to unpredictable results depending on execution order. Fix with: mutexes, semaphores, atomic operations, or lock-free data structures.",
  },
  {
    id: "pt-4",
    topic: "processes-threads",
    difficulty: "intermediate",
    question: "What is the difference between concurrency and parallelism?",
    answer:
      "Concurrency: dealing with multiple tasks at once (structure). Tasks may be interleaved on a single core. Parallelism: executing multiple tasks simultaneously (execution). Requires multiple cores/processors. Concurrency is about design; parallelism is about execution.",
  },
  {
    id: "pt-5",
    topic: "processes-threads",
    difficulty: "advanced",
    question: "What is a mutex vs a semaphore?",
    answer:
      "Mutex: binary lock — only one thread can hold it at a time. Used for mutual exclusion. The owner must release it.\nSemaphore: counter-based — allows N threads to access a resource concurrently. Can be released by any thread. Counting semaphore with N=1 acts like a mutex but without ownership.",
  },

  // ─── NETWORKING ───────────────────────────────────────────────
  {
    id: "net-1",
    topic: "networking",
    difficulty: "beginner",
    question: "What happens when you type a URL in the browser?",
    answer:
      "1. DNS lookup (domain → IP address)\n2. TCP connection (3-way handshake)\n3. TLS handshake (if HTTPS)\n4. HTTP request sent\n5. Server processes and returns HTTP response\n6. Browser parses HTML, fetches CSS/JS/images\n7. Browser renders the page",
  },
  {
    id: "net-2",
    topic: "networking",
    difficulty: "intermediate",
    question: "What is the difference between TCP and UDP?",
    answer:
      "TCP: reliable, ordered, connection-oriented. Uses handshake, acknowledgments, retransmission. Good for: web, email, file transfer.\nUDP: unreliable, unordered, connectionless. No handshake, no guarantees. Good for: video streaming, gaming, DNS (fast, tolerates loss).",
  },
  {
    id: "net-3",
    topic: "networking",
    difficulty: "intermediate",
    question: "What are the main HTTP methods and when to use each?",
    answer:
      "GET: retrieve data (idempotent, cacheable)\nPOST: create a resource (not idempotent)\nPUT: replace a resource entirely (idempotent)\nPATCH: partial update (not necessarily idempotent)\nDELETE: remove a resource (idempotent)\nHEAD: like GET but headers only",
  },
  {
    id: "net-4",
    topic: "networking",
    difficulty: "intermediate",
    question: "What is DNS and how does it work?",
    answer:
      "DNS (Domain Name System) translates domain names to IP addresses. Resolution: 1) Check browser cache, 2) Check OS cache, 3) Query recursive DNS resolver, 4) Query root nameserver, 5) Query TLD nameserver (.com), 6) Query authoritative nameserver. Results are cached with TTL.",
  },
  {
    id: "net-5",
    topic: "networking",
    difficulty: "advanced",
    question: "What are the layers of the OSI model?",
    answer:
      "7. Application (HTTP, FTP, DNS)\n6. Presentation (encryption, compression)\n5. Session (connection management)\n4. Transport (TCP, UDP)\n3. Network (IP, routing)\n2. Data Link (Ethernet, MAC addresses)\n1. Physical (cables, signals)\n\nPractical model (TCP/IP) combines layers 5-7 into 'Application'.",
  },

  // ─── TRIES ────────────────────────────────────────────────────
  {
    id: "tri-1",
    topic: "tries",
    difficulty: "intermediate",
    question: "What is a Trie and when would you use one?",
    answer:
      "A Trie (prefix tree) stores strings where each node represents a character. Used for: autocomplete, spell checking, IP routing, word games. Insert/search: O(m) where m is string length. Space-efficient for storing many strings with common prefixes.",
  },
  {
    id: "tri-2",
    topic: "tries",
    difficulty: "intermediate",
    question: "Implement a basic Trie with insert and search.",
    answer: "Each node has children (map of char → node) and an isEnd flag.",
    codeSnippet: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.is_end`,
    language: "python",
  },
  {
    id: "tri-3",
    topic: "tries",
    difficulty: "advanced",
    question: "How would you implement autocomplete using a Trie?",
    answer:
      "1. Navigate to the node matching the prefix. 2. From that node, DFS to find all words (nodes where isEnd = true). 3. Return collected words. Time: O(p + k) where p = prefix length, k = total characters in all matches.",
  },

  // ─── SYSTEM DESIGN ────────────────────────────────────────────
  {
    id: "sd-1",
    topic: "system-design",
    difficulty: "intermediate",
    question: "What is horizontal vs vertical scaling?",
    answer:
      "Vertical scaling (scale up): add more CPU/RAM to existing machine. Simple but limited by hardware.\nHorizontal scaling (scale out): add more machines. More complex (need load balancing, data consistency) but virtually unlimited. Most large systems use horizontal scaling.",
  },
  {
    id: "sd-2",
    topic: "system-design",
    difficulty: "intermediate",
    question: "What is a load balancer?",
    answer:
      "Distributes incoming traffic across multiple servers. Strategies: Round Robin, Least Connections, IP Hash, Weighted. Benefits: higher availability, better performance, easier scaling. Can be L4 (TCP level) or L7 (HTTP level, can route by URL/headers).",
  },
  {
    id: "sd-3",
    topic: "system-design",
    difficulty: "advanced",
    question: "What is the CAP theorem?",
    answer:
      "In a distributed system, you can only guarantee 2 out of 3:\nConsistency: every read gets the latest write\nAvailability: every request gets a response\nPartition tolerance: system works despite network failures\n\nSince network partitions are inevitable, the real choice is C vs A during a partition. CP: refuse requests if not consistent. AP: serve possibly stale data.",
  },
  {
    id: "sd-4",
    topic: "system-design",
    difficulty: "intermediate",
    question: "What is database sharding?",
    answer:
      "Splitting a database into smaller pieces (shards) across multiple servers. Each shard holds a subset of data. Shard key determines which shard holds a record. Benefits: horizontal scaling, better performance. Challenges: cross-shard queries, rebalancing, hotspots.",
  },
  {
    id: "sd-5",
    topic: "system-design",
    difficulty: "advanced",
    question: "What is eventual consistency?",
    answer:
      "A consistency model where updates propagate asynchronously. After a write, reads may temporarily return stale data, but all replicas will eventually converge to the same value. Used by: DynamoDB, Cassandra, DNS. Trade-off: better availability and performance, but temporary inconsistency.",
  },

  // ─── STRING MANIPULATION ──────────────────────────────────────
  {
    id: "sm-1",
    topic: "string-manipulation",
    difficulty: "beginner",
    question: "Why are strings immutable in many languages?",
    answer:
      "Immutability enables: 1) Thread safety — no synchronization needed, 2) String interning/caching — same strings share memory, 3) Hash caching — hash computed once, 4) Security — can't modify after creation. Consequence: string concatenation in a loop creates many objects — use StringBuilder/join instead.",
  },
  {
    id: "sm-2",
    topic: "string-manipulation",
    difficulty: "intermediate",
    question: "How do you check if two strings are anagrams?",
    answer:
      "Method 1: Sort both strings, compare — O(n log n). Method 2: Count character frequencies — O(n). Method 2 is more efficient.",
    codeSnippet: `from collections import Counter

def is_anagram(s, t):
    return Counter(s) == Counter(t)

# Or manually:
def is_anagram_manual(s, t):
    if len(s) != len(t):
        return False
    count = {}
    for c in s:
        count[c] = count.get(c, 0) + 1
    for c in t:
        if count.get(c, 0) == 0:
            return False
        count[c] -= 1
    return True`,
    language: "python",
  },
  {
    id: "sm-3",
    topic: "string-manipulation",
    difficulty: "intermediate",
    question: "What is the KMP (Knuth-Morris-Pratt) algorithm?",
    answer:
      "Pattern matching algorithm that avoids re-checking characters by using a failure function (prefix table). When a mismatch occurs, the table tells you how far ahead you can skip. Time: O(n + m) vs O(nm) for naive approach.",
  },
  {
    id: "sm-4",
    topic: "string-manipulation",
    difficulty: "intermediate",
    question: "How do you find the longest palindromic substring?",
    answer:
      "Expand around center: for each character (and between characters), expand outward while characters match. Time: O(n²), Space: O(1). Manacher's algorithm achieves O(n).",
    codeSnippet: `def longest_palindrome(s):
    best = ""
    def expand(l, r):
        nonlocal best
        while l >= 0 and r < len(s) and s[l] == s[r]:
            if r - l + 1 > len(best):
                best = s[l:r + 1]
            l -= 1; r += 1
    for i in range(len(s)):
        expand(i, i)      # odd length
        expand(i, i + 1)  # even length
    return best`,
    language: "python",
  },

  // ═══════════════════════════════════════════════════════════════
  // ADDITIONAL CARDS — EXPANDING EVERY TOPIC
  // ═══════════════════════════════════════════════════════════════

  // ─── MORE BIG-O ───────────────────────────────────────────────
  {
    id: "bo-11",
    topic: "big-o",
    difficulty: "intermediate",
    question: "What is the space complexity of a recursive function with depth n?",
    answer:
      "O(n) — each recursive call adds a frame to the call stack. The maximum depth determines the space used. Tail-call optimized languages can reduce this to O(1).",
  },
  {
    id: "bo-12",
    topic: "big-o",
    difficulty: "advanced",
    question: "What is the time complexity of this function?",
    answer:
      "O(n) — despite the nested while loop, each element is pushed and popped from the stack at most once total across all iterations of the outer loop.",
    codeSnippet: `def process(arr):
    stack = []
    for i in range(len(arr)):
        while stack and stack[-1] < arr[i]:
            stack.pop()
        stack.append(arr[i])`,
    language: "python",
  },
  {
    id: "bo-13",
    topic: "big-o",
    difficulty: "beginner",
    question: "What does O(log n) mean intuitively?",
    answer:
      "The input is halved (or divided by a constant) at each step. For n = 1,000,000, log₂(n) ≈ 20. Very efficient! Examples: binary search, balanced BST lookup, binary exponentiation.",
  },
  {
    id: "bo-14",
    topic: "big-o",
    difficulty: "intermediate",
    question: "What is the time complexity of this code?",
    answer:
      "O(n log n) — the outer loop runs n times. The inner loop runs log(n) times since j doubles each iteration (1, 2, 4, 8, ...).",
    codeSnippet: `for i in range(n):
    j = 1
    while j < n:
        pass  # O(1) work
        j *= 2`,
    language: "python",
  },
  {
    id: "bo-15",
    topic: "big-o",
    difficulty: "advanced",
    question: "What is the Master Theorem used for?",
    answer:
      "The Master Theorem solves recurrences of the form T(n) = aT(n/b) + O(nᵈ).\n• If d < log_b(a): T(n) = O(n^(log_b(a)))\n• If d = log_b(a): T(n) = O(nᵈ log n)\n• If d > log_b(a): T(n) = O(nᵈ)\nExample: Merge Sort T(n) = 2T(n/2) + O(n) → a=2, b=2, d=1 → d = log₂2 → O(n log n)",
  },
  {
    id: "bo-16",
    topic: "big-o",
    difficulty: "intermediate",
    question: "What is the difference between Big-O, Big-Ω, and Big-Θ?",
    answer:
      "Big-O: upper bound (worst case) — grows no faster than\nBig-Ω (Omega): lower bound (best case) — grows no slower than\nBig-Θ (Theta): tight bound — grows at exactly this rate\n\nIn practice, people often use Big-O loosely to mean Big-Θ.",
  },

  // ─── MORE ARRAYS ──────────────────────────────────────────────
  {
    id: "arr-9",
    topic: "arrays",
    difficulty: "intermediate",
    question: "How do you rotate an array by k positions to the right?",
    answer:
      "Reverse the whole array, then reverse the first k elements, then reverse the rest. O(n) time, O(1) space.",
    codeSnippet: `def rotate(nums, k):
    k = k % len(nums)
    def reverse(l, r):
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l += 1; r -= 1
    reverse(0, len(nums) - 1)
    reverse(0, k - 1)
    reverse(k, len(nums) - 1)`,
    language: "python",
  },
  {
    id: "arr-10",
    topic: "arrays",
    difficulty: "beginner",
    question: "What is the difference between push/pop and shift/unshift?",
    answer:
      "push/pop: add/remove from the END of the array — O(1)\nshift/unshift: add/remove from the BEGINNING — O(n) because all elements must be shifted.\nAlways prefer push/pop when order doesn't matter.",
  },
  {
    id: "arr-11",
    topic: "arrays",
    difficulty: "intermediate",
    question: "How do you merge two sorted arrays into one sorted array?",
    answer:
      "Use two pointers, one per array. Compare elements, push the smaller one. After one array is exhausted, append the remainder of the other. O(n + m) time.",
    codeSnippet: `def merge_sorted(a, b):
    result = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            result.append(a[i]); i += 1
        else:
            result.append(b[j]); j += 1
    result.extend(a[i:])
    result.extend(b[j:])
    return result`,
    language: "python",
  },
  {
    id: "arr-12",
    topic: "arrays",
    difficulty: "advanced",
    question: "How do you find the majority element (appears more than n/2 times)?",
    answer:
      "Boyer-Moore Voting Algorithm: maintain a candidate and a count. For each element, if count is 0, set new candidate. If element equals candidate, increment count; else decrement. The survivor is the majority element. O(n) time, O(1) space.",
    codeSnippet: `def majority_element(nums):
    candidate, count = nums[0], 0
    for num in nums:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1
    return candidate`,
    language: "python",
  },
  {
    id: "arr-13",
    topic: "arrays",
    difficulty: "intermediate",
    question: "How do you remove duplicates from a sorted array in-place?",
    answer:
      "Use two pointers: a slow pointer for the write position and a fast pointer to scan. Only write when you see a new value. O(n) time, O(1) space.",
    codeSnippet: `def remove_duplicates(nums):
    if not nums:
        return 0
    slow = 0
    for fast in range(1, len(nums)):
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]
    return slow + 1`,
    language: "python",
  },
  {
    id: "arr-14",
    topic: "arrays",
    difficulty: "advanced",
    question: "What is the Dutch National Flag problem?",
    answer:
      "Sort an array of 0s, 1s, and 2s in one pass using three pointers (low, mid, high). Swap elements to their correct partition. O(n) time, O(1) space. Used in QuickSort 3-way partitioning.",
    codeSnippet: `def sort_colors(nums):
    low = mid = 0
    high = len(nums) - 1
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1; mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1`,
    language: "python",
  },
  {
    id: "arr-15",
    topic: "arrays",
    difficulty: "intermediate",
    question: "How do you find the product of all elements except the current one without division?",
    answer:
      "Use two passes: first build prefix products (left to right), then multiply by suffix products (right to left). O(n) time, O(1) extra space (output array doesn't count).",
    codeSnippet: `def product_except_self(nums):
    n = len(nums)
    result = [1] * n
    prefix = 1
    for i in range(n):
        result[i] = prefix
        prefix *= nums[i]
    suffix = 1
    for i in range(n - 1, -1, -1):
        result[i] *= suffix
        suffix *= nums[i]
    return result`,
    language: "python",
  },

  // ─── MORE LINKED LISTS ────────────────────────────────────────
  {
    id: "ll-8",
    topic: "linked-lists",
    difficulty: "intermediate",
    question: "How do you remove the nth node from the end of a linked list in one pass?",
    answer:
      "Use two pointers: advance the fast pointer n steps ahead, then move both at the same speed. When fast reaches the end, slow is at the node before the one to remove.",
    codeSnippet: `def remove_nth_from_end(head, n):
    dummy = ListNode(0, head)
    fast = slow = dummy
    for _ in range(n + 1):
        fast = fast.next
    while fast:
        fast = fast.next
        slow = slow.next
    slow.next = slow.next.next
    return dummy.next`,
    language: "python",
  },
  {
    id: "ll-9",
    topic: "linked-lists",
    difficulty: "advanced",
    question: "How do you find the start of a cycle in a linked list?",
    answer:
      "After detecting the cycle with Floyd's algorithm (slow/fast meet), reset one pointer to head. Move both one step at a time — they'll meet at the cycle start. Proof: if the cycle starts at distance 'a' from head and the meeting point is 'b' into the cycle, then a = c - b where c is the cycle length.",
    codeSnippet: `def detect_cycle_start(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            slow = head
            while slow != fast:
                slow = slow.next
                fast = fast.next
            return slow  # cycle start
    return None`,
    language: "python",
  },
  {
    id: "ll-10",
    topic: "linked-lists",
    difficulty: "intermediate",
    question: "How do you check if a linked list is a palindrome?",
    answer:
      "1. Find the middle using slow/fast pointers. 2. Reverse the second half. 3. Compare both halves node by node. 4. (Optional) restore the list. O(n) time, O(1) space.",
  },
  {
    id: "ll-11",
    topic: "linked-lists",
    difficulty: "beginner",
    question: "What are the time complexities for linked list operations?",
    answer:
      "Access by index: O(n)\nSearch: O(n)\nInsert at head: O(1)\nInsert at tail: O(1) with tail pointer, O(n) without\nInsert at position: O(n) to find + O(1) to insert\nDelete: O(n) to find + O(1) to remove",
  },
  {
    id: "ll-12",
    topic: "linked-lists",
    difficulty: "advanced",
    question: "How do you add two numbers represented as linked lists?",
    answer:
      "Traverse both lists simultaneously, adding corresponding digits plus carry. Create new nodes for the result. Don't forget the final carry!",
    codeSnippet: `def add_two_numbers(l1, l2):
    dummy = ListNode(0)
    current, carry = dummy, 0
    while l1 or l2 or carry:
        val = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry
        carry = val // 10
        current.next = ListNode(val % 10)
        current = current.next
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
    return dummy.next`,
    language: "python",
  },

  // ─── MORE STACKS ──────────────────────────────────────────────
  {
    id: "st-6",
    topic: "stacks",
    difficulty: "intermediate",
    question: "How do you evaluate a Reverse Polish Notation (postfix) expression?",
    answer:
      "Use a stack. For numbers, push onto stack. For operators, pop two operands, apply operator, push result. The final value on the stack is the answer.",
    codeSnippet: `def eval_rpn(tokens):
    stack = []
    for t in tokens:
        if t in "+-*/":
            b, a = stack.pop(), stack.pop()
            if t == '+': stack.append(a + b)
            elif t == '-': stack.append(a - b)
            elif t == '*': stack.append(a * b)
            else: stack.append(int(a / b))
        else:
            stack.append(int(t))
    return stack[0]`,
    language: "python",
  },
  {
    id: "st-7",
    topic: "stacks",
    difficulty: "advanced",
    question: "How do you find the largest rectangle in a histogram?",
    answer:
      "Use a monotonic stack. For each bar, pop taller bars from the stack and calculate the area they can form. Push current bar index. O(n) time.",
    codeSnippet: `def largest_rectangle(heights):
    stack = []
    max_area = 0
    for i in range(len(heights) + 1):
        h = 0 if i == len(heights) else heights[i]
        while stack and heights[stack[-1]] > h:
            height = heights[stack.pop()]
            width = i - stack[-1] - 1 if stack else i
            max_area = max(max_area, height * width)
        stack.append(i)
    return max_area`,
    language: "python",
  },
  {
    id: "st-8",
    topic: "stacks",
    difficulty: "beginner",
    question: "How can you implement a stack using an array?",
    answer:
      "Use the end of the array as the top. push() appends, pop() removes the last element, peek() reads the last element. All O(1). In JavaScript, arrays already work this way.",
    codeSnippet: `class Stack:
    def __init__(self):
        self.items = []
    def push(self, val):
        self.items.append(val)
    def pop(self):
        return self.items.pop()
    def peek(self):
        return self.items[-1]
    def is_empty(self):
        return len(self.items) == 0
    @property
    def size(self):
        return len(self.items)`,
    language: "python",
  },
  {
    id: "st-9",
    topic: "stacks",
    difficulty: "intermediate",
    question: "How do you convert infix to postfix (Shunting Yard Algorithm)?",
    answer:
      "Use an operator stack. For numbers: output directly. For operators: pop higher-precedence operators to output, then push. For '(': push. For ')': pop until '('. At end, pop all remaining operators. Invented by Dijkstra.",
  },
  {
    id: "st-10",
    topic: "stacks",
    difficulty: "intermediate",
    question: "How do you implement a browser back/forward using stacks?",
    answer:
      "Use two stacks: backStack and forwardStack. Visit new page: push current to backStack, clear forwardStack. Go back: push current to forwardStack, pop from backStack. Go forward: push current to backStack, pop from forwardStack.",
  },

  // ─── MORE QUEUES ──────────────────────────────────────────────
  {
    id: "qu-6",
    topic: "queues",
    difficulty: "advanced",
    question: "What is a Sliding Window Maximum and how do you solve it with a deque?",
    answer:
      "Find the max in each window of size k. Use a deque storing indices of useful elements (candidates for maximum). Remove from front if out of window, remove from back if smaller than current element. O(n) total.",
    codeSnippet: `from collections import deque

def max_sliding_window(nums, k):
    dq = deque()  # indices
    result = []
    for i in range(len(nums)):
        if dq and dq[0] <= i - k:
            dq.popleft()
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result`,
    language: "python",
  },
  {
    id: "qu-7",
    topic: "queues",
    difficulty: "intermediate",
    question: "Where are queues used in real systems?",
    answer:
      "1. BFS graph traversal\n2. Task scheduling (CPU, print queue)\n3. Message queues (RabbitMQ, Kafka, SQS)\n4. Rate limiting / throttling\n5. Breadth-first web crawlers\n6. Keyboard input buffer\n7. Request handling in web servers",
  },
  {
    id: "qu-8",
    topic: "queues",
    difficulty: "intermediate",
    question: "How does a circular buffer (ring buffer) work?",
    answer:
      "Fixed-size array with head and tail pointers. Enqueue: write at tail, advance tail (mod size). Dequeue: read at head, advance head (mod size). Full when (tail + 1) % size === head. Empty when head === tail.",
    codeSnippet: `class CircularQueue:
    def __init__(self, capacity):
        self.buf = [None] * capacity
        self.capacity = capacity
        self.head = self.tail = self.count = 0

    def enqueue(self, val):
        if self.count == self.capacity:
            return False
        self.buf[self.tail] = val
        self.tail = (self.tail + 1) % self.capacity
        self.count += 1
        return True

    def dequeue(self):
        if self.count == 0:
            return None
        val = self.buf[self.head]
        self.head = (self.head + 1) % self.capacity
        self.count -= 1
        return val`,
    language: "python",
  },
  {
    id: "qu-9",
    topic: "queues",
    difficulty: "beginner",
    question: "What is the difference between a queue and a stack?",
    answer:
      "Queue: FIFO (First In, First Out) — like a line at a store. The first person in line is served first.\nStack: LIFO (Last In, First Out) — like a stack of plates. The last plate placed on top is the first removed.",
  },
  {
    id: "qu-10",
    topic: "queues",
    difficulty: "advanced",
    question: "How does a priority queue work internally with a binary heap?",
    answer:
      "Stored as an array where for index i: parent = (i-1)/2, left child = 2i+1, right child = 2i+2. Insert: add at end, bubble up (swap with parent while smaller). Extract min: swap root with last, remove last, bubble down (swap with smallest child). Both O(log n).",
  },

  // ─── MORE HASH TABLES ────────────────────────────────────────
  {
    id: "ht-7",
    topic: "hash-tables",
    difficulty: "intermediate",
    question: "How do you find the first non-repeating character in a string?",
    answer:
      "Use a hash map to count frequencies in one pass, then iterate again to find the first character with count 1. O(n) time, O(1) space (bounded by alphabet size).",
    codeSnippet: `from collections import Counter

def first_unique(s):
    count = Counter(s)
    for i, c in enumerate(s):
        if count[c] == 1:
            return i
    return -1`,
    language: "python",
  },
  {
    id: "ht-8",
    topic: "hash-tables",
    difficulty: "intermediate",
    question: "How do you group anagrams together?",
    answer:
      "Use sorted string as the hash key. All anagrams share the same sorted form. Group words by their sorted key. O(n * k log k) where k is max word length.",
    codeSnippet: `from collections import defaultdict

def group_anagrams(strs):
    groups = defaultdict(list)
    for s in strs:
        key = ''.join(sorted(s))
        groups[key].append(s)
    return list(groups.values())`,
    language: "python",
  },
  {
    id: "ht-9",
    topic: "hash-tables",
    difficulty: "advanced",
    question: "What is consistent hashing and where is it used?",
    answer:
      "Consistent hashing maps both keys and servers onto a ring (hash space). A key is stored on the next server clockwise. When a server is added/removed, only 1/n keys need to be remapped (vs all keys with modular hashing). Used in: distributed caches (Memcached), CDNs, database sharding.",
  },
  {
    id: "ht-10",
    topic: "hash-tables",
    difficulty: "beginner",
    question: "What is the difference between Map and Object in JavaScript?",
    answer:
      "Map: any type as key, maintains insertion order, has .size, better for frequent add/delete. Object: string/symbol keys only, has prototype chain, better for fixed structures. Use Map for dynamic key-value collections; Object for structured data.",
  },
  {
    id: "ht-11",
    topic: "hash-tables",
    difficulty: "intermediate",
    question: "How do you implement a hash table with linear probing?",
    answer:
      "On collision, check the next slot sequentially until an empty one is found. On lookup, probe from the hash index until finding the key or an empty slot. Deletion requires marking slots as 'deleted' (lazy deletion) to avoid breaking probe chains.",
  },
  {
    id: "ht-12",
    topic: "hash-tables",
    difficulty: "advanced",
    question: "What is a Bloom Filter?",
    answer:
      "A space-efficient probabilistic data structure that tells you if an element is 'possibly in the set' or 'definitely not'. Uses k hash functions and a bit array. False positives are possible, false negatives are not. Used in: spell checkers, network routers, database query optimization.",
  },

  // ─── MORE BINARY SEARCH ───────────────────────────────────────
  {
    id: "bs-6",
    topic: "binary-search",
    difficulty: "intermediate",
    question: "How do you find the peak element in an array?",
    answer:
      "A peak is greater than its neighbors. Use binary search: if mid element is less than the right neighbor, a peak exists on the right; otherwise on the left. O(log n).",
    codeSnippet: `def find_peak_element(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = left + (right - left) // 2
        if nums[mid] < nums[mid + 1]:
            left = mid + 1
        else:
            right = mid
    return left`,
    language: "python",
  },
  {
    id: "bs-7",
    topic: "binary-search",
    difficulty: "advanced",
    question: "How do you find the minimum in a rotated sorted array?",
    answer:
      "Binary search: if mid > right, the minimum is in the right half; otherwise it's in the left half (including mid). O(log n).",
    codeSnippet: `def find_min(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = left + (right - left) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    return nums[left]`,
    language: "python",
  },
  {
    id: "bs-8",
    topic: "binary-search",
    difficulty: "intermediate",
    question: "How do you find the square root of a number using binary search?",
    answer:
      "Binary search from 0 to n. For mid value, check if mid*mid <= n and (mid+1)*(mid+1) > n. O(log n).",
    codeSnippet: `def my_sqrt(x):
    left, right = 0, x
    while left <= right:
        mid = left + (right - left) // 2
        if mid * mid <= x and (mid + 1) * (mid + 1) > x:
            return mid
        if mid * mid > x:
            right = mid - 1
        else:
            left = mid + 1
    return 0`,
    language: "python",
  },
  {
    id: "bs-9",
    topic: "binary-search",
    difficulty: "advanced",
    question: "What is 'binary search on the answer' pattern?",
    answer:
      "Instead of searching in a data structure, binary search on the possible answer space. For each candidate answer, check if it's feasible using a verification function. Used for: minimum time to complete tasks, capacity problems, splitting arrays. Very powerful pattern!",
  },
  {
    id: "bs-10",
    topic: "binary-search",
    difficulty: "intermediate",
    question: "How do you find the insertion position for a target (lower bound)?",
    answer:
      "Find the leftmost position where target could be inserted to keep the array sorted. This is equivalent to finding the first element >= target.",
    codeSnippet: `def lower_bound(arr, target):
    left, right = 0, len(arr)
    while left < right:
        mid = left + (right - left) // 2
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left`,
    language: "python",
  },

  // ─── MORE BITWISE ─────────────────────────────────────────────
  {
    id: "bw-6",
    topic: "bitwise",
    difficulty: "beginner",
    question: "How do you check if the nth bit is set?",
    answer:
      "Use AND with a mask: (num & (1 << n)) !== 0. The mask 1 << n has only the nth bit set. AND gives non-zero only if that bit is also set in num.",
    codeSnippet: `def is_nth_bit_set(num, n):
    return (num & (1 << n)) != 0
# is_nth_bit_set(5, 0) → True  (5 = 101, bit 0 is set)
# is_nth_bit_set(5, 1) → False (5 = 101, bit 1 is not set)`,
    language: "python",
  },
  {
    id: "bw-7",
    topic: "bitwise",
    difficulty: "intermediate",
    question: "How do you set, clear, and toggle a specific bit?",
    answer:
      "Set bit n: num | (1 << n)\nClear bit n: num & ~(1 << n)\nToggle bit n: num ^ (1 << n)\n\nThese are fundamental bit manipulation primitives used everywhere.",
  },
  {
    id: "bw-8",
    topic: "bitwise",
    difficulty: "advanced",
    question: "How can you represent a set of elements using bits?",
    answer:
      "Use a bitmask where bit i represents whether element i is in the set. Union: a | b. Intersection: a & b. Difference: a & ~b. Check membership: a & (1 << i). Very efficient for small sets (< 32 or 64 elements). Used in DP with bitmask.",
    codeSnippet: `# Set {0, 2, 3} = 0b1101 = 13
s = (1 << 0) | (1 << 2) | (1 << 3)  # 13
has2 = (s & (1 << 2)) != 0  # True
added1 = s | (1 << 1)  # {0,1,2,3} = 15
removed3 = s & ~(1 << 3)  # {0,2} = 5`,
    language: "python",
  },
  {
    id: "bw-9",
    topic: "bitwise",
    difficulty: "intermediate",
    question: "How do you find the only number that appears once when all others appear three times?",
    answer:
      "Count the number of set bits at each position across all numbers. Mod each count by 3 — the remainders give the unique number's bits. O(32n) = O(n) time, O(1) space.",
    codeSnippet: `def single_number_iii(nums):
    result = 0
    for bit in range(32):
        total = sum((num >> bit) & 1 for num in nums)
        if total % 3 != 0:
            result |= (1 << bit)
    return result`,
    language: "python",
  },

  // ─── MORE TREES ───────────────────────────────────────────────
  {
    id: "tr-9",
    topic: "trees",
    difficulty: "intermediate",
    question: "What is the Lowest Common Ancestor (LCA) of two nodes?",
    answer:
      "The LCA is the deepest node that is an ancestor of both nodes. For a BST: if both values < node, go left; if both > node, go right; otherwise current node is the LCA. For a general binary tree: use recursion — if current node matches either target, return it. If left and right subtrees each return a non-null result, current node is the LCA.",
    codeSnippet: `def lowest_common_ancestor(root, p, q):
    if not root or root == p or root == q:
        return root
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    if left and right:
        return root
    return left or right`,
    language: "python",
  },
  {
    id: "tr-10",
    topic: "trees",
    difficulty: "beginner",
    question: "What is a complete binary tree vs a full binary tree?",
    answer:
      "Complete binary tree: all levels fully filled except possibly the last, which is filled left to right. Used for heaps.\nFull binary tree: every node has 0 or 2 children (never 1).\nPerfect binary tree: both complete and full — all leaf nodes at same level.",
  },
  {
    id: "tr-11",
    topic: "trees",
    difficulty: "intermediate",
    question: "How do you serialize and deserialize a binary tree?",
    answer:
      "Serialize: preorder traversal, writing values and 'null' markers. Deserialize: reconstruct by reading values in the same order, using 'null' to indicate missing children.",
    codeSnippet: `def serialize(root):
    if not root:
        return "null"
    return f"{root.val},{serialize(root.left)},{serialize(root.right)}"

def deserialize(data):
    vals = iter(data.split(","))
    def build():
        val = next(vals)
        if val == "null":
            return None
        node = TreeNode(int(val))
        node.left = build()
        node.right = build()
        return node
    return build()`,
    language: "python",
  },
  {
    id: "tr-12",
    topic: "trees",
    difficulty: "advanced",
    question: "What is a Red-Black Tree?",
    answer:
      "A self-balancing BST with these properties: 1) Every node is red or black, 2) Root is black, 3) Leaves (null) are black, 4) Red nodes have black children, 5) Every path from root to leaf has the same number of black nodes. Guarantees O(log n) operations. Used in: Java TreeMap, C++ std::map, Linux kernel.",
  },
  {
    id: "tr-13",
    topic: "trees",
    difficulty: "intermediate",
    question: "How do you check if two trees are identical?",
    answer:
      "Recursively compare: both null → true. One null → false. Values differ → false. Otherwise, check left subtrees match AND right subtrees match. O(n) time.",
    codeSnippet: `def is_same_tree(p, q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    return (p.val == q.val
        and is_same_tree(p.left, q.left)
        and is_same_tree(p.right, q.right))`,
    language: "python",
  },
  {
    id: "tr-14",
    topic: "trees",
    difficulty: "intermediate",
    question: "What is the diameter of a binary tree?",
    answer:
      "The longest path between any two nodes (may not pass through root). At each node, the diameter through it = height(left) + height(right). Track the global maximum during height computation. O(n).",
    codeSnippet: `def diameter_of_binary_tree(root):
    max_diameter = 0
    def height(node):
        nonlocal max_diameter
        if not node:
            return 0
        l = height(node.left)
        r = height(node.right)
        max_diameter = max(max_diameter, l + r)
        return 1 + max(l, r)
    height(root)
    return max_diameter`,
    language: "python",
  },
  {
    id: "tr-15",
    topic: "trees",
    difficulty: "advanced",
    question: "What is a Segment Tree and when is it used?",
    answer:
      "A tree for efficient range queries (sum, min, max) and point/range updates on an array. Each node stores the aggregate for a range. Build: O(n), Query: O(log n), Update: O(log n). Used in competitive programming for range query problems.",
  },

  // ─── MORE SORTING ─────────────────────────────────────────────
  {
    id: "so-7",
    topic: "sorting",
    difficulty: "intermediate",
    question: "How does Heap Sort work?",
    answer:
      "1. Build a max-heap from the array — O(n). 2. Repeatedly extract the max (swap with last element, reduce heap size, heapify down) — O(n log n). In-place, not stable. Always O(n log n) regardless of input.",
  },
  {
    id: "so-8",
    topic: "sorting",
    difficulty: "intermediate",
    question: "What is Counting Sort and when can you use it?",
    answer:
      "Non-comparison sort. Count occurrences of each value, then reconstruct the array. O(n + k) where k is the range of values. Only works for integers/discrete values with a bounded range. Stable when implemented correctly.",
    codeSnippet: `def counting_sort(arr, max_val):
    count = [0] * (max_val + 1)
    for x in arr:
        count[x] += 1
    result = []
    for i in range(max_val + 1):
        result.extend([i] * count[i])
    return result`,
    language: "python",
  },
  {
    id: "so-9",
    topic: "sorting",
    difficulty: "advanced",
    question: "How does Radix Sort work?",
    answer:
      "Sort by each digit position, from least significant to most significant, using a stable sort (like counting sort) as the subroutine. O(d × (n + k)) where d = number of digits, k = base. Not comparison-based, can beat O(n log n).",
  },
  {
    id: "so-10",
    topic: "sorting",
    difficulty: "intermediate",
    question: "How does Selection Sort work?",
    answer:
      "Find the minimum element in the unsorted portion, swap it with the first unsorted element. Repeat. Always O(n²), not stable. Simple to implement but inefficient.",
    codeSnippet: `def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]`,
    language: "python",
  },
  {
    id: "so-11",
    topic: "sorting",
    difficulty: "intermediate",
    question: "How does Insertion Sort work?",
    answer:
      "Build the sorted portion one element at a time. Take the next element and insert it into the correct position in the sorted portion by shifting larger elements right. Best: O(n) for nearly sorted. Worst: O(n²). Stable.",
    codeSnippet: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key`,
    language: "python",
  },
  {
    id: "so-12",
    topic: "sorting",
    difficulty: "advanced",
    question: "What is the difference between QuickSort's Lomuto and Hoare partition schemes?",
    answer:
      "Lomuto: single pointer, pivot at end, simpler code, ~3x more swaps. Hoare: two pointers from both ends, fewer swaps, more efficient in practice but slightly trickier. Both give O(n log n) average, O(n²) worst. Hoare is preferred for performance.",
  },
  {
    id: "so-13",
    topic: "sorting",
    difficulty: "intermediate",
    question: "How do you find the Kth largest element efficiently?",
    answer:
      "QuickSelect: partition like quicksort, but only recurse into the partition containing the kth element. Average: O(n), Worst: O(n²). Alternative: min-heap of size k — O(n log k).",
    codeSnippet: `def find_kth_largest(nums, k):
    target = len(nums) - k
    def quick_select(lo, hi):
        pivot = nums[hi]
        i = lo
        for j in range(lo, hi):
            if nums[j] < pivot:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
        nums[i], nums[hi] = nums[hi], nums[i]
        if i == target:
            return nums[i]
        return quick_select(i + 1, hi) if i < target else quick_select(lo, i - 1)
    return quick_select(0, len(nums) - 1)`,
    language: "python",
  },

  // ─── MORE GRAPHS ──────────────────────────────────────────────
  {
    id: "gr-8",
    topic: "graphs",
    difficulty: "intermediate",
    question: "Implement DFS on a graph (iterative).",
    answer:
      "Use a stack instead of recursion. Similar to BFS but with a stack (LIFO) instead of a queue (FIFO).",
    codeSnippet: `def dfs(graph, start):
    visited = set()
    stack = [start]
    order = []
    while stack:
        node = stack.pop()
        if node in visited:
            continue
        visited.add(node)
        order.append(node)
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                stack.append(neighbor)
    return order`,
    language: "python",
  },
  {
    id: "gr-9",
    topic: "graphs",
    difficulty: "intermediate",
    question: "How do you find the number of connected components in an undirected graph?",
    answer:
      "Run BFS or DFS from each unvisited node. Each time you start a new traversal, that's a new connected component. Alternative: use Union-Find (disjoint sets). O(V + E).",
  },
  {
    id: "gr-10",
    topic: "graphs",
    difficulty: "advanced",
    question: "What is Kruskal's algorithm for Minimum Spanning Tree?",
    answer:
      "1. Sort all edges by weight. 2. For each edge (lightest first), add it to the MST if it doesn't create a cycle (check with Union-Find). 3. Stop when V-1 edges are added. Time: O(E log E).",
  },
  {
    id: "gr-11",
    topic: "graphs",
    difficulty: "advanced",
    question: "What is Prim's algorithm for Minimum Spanning Tree?",
    answer:
      "Start from any vertex. Greedily add the lightest edge connecting the MST to a non-MST vertex. Use a priority queue for efficiency. Time: O(E log V) with binary heap. Similar to Dijkstra's but tracks edge weight, not total distance.",
  },
  {
    id: "gr-12",
    topic: "graphs",
    difficulty: "intermediate",
    question: "How do you determine if a graph is bipartite?",
    answer:
      "Use BFS/DFS and try to 2-color the graph. Start with one color, assign the opposite to all neighbors. If a neighbor already has the same color as the current node, the graph is not bipartite. O(V + E).",
    codeSnippet: `from collections import deque

def is_bipartite(graph):
    color = [-1] * len(graph)
    for i in range(len(graph)):
        if color[i] != -1:
            continue
        queue = deque([i])
        color[i] = 0
        while queue:
            node = queue.popleft()
            for nei in graph[node]:
                if color[nei] == -1:
                    color[nei] = 1 - color[node]
                    queue.append(nei)
                elif color[nei] == color[node]:
                    return False
    return True`,
    language: "python",
  },
  {
    id: "gr-13",
    topic: "graphs",
    difficulty: "intermediate",
    question: "What is Union-Find (Disjoint Set Union)?",
    answer:
      "A data structure that tracks elements partitioned into disjoint sets. Two operations: find(x) — return the root of x's set. union(x, y) — merge two sets. With path compression + union by rank: nearly O(1) amortized per operation.",
    codeSnippet: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return
        if self.rank[px] < self.rank[py]:
            self.parent[px] = py
        elif self.rank[px] > self.rank[py]:
            self.parent[py] = px
        else:
            self.parent[py] = px
            self.rank[px] += 1`,
    language: "python",
  },
  {
    id: "gr-14",
    topic: "graphs",
    difficulty: "advanced",
    question: "How do you find shortest paths in a graph with negative weights?",
    answer:
      "Use Bellman-Ford. Relax all edges V-1 times. If any edge can still be relaxed in the Vth pass, a negative cycle exists. Time: O(VE). Dijkstra's fails with negative weights because it assumes a processed node's distance is final.",
  },

  // ─── MORE RECURSION ───────────────────────────────────────────
  {
    id: "rc-6",
    topic: "recursion",
    difficulty: "intermediate",
    question: "How do you generate all permutations of an array?",
    answer:
      "Backtracking: at each position, try each unused element. Swap it into the current position, recurse, then swap back. n! total permutations.",
    codeSnippet: `def permute(nums):
    result = []
    def backtrack(start):
        if start == len(nums):
            result.append(nums[:])
            return
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]
    backtrack(0)
    return result`,
    language: "python",
  },
  {
    id: "rc-7",
    topic: "recursion",
    difficulty: "beginner",
    question: "What happens if you forget the base case in a recursive function?",
    answer:
      "The function calls itself infinitely until the call stack overflows, causing a Stack Overflow error. Every recursive function MUST have at least one base case that returns without making another recursive call.",
  },
  {
    id: "rc-8",
    topic: "recursion",
    difficulty: "intermediate",
    question: "How do you solve the Tower of Hanoi recursively?",
    answer:
      "Move n-1 disks from source to auxiliary. Move the largest disk from source to target. Move n-1 disks from auxiliary to target. Total moves: 2ⁿ - 1.",
    codeSnippet: `def hanoi(n, src, dst, aux):
    if n == 0:
        return
    hanoi(n - 1, src, aux, dst)
    print(f"Move disk {n} from {src} to {dst}")
    hanoi(n - 1, aux, dst, src)
# hanoi(3, 'A', 'C', 'B') → 7 moves`,
    language: "python",
  },
  {
    id: "rc-9",
    topic: "recursion",
    difficulty: "advanced",
    question: "How do you solve N-Queens using backtracking?",
    answer:
      "Place queens row by row. For each row, try each column. Check if the position is safe (no queen in same column, or diagonals). If safe, place and recurse to next row. If stuck, backtrack.",
    codeSnippet: `def solve_n_queens(n):
    result = []
    cols, diag1, diag2 = set(), set(), set()
    board = [['.' ] * n for _ in range(n)]

    def backtrack(row):
        if row == n:
            result.append([''.join(r) for r in board])
            return
        for col in range(n):
            if col in cols or row - col in diag1 or row + col in diag2:
                continue
            board[row][col] = 'Q'
            cols.add(col); diag1.add(row - col); diag2.add(row + col)
            backtrack(row + 1)
            board[row][col] = '.'
            cols.discard(col); diag1.discard(row - col); diag2.discard(row + col)
    backtrack(0)
    return result`,
    language: "python",
  },
  {
    id: "rc-10",
    topic: "recursion",
    difficulty: "intermediate",
    question: "How do you recursively compute the power of a number efficiently?",
    answer:
      "Binary exponentiation (fast power): x^n = (x^(n/2))^2 if n even, x * x^(n-1) if n odd. O(log n) instead of O(n).",
    codeSnippet: `def power(x, n):
    if n == 0:
        return 1
    if n < 0:
        return 1 / power(x, -n)
    if n % 2 == 0:
        half = power(x, n // 2)
        return half * half
    return x * power(x, n - 1)`,
    language: "python",
  },

  // ─── MORE DYNAMIC PROGRAMMING ─────────────────────────────────
  {
    id: "dp-7",
    topic: "dynamic-programming",
    difficulty: "intermediate",
    question: "How do you solve the Coin Change problem?",
    answer:
      "dp[amount] = min coins to make that amount. For each coin, dp[i] = min(dp[i], dp[i - coin] + 1). Base: dp[0] = 0. Time: O(amount × coins).",
    codeSnippet: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`,
    language: "python",
  },
  {
    id: "dp-8",
    topic: "dynamic-programming",
    difficulty: "intermediate",
    question: "What is the Longest Increasing Subsequence (LIS) problem?",
    answer:
      "Find the length of the longest subsequence where elements are strictly increasing. O(n²) DP: for each element, check all previous elements. O(n log n): maintain a tails array and use binary search.",
    codeSnippet: `from bisect import bisect_left

def length_of_lis(nums):
    tails = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(tails)`,
    language: "python",
  },
  {
    id: "dp-9",
    topic: "dynamic-programming",
    difficulty: "advanced",
    question: "What is the Edit Distance (Levenshtein Distance) problem?",
    answer:
      "Minimum operations (insert, delete, replace) to transform one string into another. dp[i][j] = edit distance of first i chars of s1 and first j chars of s2. If chars match: dp[i-1][j-1]. Else: 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).",
    codeSnippet: `def edit_distance(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]
                )
    return dp[m][n]`,
    language: "python",
  },
  {
    id: "dp-10",
    topic: "dynamic-programming",
    difficulty: "intermediate",
    question: "How do you solve the House Robber problem?",
    answer:
      "Can't rob adjacent houses. dp[i] = max money robbing houses 0..i. dp[i] = max(dp[i-1], dp[i-2] + nums[i]). Can optimize to O(1) space since we only need the last two values.",
    codeSnippet: `def rob(nums):
    prev2 = prev1 = 0
    for num in nums:
        prev2, prev1 = prev1, max(prev1, prev2 + num)
    return prev1`,
    language: "python",
  },
  {
    id: "dp-11",
    topic: "dynamic-programming",
    difficulty: "advanced",
    question: "How do you solve the Matrix Chain Multiplication problem?",
    answer:
      "Find the optimal way to parenthesize matrix multiplications to minimize total scalar multiplications. dp[i][j] = min cost to multiply matrices i through j. Try every split point k: dp[i][j] = min(dp[i][k] + dp[k+1][j] + dims[i-1]*dims[k]*dims[j]). Time: O(n³).",
  },
  {
    id: "dp-12",
    topic: "dynamic-programming",
    difficulty: "intermediate",
    question: "What is the Subset Sum problem?",
    answer:
      "Can a subset of numbers sum to a target? dp[j] = true if we can form sum j. For each number: iterate j from target down to number, dp[j] = dp[j] || dp[j - num]. Time: O(n × target).",
    codeSnippet: `def can_partition(nums, target):
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for j in range(target, num - 1, -1):
            dp[j] = dp[j] or dp[j - num]
    return dp[target]`,
    language: "python",
  },

  // ─── MORE DESIGN PATTERNS ─────────────────────────────────────
  {
    id: "pat-6",
    topic: "design-patterns",
    difficulty: "beginner",
    question: "What are the three categories of design patterns?",
    answer:
      "1. Creational: how objects are created (Singleton, Factory, Builder, Prototype)\n2. Structural: how objects are composed (Adapter, Decorator, Facade, Proxy)\n3. Behavioral: how objects communicate (Observer, Strategy, Command, Iterator)",
  },
  {
    id: "pat-7",
    topic: "design-patterns",
    difficulty: "intermediate",
    question: "What is the Adapter pattern?",
    answer:
      "Allows incompatible interfaces to work together. Wraps an existing class with a new interface that the client expects. Like a power adapter that converts between plug types. Used when integrating legacy code or third-party libraries.",
  },
  {
    id: "pat-8",
    topic: "design-patterns",
    difficulty: "intermediate",
    question: "What is the Builder pattern?",
    answer:
      "Separates the construction of a complex object from its representation. Allows step-by-step construction with method chaining. Useful when an object has many optional parameters.",
    codeSnippet: `class QueryBuilder:
    def __init__(self):
        self._table = ''
        self._conditions = []
        self._limit = None

    def from_table(self, table):
        self._table = table; return self
    def where(self, cond):
        self._conditions.append(cond); return self
    def limit(self, n):
        self._limit = n; return self

    def build(self):
        sql = f"SELECT * FROM {self._table}"
        if self._conditions:
            sql += ' WHERE ' + ' AND '.join(self._conditions)
        if self._limit:
            sql += f" LIMIT {self._limit}"
        return sql`,
    language: "python",
  },
  {
    id: "pat-9",
    topic: "design-patterns",
    difficulty: "advanced",
    question: "What is the Command pattern?",
    answer:
      "Encapsulates a request as an object, letting you parameterize actions, queue them, log them, or support undo. The command object contains: execute(), and optionally undo(). Used in: text editors (undo/redo), transaction systems, task queues.",
  },
  {
    id: "pat-10",
    topic: "design-patterns",
    difficulty: "intermediate",
    question: "What is the Facade pattern?",
    answer:
      "Provides a simplified interface to a complex subsystem. Hides the complexity of multiple classes behind one easy-to-use API. Example: a 'startComputer()' method that internally initializes CPU, memory, hard drive, and OS boot sequence.",
  },

  // ─── MORE CACHES ──────────────────────────────────────────────
  {
    id: "ca-6",
    topic: "caches",
    difficulty: "intermediate",
    question: "Implement a simple LRU Cache.",
    answer:
      "Use a Map (which maintains insertion order in JS). On get: delete and re-insert to move to end. On put: delete if exists, insert at end. If over capacity, delete the first (oldest) entry.",
    codeSnippet: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)`,
    language: "python",
  },
  {
    id: "ca-7",
    topic: "caches",
    difficulty: "intermediate",
    question: "What is write-through vs write-back caching?",
    answer:
      "Write-through: data is written to both cache and backing store simultaneously. Simple, consistent, but slower writes.\nWrite-back: data is written only to cache initially, and written to backing store later (when evicted or periodically). Faster writes but risk of data loss if cache fails before writeback.",
  },
  {
    id: "ca-8",
    topic: "caches",
    difficulty: "advanced",
    question: "What is a CDN and how does it use caching?",
    answer:
      "A Content Delivery Network has geographically distributed servers (edge nodes) that cache content close to users. Reduces latency by serving from the nearest node. Cache headers (Cache-Control, ETag, Last-Modified) control caching behavior. Cache miss → fetch from origin, store, serve.",
  },
  {
    id: "ca-9",
    topic: "caches",
    difficulty: "beginner",
    question: "What are L1, L2, and L3 CPU caches?",
    answer:
      "L1: smallest, fastest (~1ns), per-core, usually 32-64KB. Split into instruction and data caches.\nL2: larger (~256KB-1MB), per-core, slightly slower (~4ns).\nL3: largest (several MB), shared across cores, slowest of the three (~10ns).\nAll much faster than main memory (~100ns).",
  },
  {
    id: "ca-10",
    topic: "caches",
    difficulty: "intermediate",
    question: "What is cache stampede and how do you prevent it?",
    answer:
      "When a popular cache entry expires, many concurrent requests all miss the cache and hit the database simultaneously. Prevention: 1) Lock/mutex — only one request regenerates, others wait. 2) Early recompute — refresh before expiry. 3) Stale-while-revalidate — serve stale data while refreshing.",
  },

  // ─── MORE PROCESSES & THREADS ─────────────────────────────────
  {
    id: "pt-6",
    topic: "processes-threads",
    difficulty: "intermediate",
    question: "What is a context switch?",
    answer:
      "The OS saves the state of the current process/thread and loads the state of the next one. Involves saving registers, program counter, stack pointer. Process context switches are more expensive than thread switches because they require changing the memory address space.",
  },
  {
    id: "pt-7",
    topic: "processes-threads",
    difficulty: "advanced",
    question: "What is a thread pool and why use one?",
    answer:
      "A pre-created collection of reusable threads. Tasks are submitted to a queue and executed by available threads. Benefits: 1) Avoids thread creation overhead, 2) Limits concurrent threads, 3) Controls resource usage. Used in web servers, database connection pools.",
  },
  {
    id: "pt-8",
    topic: "processes-threads",
    difficulty: "intermediate",
    question: "What is an atomic operation?",
    answer:
      "An operation that completes entirely or not at all — no other thread can observe it in a partial state. Examples: atomic increment, compare-and-swap (CAS). Hardware-supported. Used to build lock-free data structures and synchronization primitives.",
  },
  {
    id: "pt-9",
    topic: "processes-threads",
    difficulty: "advanced",
    question: "What are the differences between a process, thread, and coroutine?",
    answer:
      "Process: own memory space, heavy, OS-managed.\nThread: shared memory within process, lighter, OS-managed.\nCoroutine/green thread: user-space cooperative multitasking. Even lighter. Voluntarily yield control. Used in: Go goroutines, Python async/await, Kotlin coroutines.",
  },
  {
    id: "pt-10",
    topic: "processes-threads",
    difficulty: "intermediate",
    question: "What is the producer-consumer problem?",
    answer:
      "A classic synchronization problem. Producers add items to a bounded buffer, consumers remove them. Must synchronize: producers wait if full, consumers wait if empty. Solved with mutexes + condition variables, or semaphores.",
  },

  // ─── MORE NETWORKING ──────────────────────────────────────────
  {
    id: "net-6",
    topic: "networking",
    difficulty: "intermediate",
    question: "What is the TCP 3-way handshake?",
    answer:
      "1. Client → Server: SYN (I want to connect)\n2. Server → Client: SYN-ACK (I acknowledge, and I want to connect too)\n3. Client → Server: ACK (I acknowledge)\nConnection is now established. This ensures both sides are ready.",
  },
  {
    id: "net-7",
    topic: "networking",
    difficulty: "intermediate",
    question: "What are HTTP status code categories?",
    answer:
      "1xx: Informational (100 Continue)\n2xx: Success (200 OK, 201 Created, 204 No Content)\n3xx: Redirection (301 Moved Permanently, 304 Not Modified)\n4xx: Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)\n5xx: Server Error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)",
  },
  {
    id: "net-8",
    topic: "networking",
    difficulty: "advanced",
    question: "What is the difference between HTTP/1.1, HTTP/2, and HTTP/3?",
    answer:
      "HTTP/1.1: text-based, one request per connection (pipelining rarely used), head-of-line blocking.\nHTTP/2: binary, multiplexed streams over one TCP connection, header compression (HPACK), server push.\nHTTP/3: uses QUIC (over UDP) instead of TCP, eliminates TCP head-of-line blocking, faster connection setup.",
  },
  {
    id: "net-9",
    topic: "networking",
    difficulty: "intermediate",
    question: "What is a WebSocket?",
    answer:
      "A protocol providing full-duplex communication over a single TCP connection. Unlike HTTP (request-response), WebSocket allows the server to push data to the client at any time. Starts with an HTTP upgrade handshake. Used for: chat, live updates, gaming, real-time dashboards.",
  },
  {
    id: "net-10",
    topic: "networking",
    difficulty: "beginner",
    question: "What is an IP address and what's the difference between IPv4 and IPv6?",
    answer:
      "An IP address uniquely identifies a device on a network. IPv4: 32-bit (e.g., 192.168.1.1), ~4.3 billion addresses. IPv6: 128-bit (e.g., 2001:0db8::1), ~340 undecillion addresses. IPv6 was created because IPv4 addresses are exhausted.",
  },
  {
    id: "net-11",
    topic: "networking",
    difficulty: "advanced",
    question: "What is TLS/SSL and how does the handshake work?",
    answer:
      "TLS encrypts communication between client and server. Handshake: 1) Client sends supported cipher suites + random. 2) Server picks cipher, sends certificate + random. 3) Client verifies certificate, generates pre-master secret, encrypts with server's public key. 4) Both derive session keys. 5) Encrypted communication begins.",
  },

  // ─── MORE TRIES ───────────────────────────────────────────────
  {
    id: "tri-4",
    topic: "tries",
    difficulty: "beginner",
    question: "What is the space complexity of a Trie?",
    answer:
      "Worst case: O(ALPHABET_SIZE × N × M) where N is the number of strings and M is the average length. In practice, shared prefixes save a lot of space. For English lowercase: each node has up to 26 children.",
  },
  {
    id: "tri-5",
    topic: "tries",
    difficulty: "intermediate",
    question: "How do you implement prefix search (startsWith) in a Trie?",
    answer:
      "Same as search but don't check isEnd at the final node. Just check if you can traverse the entire prefix without hitting a dead end.",
    codeSnippet: `def starts_with(self, prefix):
    node = self.root
    for ch in prefix:
        if ch not in node.children:
            return False
        node = node.children[ch]
    return True  # don't check is_end`,
    language: "python",
  },
  {
    id: "tri-6",
    topic: "tries",
    difficulty: "advanced",
    question: "What is a compressed Trie (Radix Tree)?",
    answer:
      "A space-optimized Trie where chains of single-child nodes are merged into one node with a multi-character label. Reduces the number of nodes significantly. Used in: IP routing tables, dictionary implementations, and database indexing.",
  },
  {
    id: "tri-7",
    topic: "tries",
    difficulty: "intermediate",
    question: "How would you count words with a given prefix using a Trie?",
    answer:
      "Add a 'count' field to each node that tracks how many words pass through it. Increment during insert. To count words with a prefix, traverse to the prefix node and return its count.",
  },

  // ─── MORE SYSTEM DESIGN ───────────────────────────────────────
  {
    id: "sd-6",
    topic: "system-design",
    difficulty: "intermediate",
    question: "What is a message queue and when should you use one?",
    answer:
      "A system that allows asynchronous communication between services. Producer sends messages to a queue, consumer processes them later. Benefits: decoupling, buffering, fault tolerance, load leveling. Examples: RabbitMQ, Apache Kafka, AWS SQS.",
  },
  {
    id: "sd-7",
    topic: "system-design",
    difficulty: "advanced",
    question: "What is database replication and what are its types?",
    answer:
      "Copying data across multiple database servers. Types:\n• Leader-Follower: one leader handles writes, followers replicate and handle reads. Simple but single write bottleneck.\n• Leader-Leader: multiple leaders accept writes. More complex, potential conflicts.\n• Leaderless: any node accepts reads/writes (e.g., DynamoDB, Cassandra). Uses quorum for consistency.",
  },
  {
    id: "sd-8",
    topic: "system-design",
    difficulty: "intermediate",
    question: "What is a reverse proxy?",
    answer:
      "A server that sits between clients and backend servers. Forwards client requests to appropriate backends. Benefits: load balancing, SSL termination, caching, compression, security (hides backend servers). Examples: Nginx, HAProxy, Cloudflare.",
  },
  {
    id: "sd-9",
    topic: "system-design",
    difficulty: "advanced",
    question: "What is the difference between SQL and NoSQL databases?",
    answer:
      "SQL: relational, structured schema, ACID transactions, vertical scaling. Good for: complex queries, joins, consistency. (PostgreSQL, MySQL)\nNoSQL: flexible schema, horizontal scaling, eventual consistency. Types: document (MongoDB), key-value (Redis), column-family (Cassandra), graph (Neo4j). Good for: scale, flexibility, specific access patterns.",
  },
  {
    id: "sd-10",
    topic: "system-design",
    difficulty: "intermediate",
    question: "What is rate limiting and how is it implemented?",
    answer:
      "Controlling the number of requests a user/client can make in a time window. Algorithms:\n• Token Bucket: tokens added at a fixed rate, each request costs a token\n• Sliding Window: count requests in a rolling time window\n• Fixed Window: count requests per fixed time period\nImplemented with: Redis counters, in-memory stores, API gateways.",
  },

  // ─── MORE STRING MANIPULATION ─────────────────────────────────
  {
    id: "sm-5",
    topic: "string-manipulation",
    difficulty: "beginner",
    question: "How do you reverse a string?",
    answer:
      "In JavaScript: split into array, reverse, join. Or use two pointers from both ends swapping characters. In Python: slicing s[::-1].",
    codeSnippet: `# Pythonic way
reversed_str = s[::-1]

# Two-pointer in-place (list of chars)
def reverse_string(s):
    l, r = 0, len(s) - 1
    while l < r:
        s[l], s[r] = s[r], s[l]
        l += 1; r -= 1`,
    language: "python",
  },
  {
    id: "sm-6",
    topic: "string-manipulation",
    difficulty: "intermediate",
    question: "How do you check if a string is a palindrome?",
    answer:
      "Use two pointers from both ends, moving inward. Skip non-alphanumeric characters for 'valid palindrome' variant. O(n) time, O(1) space.",
    codeSnippet: `def is_palindrome(s):
    s = ''.join(c.lower() for c in s if c.isalnum())
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] != s[r]:
            return False
        l += 1; r -= 1
    return True`,
    language: "python",
  },
  {
    id: "sm-7",
    topic: "string-manipulation",
    difficulty: "intermediate",
    question: "What is the Rabin-Karp algorithm?",
    answer:
      "Rolling hash pattern matching. Compute the hash of the pattern and slide a window over the text, updating the hash in O(1). Only compare characters when hashes match. Average: O(n + m). Useful for multi-pattern search.",
  },
  {
    id: "sm-8",
    topic: "string-manipulation",
    difficulty: "advanced",
    question: "How do you find the longest substring without repeating characters?",
    answer:
      "Sliding window with a set/map. Expand the right pointer, add characters. If a repeat is found, shrink from the left until no repeats. Track the max window size. O(n).",
    codeSnippet: `def length_of_longest_substring(s):
    seen = {}
    max_len = left = 0
    for right, ch in enumerate(s):
        if ch in seen and seen[ch] >= left:
            left = seen[ch] + 1
        seen[ch] = right
        max_len = max(max_len, right - left + 1)
    return max_len`,
    language: "python",
  },
  {
    id: "sm-9",
    topic: "string-manipulation",
    difficulty: "intermediate",
    question: "How do you implement string compression? (e.g., 'aabcccccaaa' → 'a2b1c5a3')",
    answer:
      "Iterate with a counter. When the current character differs from the next, append the character and count, reset counter. Only return compressed if shorter than original.",
    codeSnippet: `def compress(s):
    result = []
    count = 1
    for i in range(len(s)):
        if i + 1 < len(s) and s[i] == s[i + 1]:
            count += 1
        else:
            result.append(f"{s[i]}{count}")
            count = 1
    compressed = ''.join(result)
    return compressed if len(compressed) < len(s) else s`,
    language: "python",
  },
  {
    id: "sm-10",
    topic: "string-manipulation",
    difficulty: "beginner",
    question: "What is the difference between substring, substr, and slice in JavaScript?",
    answer:
      "slice(start, end): returns chars from start to end (not inclusive). Supports negative indices.\nsubstring(start, end): similar to slice but swaps args if start > end, no negative indices.\nsubstr(start, length): deprecated. Returns chars from start for given length.\n\nPrefer .slice() — it's the most versatile and consistent.",
  },
];

// Compute card counts per topic
for (const topic of topics) {
  topic.cardCount = flashcards.filter((c) => c.topic === topic.id).length;
}
