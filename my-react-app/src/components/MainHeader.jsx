import{Link} from "react-router-dom"
import Image from  "../images/header.svg"




function MainHeader() {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
        
            <h1>Grow your skills to advance your career path</h1>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi doloribus laudantium corporis libero mollitia alias illo porro officia ullam voluptate.
            </p>
            <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main_header-right">
         
          <div className="main_header-image">
            <img src={Image} alt="Main Header Image" />
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader