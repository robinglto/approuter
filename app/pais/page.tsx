import React from "react";

const cargarPaise = (pais: any) => {
  return fetch(`https://restcountries.com/v3.1/name/${pais}`)
    .then((response) => response.json())
    .then((valores) => valores[0]);
};

async function page({ params }: any) {
  const { pais } = params;
  const datos = await cargarPaise(pais);

  return (
    <>
      <div>
        <p>{datos.name.common}</p>
        <p>{datos.region}</p>
      </div>
    </>
  );
}

export default page;
