'use client'
import { useEffect, useRef, useState } from "react";
import { Elemento1 } from "./components/Elemento1";
import { Elemento2 } from "./components/Elemento2";
import { Elemento3 } from "./components/Elemento3";
import { Elemento4 } from "./components/Elemento4";
import { Elemento5 } from "./components/Elemento5";
import { Footer } from "./components/Footer";
import { Pagina2 } from "./pagina2/Pagina2";
import { Pagina3 } from "./Pagina3/Pagina3";
import { Pagina4 } from "./pagina4/Pagina4";

const desaparecer = (element: any) => {
  element.current?.animate([
    { opacity: 1 }, { opacity: 0}
  ], {
    duration: 0,  // Duración en milisegundos
    fill: 'forwards'  // Mantiene el estado final después de que la animación termina
  });
}
const aparecer = (element: any) => {
  element.current?.animate([
    { opacity: 0 }, { opacity: 1}
  ], {
    duration: 300,  // Duración en milisegundos
    fill: 'forwards'  // Mantiene el estado final después de que la animación termina
  });
}
const aparecerDerecha = (element: any) => {
  element.current?.animate([
    { opacity: 0, transform: 'translateX(20px)' },  // Estado inicial
    { opacity: 1, transform: 'translateX(0px)' }
  ], {
    duration: 300,  // Duración en milisegundos
    fill: 'forwards'  // Mantiene el estado final después de que la animación termina
  });
}
const aparecerIquierda = (element: any) => {
  element.current?.animate([
    { opacity: 0, transform: 'translateX(-20px)' },  // Estado inicial
    { opacity: 1, transform: 'translateX(0px)' }
  ], {
    duration: 300,  // Duración en milisegundos
    fill: 'forwards'  // Mantiene el estado final después de que la animación termina
  });
}
const desaparecerDerecha = (element: any) => {
  element.current?.animate([
    { opacity: 1, transform: 'translateX(0px)' },  // Estado inicial
    { opacity: 0, transform: 'translateX(20px)' }
  ], {
    duration: 300,  // Duración en milisegundos
    fill: 'forwards'  // Mantiene el estado final después de que la animación termina
  });
}
const desaparecerIzquierda = (element: any) => {
  element.current?.animate([
    { opacity: 1, transform: 'translateX(0px)' },  // Estado inicial
    { opacity: 0, transform: 'translateX(-20px)' }
  ], {
    duration: 300,  // Duración en milisegundos
    fill: 'forwards'  // Mantiene el estado final después de que la animación termina
  });
}
const desaparecerAbajo = (element: any) => {
  element.current?.animate([
    { opacity: 1, transform: 'translateY(0px)' },  // Estado inicial
    { opacity: 0, transform: 'translateY(20px)' }
  ], {
    duration: 300,  // Duración en milisegundos
    fill: 'forwards'  // Mantiene el estado final después de que la animación termina
  });
}

const bailesito = (element:any) => {
  element.current?.animate([
    { transform: 'rotate(0deg)' },  // Estado inicial en la posición original
    { transform: 'rotate(-3deg)' },  // Rota un poco hacia la izquierda
    { transform: 'rotate(3deg)' },  // Rota un poco hacia la derecha
    { transform: 'rotate(0deg)' }  // Regresa a la posición original
  ], {
    duration: 400,  // Duración de la animación en milisegundos
    iterations: Infinity,  // La animación se repite infinitamente
    easing: 'ease-in-out'  // Suaviza la entrada y salida de la animación
  });
}
const bailesito2 = (element:any) => {
  element.current?.animate([
    { transform: 'rotate(0deg)' },  // Estado inicial en la posición original
    { transform: 'rotate(3deg)' },  // Rota un poco hacia la izquierda
    { transform: 'rotate(-3deg)' },  // Rota un poco hacia la derecha
    { transform: 'rotate(0deg)' }  // Regresa a la posición original
  ], {
    duration: 400,  // Duración de la animación en milisegundos
    iterations: Infinity,  // La animación se repite infinitamente
    easing: 'ease-in-out'  // Suaviza la entrada y salida de la animación
  });
}
export default function Home() {
  const [clickCounter, setClickCounter] = useState(0);
  const paginaSlide1 = useRef<HTMLDivElement>(null);

  const pagina1 = useRef<HTMLDivElement>(null);
  const elemento1 = useRef<HTMLDivElement>(null);
  const elemento2 = useRef<HTMLDivElement>(null);
  const elemento3 = useRef<HTMLDivElement>(null);
  const elemento4 = useRef<HTMLDivElement>(null);
  const elemento5 = useRef<HTMLDivElement>(null);
  const footer = useRef<HTMLDivElement>(null);
  const pagina2 = useRef<HTMLDivElement>(null);
  const pagina3 = useRef<HTMLDivElement>(null);
  const pagina4 = useRef<HTMLDivElement>(null);

  useEffect(()=>{

  },[]);
  useEffect(()=>{
    switch (clickCounter) {
      case 1:
        desaparecer(elemento1);
        desaparecer(elemento2);
        desaparecer(elemento3);
        desaparecer(elemento4);
        desaparecer(elemento5);
        desaparecer(footer);
        pagina1.current?.classList.add('shadows');
        aparecerDerecha(elemento1);
        break;
      case 2:
        aparecerIquierda(elemento2);
        break;
      case 3:
        aparecerDerecha(elemento3);
        break;
      case 4:
        aparecerIquierda(elemento4);
        break;
      case 5:
        aparecerDerecha(elemento5);
        break;
      case 6:
        aparecerIquierda(footer);
        break;
      case 7:
        elemento3.current?.animate([
          { opacity: 1, height: '84px', transform: 'translateY(0px)' },  // Estado inicial
          { opacity: 0, height: '0px', transform: 'translateY(-100px)' }
        ], {
          duration: 300,  // Duración en milisegundos
          fill: 'forwards'  // Mantiene el estado final después de que la animación termina
        });
        break;
      case 8:
        desaparecerIzquierda(pagina1);
        aparecerDerecha(pagina2);
        break;
      case 9:
        desaparecerIzquierda(pagina2);
        aparecerDerecha(pagina3);
        break;
      case 10:
        desaparecerIzquierda(pagina3);
        aparecerDerecha(pagina1);
        pagina1.current?.classList.add('shadows');
        break;
      case 11: // penúltimo
        desaparecerIzquierda(elemento1);
        desaparecerDerecha(elemento2)
        desaparecerIzquierda(elemento3);
        desaparecerDerecha(elemento4);
        desaparecerIzquierda(elemento5);
        desaparecerDerecha(footer);
        break;
      case 12: //  último
        aparecer(paginaSlide1);
        break;
      default:
        break;
    }
  },[clickCounter]);
  const presionaClick = () => {
    setClickCounter(clickCounter + 1);
  }
  return (
    <main onClick={presionaClick}>
      <div className="mainContainer">
        { clickCounter === 0 &&
          <div ref={ paginaSlide1 } className="paginaSlide1">
            <img src={'/images/foto1Comercial.jpg'} alt="foto" />
          </div>
        }
        { (clickCounter > 0 && clickCounter < 8) &&
          <div className="container" ref = { pagina1 }>
            <div ref = { elemento1 }>
              <Elemento1/>
            </div>
            <div ref = { elemento2 }>
              <Elemento2/>
            </div>
            <div ref = { elemento3 }>
              <Elemento3/>
            </div>
            <div ref = { elemento4 }>
              <Elemento4/>
            </div>
            <div ref = { elemento5 }>
              <Elemento5/>
            </div>
            <div  ref = { footer }>
              <Footer/>
            </div>
          </div>
        }
        { clickCounter === 8 &&
          <div ref = { pagina2 }>
            <Pagina2 />
          </div>
        }
        { clickCounter === 9 &&
          <div ref = { pagina3 }>
            <Pagina3/>
          </div>
        }
        { (clickCounter > 9 && clickCounter <12) &&
          <div className="container" ref = { pagina1 }>
            <div ref = { elemento1 }>
              <Elemento1/>
            </div>
            <div ref = { elemento2 }>
              <Elemento2/>
            </div>
            <div ref = { elemento3 }>
              <Elemento3/>
            </div>
            <div ref = { elemento4 }>
              <Elemento4/>
            </div>
            <div ref = { elemento5 }>
              <Elemento5/>
            </div>
            <div  ref = { footer }>
              <Footer/>
            </div>
          </div>
        }
        { clickCounter === 12 &&
          <div ref={ paginaSlide1 } className="paginaSlide1">
            <img src={'/images/foto2Comercial.jpg'} alt="foto" />
          </div>
        }
      </div>
    </main>
  );
}
