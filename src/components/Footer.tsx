
import { Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BESTCLEAN</h3>
            <p className="text-gray-400">Puhastusteenistus OÜ</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <a
                href="tel:+3725520870"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
              >
                <Phone size={20} />
                +372 552 0870
              </a>
              <a
                href="mailto:kuldar.kutti@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={20} />
                kuldar.kutti@gmail.com
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100057623733066"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
                Jälgi meid Facebookis
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Aadress</h3>
            <p className="text-gray-400">
              Metsa 1,
              <br />
              11162, Riisipere
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Info</h3>
            <div className="text-gray-400">
              <p>Reg. nr: 11367881</p>
              <p>KMKR: EE101244260</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BESTCLEAN Puhastusteenistus OÜ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
