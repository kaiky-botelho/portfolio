import '../styles/global.css';
import "../styles/conhecicimento/conhecicimento.css";
import MiniCard from '@/components/miniCard/miniCard';

export default function Conhecimento() {   
    return(
        <main className='conhecimento container'>
            <h2>conhecimento<span>.</span></h2>
            <div className="conhecimento-cards">
                <MiniCard subTit={'html'} iconSrc={''} />
                <MiniCard subTit={'css'} iconSrc={''} />
                <MiniCard subTit={'js'} iconSrc={''} />
                <MiniCard subTit={'react'} iconSrc={''} />
                <MiniCard subTit={'figma'} iconSrc={''} />
                <MiniCard subTit={'adobe xd'} iconSrc={''} />
            </div>
        </main>
    )
}