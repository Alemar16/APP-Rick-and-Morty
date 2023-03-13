import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();

  return (
    <div>
      <h1>Detalle del personaje {detailId}</h1>
      {/* Aquí puedes mostrar la información detallada del personaje */}
    </div>
  );
}
