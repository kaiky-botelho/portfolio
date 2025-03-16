import Conhecimento from "./conhecimento";
import Contato from "./contato";
import Experiencia from "./experiencia";
import Introducao from "./introducao";
import Projetos from "./projetos";
import Sobre from "./sobre";

export default function Home() {
  return (
    <main>
      <Introducao />
      <Sobre />
      <Conhecimento />
      <Experiencia />
      <Projetos />  
      <Contato />
    </main>
  );
}
