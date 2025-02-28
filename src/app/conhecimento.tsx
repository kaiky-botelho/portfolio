import '../styles/global.css';
import "../styles/conhecicimento.css";
import MiniCard from '@/components/miniCard/miniCard';

export default function Conhecimento() {   
    return(
        <main className='conhecimento container'>
            <h2>conhecimento<span>.</span></h2>
            <div className="conhecimento-cards">
                <MiniCard subTit='html' iconSrc='../assets/icones/html.png' />
                <MiniCard subTit='css' iconSrc='../assets/icones/css.png' />
                <MiniCard subTit='js' iconSrc='../assets/icones/js.png' />
                <MiniCard subTit='react' iconSrc='../assets/icones/react.png' />
                <MiniCard subTit='figma' iconSrc='../assets/icones/figma.png' />
                <MiniCard subTit='adobe xd' iconSrc='../assets/icones/adobe.png' />
            </div>
        </main>
    )
}