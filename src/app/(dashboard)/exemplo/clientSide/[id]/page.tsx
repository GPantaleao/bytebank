"use client"; // Usamos "use client" para indicar que este componente é client-side

import { useParams } from "next/navigation";

export default function ExemploClient() {
  // Para usarmos hooks normalmente o componente deve ser client-side
  // O hook useParams() é usado para acessar os parâmetros da rota dinâmica, ele retorna um objeto com os parâmetros definidos na rota, nesse caso, o "id" 👇
  const { id } = useParams(); 

  return (
    <div className="">
      <main className="">
        ROTA DINÂMICA USE CLIENT - ID: {id}
        <br />
        CAMINHO DA PASTA: /exemplo/clientSide/[id]
        <br />
        CAMINHO DA ROTA: /exemplo/clientSide/:id (EX: /exemplo/clientSide/123)
      </main>
    </div>
  );
}