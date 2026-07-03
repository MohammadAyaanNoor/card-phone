import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger' 
import './App.css'
import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

type Props = {}

export default function App({}: Props) {
  const numCards = 9;
  const radius = 280; 
  
  const containerRef = useRef<HTMLDivElement>(null)
  const bigcontainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0); 
  }, []);

  useGSAP(() => {
  const tl = gsap.timeline({ 
    scrollTrigger: {
      trigger: bigcontainerRef.current,
      pin: true, 
      start: "top -2px", 
      end: "+=2000", 
      scrub: 1, 
      markers: true,
      snap: {
        snapTo: "labels",
        duration: { min: 0.2, max: 0.6 },
        ease: "power1.inOut",
        // delay: 0.1, // optional: wait a beat after scroll stops before snapping
      }
    },
    defaults: { ease: 'power2.inOut' } 
  })

  tl.to(containerRef.current, {
    scale: 1, 
    duration: 1.5,
  })
  .addLabel('halfway') 
  .to('.bigimage', {
    scale: 0.65,
    height: '28vh', 
    duration: 1.5,
  })
  .addLabel('quarterway')
  .to('.cards', {
    y: '50%',
    duration: 1.5
  },'a')
  .to('.cardContainer>img', {
    opacity: 1,
    duration: 0.2
  })
  .addLabel('rotate1')
  .to('.textContainer #text1',{
    opacity:1,
    filter: 'blur(0px)',
    duration: 1.5
  },'a')
 .to('.cardContainer', {
  transformOrigin: '50% 50%', 
  rotation: 42,
  duration: 3,   
  ease: 'power1.inOut' 
},'b')
.addLabel('rotate2')
.to('.textContainer #text1', {
  opacity: 0,
  filter: 'blur(3px)',
  duration: 1.5
},'b')                 // starts right at rotate2
.to('.textContainer #text2', {
  opacity: 1,
  filter: 'blur(0px)',
  duration: 1.5
},'b')    
  
  .to('.cardContainer', {
    transformOrigin: '50% 50%', 
    rotation: 80,
    duration: 3,   
    ease: 'power1.inOut' 
  },'c')
  .addLabel('rotate3')
  .to('.textContainer #text2', {
  opacity: 0,
  filter: 'blur(3px)',
  duration: 1.5
},'c')   
.to('.textContainer #text3', {
  opacity: 1,
  filter: 'blur(0px)',
  duration: 1.5
},'c')   
  .to('.cardContainer', {
    transformOrigin: '50% 50%', 
    rotation: 120,
    duration: 3,   
    ease: 'power1.inOut' 
  },'d')
  .addLabel('rotate4')
   .to('.textContainer #text3', {
  opacity: 0,
  filter: 'blur(3px)',
  duration: 1.5
},'d')   
.to('.textContainer #text4', {
  opacity: 1,
  filter: 'blur(0px)',
  duration: 1.5
},'d') 
  .to('.cardContainer', {
    transformOrigin: '50% 50%', 
    rotation: 157,
    duration: 3,   
    ease: 'power1.inOut' 
  },'e')
  .addLabel('rotate5')
   .to('.textContainer #text4', {
  opacity: 0,
  filter: 'blur(3px)',
  duration: 1.5
},'e')   
.to('.textContainer #text5', {
  opacity: 1,
  filter: 'blur(0px)',
  duration: 1.5
},'e') 
  .to('.cardContainer', {
    transformOrigin: '50% 50%', 
    rotation: 193,
    duration: 3,   
    ease: 'power1.inOut' 
  },'f')
  .addLabel('rotate6')
  .to('.textContainer #text5', {
  opacity: 0,
  filter: 'blur(3px)',
  duration: 1.5
},'f')   
.to('.textContainer #text6', {
  opacity: 1,
  filter: 'blur(0px)',
  duration: 1.5
},'f') 
  .to('.cardContainer', {
    transformOrigin: '50% 50%', 
    rotation: 233,
    duration: 3,   
    ease: 'power1.inOut' 
  },'g')
  .addLabel('rotate7')
  .to('.textContainer #text6', {
  opacity: 0,
  filter: 'blur(3px)',
  duration: 1.5
},'g')   
.to('.textContainer #text7', {
  opacity: 1,
  filter: 'blur(0px)',
  duration: 1.5
},'g') 
  .to('.cardContainer', {
    transformOrigin: '50% 50%', 
    rotation: 273,
    duration: 3,   
    ease: 'power1.inOut' 
  },'h')
  .addLabel('rotate8')
  .to('.textContainer #text7', {
  opacity: 0,
  filter: 'blur(3px)',
  duration: 1.5
},'h')   
.to('.textContainer #text8', {
  opacity: 1,
  filter: 'blur(0px)',
  duration: 1.5
},'h') 
  .to('.cardContainer', {
    transformOrigin: '50% 50%', 
    rotation: 267,
    duration: 3,   
    ease: 'power1.inOut' 
  })
  .addLabel('rotate9')
//    .to('.textContainer #text8', {
//   opacity: 0,
//   filter: 'blur(3px)',
//   duration: 1.5
// },'i')   
// .to('.textContainer #text9', {
//   opacity: 1,
//   filter: 'blur(0px)',
//   duration: 1.5
// },'i') 
  


}, { scope: containerRef })

  return (
    <>
    
    <div className='container' ref={bigcontainerRef}>
      <div ref={containerRef} className='phonediv'>
        {/* <div className='bigimage' >
          <img src='/bgimg.jpg' alt="Background" />
        </div> */}
        <div className='textContainer'>
          <div className='innerTextContainer'>
          <div className='text' id='text1'>
           <h1>Your body speaks in <br/> signals.Humn learns <br/> your rhythm </h1>
          </div>
          <div className='text' id='text2'>
           <h1>Your labs are no longer <br/> isolated numbers. <br/> They became a living </h1>
          </div>
          <div className='text' id='text3'>
           <h1>Your DNA is the <br/> blueprint.Humn shows <br/> what it means today </h1>
          </div>
          <div className='text' id='text4'>
           <h1>Your body is always <br/> talking.So Humn is <br/> Always listen </h1>
          </div>
          <div className='text' id='text5'>
           <h1>Your daily choices <br/> become health <br/> intelligence </h1>
          </div>
          <div className='text' id='text6'>
           <h1>Lorem ipsum dolor sit. <br/> Lorem, ipsum dolor. <br/> Lorem, ipsum. </h1>
          </div>
          <div className='text' id='text7'>
           <h1>Lorem ipsum dolor sit. <br/> Lorem, ipsum dolor. <br/> Lorem, ipsum. </h1>
          </div>
          <div className='text' id='text8'>
           <h1>Lorem ipsum dolor sit. <br/> Lorem, ipsum dolor. <br/> Lorem, ipsum. </h1>
          </div>
          </div>
        </div>
        
        
        <div className='cards' style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}>
        <div className='cardContainer'>
          {Array.from({ length: numCards }).map((_, index) => {
            const angle = (index / numCards) * (1.9 * Math.PI);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            const rotation = angle + (Math.PI / 2);

            return (
              <img 
                key={index}
                src='/bgimg.jpg' 
                alt={`Card ${index + 1}`} 
                className='circle-card'
                style={{
                  transform: `translate(${x}px, ${y}px) rotate(${rotation}rad)`,
                  position: 'absolute' 
                }}
              />
            );
          })}
          </div>
        </div>

        <img className='phoneimage' src='/phone.png' alt="Phone" />
      </div>
    </div>
    </>
  )
}






