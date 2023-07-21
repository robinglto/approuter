import Link from "next/link";
import React from "react";

const cargarPaise = () => {
  return fetch("https://restcountries.com/v3.1/all").then((response) =>
    response.json()
  );
};

export default async function page() {
  const espera = await cargarPaise();
  return (
    <div>
      {/* <Link href="dashboard/son" replace prefetch>
        son
      </Link> */}
      {espera.map(({ valor, indice }: any) => (
        <div key={indice}>
          <Link href={`${valor.name.common}`}>{valor.name.common}</Link>
        </div>
      ))}
    </div>
  );
}
