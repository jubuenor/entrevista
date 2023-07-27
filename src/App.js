import React, { useState } from 'react';
import './App.css';
import func from './problema';

function App () {
  const [input, setInput] = useState('');


  const funcHandle = () => {
    let arr=func(parseInt(input));
    let ans=''
    if(typeof arr==='string')return alert(arr);
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
        ans+=arr[i][j]+' ';
      }
      ans+='\n'
    }
    alert(ans);
  }



    return (
      <div className="App">

        <div className='cont row g-0' >

          <div className='col col-xl-6 col-sm-12 col-12 explicacion'>
            <h1 className='mt-5 mb-3'> Problema</h1>
            <div>
              <img src='problema.jpeg' alt='problema' width={500}></img>
            </div>

            <h1 className='mt-5'> Explicación</h1>
            <p className='m-5'>

              Primero se hacen las validaciones correspondientes y se inizializa la matriz en 0.
              Esto indicara cuando una posicioin ya fue visitada. 
              Para la solución del problema se utilizo
              un algoritmo que recorre la matriz en forma de espiral.
              Para ello se utilizo una modificacion del algoritmo de busqueda BFS
              donde cada nodo es una posicion de la matriz y cada arista son sus vecinos
              en la matriz. La matriz se recorre utilizando un arreglo con las direcciones en la 
              que se mueve. La posicion inicial es (0 , p-1) y se mueve en sentido
              antihorario. En primera instancia se mueve hacia la derecha, cuando llega al final
              de la columna, el valor de k aumenta en 1 modulo 4, esto con el fin de repetir el 
              movimiento en espiral, y cambia la direccion hacia arriba. Y asi sucesivamente hasta
              recorrier cada direccion. Cuando se llega a una posicion que ya fue visitada, esto se
              toma como el nuevo limite de la matriz por lo que se cambia la direccion de movimiento
              nuevamente.

              Este ciclo se repite hasta que la variable c sea p^2, ya que solo se aumenta el 
              valor de c cuando este encuentra un lugar adecuado al cual posicionarse (cuando
              el valor de la posicion es 0).

              Cuando termina el ciclo retorna la matriz con los valores correspondientes.

            </p>
          </div>
          <div className='col col-xl-6 col-sm-12 col-12 solucion'>
            <h1 className='mt-5 mb-3'> Solución</h1>

            <div>
              <img src='code.png' alt='code' width={500}></img> 
            </div>

            <div>
              <input placeholder='Input' type='text' id='input' className='input m-5' onChange={e=>setInput(e.target.value)}></input>
              <button className='btn btn-secondary' type='button' onClick={funcHandle}>Test</button>
            </div>
            
          </div>
        </div>
      </div>
    );
  
}

export default App;
