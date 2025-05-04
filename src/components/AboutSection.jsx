import { CircuitBoard, Code, Layers } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Enthusiastic Embedded Systems Engineer
            </h3>

            <p className="text-muted-foreground">
              with 3 years of experience in designing and developing integrated
              hardware-software solutions, specializing in C/C++ and Python
              programming, IoT applications, PCB design, and front-end
              development using React.
            </p>

            <p className="text-muted-foreground">
              Driven by a passion for crafting innovative tech solutions, I
              continuously seek new knowledge to enhance my skills, fueling
              creative problem-solving and effective solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://bit.ly/3GBii8Q"
                className="cosmic-button-hollow"
                target="_blank"
                rel="noopener noreferrer">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 rounded-xl card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 rounded-xl card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CircuitBoard className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Embedded Systems</h4>
                  <p className="text-muted-foreground">
                    Designing and developing integrated hardware-software
                    solutions, including PCB design, firmware programming, and
                    IoT applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 rounded-xl card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Product 3D Design</h4>
                  <p className="text-muted-foreground">
                    Creating detailed and realistic 3D models to visualize and
                    prototype products, enhancing design accuracy and
                    facilitating efficient development processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
