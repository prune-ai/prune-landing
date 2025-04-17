import Image from "next/image";
export default function PruneImage() {
    return (
        <div className="w-screen relative  bg-[#F3FFE2]">
            <div className="flex flex-col gap-10 items-center justify-center min-h-[80vh] ">
            <div className="text-3xl lg:text-5xl  text-center  text-black  ">
                <h1 className="font-mono">Automating The Takedown</h1>
                <h1 className="font-mono"> Lifecycle with Prune</h1>
            </div>
            <div>
                <Image
                    src="/images/asset.png"
                    width={500}
                    height={500}
                    alt="prune"
                    className="ml-0 xl:ml-[15rem]"
                />
            </div>
            </div>

            <div>
                <Image
                    src="/images/asset6.png"
                    width={500}
                    height={500}
                    alt="prune"
                    className="absolute bottom-0  lg:left-0 xl:left-20 2xl:left-60 hidden xl:block"
                />
            </div>
          
        </div>
    )
}