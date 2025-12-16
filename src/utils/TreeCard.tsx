import React from 'react';

interface TreeCardProps {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
  iconSrc: string;
  layout?: 'imageLeft' | 'imageRight'; 
  gradientDirection?: 'default' | 'reverse'; 
  iconPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const TreeCard: React.FC<TreeCardProps> = ({
  title,
  subtitle,
  href,
  imageSrc,
  iconSrc,
  layout = 'imageLeft',
  gradientDirection = 'default',
  iconPosition = 'top-right'
}) => {
  
  const gradientClass = gradientDirection === 'default'
    ? 'bg-gradient-to-r from-amber-400 to-red-900'
    : 'bg-gradient-to-r from-red-900 to-amber-400';

  const isLeft = layout === 'imageLeft';
  
  // Ajuste do texto centralizado
  const textContainerClass = isLeft 
    ? 'text-right items-end pr-8 md:pr-20 ml-auto w-[65%]' 
    : 'text-left items-start pl-8 md:pl-20 mr-auto w-[65%]';

  // Ajuste da imagem
  const imageWrapperClass = isLeft
    ? 'left-0 -ml-4 md:-ml-8' 
    : 'right-0 -mr-4 md:-mr-8';

  const iconPosClass = {
    'top-right': '-top-4 -right-3',
    'top-left': '-top-4 -left-3',
    'bottom-right': '-bottom-4 -right-3',
    'bottom-left': '-bottom-4 -left-3',
  }[iconPosition];

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative w-full 
        h-36 md:h-48
        rounded-[2rem] shadow-2xl block
        transition-transform transform hover:scale-[1.02] active:scale-95
        ${gradientClass}
        group
      `}
      style={{ overflow: 'visible' }} 
    >
      {/* Imagem Vazada */}
      <div className={`absolute bottom-0 w-[50%] md:w-[40%] h-[145%] flex items-end ${imageWrapperClass} z-20 pointer-events-none`}>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-contain drop-shadow-2xl filter"
          style={{ objectPosition: 'bottom center' }} 
        />
      </div>

      {/* Texto */}
      <div className={`relative z-10 h-full flex flex-col justify-center ${textContainerClass}`}>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-none drop-shadow-lg mb-2 uppercase italic">
          {title}
        </h2>
        <p className="text-sm md:text-lg text-white/90 font-medium leading-tight">
          {subtitle}
        </p>
      </div>

      {/* Ícone */}
      <div className={`absolute ${iconPosClass} z-30`}>
         <div className="bg-white/10 backdrop-blur-md rounded-full p-2 md:p-3 shadow-lg border border-white/20">
           <img 
             src={iconSrc} 
             alt="Icon" 
             className="w-8 h-8 md:w-10 md:h-10 object-contain" 
           />
         </div>
      </div>
      
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent pointer-events-none mix-blend-overlay border border-white/10"></div>
    </a>
  );
};