
import "./projects.css";
import "./ProjectsResponsive.css";
import kagit from "./kagit.png";
import tus from "./Keyboard button.png";
import button from "./Power button.png";
import closebutton from "./closebutton.png";
import { useState } from "react";

const Projects = () => {
  const [projeisim, setProjeisim] = useState("");
  const [proje, setProje] = useState("");
  const [projebaslik, setProjebaslik] = useState("");
  const projeaciklama =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ";
  const item1 = document.querySelector(".item1");
  return (
    <>
      <div className="Pages">
        <div className="Projects mb-24">
          <div className="Proje">
            <div className={"popup"}>
              <img
                src={closebutton}
                alt=""
                id={"kapat"}
                onClick={() => {
                  document.querySelector(".popup").classList.toggle("acik");
                  const projeitem = document.querySelectorAll(".proje-item");
                  for (let i = 0; i < projeitem.length; i++) {}
                  const item1 = document.querySelectorAll(".item1");
                  const item2 = document.querySelectorAll(".item2");
                  for (let i = 0; i < item1.length; i++) {
                    item1[i].classList.remove("beyazkapat");
                    item2[i].classList.remove("beyazkapat");
                  }
                }}
              ></img>
              <h1>{projeisim}</h1>
              <hr></hr>
              <p>{proje}</p>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                    setProjeisim("Javascript");
                    setProje(projeaciklama);
                }, 250);
              }}
            >
              <div className="item1">
                <pre id={"item1-item"}>Javascript</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>Javascript</pre>
              </div>
              <div className="item3">
                <pre>Javascript</pre>
              </div>
            </div>
              <div
                  className="proje-item"
                  onClick={(e) => {
                      document.querySelector(".popup").classList.remove("acik");
                      const item1 = document.querySelectorAll(".item1");
                      const item2 = document.querySelectorAll(".item2");
                      for (let i = 0; i < item1.length; i++) {
                          item1[i].classList.remove("beyazkapat");
                          item2[i].classList.remove("beyazkapat");
                      }
                      setTimeout(() => {
                          document.querySelector(".popup").classList.add("acik");
                          setProjeisim("HTML5");
                          setProje(projeaciklama);
                      }, 250);
                  }}
              >
              <div className="item1">
                <pre>React</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>React</pre>
              </div>
              <div className="item3">
                <pre>React</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("CSS3");
                setProje(projeaciklama);
              }}
            >
              <div className="item1">
                <pre>CSS3</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>CSS3</pre>
              </div>
              <div className="item3">
                <pre>CSS3</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("Typescript");
                setProje(projeaciklama);
              }}
            >
              <div className="item1">
                <pre>TailwindCSS</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                  <pre>TailwindCSS</pre>
              </div>
              <div className="item3">
                  <pre>TailwindCSS</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("React");
                setProje(projeaciklama);
              }}
            >
              <div className="item1">
                <pre>Svelte</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                  <pre>Svelte</pre>
              </div>
              <div className="item3">
                  <pre>Svelte</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");
                setProje(projeaciklama);
              }}
            >
              <div className="item1">
                <pre>NextJS</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                  <pre>NextJS</pre>
              </div>
              <div className="item3">
                  <pre>NextJS</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");

                setProje(projeaciklama);
              }}
            >
              <div className="item1">
                <pre>Typescript</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                  <pre>Typescript</pre>
              </div>
              <div className="item3">
                  <pre>Typescript</pre>
              </div>
            </div>

            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");

                setProje(projeaciklama);
                if (e.target === document.querySelector(".item1")) {
                }
                if (e.target === document.querySelector(".item2")) {
                }
              }}
            >
              <div className="item1">
                <pre>SASS</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>SASS</pre>
              </div>
              <div className="item3">
                <pre>SASS</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");

                setProje(projeaciklama);
                if (e.target === document.querySelector(".item1")) {
                }
                if (e.target === document.querySelector(".item2")) {
                }
              }}
            >
              <div className="item1">
                <pre>NodeJS</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>NodeJS</pre>
              </div>
              <div className="item3">
                <pre>NodeJS</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");

                setProje(projeaciklama);
                if (e.target === document.querySelector(".item1")) {
                }
                if (e.target === document.querySelector(".item2")) {
                }
              }}
            >
              <div className="item1">
                <pre>Bootstrap</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>Bootstrap</pre>
              </div>
              <div className="item3">
                <pre>Bootstrap</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");

                setProje(projeaciklama);
                if (e.target === document.querySelector(".item1")) {
                }
                if (e.target === document.querySelector(".item2")) {
                }
              }}
            >
              <div className="item1">
                <pre>HTML5</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>HTML5</pre>
              </div>
              <div className="item3">
                <pre>HTML5</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");

                setProje(projeaciklama);
                if (e.target === document.querySelector(".item1")) {
                }
                if (e.target === document.querySelector(".item2")) {
                }
              }}
            >
              <div className="item1">
                <pre>Python</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>Python</pre>
              </div>
              <div className="item3">
                <pre>Python</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");

                setProje(projeaciklama);
                if (e.target === document.querySelector(".item1")) {
                }
                if (e.target === document.querySelector(".item2")) {
                }
              }}
            >
              <div className="item1">
                <pre>Figma</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>Figma</pre>
              </div>
              <div className="item3">
                <pre>Figma</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");

                setProje(projeaciklama);
                if (e.target === document.querySelector(".item1")) {
                }
                if (e.target === document.querySelector(".item2")) {
                }
              }}
            >
              <div className="item1">
                <pre>Photoshop</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>Photoshop</pre>
              </div>
              <div className="item3">
                <pre>Photoshop</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");

                setProje(projeaciklama);
                if (e.target === document.querySelector(".item1")) {
                }
                if (e.target === document.querySelector(".item2")) {
                }
              }}
            >
              <div className="item1">
                <pre>Aseprite</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>Aseprite</pre>
              </div>
              <div className="item3">
                <pre>Aseprite</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");

                setProje(projeaciklama);
                if (e.target === document.querySelector(".item1")) {
                }
                if (e.target === document.querySelector(".item2")) {
                }
              }}
            >
              <div className="item1">
                <pre>FL Studio</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>FL Studio</pre>
              </div>
              <div className="item3">
                <pre>FL Studio</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");

                setProje(projeaciklama);
                if (e.target === document.querySelector(".item1")) {
                }
                if (e.target === document.querySelector(".item2")) {
                }
              }}
            >
              <div className="item1">
                <pre>git</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>git</pre>
              </div>
              <div className="item3">
                <pre>git</pre>
              </div>
            </div>
            <div
              className="proje-item"
              onClick={(e) => {
                document.querySelector(".popup").classList.remove("acik");
                const item1 = document.querySelectorAll(".item1");
                const item2 = document.querySelectorAll(".item2");
                for (let i = 0; i < item1.length; i++) {
                  item1[i].classList.remove("beyazkapat");
                  item2[i].classList.remove("beyazkapat");
                }
                setTimeout(() => {
                  document.querySelector(".popup").classList.add("acik");
                }, 150);
                setProjeisim("JS / React");

                setProje(projeaciklama);
                if (e.target === document.querySelector(".item1")) {
                }
                if (e.target === document.querySelector(".item2")) {
                }
              }}
            >
              <div className="item1">
                <pre>api system</pre>
                <img className={"kagit"} src={kagit} alt="" />
              </div>
              <div className="item2">
                <pre>api system</pre>
              </div>
              <div className="item3">
                <pre>api system</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
