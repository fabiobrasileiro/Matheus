import "./styles.css"


export default function Navbar() {
  return (
    <nav class="navbar">
      <img src="./logo.svg" alt="" />
      <div>
        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a class="active" href="#home">About</a></li>
          <li><a class="active" href="#home">Contact</a></li>
          <li><a class="active" href="#home">Info</a></li>
        </ul>
      </div>
    </nav>


  )
}

