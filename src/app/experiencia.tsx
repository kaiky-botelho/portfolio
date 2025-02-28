import Timeline, { TimelineItem } from "@/components/timeline/timeline";
import '../styles/experiencia.css';

export default function Experiencia() { 
  return (
<main className="experiencia container">
  <h2>formação <span>&</span> experiencia<span>.</span></h2>
  <div className="experiencia-itens">
    <div className="experiencia-item">
    <Timeline>
      <TimelineItem timestamp="2024 - ATUAL" type="Técnico" subtitle="DESENVOLVIMENTO DE SISTEMAS" title="SENAI Marcio Bagueira Leal" />
      <TimelineItem timestamp="2023 - 2024" type="Técnico" subtitle="DESENVOLVIMENTO DE SISTEMAS" title="ETEC Pedro Badran" />
      <TimelineItem timestamp="2020 - 2022"  subtitle="Ensino Médio" title="ETEC Professor José Ignácio Azevedo Filho" />
    </Timeline>
    </div>
    <div className="experiencia-item">

    </div>
  </div>
</main>
  );
}