export default function StateManager(initialState = {}) {
  // Private variables
  const observers = [];
  let state = initialState;

  // Private methods
  const subscribe = (observer) => {
    const index = observers.push(observer) - 1;

    return {
      remove: () => {
        delete observers[index];
      },
    };
  };

  const notify = () => {
    observers.map(observer => observer(state));
  };

  const setState = (newState) => {
    state = Object.assign(
      state,
      newState,
    );
  };

  // Reveal methods
  this.subscribe = subscribe;
  this.getState = () => state;
  this.setState = new Proxy(setState, {
    apply(target, thisArgs, argumentsList) {
      Reflect.apply(target, thisArgs, argumentsList);
      notify();
    },
  });

  Object.freeze(this);
}
