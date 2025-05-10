import Image from "next/image";
import { motion } from "framer-motion";

export default function PruneImage() {
    return (
        <div className="w-screen relative bg-[#F3FFE2]">
            <div className="flex flex-col gap-10 items-center justify-center min-h-[80vh]">
                <motion.div 
                    className="text-3xl lg:text-5xl text-center text-black"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-mono">Automating The Takedown</h1>
                    <h1 className="font-mono">Lifecycle with Prune</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Image
                        src="/images/asset.png"
                        width={500}
                        height={500}
                        alt="prune"
                        className="ml-0 xl:ml-[15rem]"
                    />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Image
                    src="/images/asset6.png"
                    width={500}
                    height={500}
                    alt="prune"
                    className="absolute bottom-0 lg:left-0 xl:left-20 2xl:left-60 hidden xl:block"
                />
            </motion.div>
        </div>
    );
}