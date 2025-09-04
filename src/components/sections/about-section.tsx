import Portrait from "../specific/portrait";
import SectionContainer from "./section-container";

const AboutSection = () => {
  return (
    <SectionContainer id="about">
      <div className="min-h-screen flex flex-col justify-center">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex flex-col items-start gap-4">
            <div className="w-full gap-5 text-2xl font-mono flex items-center">
              <span>
                <span className="text-primary">01. </span>
                <span>About me</span>
              </span>
              <hr className="flex-1" />
            </div>
            <div className="opacity-50 space-y-3">
              <p>
                Hello! I{"'"}m a passionate and dedicated software developer
                from India. As a pre-final year Computer Science student, I am
                constantly expanding my technical expertise and applying it to
                practical challenges.
              </p>
              <p>
                My focus is on building practical software that solves
                real-world problems. I specialize in turning complex
                requirements into functional, user-friendly applications by
                leveraging modern technologies. I thrive on the entire
                development process, from concept to a polished final product.
              </p>
              <p>
                I am always eager to collaborate on engaging projects and
                connect with like-minded people, as I believe these are
                invaluable opportunities for growth. I am currently seeking a
                software engineering internship where I can contribute my skills
                to a team and help build meaningful products.
              </p>
            </div>
          </div>
          {/* <Button variant={"outline"} size={"lg"}>
            Let&lsquo;s Go <ArrowDown />
          </Button> */}
          <Portrait />
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
