
import { Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-8 w-8 text-asc-purple" />
              <span className="text-2xl font-bold gradient-text">ASC</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              La première plateforme de tournois Dream League Soccer créée par des Africains, pour les Africains.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tournaments" className="text-gray-500 dark:text-gray-400 hover:text-asc-purple dark:hover:text-asc-purple">
                  Tournois
                </Link>
              </li>
              <li>
                <Link to="/sponsorship" className="text-gray-500 dark:text-gray-400 hover:text-asc-purple dark:hover:text-asc-purple">
                  Parrainage
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-500 dark:text-gray-400 hover:text-asc-purple dark:hover:text-asc-purple">
                  À propos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-gray-500 dark:text-gray-400 hover:text-asc-purple dark:hover:text-asc-purple">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-asc-purple dark:hover:text-asc-purple">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-500 dark:text-gray-400 hover:text-asc-purple dark:hover:text-asc-purple">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@asc-dls.com" className="text-gray-500 dark:text-gray-400 hover:text-asc-purple dark:hover:text-asc-purple">
                  contact@asc-dls.com
                </a>
              </li>
              <li>
                <Link to="/support" className="text-gray-500 dark:text-gray-400 hover:text-asc-purple dark:hover:text-asc-purple">
                  Support
                </Link>
              </li>
              <li className="flex space-x-4">
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-asc-purple dark:hover:text-asc-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-asc-purple dark:hover:text-asc-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-asc-purple dark:hover:text-asc-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Afrique Sociale Cup. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
