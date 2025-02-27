import Conhecimento from "./conhecimento";
import Introducao from "./introducao";
import Sobre from "./sobre";

export default function Home() {
  return (
    <main>
      <Introducao />
      <Sobre />
      <Conhecimento />
    </main>
  );
}
