

let initialStateObject = {
  InitialState: 0
}

const CounterReducer = (state = [], action) => {
  let index = action.index
  let tempState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case "Increament":
      tempState[index]["InitialState"] = tempState[index]["InitialState"] + 1
      return [...tempState]
    case "Decrement":
      tempState[index]["InitialState"] = tempState[index]["InitialState"] - 1
      return [...tempState]
      break;
    case "AddCounter":
      tempState.push(initialStateObject);
      return tempState
    case "DeleteCounter":
      tempState.splice(index, 1)
      return [...tempState]
    default:
      return [...tempState]
  }
}

export default CounterReducer

/// above some time object mutable error is arise because nested object is not mutate with spread operator
///Important Note for depply copy of array of object or nested object is first convert it to string using JSON.STRINGIFY then json.parse