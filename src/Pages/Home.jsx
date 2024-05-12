import { Link } from "react-router-dom";
import Card from "../components/ui/Card";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/28/a8/57/28a85792a546979de609617dfe8075f2.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <Card>
            <h1 className="mb-5 text-5xl font-bold">Yugipedia</h1>
            <p className="mb-5">
              Bienvenido al wikipedia de cartas de Yu gi oh consultas
              información de cartas de cualquier generación. Contamos con todas
              las cartas existentes en el mundo del juego de moustros
            </p>
            <button className="btn btn-primary">
              {" "}
              <Link to="/display" className="btn btn-ghost text-xl">
                duelo
              </Link>{" "}
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
