import Dogcard from "./dogcard";

export default function Dogcards({dogdata}) {
    return (
      <div>
        {dogdata.map((dog) => 
        <Dogcard
            key={dog.id}
            nombre={dog.nombre}
            peso={dog.peso}
            imagen={dog.imagen}
            temperamento={dog.temperamento}
            id={dog.id}
            años_de_vida={dog.años_de_vida}
          /> )}
      </div>
    );
  }
  