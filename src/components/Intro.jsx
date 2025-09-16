import { motion } from "framer-motion";
import avatarIcon from "../assets/Avataricon.svg";
import fotoperfil from "../assets/fotoperfil.jpeg";
import github from "../assets/github.svg";
import html from "../assets/html.svg";
import javascript from "../assets/javascript.svg";
import nodejs from "../assets/nodejs.svg";
import react from "../assets/react.svg";
import css from "../assets/css.svg";
import seta from "../assets/seta.svg";

import background from "../assets/backgroundheader.svg";

const competencias = [
  { icon: github, descricao: "GitHub" },
  { icon: html, descricao: "HTML" },
  { icon: javascript, descricao: "Javascript" },
  { icon: nodejs, descricao: "Node.js" },
  { icon: css, descricao: "CSS" },
  { icon: react, descricao: "React" },
];

function Intro() {
  return (
    <div
      className="flex justify-center w-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="mt-32 flex flex-col items-center justify-center w-[1040px]">
        {/* Foto de perfil */}
        <motion.div
          className="relative w-28 h-28"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={fotoperfil}
            alt="avatar"
            className="w-full h-full rounded-full border-4 border-[#ff6b6b] object-cover shadow-lg"
          />
          <motion.div
            className="absolute bottom-1 right-1 rounded-full p-1 bg-white"
            whileHover={{ rotate: 20, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img src={avatarIcon} alt="avatar-icon" />
          </motion.div>
        </motion.div>
        {/* Foto de perfil */}

        {/* Descrição */}
        <motion.div
          className="flex flex-col items-center justify-center text-center mt-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-gray-200">
            Hello World! Meu nome é{" "}
            <span className="text-[#ff6b6b] font-semibold">William Araújo</span>{" "}
            e sou
          </p>
          <h1 className="text-[#e2e4e9] font-bold text-[56px]">
            Desenvolvedor Front-end
          </h1>
          <p className="text-gray-400 max-w-2xl mt-4 leading-relaxed">
            Transformo necessidades em aplicações reais, envolventes e
            funcionais. Desenvolvo sistemas através da tecnologia, contribuindo
            com soluções inovadoras e eficazes para desafios complexos.
          </p>
        </motion.div>
        {/* Descrição */}

        {/* Competências */}
        <motion.div
          className="flex justify-around items-center w-full gap-4 mt-20 flex-wrap"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {competencias.map((competencia) => (
            <motion.div
              key={competencia.descricao}
              className="flex items-center gap-2 bg-[#2c2c2c] rounded-2xl px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Forçando caixa fixa e centralização */}
              <div className="w-6 h-6 flex items-center justify-center">
                <img
                  src={competencia.icon}
                  alt={competencia.descricao}
                  className="max-w-full max-h-full"
                />
              </div>
              <p className="text-white">{competencia.descricao}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Competências */}

        {/* Seta */}
        <motion.img
          src={seta}
          alt="seta"
          className="mt-24 mb-16 w-8 h-8"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>
    </div>
  );
}

export default Intro;
