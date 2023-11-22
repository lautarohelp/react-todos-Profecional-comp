import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css"

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener({sincronize});
  if (show) {
    return (
      <div className="contenedorAlert">
        <div className="contenedorAlert--div">
        <p>Hubieron cambios en otra pestaña de tu navegador o aplicacion!! ¿Deseas actualisar tus TODOS?</p>
        <button
        className="botonChangue"
        onClick={() => toggleShow(false)}
        >si!</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}


export { ChangeAlert }