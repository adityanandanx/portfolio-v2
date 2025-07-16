import Image from "next/image";

type Props = {};

// Coordiantes in percentage [x%, y%]
const points: { [k: string]: [number, number] } = {
  mustache: [43, 62],
};

const Portrait = (props: Props) => {
  return (
    <div className="group max-w-[460px] w-full aspect-square relative cursor-pointer active:scale-95 transition-transform">
      <div className="absolute inset-0 bg-primary rounded-full -z-10 group-hover:translate-y-3 transition-transform"></div>
      <div className="absolute inset-3 border border-background rounded-full z-10 group-hover:translate-y-3 transition-transform"></div>
      <div className="relative group-hover:-translate-y-3 transition-transform z-0">
        <Image
          src={"/images/adi.jpeg"}
          alt="Aditya Nandan"
          width={460}
          height={460}
          className="rounded-full"
        />
        <Image
          src={"/icons/face/moustache01.svg"}
          alt="moustache"
          className="absolute scale-0 transition-transform group-active:scale-100 -translate-x-1/2 -translate-y-1/2 -rotate-45 group-active:-rotate-12"
          style={{
            left: points.mustache[0] + "%",
            top: points.mustache[1] + "%",
            width: "24%",
          }}
          width={90}
          height={50}
        />
      </div>
    </div>
  );
};

export default Portrait;
