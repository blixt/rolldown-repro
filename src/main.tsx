import React from "react";
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from "motion/react";

function Test() {
    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div>Hello World</motion.div>
        </AnimatePresence>
    )
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Test />);