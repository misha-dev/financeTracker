const ReactX = () => {
  const state = [];
  let callIndex = -1;
  const useState = (initialValue) => {
    let localIndex = ++callIndex;
    if (state[localIndex] === undefined) {
        state[localIndex] = initialValue
    }

    const setState = (value) => {
        state[localIndex] = value
    }

    return [state, setState]
  };

  return { useState };
};
