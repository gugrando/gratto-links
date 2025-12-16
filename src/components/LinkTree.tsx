import { TreeCard } from '@/utils/TreeCard';

export default function App() {
  return (
    // FUNDO GERAL DA PÁGINA (A parte de baixo dos cards)
    // Usando um vermelho escuro que vai pro preto, igual referência
    <div className="min-h-screen bg-gradient-to-b from-[#991b1b] via-[#450a0a] to-black flex flex-col items-center">
      
      {/* --- BLOCO DE TOPO (PRETO SÓLIDO) --- */}
      {/* w-full = largura total | rounded-b-[3.5rem] = a curva embaixo */}
      <div className="w-full bg-[#0a0a0a] rounded-b-[3.5rem] shadow-2xl pb-12 pt-10 px-6 flex flex-col items-center relative z-20 mb-8">
        
        <div className="w-full max-w-md md:max-w-3xl flex flex-col items-center text-center">
          {/* Logo Circular */}
          <div className="w-28 h-28 md:w-36 md:h-36 mx-auto bg-[#0a0a0a] rounded-full border-2 border-orange-500/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(234,88,12,0.3)]">
             
             <img src="/img/gratto-logo.png" className="w-full h-full rounded-full object-cover"/>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-2">
            Gratto
          </h1>
          <p className="text-gray-400 text-sm md:text-xl font-light">
            A Melhor Pizza Gourmet de Farroupilha
          </p>
        </div>

      </div>

      {/* --- ÁREA DOS CARDS --- */}
      {/* Padding top (pt-4) para dar um respiro leve da curva preta */}
      <div className="w-full max-w-md md:max-w-3xl px-6 pb-20">
        
        {/* GAP-8: Aqui controlamos a distância. Menor que isso a pizza de baixo pega no texto de cima */}
        <div className="flex flex-col gap-8 md:gap-10">
          
          {/* CARD 1: SITE */}
          <TreeCard
            title="Site"
            subtitle="Veja nosso Site"
            href="#"
            imageSrc="/img/p2.png" 
            iconSrc="/img/web.png"
            layout="imageLeft"           
            gradientDirection="default"
            iconPosition="top-right"
          />

          {/* CARD 2: PEDIDOS */}
          <TreeCard
            title="Whatsapp"
            subtitle="Pedir no WhatsApp (15% OFF)"
            href="#"
            imageSrc="/img/p1.png"
            iconSrc="/img/whatsapp.png"
            layout="imageRight"          
            gradientDirection="reverse"  
            iconPosition="top-left"
          />

          {/* CARD 3: WHATSAPP */}
          <TreeCard
            title="Ifood"
            subtitle="Pedir no Ifood"
            href="#"
            imageSrc="/img/p3.png"
            iconSrc="/img/ifood.png"
            layout="imageLeft"
            gradientDirection="default"
            iconPosition="bottom-right"
          />

        </div>

        {/* Footer */}
        <footer className="mt-16 text-center opacity-40 hover:opacity-100 transition-opacity">
          <a href="https://instagram.com/nivix.co" target="_blank">
            <p className="text-[10px] md:text-xs text-white uppercase tracking-widest">
              Desenvolvido por <span className="text-yellow-400 font-bold">NIVIX</span>
            </p>
          </a>
        </footer>

      </div>
    </div>
  );
}