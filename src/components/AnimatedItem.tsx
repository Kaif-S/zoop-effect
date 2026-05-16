import { motion } from "motion/react"

const AnimatedItem = ({text}:{text:string}) => {

    const STAGGER = 0.025;
    const LINE_HEIGHT = 0.75
    const DURATION =  0.25;
  return (
    <motion.a href="#" className="relative overflow-hidden tracking-tighter whitespace-nowrap block" style={{lineHeight:LINE_HEIGHT}} initial="initial" whileHover="hovered" >
    <div 
    className="font-Bebas-Neue font-bold text-8xl uppercase" style={{lineHeight:LINE_HEIGHT}}>
      {text.split("").map((l,index)=>{
        return <motion.span 
        className="inline-block"
        variants={{
            initial:{y:0},
            hovered:{y:"-100%"}
        }}
        transition={{delay:STAGGER*index,duration:DURATION}}
        
        
        key={index}>{l}</motion.span>
      })}
    </div>
    <div 
    
    className="absolute inset-0 font-bold font-Bebas-Neue text-8xl uppercase" style={{lineHeight:LINE_HEIGHT}}>
      {text.split("").map((l,index)=>{
        return <motion.span 
        className="inline-block"
        variants={{
            initial:{y:"100%"},
            hovered:{y:0}
        }}
        transition={{delay:STAGGER*index,duration:DURATION}}
        key={index}>{l}</motion.span>
      })}
    </div>
    </motion.a>
  )
}

export default AnimatedItem
