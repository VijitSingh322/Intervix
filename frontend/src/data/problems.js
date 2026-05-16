export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Main {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Write your solution here
    *returnSize = 2;
    int* result = (int*)malloc(2 * sizeof(int));
    result[0] = -1;
    result[1] = -1;
    return result;
}

int main() {
    int nums1[] = {2, 7, 11, 15};
    int returnSize;
    int* res1 = twoSum(nums1, 4, 9, &returnSize);
    printf("[%d,%d]\\n", res1[0], res1[1]); // Expected: [0,1]
    free(res1);

    int nums2[] = {3, 2, 4};
    int* res2 = twoSum(nums2, 3, 6, &returnSize);
    printf("[%d,%d]\\n", res2[0], res2[1]); // Expected: [1,2]
    free(res2);

    int nums3[] = {3, 3};
    int* res3 = twoSum(nums3, 2, 6, &returnSize);
    printf("[%d,%d]\\n", res3[0], res3[1]); // Expected: [0,1]
    free(res3);

    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> nums1 = {2, 7, 11, 15};
    auto res1 = twoSum(nums1, 9);
    cout << "[" << res1[0] << "," << res1[1] << "]" << endl; // Expected: [0,1]

    vector<int> nums2 = {3, 2, 4};
    auto res2 = twoSum(nums2, 6);
    cout << "[" << res2[0] << "," << res2[1] << "]" << endl; // Expected: [1,2]

    vector<int> nums3 = {3, 3};
    auto res3 = twoSum(nums3, 6);
    cout << "[" << res3[0] << "," << res3[1] << "]" << endl; // Expected: [0,1]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      c: "[0,1]\n[1,2]\n[0,1]",
      cpp: "[0,1]\n[1,2]\n[0,1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

void reverseString(char* s, int sSize) {
    // Write your solution here
}

int main() {
    char test1[] = {'h','e','l','l','o'};
    reverseString(test1, 5);
    printf("[");
    for (int i = 0; i < 5; i++) printf(i < 4 ? "'%c'," : "'%c'", test1[i]);
    printf("]\\n"); // Expected: ['o','l','l','e','h']

    char test2[] = {'H','a','n','n','a','h'};
    reverseString(test2, 6);
    printf("[");
    for (int i = 0; i < 6; i++) printf(i < 5 ? "'%c'," : "'%c'", test2[i]);
    printf("]\\n"); // Expected: ['h','a','n','n','a','H']

    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
}

int main() {
    vector<char> test1 = {'h','e','l','l','o'};
    reverseString(test1);
    cout << "[";
    for (int i = 0; i < test1.size(); i++) cout << (i ? "," : "") << "'" << test1[i] << "'";
    cout << "]" << endl; // Expected: ['o','l','l','e','h']

    vector<char> test2 = {'H','a','n','n','a','h'};
    reverseString(test2);
    cout << "[";
    for (int i = 0; i < test2.size(); i++) cout << (i ? "," : "") << "'" << test2[i] << "'";
    cout << "]" << endl; // Expected: ['h','a','n','n','a','H']

    return 0;
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      c: "['o','l','l','e','h']\n['h','a','n','n','a','H']",
      cpp: "['o','l','l','e','h']\n['h','a','n','n','a','H']",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
      c: `#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <stdbool.h>

bool isPalindrome(char* s) {
    // Write your solution here
    return false;
}

int main() {
    printf("%s\\n", isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false"); // Expected: true
    printf("%s\\n", isPalindrome("race a car") ? "true" : "false"); // Expected: false
    printf("%s\\n", isPalindrome(" ") ? "true" : "false"); // Expected: true
    return 0;
}`,
      cpp: `#include <iostream>
#include <cctype>
#include <string>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << (isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") << endl; // Expected: true
    cout << (isPalindrome("race a car") ? "true" : "false") << endl; // Expected: false
    cout << (isPalindrome(" ") ? "true" : "false") << endl; // Expected: true
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      c: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
      c: `#include <stdio.h>

int maxSubArray(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int nums1[] = {-2,1,-3,4,-1,2,1,-5,4};
    printf("%d\\n", maxSubArray(nums1, 9)); // Expected: 6

    int nums2[] = {1};
    printf("%d\\n", maxSubArray(nums2, 1)); // Expected: 1

    int nums3[] = {5,4,-1,7,8};
    printf("%d\\n", maxSubArray(nums3, 5)); // Expected: 23

    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxSubArray(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> nums1 = {-2,1,-3,4,-1,2,1,-5,4};
    cout << maxSubArray(nums1) << endl; // Expected: 6

    vector<int> nums2 = {1};
    cout << maxSubArray(nums2) << endl; // Expected: 1

    vector<int> nums3 = {5,4,-1,7,8};
    cout << maxSubArray(nums3) << endl; // Expected: 23

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      c: "6\n1\n23",
      cpp: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
      c: `#include <stdio.h>

int maxArea(int* height, int heightSize) {
    // Write your solution here
    return 0;
}

int main() {
    int h1[] = {1,8,6,2,5,4,8,3,7};
    printf("%d\\n", maxArea(h1, 9)); // Expected: 49

    int h2[] = {1,1};
    printf("%d\\n", maxArea(h2, 2)); // Expected: 1

    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxArea(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> h1 = {1,8,6,2,5,4,8,3,7};
    cout << maxArea(h1) << endl; // Expected: 49

    vector<int> h2 = {1,1};
    cout << maxArea(h2) << endl; // Expected: 1

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      c: "49\n1",
      cpp: "49\n1",
    },
  },

  // ─────────────────────────────────────────────
  // 15 NEW PROBLEMS
  // ─────────────────────────────────────────────

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Hard",
    category: "Array • Greedy",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      notes: [
        "Return the maximum profit you can achieve from this transaction.",
        "If you cannot achieve any profit, return 0.",
      ],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No transaction gives profit, so return 0.",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1]));   // Expected: 0`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))    # Expected: 0`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));   // Expected: 0
    }
}`,
      c: `#include <stdio.h>

int maxProfit(int* prices, int pricesSize) {
    // Write your solution here
    return 0;
}

int main() {
    int p1[] = {7,1,5,3,6,4};
    printf("%d\\n", maxProfit(p1, 6)); // Expected: 5
    int p2[] = {7,6,4,3,1};
    printf("%d\\n", maxProfit(p2, 5)); // Expected: 0
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> p1 = {7,1,5,3,6,4};
    cout << maxProfit(p1) << endl; // Expected: 5
    vector<int> p2 = {7,6,4,3,1};
    cout << maxProfit(p2) << endl; // Expected: 0
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
      c: "5\n0",
      cpp: "5\n0",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Medium",
    category: "Dynamic Programming • Math",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      notes: [],
    },
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "Two ways: (1+1) or (2).",
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "Three ways: (1+1+1), (1+2), (2+1).",
      },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  
}

console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(5)); // Expected: 8`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3
print(climbStairs(5))  # Expected: 8`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
        System.out.println(climbStairs(5)); // Expected: 8
    }
}`,
      c: `#include <stdio.h>

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\\n", climbStairs(2)); // Expected: 2
    printf("%d\\n", climbStairs(3)); // Expected: 3
    printf("%d\\n", climbStairs(5)); // Expected: 8
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    cout << climbStairs(2) << endl; // Expected: 2
    cout << climbStairs(3) << endl; // Expected: 3
    cout << climbStairs(5) << endl; // Expected: 8
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n8",
      python: "2\n3\n8",
      java: "2\n3\n8",
      c: "2\n3\n8",
      cpp: "2\n3\n8",
    },
  },

  "merge-sorted-array": {
    id: "merge-sorted-array",
    title: "Merge Sorted Array",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums2 into nums1 as one sorted array in-place.",
      notes: [
        "The final sorted array should not be returned by the function, but instead be stored inside the array nums1.",
        "To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.",
      ],
    },
    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]",
      },
      {
        input: "nums1 = [1], m = 1, nums2 = [], n = 0",
        output: "[1]",
      },
    ],
    constraints: [
      "nums1.length == m + n",
      "nums2.length == n",
      "0 ≤ m, n ≤ 200",
      "-10⁹ ≤ nums1[i], nums2[j] ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here
  
}

let n1 = [1,2,3,0,0,0];
merge(n1, 3, [2,5,6], 3);
console.log(n1); // Expected: [1,2,2,3,5,6]

let n2 = [1];
merge(n2, 1, [], 0);
console.log(n2); // Expected: [1]`,
      python: `def merge(nums1, m, nums2, n):
    # Write your solution here
    pass

n1 = [1,2,3,0,0,0]
merge(n1, 3, [2,5,6], 3)
print(n1)  # Expected: [1, 2, 2, 3, 5, 6]

n2 = [1]
merge(n2, 1, [], 0)
print(n2)  # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
    }
    public static void main(String[] args) {
        int[] n1 = {1,2,3,0,0,0};
        merge(n1, 3, new int[]{2,5,6}, 3);
        System.out.println(Arrays.toString(n1)); // Expected: [1, 2, 2, 3, 5, 6]

        int[] n2 = {1};
        merge(n2, 1, new int[]{}, 0);
        System.out.println(Arrays.toString(n2)); // Expected: [1]
    }
}`,
      c: `#include <stdio.h>

void merge(int* nums1, int m, int* nums2, int n) {
    // Write your solution here
}

void printArr(int* arr, int size) {
    printf("[");
    for (int i = 0; i < size; i++) printf(i < size-1 ? "%d," : "%d", arr[i]);
    printf("]\\n");
}

int main() {
    int n1[] = {1,2,3,0,0,0};
    int n2[] = {2,5,6};
    merge(n1, 3, n2, 3);
    printArr(n1, 6); // Expected: [1,2,2,3,5,6]

    int n3[] = {1};
    merge(n3, 1, NULL, 0);
    printArr(n3, 1); // Expected: [1]
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    // Write your solution here
}

void printVec(vector<int>& v) {
    cout << "[";
    for (int i = 0; i < v.size(); i++) cout << (i ? "," : "") << v[i];
    cout << "]" << endl;
}

int main() {
    vector<int> n1 = {1,2,3,0,0,0};
    vector<int> n2 = {2,5,6};
    merge(n1, 3, n2, 3);
    printVec(n1); // Expected: [1,2,2,3,5,6]

    vector<int> n3 = {1};
    vector<int> n4 = {};
    merge(n3, 1, n4, 0);
    printVec(n3); // Expected: [1]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,2,2,3,5,6]\n[1]",
      python: "[1, 2, 2, 3, 5, 6]\n[1]",
      java: "[1, 2, 2, 3, 5, 6]\n[1]",
      c: "[1,2,2,3,5,6]\n[1]",
      cpp: "[1,2,2,3,5,6]\n[1]",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table • Sorting",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" },
      { input: "nums = [1,1,1,3,3,4,3,2,4,2]", output: "true" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

console.log(containsDuplicate([1,2,3,1]));             // Expected: true
console.log(containsDuplicate([1,2,3,4]));             // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

print(containsDuplicate([1,2,3,1]))              # Expected: True
print(containsDuplicate([1,2,3,4]))              # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) # Expected: True`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));              // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4}));              // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2})); // Expected: true
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>

bool containsDuplicate(int* nums, int numsSize) {
    // Write your solution here
    return false;
}

int main() {
    int n1[] = {1,2,3,1};
    printf("%s\\n", containsDuplicate(n1, 4) ? "true" : "false"); // Expected: true
    int n2[] = {1,2,3,4};
    printf("%s\\n", containsDuplicate(n2, 4) ? "true" : "false"); // Expected: false
    int n3[] = {1,1,1,3,3,4,3,2,4,2};
    printf("%s\\n", containsDuplicate(n3, 10) ? "true" : "false"); // Expected: true
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> n1 = {1,2,3,1};
    cout << (containsDuplicate(n1) ? "true" : "false") << endl; // Expected: true
    vector<int> n2 = {1,2,3,4};
    cout << (containsDuplicate(n2) ? "true" : "false") << endl; // Expected: false
    vector<int> n3 = {1,1,1,3,3,4,3,2,4,2};
    cout << (containsDuplicate(n3) ? "true" : "false") << endl; // Expected: true
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      c: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "move-zeroes": {
    id: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
      notes: ["You must do this in-place without making a copy of the array."],
    },
    examples: [
      {
        input: "nums = [0,1,0,3,12]",
        output: "[1,3,12,0,0]",
      },
      {
        input: "nums = [0]",
        output: "[0]",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}

let t1 = [0,1,0,3,12];
moveZeroes(t1);
console.log(t1); // Expected: [1,3,12,0,0]

let t2 = [0];
moveZeroes(t2);
console.log(t2); // Expected: [0]`,
      python: `def moveZeroes(nums):
    # Write your solution here
    pass

t1 = [0,1,0,3,12]
moveZeroes(t1)
print(t1)  # Expected: [1, 3, 12, 0, 0]

t2 = [0]
moveZeroes(t2)
print(t2)  # Expected: [0]`,
      java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
    }
    public static void main(String[] args) {
        int[] t1 = {0,1,0,3,12};
        moveZeroes(t1);
        System.out.println(Arrays.toString(t1)); // Expected: [1, 3, 12, 0, 0]

        int[] t2 = {0};
        moveZeroes(t2);
        System.out.println(Arrays.toString(t2)); // Expected: [0]
    }
}`,
      c: `#include <stdio.h>

void moveZeroes(int* nums, int numsSize) {
    // Write your solution here
}

void printArr(int* arr, int size) {
    printf("[");
    for (int i = 0; i < size; i++) printf(i < size-1 ? "%d," : "%d", arr[i]);
    printf("]\\n");
}

int main() {
    int t1[] = {0,1,0,3,12};
    moveZeroes(t1, 5);
    printArr(t1, 5); // Expected: [1,3,12,0,0]

    int t2[] = {0};
    moveZeroes(t2, 1);
    printArr(t2, 1); // Expected: [0]
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void moveZeroes(vector<int>& nums) {
    // Write your solution here
}

void printVec(vector<int>& v) {
    cout << "[";
    for (int i = 0; i < v.size(); i++) cout << (i ? "," : "") << v[i];
    cout << "]" << endl;
}

int main() {
    vector<int> t1 = {0,1,0,3,12};
    moveZeroes(t1);
    printVec(t1); // Expected: [1,3,12,0,0]

    vector<int> t2 = {0};
    moveZeroes(t2);
    printVec(t2); // Expected: [0]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,3,12,0,0]\n[0]",
      python: "[1, 3, 12, 0, 0]\n[0]",
      java: "[1, 3, 12, 0, 0]\n[0]",
      c: "[1,3,12,0,0]\n[0]",
      cpp: "[1,3,12,0,0]\n[0]",
    },
  },

  "fibonacci-number": {
    id: "fibonacci-number",
    title: "Fibonacci Number",
    difficulty: "Easy",
    category: "Math • Dynamic Programming • Recursion",
    description: {
      text: "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. Given n, calculate F(n).",
      notes: ["F(0) = 0, F(1) = 1", "F(n) = F(n-1) + F(n-2), for n > 1"],
    },
    examples: [
      { input: "n = 2", output: "1", explanation: "F(2) = F(1) + F(0) = 1 + 0 = 1." },
      { input: "n = 3", output: "2", explanation: "F(3) = F(2) + F(1) = 1 + 1 = 2." },
      { input: "n = 4", output: "3", explanation: "F(4) = F(3) + F(2) = 2 + 1 = 3." },
    ],
    constraints: ["0 ≤ n ≤ 30"],
    starterCode: {
      javascript: `function fib(n) {
  // Write your solution here
  
}

console.log(fib(2)); // Expected: 1
console.log(fib(3)); // Expected: 2
console.log(fib(4)); // Expected: 3`,
      python: `def fib(n):
    # Write your solution here
    pass

print(fib(2))  # Expected: 1
print(fib(3))  # Expected: 2
print(fib(4))  # Expected: 3`,
      java: `class Solution {
    public static int fib(int n) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(fib(2)); // Expected: 1
        System.out.println(fib(3)); // Expected: 2
        System.out.println(fib(4)); // Expected: 3
    }
}`,
      c: `#include <stdio.h>

int fib(int n) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\\n", fib(2)); // Expected: 1
    printf("%d\\n", fib(3)); // Expected: 2
    printf("%d\\n", fib(4)); // Expected: 3
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int fib(int n) {
    // Write your solution here
    return 0;
}

int main() {
    cout << fib(2) << endl; // Expected: 1
    cout << fib(3) << endl; // Expected: 2
    cout << fib(4) << endl; // Expected: 3
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n2\n3",
      python: "1\n2\n3",
      java: "1\n2\n3",
      c: "1\n2\n3",
      cpp: "1\n2\n3",
    },
  },

  "longest-common-prefix": {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "Easy",
    category: "String • Trie",
    description: {
      text: "Write a function to find the longest common prefix string amongst an array of strings.",
      notes: ["If there is no common prefix, return an empty string \"\"."],
    },
    examples: [
      {
        input: 'strs = ["flower","flow","flight"]',
        output: '"fl"',
      },
      {
        input: 'strs = ["dog","racecar","car"]',
        output: '""',
        explanation: "There is no common prefix among the input strings.",
      },
    ],
    constraints: ["1 ≤ strs.length ≤ 200", "0 ≤ strs[i].length ≤ 200", "strs[i] consists of only lowercase English letters"],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {
  // Write your solution here
  
}

console.log(longestCommonPrefix(["flower","flow","flight"])); // Expected: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));    // Expected: ""`,
      python: `def longestCommonPrefix(strs):
    # Write your solution here
    pass

print(longestCommonPrefix(["flower","flow","flight"]))  # Expected: fl
print(longestCommonPrefix(["dog","racecar","car"]))     # Expected: (empty)`,
      java: `class Solution {
    public static String longestCommonPrefix(String[] strs) {
        // Write your solution here
        return "";
    }
    public static void main(String[] args) {
        System.out.println(longestCommonPrefix(new String[]{"flower","flow","flight"})); // Expected: fl
        System.out.println(longestCommonPrefix(new String[]{"dog","racecar","car"}));    // Expected: (empty)
    }
}`,
      c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* longestCommonPrefix(char** strs, int strsSize) {
    // Write your solution here
    char* result = (char*)malloc(201);
    result[0] = '\\0';
    return result;
}

int main() {
    char* s1[] = {"flower","flow","flight"};
    printf("%s\\n", longestCommonPrefix(s1, 3)); // Expected: fl

    char* s2[] = {"dog","racecar","car"};
    printf("%s\\n", longestCommonPrefix(s2, 3)); // Expected: (empty)
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

string longestCommonPrefix(vector<string>& strs) {
    // Write your solution here
    return "";
}

int main() {
    vector<string> s1 = {"flower","flow","flight"};
    cout << longestCommonPrefix(s1) << endl; // Expected: fl

    vector<string> s2 = {"dog","racecar","car"};
    cout << longestCommonPrefix(s2) << endl; // Expected: (empty)
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "fl\n",
      python: "fl\n",
      java: "fl\n",
      c: "fl\n",
      cpp: "fl\n",
    },
  },

  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Array • Bit Manipulation",
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
      notes: ["You must implement a solution with a linear runtime complexity and use only constant extra space."],
    },
    examples: [
      { input: "nums = [2,2,1]", output: "1" },
      { input: "nums = [4,1,2,1,2]", output: "4" },
      { input: "nums = [1]", output: "1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴", "Each element appears twice except for one element which appears only once"],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
  
}

console.log(singleNumber([2,2,1]));       // Expected: 1
console.log(singleNumber([4,1,2,1,2]));   // Expected: 4
console.log(singleNumber([1]));           // Expected: 1`,
      python: `def singleNumber(nums):
    # Write your solution here
    pass

print(singleNumber([2,2,1]))      # Expected: 1
print(singleNumber([4,1,2,1,2]))  # Expected: 4
print(singleNumber([1]))          # Expected: 1`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2,2,1}));      // Expected: 1
        System.out.println(singleNumber(new int[]{4,1,2,1,2}));  // Expected: 4
        System.out.println(singleNumber(new int[]{1}));          // Expected: 1
    }
}`,
      c: `#include <stdio.h>

int singleNumber(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int n1[] = {2,2,1};
    printf("%d\\n", singleNumber(n1, 3)); // Expected: 1
    int n2[] = {4,1,2,1,2};
    printf("%d\\n", singleNumber(n2, 5)); // Expected: 4
    int n3[] = {1};
    printf("%d\\n", singleNumber(n3, 1)); // Expected: 1
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int singleNumber(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {2,2,1};
    cout << singleNumber(n1) << endl; // Expected: 1
    vector<int> n2 = {4,1,2,1,2};
    cout << singleNumber(n2) << endl; // Expected: 4
    vector<int> n3 = {1};
    cout << singleNumber(n3) << endl; // Expected: 1
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n4\n1",
      python: "1\n4\n1",
      java: "1\n4\n1",
      c: "1\n4\n1",
      cpp: "1\n4\n1",
    },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Hard",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["The solution set must not contain duplicate triplets."],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
      },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
  
}

console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4]))); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(JSON.stringify(threeSum([0,1,1])));           // Expected: []
console.log(JSON.stringify(threeSum([0,0,0])));           // Expected: [[0,0,0]]`,
      python: `def threeSum(nums):
    # Write your solution here
    pass

print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))           # Expected: []
print(threeSum([0,0,0]))           # Expected: [[0,0,0]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1,-1,2],[-1,0,1]]
        System.out.println(threeSum(new int[]{0,1,1}));           // Expected: []
        System.out.println(threeSum(new int[]{0,0,0}));           // Expected: [[0,0,0]]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

// Returns a flat array of triplets; *returnSize = number of triplets
int** threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    *returnSize = 0;
    return NULL;
}

int main() {
    // Manual test — implement and verify visually
    int n1[] = {-1,0,1,2,-1,-4};
    int returnSize; int* colSizes;
    int** res = threeSum(n1, 6, &returnSize, &colSizes);
    printf("Triplet count: %d\\n", returnSize); // Expected: 2
    for (int i = 0; i < returnSize; i++) {
        printf("[%d,%d,%d]\\n", res[i][0], res[i][1], res[i][2]);
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> n1 = {-1,0,1,2,-1,-4};
    auto res1 = threeSum(n1);
    for (auto& t : res1) cout << "[" << t[0] << "," << t[1] << "," << t[2] << "] ";
    cout << endl; // Expected: [-1,-1,2] [-1,0,1]

    vector<int> n2 = {0,1,1};
    auto res2 = threeSum(n2);
    cout << (res2.empty() ? "[]" : "") << endl; // Expected: []

    vector<int> n3 = {0,0,0};
    auto res3 = threeSum(n3);
    for (auto& t : res3) cout << "[" << t[0] << "," << t[1] << "," << t[2] << "] ";
    cout << endl; // Expected: [0,0,0]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]',
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      c: "Triplet count: 2\n[-1,-1,2]\n[-1,0,1]",
      cpp: "[-1,-1,2] [-1,0,1] \n[]\n[0,0,0] ",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Hard",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "You must write an algorithm that runs in O(n) time and without using the division operation.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30", "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

console.log(productExceptSelf([1,2,3,4]));        // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3]));    // Expected: [0,0,9,0,0]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

print(productExceptSelf([1,2,3,4]))      # Expected: [24, 12, 8, 6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0, 0, 9, 0, 0]`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4})));      // Expected: [24, 12, 8, 6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0, 0, 9, 0, 0]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* result = (int*)calloc(numsSize, sizeof(int));
    // Write your solution here
    return result;
}

void printArr(int* arr, int size) {
    printf("[");
    for (int i = 0; i < size; i++) printf(i < size-1 ? "%d," : "%d", arr[i]);
    printf("]\\n");
}

int main() {
    int n1[] = {1,2,3,4}; int rs;
    int* r1 = productExceptSelf(n1, 4, &rs);
    printArr(r1, rs); // Expected: [24,12,8,6]
    free(r1);

    int n2[] = {-1,1,0,-3,3};
    int* r2 = productExceptSelf(n2, 5, &rs);
    printArr(r2, rs); // Expected: [0,0,9,0,0]
    free(r2);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    // Write your solution here
    return {};
}

void printVec(vector<int>& v) {
    cout << "[";
    for (int i = 0; i < v.size(); i++) cout << (i ? "," : "") << v[i];
    cout << "]" << endl;
}

int main() {
    vector<int> n1 = {1,2,3,4};
    auto r1 = productExceptSelf(n1);
    printVec(r1); // Expected: [24,12,8,6]

    vector<int> n2 = {-1,1,0,-3,3};
    auto r2 = productExceptSelf(n2);
    printVec(r2); // Expected: [0,0,9,0,0]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      c: "[24,12,8,6]\n[0,0,9,0,0]",
      cpp: "[24,12,8,6]\n[0,0,9,0,0]",
    },
  },

  "find-minimum-in-rotated-sorted-array": {
    id: "find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Hard",
    category: "Array • Binary Search",
    description: {
      text: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
      notes: ["You must write an algorithm that runs in O(log n) time."],
    },
    examples: [
      {
        input: "nums = [3,4,5,1,2]",
        output: "1",
        explanation: "The original array was [1,2,3,4,5] rotated 3 times.",
      },
      {
        input: "nums = [4,5,6,7,0,1,2]",
        output: "0",
        explanation: "The original array was [0,1,2,4,5,6,7] rotated 4 times.",
      },
      {
        input: "nums = [11,13,15,17]",
        output: "11",
        explanation: "The original array was [11,13,15,17] rotated 4 times.",
      },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 5000", "-5000 ≤ nums[i] ≤ 5000", "All the integers of nums are unique"],
    starterCode: {
      javascript: `function findMin(nums) {
  // Write your solution here
  
}

console.log(findMin([3,4,5,1,2]));     // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17]));   // Expected: 11`,
      python: `def findMin(nums):
    # Write your solution here
    pass

print(findMin([3,4,5,1,2]))      # Expected: 1
print(findMin([4,5,6,7,0,1,2]))  # Expected: 0
print(findMin([11,13,15,17]))    # Expected: 11`,
      java: `class Solution {
    public static int findMin(int[] nums) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(findMin(new int[]{3,4,5,1,2}));      // Expected: 1
        System.out.println(findMin(new int[]{4,5,6,7,0,1,2}));  // Expected: 0
        System.out.println(findMin(new int[]{11,13,15,17}));    // Expected: 11
    }
}`,
      c: `#include <stdio.h>

int findMin(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int n1[] = {3,4,5,1,2};
    printf("%d\\n", findMin(n1, 5)); // Expected: 1
    int n2[] = {4,5,6,7,0,1,2};
    printf("%d\\n", findMin(n2, 7)); // Expected: 0
    int n3[] = {11,13,15,17};
    printf("%d\\n", findMin(n3, 4)); // Expected: 11
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findMin(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {3,4,5,1,2};
    cout << findMin(n1) << endl; // Expected: 1
    vector<int> n2 = {4,5,6,7,0,1,2};
    cout << findMin(n2) << endl; // Expected: 0
    vector<int> n3 = {11,13,15,17};
    cout << findMin(n3) << endl; // Expected: 11
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n0\n11",
      python: "1\n0\n11",
      java: "1\n0\n11",
      c: "1\n0\n11",
      cpp: "1\n0\n11",
    },
  },

  "number-of-1-bits": {
    id: "number-of-1-bits",
    title: "Number of 1 Bits",
    difficulty: "Easy",
    category: "Bit Manipulation • Divide and Conquer",
    description: {
      text: "Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).",
      notes: [],
    },
    examples: [
      { input: "n = 11", output: "3", explanation: "11 in binary is 00000000000000000000000000001011, which has 3 set bits." },
      { input: "n = 128", output: "1", explanation: "128 in binary is 00000000000000000000000010000000, which has 1 set bit." },
      { input: "n = 2147483645", output: "30" },
    ],
    constraints: ["1 ≤ n ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function hammingWeight(n) {
  // Write your solution here
  
}

console.log(hammingWeight(11));         // Expected: 3
console.log(hammingWeight(128));        // Expected: 1
console.log(hammingWeight(2147483645)); // Expected: 30`,
      python: `def hammingWeight(n):
    # Write your solution here
    pass

print(hammingWeight(11))          # Expected: 3
print(hammingWeight(128))         # Expected: 1
print(hammingWeight(2147483645))  # Expected: 30`,
      java: `class Solution {
    public static int hammingWeight(int n) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(hammingWeight(11));          // Expected: 3
        System.out.println(hammingWeight(128));         // Expected: 1
        System.out.println(hammingWeight(2147483645));  // Expected: 30
    }
}`,
      c: `#include <stdio.h>

int hammingWeight(unsigned int n) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\\n", hammingWeight(11));          // Expected: 3
    printf("%d\\n", hammingWeight(128));         // Expected: 1
    printf("%d\\n", hammingWeight(2147483645));  // Expected: 30
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int hammingWeight(uint32_t n) {
    // Write your solution here
    return 0;
}

int main() {
    cout << hammingWeight(11)          << endl; // Expected: 3
    cout << hammingWeight(128)         << endl; // Expected: 1
    cout << hammingWeight(2147483645)  << endl; // Expected: 30
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n30",
      python: "3\n1\n30",
      java: "3\n1\n30",
      c: "3\n1\n30",
      cpp: "3\n1\n30",
    },
  },

  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "There is an integer array nums sorted in ascending order (with distinct values). Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" },
      { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" },
      { input: "nums = [1], target = 0", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴", "All values of nums are unique", "-10⁴ ≤ target ≤ 10⁴"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(search([1], 0));             // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1
print(search([1], 0))              # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0)); // Expected: 4
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3)); // Expected: -1
        System.out.println(search(new int[]{1}, 0));             // Expected: -1
    }
}`,
      c: `#include <stdio.h>

int search(int* nums, int numsSize, int target) {
    // Write your solution here
    return -1;
}

int main() {
    int n1[] = {4,5,6,7,0,1,2};
    printf("%d\\n", search(n1, 7, 0)); // Expected: 4
    printf("%d\\n", search(n1, 7, 3)); // Expected: -1
    int n2[] = {1};
    printf("%d\\n", search(n2, 1, 0)); // Expected: -1
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    return -1;
}

int main() {
    vector<int> n1 = {4,5,6,7,0,1,2};
    cout << search(n1, 0) << endl; // Expected: 4
    cout << search(n1, 3) << endl; // Expected: -1
    vector<int> n2 = {1};
    cout << search(n2, 0) << endl; // Expected: -1
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n-1",
      python: "4\n-1\n-1",
      java: "4\n-1\n-1",
      c: "4\n-1\n-1",
      cpp: "4\n-1\n-1",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table • Sorting",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      notes: ["An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."],
    },
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" },
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴", "s and t consist of lowercase English letters"],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car"));         // Expected: false`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass

print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))          # Expected: False`,
      java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car"));         // Expected: false
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isAnagram(char* s, char* t) {
    // Write your solution here
    return false;
}

int main() {
    printf("%s\\n", isAnagram("anagram", "nagaram") ? "true" : "false"); // Expected: true
    printf("%s\\n", isAnagram("rat", "car") ? "true" : "false");         // Expected: false
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool isAnagram(string s, string t) {
    // Write your solution here
    return false;
}

int main() {
    cout << (isAnagram("anagram", "nagaram") ? "true" : "false") << endl; // Expected: true
    cout << (isAnagram("rat", "car") ? "true" : "false") << endl;         // Expected: false
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      c: "true\nfalse",
      cpp: "true\nfalse",
    },
  },

  "majority-element": {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    category: "Array • Hash Table • Divide and Conquer",
    description: {
      text: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.",
      notes: ["You may assume that the majority element always exists in the array."],
    },
    examples: [
      { input: "nums = [3,2,3]", output: "3" },
      { input: "nums = [2,2,1,1,1,2,2]", output: "2" },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 5 * 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function majorityElement(nums) {
  // Write your solution here
  
}

console.log(majorityElement([3,2,3]));         // Expected: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Expected: 2`,
      python: `def majorityElement(nums):
    # Write your solution here
    pass

print(majorityElement([3,2,3]))          # Expected: 3
print(majorityElement([2,2,1,1,1,2,2]))  # Expected: 2`,
      java: `class Solution {
    public static int majorityElement(int[] nums) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3,2,3}));          // Expected: 3
        System.out.println(majorityElement(new int[]{2,2,1,1,1,2,2})); // Expected: 2
    }
}`,
      c: `#include <stdio.h>

int majorityElement(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int n1[] = {3,2,3};
    printf("%d\\n", majorityElement(n1, 3)); // Expected: 3
    int n2[] = {2,2,1,1,1,2,2};
    printf("%d\\n", majorityElement(n2, 7)); // Expected: 2
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int majorityElement(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {3,2,3};
    cout << majorityElement(n1) << endl; // Expected: 3
    vector<int> n2 = {2,2,1,1,1,2,2};
    cout << majorityElement(n2) << endl; // Expected: 2
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n2",
      python: "3\n2",
      java: "3\n2",
      c: "3\n2",
      cpp: "3\n2",
    },
  },

  "counting-bits": {
    id: "counting-bits",
    title: "Counting Bits",
    difficulty: "Easy",
    category: "Dynamic Programming • Bit Manipulation",
    description: {
      text: "Given an integer n, return an array ans of length n + 1 such that for each i (0 ≤ i ≤ n), ans[i] is the number of 1's in the binary representation of i.",
      notes: [],
    },
    examples: [
      { input: "n = 2", output: "[0,1,1]" },
      { input: "n = 5", output: "[0,1,1,2,1,2]" },
    ],
    constraints: ["0 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function countBits(n) {
  // Write your solution here
  
}

console.log(countBits(2)); // Expected: [0,1,1]
console.log(countBits(5)); // Expected: [0,1,1,2,1,2]`,
      python: `def countBits(n):
    # Write your solution here
    pass

print(countBits(2))  # Expected: [0, 1, 1]
print(countBits(5))  # Expected: [0, 1, 1, 2, 1, 2]`,
      java: `import java.util.*;

class Solution {
    public static int[] countBits(int n) {
        // Write your solution here
        return new int[0];
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(countBits(2))); // Expected: [0, 1, 1]
        System.out.println(Arrays.toString(countBits(5))); // Expected: [0, 1, 1, 2, 1, 2]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int* countBits(int n, int* returnSize) {
    *returnSize = n + 1;
    int* result = (int*)calloc(n + 1, sizeof(int));
    // Write your solution here
    return result;
}

int main() {
    int rs;
    int* r1 = countBits(2, &rs);
    printf("["); for (int i = 0; i < rs; i++) printf(i < rs-1 ? "%d," : "%d", r1[i]); printf("]\\n");
    free(r1); // Expected: [0,1,1]

    int* r2 = countBits(5, &rs);
    printf("["); for (int i = 0; i < rs; i++) printf(i < rs-1 ? "%d," : "%d", r2[i]); printf("]\\n");
    free(r2); // Expected: [0,1,1,2,1,2]
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> countBits(int n) {
    // Write your solution here
    return {};
}

void printVec(vector<int>& v) {
    cout << "[";
    for (int i = 0; i < v.size(); i++) cout << (i ? "," : "") << v[i];
    cout << "]" << endl;
}

int main() {
    auto r1 = countBits(2);
    printVec(r1); // Expected: [0,1,1]
    auto r2 = countBits(5);
    printVec(r2); // Expected: [0,1,1,2,1,2]
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1,1]\n[0,1,1,2,1,2]",
      python: "[0, 1, 1]\n[0, 1, 1, 2, 1, 2]",
      java: "[0, 1, 1]\n[0, 1, 1, 2, 1, 2]",
      c: "[0,1,1]\n[0,1,1,2,1,2]",
      cpp: "[0,1,1]\n[0,1,1,2,1,2]",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  c: {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    monacoLang: "c",
  },
  cpp: {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    monacoLang: "cpp",
  },
};