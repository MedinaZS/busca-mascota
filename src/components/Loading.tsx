import { motion } from "framer-motion";

const loadingCircle = {
    display: "block",
    width: "2rem",
    height: "2rem",
    borderRadius: "2rem"
};

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2
        }
    },
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const loadingCircleVariants = {
    start: {
        y: "0%"
    },
    end: {
        y: "100%"
    }
};

const loadingCircleTransition = {
    repeat: Infinity,
    repeatType: "mirror",
    duration: 0.5,
    ease: "easeInOut"
};

const Loading = () => {
    return (
        <div className="loading-container d-flex flex-column justify-content-center align-items-center">
            <p className="fs-3 m-0">Cargando...</p>
            <motion.div
                className=" d-flex justify-content-center align-items-center gap-4"
                variants={loadingContainerVariants}
                initial="start"
                animate="end"
            >
                <motion.span
                    className="bg-blue"
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
                <motion.span
                    className="bg-blue"
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
                <motion.span
                    className="bg-blue"
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
            </motion.div>
        </div>
    );
}

export default Loading