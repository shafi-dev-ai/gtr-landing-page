import logo from "@/assets/logo.png";
import InstagramIcon from "./InstagramIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img
              src={logo}
              alt="GTRX logo"
              className="h-10 w-auto drop-shadow"
            />
            {/* <p className="text-sm text-muted-foreground">
              The global marketplace for GT-R enthusiasts.
            </p> */}
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#our-mission" className="hover:text-primary transition-colors">Our Mission</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Socials</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.instagram.com/gtrx.app?igsh=eWE0dmV2aWw1ZzRq&utm_source=qr"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {/* <InstagramIcon className="h-4 w-4" /> */}
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} GTRX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
