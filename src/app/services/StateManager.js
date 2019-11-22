export default function StateManager(initialState = {}) {
  // Private variables
  const event = [];
  let state = initialState;

  // Private methods
  const subscribe = (callback) => {
    const index = event.push(callback) - 1;

    return {
      remove: () => {
        delete event[index];
      },
    };
  };

  const publish = () => {
    event.map(callback => callback(state));
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
      publish();
    },
  });

  Object.freeze(this);
}
