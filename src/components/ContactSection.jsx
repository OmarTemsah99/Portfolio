import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import cn from "@/lib/utils";
import { IoIosSend } from "react-icons/io";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In<span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-mute-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Whether
          you're interested in discussing a project or exploring potential
          roles, feel free to reach out. (^^)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Email</h4>
                  <a
                    href="mailto:omartemsah99@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    omartemsah@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <IoPhonePortraitOutline className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Mobile</h4>
                  <a
                    href="tel:+201144396699"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    +20 1144396699
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FiMapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    New Cairo, First Settelment, Egypt
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/omar-temsah-3869501b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  className="hover:text-primary transition-colors">
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/share/1Ei3FRxgQT/"
                  target="_blank"
                  className="hover:text-primary transition-colors">
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/omar_temsah99?igsh=MXc0aDFhM2Vna2JncQ=="
                  target="_blank"
                  className="hover:text-primary transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Blah BlaBlah..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="waever@waever.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="I guess you can just type anything ¯\_(ツ)_/¯"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}>
                Send Message
                <IoIosSend size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
