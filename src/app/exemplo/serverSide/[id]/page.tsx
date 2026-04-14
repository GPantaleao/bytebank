// import { use } from "react";

export default async function ExemploServer({ params }: { params: Promise<{ id: string }> }) {
  // Usamos async/await pois o componente é server-side e os parâmetros são resolvidos de forma assíncrona
  const { id } = await params;

  // Alternativamente, podemos usar o hook use (mais recente) para resolver os parâmetros de forma síncrona, para isso devemos retirar o "async" do componente e o "await" da resolução dos parâmetros
  // const { id } = use(params); 

  return (
    <div>
      <main>
        ROTA DINÂMICA SERVER SIDE - ID: {id}
        <br />
        CAMINHO DA PASTA: /exemplo/serverSide/[id]
        <br />
        CAMINHO DA ROTA: /exemplo/serverSide/:id (EX: /exemplo/serverSide/123)
      </main>
    </div>
  );
}