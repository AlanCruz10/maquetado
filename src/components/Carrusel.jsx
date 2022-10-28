import Pizza from "../assets/images/Pizza.png";
import '../assets/styles/carrusel.css'

function Carrusel() {
  return (
    <center>
      <div className="carrusel-div">
        <button><img src={Pizza} alt="" /></button>
        
        <img src={Pizza} alt="pitza rico" />
        <button />
      </div>
    </center>
  );
}

export default Carrusel;
