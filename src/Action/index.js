

const Increment = (index) => {
  return {
    type: "Increament",
    index: index
  }
}

const Decrement = (index) => {
  return {
    type: "Decrement",
    index: index

  }
}
const AddCounter = () => {
  return {
    type: "AddCounter"
  }
}

const DeleteCounter = (index) => {
  return {
    type: "DeleteCounter",
    index: index
  }

}

export {
  Increment,
  Decrement,
  AddCounter,
  DeleteCounter
}