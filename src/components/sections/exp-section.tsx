import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SectionContainer from "./section-container";

type Props = {};

const ExpSection = (props: Props) => {
  return (
    <SectionContainer>
      <div className="min-h-screen flex flex-col justify-center">
        <div className="flex gap-10 items-center ">
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="w-full gap-5 text-2xl font-mono flex items-center">
              <span>
                <span className="text-primary">02. </span>
                <span>Where I&lsquo;ve worked</span>
              </span>
              <hr className="flex-1" />
            </div>
            <div className="space-y-3">
              <Card className="bg-transparent border-none">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Frontend Intern{" "}
                    <a href="#" target="_blank" className="text-primary">
                      {" "}
                      @ Quivr (YC W24)
                    </a>
                  </CardTitle>
                  <CardDescription className="font-mono text-base">
                    <span>Sep 2024 - Nov 2024</span>
                    <br />
                    <span>Remote</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae, voluptas!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExpSection;
