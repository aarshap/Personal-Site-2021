import React from "react"
import { motion } from "framer-motion"

const JiggleText = ({ children }) => {
    const wordArray = children.split(" ")
    const charArray = wordArray.map(word => (
        word.split("")
    ))

    const ParentAnimation = {
        start: {
            transition: {
                staggerChildren: 0.2,
            },
        },
        end: {
            transition: {
                staggerChildren: 0.2,
            },
        }
    }
      
    const ChildAnimation = {
        start: {
            y: -2,
        },
        end: {
            y: 2,
        }
    }

    const ChildTransition = {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }
      
      
    return (
        <>
            {charArray.map((word, index) => (
                <>
                    <motion.span key={index} initial="start" animate="end" variants={ParentAnimation} style={{whiteSpace: "nowrap"}}>
                        {word.map(character => (
                            <motion.span
                                variants={ChildAnimation}
                                transition={ChildTransition}
                                style={{display: "inline-block"}}
                            >
                                {character}
                            </motion.span>
                        ))}
                    </motion.span>
                    {charArray.length !== index + 1 && " "}
                </>
            ))}
        </>
    )

}

export default JiggleText