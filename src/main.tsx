
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <div className='main'>
    <App />

  </div>
  ,
)





// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { useGSAP } from "@gsap/react"

// // Register ScrollTrigger (Safe for SSR/Framer canvas)
// if (typeof window !== "undefined") {
//     gsap.registerPlugin(ScrollTrigger)
// }

// export default function PhoneScrollAnimation() {
//     const containerRef = useRef(null)
//     const bigcontainerRef = useRef(null)

//     // Ensure clean scrolling on reload
//     useEffect(() => {
//         if (typeof history !== "undefined" && "scrollRestoration" in history) {
//             history.scrollRestoration = "manual"
//         }
//     }, [])

//     useGSAP(
//         () => {
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: bigcontainerRef.current,
//                     pin: true,
//                     start: "top top",
//                     end: "+=1500", // 1500px of scrolling distance
//                     scrub: 1,
//                     snap: {
//                         snapTo: "labels",
//                         duration: { min: 0.2, max: 3 },
//                         delay: 0.2,
//                         ease: "power1.inOut",
//                     },
//                     // markers: true, // Uncomment this if you need to debug in Framer preview
//                 },
//                 defaults: { ease: "power2.inOut" },
//             })

//             // 1. Scale down the main wrapper
//             tl.to(containerRef.current, {
//                 scale: 1,
//                 duration: 1.5,
//             })
//                 .addLabel("halfway")
//                 // 2. Shrink the background image
//                 .to(".bigimage", {
//                     scale: 0.8,
//                     height: "40vh",
//                     duration: 1.5,
//                 })
//                 .addLabel("quarterway")
//                 // 3. Move the background image down
//                 .to(".bigimage",{
//                         y: 100,
//                         duration: 1.5,
//                     },
//                     "-=1"
//                 )
//         },
//         { scope: containerRef }
//     )

//     return (
//         <div className="main-framer-wrapper">
//             {/* INJECTED CSS FOR SINGLE FILE PORTABILITY */}
//             <style>{`
//                 .main-framer-wrapper {
//                     width: 100%;
//                     min-height: 100vh;
//                     background-color: #111;
//                     overflow-x: hidden;
//                     position: relative;
//                 }
//                 .scroll-container {
//                     width: 100%;
//                     height: 100vh;
//                     overflow: hidden;
//                 }
//                 .phonediv {
//                     width: 100%;
//                     height: 100%;
//                     position: relative;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     transform: scale(8);
//                 }
//                 .phoneimage {
//                     width: 50%;
//                     max-width: 400px; /* Added max-width so it doesn't get infinitely huge on ultrawide monitors */
//                     object-fit: cover;
//                     transform: translateY(5%);
//                     z-index: 2;
//                 }
//                 .bigimage {
//                     width: 19%;
//                     min-width: 150px;
//                     height: 71vh;
//                     transform-origin: bottom;
//                     transform: translateY(6%);
//                     border-radius: 20px;
//                     position: absolute;
//                     overflow: hidden;
//                     z-index: 1;
//                 }
//                 .bigimage img {
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                 }
//             `}</style>

//             {/* DOM STRUCTURE */}
//             <div className="scroll-container" ref={bigcontainerRef}>
//                 <div ref={containerRef} className="phonediv">
                    
//                     <div className="bigimage">
//                         {/* Replace this URL with your hosted bgimg.jpg */}
//                         <img 
//                             src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
//                             alt="Background" 
//                         />
//                     </div>
                    
//                     {/* Replace this URL with your hosted phone.png */}
//                     <img 
//                         className="phoneimage" 
//                         src="https://raw.githubusercontent.com/framer/company-assets/main/devices/iphone-13-pro.png" 
//                         alt="Phone" 
//                     />
                    
//                 </div>
//             </div>
//         </div>
//     )
// }