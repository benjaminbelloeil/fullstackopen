const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello There! my name is {props.name} and im {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a+b)

  const name = "Swift"
  const age = 30

  return(
    <div>
      <p>Greetings! it is {now.toDateString()}</p>

      <p>{a} plus {b} is {a+b}</p>

      <Hello />

      <Hello name="Benjamin" />

      <Hello name="Regina" />

      <Hello name="java" age={40 + 20}/>

      <Hello name={name} age={age}/>
    </div>
  )
}

export default App
