import comingsoon from "../assets/comingsoon2.png"
import Avatar from "../assets/Avatar.jpeg"
import darknigh from "../assets/darknight.jpeg"
import godzillavskingkong from "../assets/godzillavskingkong.jpeg"
import Noah from "../assets/Noah.jpeg"
import warcraft from "../assets/warcraft.jpeg"
import roses from "../assets/roses.jpg"



export const Moviedetails = () => {
  return (
    <div>
        <section className="hero">
   
    {/* <div className="hero-img ">
      <img   src={comingsoon} alt="Commingsoon" />
    </div> */}
     <div className="hero-text ">
      {/* <p className="coming">COMING SOON</p> */}
      <img  src={comingsoon} alt="Commingsoon" />
      <h2>Streaming Seasons</h2>
             <div className="buttons">
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  </section>

  <section className="row">
    <h3>Latest Movies</h3>
    <div className="thumbnails">
      <img src={Avatar} alt="Avatar" />
      <img src={darknigh} alt="darknigh" />
      <img src={godzillavskingkong} alt="godzillavskingkong" />
      <img src={Noah} alt="Noah" />
      <img src={warcraft} alt="warcraft" />
     <img src={darknigh} alt="darknigh" />
     <img src={godzillavskingkong} alt="godzillavskingkong" />
      <img src={Noah} alt="Noah" />
      <img src={warcraft} alt="warcraft" />
      <img src={roses} alt="Noah" />
      
    </div>
  </section>

  <section className="row">
    <h3>Upcoming Movies</h3>
    <div className="thumbnails">
      <img src={Avatar} alt="Avatar" />
      <img src={darknigh} alt="darknigh" />
      <img src={godzillavskingkong} alt="godzillavskingkong" />
      <img src={Noah} alt="Noah" />
      <img src={warcraft} alt="warcraft" />
      
      <img src={darknigh} alt="darknigh" />
      <img src={godzillavskingkong} alt="godzillavskingkong" />
      <img src={Noah} alt="Noah" />
      <img src={warcraft} alt="warcraft" />
      <img src={Noah} alt="Noah" />
     
    </div>
  </section>
    </div>
  )
}
