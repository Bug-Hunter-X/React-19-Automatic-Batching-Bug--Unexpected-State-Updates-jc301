# React 19 Automatic Batching Bug

This repository demonstrates a potential bug in React 19 related to the automatic batching of state updates.  The issue arises when updating state within a loop, where the batching mechanism might unexpectedly overwrite intermediate updates.

## Bug Description

React 19 introduces automatic batching for state updates, which generally improves performance. However, in scenarios where state is updated multiple times within a single event cycle (such as a loop), this can lead to incorrect final state values. The final update in the batch overwrites previous updates within the same event loop, leading to unexpected results.

## Reproduction

The `bug.js` file shows a simple component with a counter that increments within a loop.  In React 19, clicking the button may result in the counter only incrementing by one instead of the expected five.

## Solution

The `bugSolution.js` file demonstrates a solution using `useReducer` for state management. The reducer allows for precise and predictable state transformations, resolving the issue of overwritten updates.

## Additional Information

This bug is likely due to React 19's changes in how updates are batched.  Understanding these changes is crucial for avoiding unexpected behavior in your applications.

