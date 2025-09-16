import pokedex from "../assets/thumbnails/pokedex.png";
import organo from "../assets/thumbnails/organo.png";
import listadetarefas from "../assets/thumbnails/listadetarefas.png";
import movieslib from "../assets/thumbnails/movieslib.png";
import nerdprints from "../assets/thumbnails/nerdprints.png";

const thumb = [
  {
    id: 1,
    image: pokedex,
    title: "Pokedex",
    description:
      "Descubra tipos, habilidades e detalhes de Pokémon de forma interativa.",
    link: "https://pokedex-react-eight-pi.vercel.app/",
  },
  {
    id: 2,
    image: organo,
    title: "Organo",
    description:
      "Gerencie equipes e cadastre colaboradores de forma prática e centralizada.",
    link: "https://organo-sage-six.vercel.app/",
  },
  {
    id: 3,
    image: listadetarefas,
    title: "Lista de tarefas",
    description:
      "Organize, filtre e complete suas tarefas com facilidade e rapidez",
    link: "https://to-do-list-blush-nine-99.vercel.app/",
  },
  {
    id: 4,
    image: movieslib,
    title: "Movies Lib",
    description:
      "Explore e busque filmes populares com informações e pôsteres atrativos.",
    link: "https://movies-4yvkz6i1h-william-araujo-s-projects.vercel.app/",
  },
  {
    id: 5,
    image: nerdprints,
    title: "NerdPrints",
    description:
      "Landing page de um projeto freelancer com dominio e hospedagem",
    link: "https://www.nerdprint.com.br/",
  },
];

function Body() {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen pb-36"
      style={{ backgroundColor: "var(--gray-500)" }}
    >
      {/* Header */}
      <div className="text-center mt-5 mb-3">
        <p
          className="font-medium"
          style={{ color: "var(--red-principal)", fontSize: "var(--subtitle)" }}
        >
          Meu trabalho
        </p>
        <h2 className="text-white" style={{ fontSize: "var(--titlemd)" }}>
          Veja meus projetos
        </h2>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-[1040px]">
        {thumb.map((thumbnail) => (
          <div
            key={thumbnail.id}
            className="rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            style={{
              width: "330px",
              minHeight: "280px",
              backgroundColor: "var(--gray-400)",
            }}
          >
            {/* Imagem */}
            <div
              className="overflow-hidden rounded-lg mt-3 mx-auto"
              style={{ width: "306px", height: "156px" }}
            >
              <a
                href={thumbnail.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={thumbnail.image}
                  alt={thumbnail.title}
                  className="w-full h-full rounded-lg object-cover transform transition duration-500 hover:scale-105"
                />
              </a>
            </div>

            {/* Conteúdo */}
            <div className="p-3">
              <h3
                className="mt-5"
                style={{ fontSize: "var(--titlesm)", color: "var(--gray-100)" }}
              >
                {thumbnail.title}
              </h3>
              <p
                style={{ fontSize: "var(--textsm)", color: "var(--gray-200)" }}
              >
                {thumbnail.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
