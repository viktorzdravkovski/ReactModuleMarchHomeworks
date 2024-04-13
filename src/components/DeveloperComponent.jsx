import './DeveloperComponent.css'

const DeveloperComponent = (props) => {
  const {name, role, birthday} = props;
  const formatedBirthday = birthday.toUTCString()

  const clickHandler = () => {
    console.log(name);
  }
  
  return (
    <div id="cards">
      <h3>{name}</h3>
      <h2>{role}</h2>
      <h3>{formatedBirthday}</h3>
      <button onClick={clickHandler}>Log Name</button>
    </div>
  )
}

export default DeveloperComponent;