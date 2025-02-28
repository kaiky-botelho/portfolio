import Conhecimento from "./conhecimento";
import Experiencia from "./experiencia";
import Introducao from "./introducao";
import Sobre from "./sobre";

export default function Home() {
  return (
    <main>
      <Introducao />
      <Sobre />
      <Conhecimento />
      <Experiencia />
    </main>
  );
}
