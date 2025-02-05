This solution uses `useReducer` to manage the state. The reducer handles each update individually, preventing the overwriting issue caused by automatic batching:

```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    for (let i = 0; i < 5; i++) {
      dispatch({ type: 'increment' });
    }
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

Using `useReducer` ensures that each update is processed individually, leading to the expected result of the counter incrementing by five.