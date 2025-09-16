import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import background from "../assets/contactbackground.svg";

function Contato() {
  const contatos = [
    {
      id: 1,
      icon: <FaLinkedin className="w-5 h-5 text-blue-500" />,
      descricao: "LinkedIn",
      link: "https://www.linkedin.com/in/william-araújo-silva-573938379",
    },
    {
      id: 2,
      icon: <FaGithub className="w-5 h-5 text-white" />,
      descricao: "GitHub",
      link: "https://github.com/WilliamAraujoSilva",
    },
    {
      id: 3,
      icon: <FaEnvelope className="w-5 h-5 text-red-400" />,
      descricao: "E-mail",
      link: "mailto:w67543210@gmail.com",
    },
  ];

  return (
    <section
      className="w-full flex flex-col items-center justify-center pb-12 "
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Cabeçalho */}
      <div className="text-center mb-10 max-w-lg">
        <p className="text-red-500 text-sm">Contato</p>
        <h2 className="text-3xl font-bold text-white">
          Gostou do meu trabalho?
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Entre em contato comigo ou acompanhe as minhas redes sociais!
        </p>
      </div>

      {/* Lista de contatos */}
      <div className="flex flex-col w-full max-w-md gap-4">
        {contatos.map((contato) => (
          <motion.a
            key={contato.id}
            href={contato.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#1e1e1e] hover:bg-[#2a2a2a] transition-colors rounded-lg px-5 py-3 shadow-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="flex items-center gap-3">
              {contato.icon}
              <span className="text-white text-sm">{contato.descricao}</span>
            </div>
            <FiArrowUpRight className="w-5 h-5 text-gray-400" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Contato;
