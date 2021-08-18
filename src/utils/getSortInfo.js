import { Text, StatHelpText, StatNumber } from "@chakra-ui/react";

const sortInfo = {
  bubble: {
    title: "Bubble Sort",
    description: (
      <>
        <Text>
          Working from the front of the array, the array elements are compared
          against their neighbor. In that comparison, if the larger array
          element is in the smaller index, the two array elements are swapped.
          This means that after each linear scan of the array, the largest
          remaining element will be in its final sorted position.
        </Text>
        <Text>
          Since a linear scan is done for approximately each element of the
          array, the algorithmic time complexity is quadratic, making Bubble
          Sort one of the worst performing of the comparison sorts. It has few
          use cases outside of teaching sorting and algorithmic complexity.
        </Text>
      </>
    ),
    code: `do
  swapped = false
  for i = 1 to indexOfLastUnsortedElement-1
    if leftElement > rightElement
      swap(leftElement, rightElement)
      swapped = true
while swapped`,
    timeComplexity: (
      <>
        <StatNumber>
          O(n<sup>2</sup>)
        </StatNumber>
        <StatHelpText>worst case</StatHelpText>
      </>
    ),
    spaceComplexity: <StatNumber>O(1)</StatNumber>,
    badges: ["stable", "in-place", "slow"],
  },
  selection: {
    title: "Selection Sort",
    description: (
      <>
        <Text>
          Starting at index 0, selection sort will perform a linear scan of the
          entire array and find the smallest element amoung all elements. Then
          it will swap that element with the element at index 0. At that point
          we know that the element at index 0 is in its final sorted position.
          The algorithm will continue making such scans at each index until all
          values are in their sorted position.
        </Text>
        <Text>
          Similar to Bubble Sort, a linear scan is done for approximately each
          element of the array so the algorithmic complexity is quadratic.
          Selection Sort is among the worst performing of the comparison sorts.
          It has few use cases outside of teaching sorting and algorithmic
          complexity.
        </Text>
      </>
    ),
    code: `repeat (numOfElements - 1) times
  set first unsorted element as min    
  for each of the unsorted elements
    if element < currentMinimum
      set element as new minimum
  swap min with first unsorted position`,
    timeComplexity: (
      <>
        <StatNumber>
          O(n<sup>2</sup>)
        </StatNumber>
        <StatHelpText>best/worst case</StatHelpText>
      </>
    ),
    spaceComplexity: <StatNumber>O(1)</StatNumber>,
    badges: ["in-place", "slow"],
  },
  insertion: {
    title: "Insertion Sort",
    description: (
      <>
        <Text>
          In insertion sort, we imagine that the front of the array is sorted.
          Starting from index 1 of the array, we make consectutive swaps with
          the back end of the sorted portion of the array until the element is
          in its relative position to the other sorted elements. This pattern
          continues until all elements have been sorted into their correct
          relative position and there are no more elements to consider.
        </Text>
        <Text>
          Like Bubble Sort and Selection Sort, Insertion Sort has a quadratic
          worst case time complexity. However, if the array is nearly sorted the
          algorithmic time complexity trends toward linear time. This makes
          Insertion Sort a potential candidate for sorting if the array is
          nearly sorted. A variation of Insertion Sort and Merge Sort, known as
          Tim Sort, is used in many languages (most notably Python) as their
          primary sort.
        </Text>
      </>
    ),
    code: `mark first element as sorted
for each unsorted element X
  'extract' the element X
  for j = lastSortedIndex down to 0
    if current element j > X
      move sorted element to the right by 1
    break loop and insert X here`,
    timeComplexity: (
      <>
        <StatNumber>
          O(n<sup>2</sup>)
        </StatNumber>
        <StatHelpText>worst case</StatHelpText>
      </>
    ),
    spaceComplexity: <StatNumber>O(1)</StatNumber>,
    badges: ["stable", "in-place", "slow"],
  },

  heap: {
    title: "Heap Sort",
    description: (
      <>
        <Text>
          Heap Sort uses a heap data structure to continously find the maximum
          value and move it to the back of the array. A heap can be built in
          place in an array. After building the heap, the maximum value is
          removed and swapped to the back element of the array. Then the heap
          structure is reevaluated and the process continues until each next
          maximum element is moved to its position in the back of the array.
        </Text>
        <Text>
          Building a heap from an array will take O(n) time, and each swap will
          take O(log(n)) for n values. Therefor, time complexity for Heap Sort
          will be O(n + n*log(n)) which simplifies to O(n*log(n)). Although heap
          sort is a fast sorting algorithm, it generally performs worse in
          practice than its other log-linear time complexity sorts, such as
          Quick Sort and Merge Sort. The underlying heap data structure,
          however, is widely used for maintaining priority queues or finding the
          smallest/largest element of a collection.
        </Text>
      </>
    ),
    code: `# construct max heap
for element of array
  while elementIndex > 0
    if parent > element
        swap(element, parent)
        elementIndex = parentIndex

# sort by sequentially placing max elements
repeat (numOfElements - 1) times
  swap(maxElement, lastUnsortedElement)
  heapifyDown(0, lastUnsortedElementIndex)`,
    timeComplexity: (
      <>
        <StatNumber>O(n*log(n))</StatNumber>
        <StatHelpText>best/worst case</StatHelpText>
      </>
    ),
    spaceComplexity: <StatNumber>O(1)</StatNumber>,
    badges: ["in-place", "fast"],
  },
  merge: {
    title: "Merge Sort",
    description: (
      <>
        <Text>
          Merge Sort is one of the more difficult sorts to visualize.
          Essentially what is happening is the array is getting split into
          consecutively smaller arrays, until each subarray is the length of 0
          or 1. Each of the smaller arrays is then consectively merged with
          another array, maintaining the sorted order. Merge Sort utilizes
          recursion to both split and then later merge the subarrays.
        </Text>
        <Text>
          The best, worst, and average case time complexity of Merge Sort is
          O(n*log(n)), making it consistently one of the fastest comparison
          sorts. Since Merge Sort is also stable, it is sometimes preferred over
          Quick Sort if the array contains sorted objects rather than just
          integers (when stability matters). However, Merge Sort has a linear
          space complexity due to the auxiliary arrays being created on each
          merge, so if memory is going to be an issue than other sorts may serve
          better.
        </Text>
      </>
    ),
    code: `split elements into partitions of size 1
recursively merge adjacent partitions
  for i = leftPartIdx to rightPartIdx
    if leftPartHeadValue <= rightPartHeadValue
      copy leftPartHeadValue      
    else: copy rightPartHeadValue      
copy elements back to original array`,
    timeComplexity: (
      <>
        <StatNumber>O(n*log(n))</StatNumber>
        <StatHelpText>best/worst case</StatHelpText>
      </>
    ),
    spaceComplexity: <StatNumber>O(n)</StatNumber>,
    badges: ["stable", "fast"],
  },
  quick: {
    title: "Quick Sort",
    description: (
      <>
        <Text>
          Quick Sort, like Merge Sort utilizes recursion to partition an array
          into smaller portions. On each recursive call, a pivot is selected and
          then each other element is moved to the left or right of the pivot
          depending on its relative size. After each recursive call, the pivot
          that was selected will be in its final position within the array.
        </Text>
        <Text>
          Quick Sort can make a series of long range swaps, making it unstable.
          However, it generally out performs all other sorting algorithms. Quick
          Sort has a quadratic worst case time complexity. However, the average
          case time complexity of O(n*log(n)) is generally used because the
          worst case time complexity is nearly impossible to get on large input
          sizes.
        </Text>
      </>
    ),
    code: `for each (unsorted) partition
  set first element as pivot
  storeIndex = pivotIndex + 1
  for i = pivotIndex + 1 to rightmostIndex
    if element[i] < element[pivot]
      swap(i, storeIndex); storeIndex++
  swap(pivot, storeIndex - 1)`,
    timeComplexity: (
      <>
        <StatNumber>O(n*log(n))</StatNumber>
        <StatHelpText>average case</StatHelpText>
      </>
    ),
    spaceComplexity: <StatNumber>O(log(n))</StatNumber>,
    badges: ["in-place", "fast"],
  },
};

export const getSortInfo = (sortType) => {
  return sortInfo[sortType];
};
