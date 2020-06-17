import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { changeName } from './store/reducers/hello';

function App() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const store = useSelector((state) => state.hello);

  const handleClick = () => {
    dispatch(changeName(name));
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App bg-gray-200">
      <h1>Hello world!</h1>
      <input type="text" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        dispatch
      </button>
      <br />
      <code>{JSON.stringify(store, null, 2)}</code>
    </div>
  );
}

export default App;
