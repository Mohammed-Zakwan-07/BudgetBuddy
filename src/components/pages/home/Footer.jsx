import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() { 
  return(
    <footer className="mt-24 pt-3 pb-2 bg-gray-100 dark:bg-green-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center">

        <div className="mb-4 md:mb-0">
          <span className="text-lg font-semibold">BudgetBuddy</span>
        </div>

        <div className="flex md:flex-row justify-center items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://github.com/Mohammed-Zakwan-07" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </a>
            <a href="mailto:zakwanmd16@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
            </a>
            <a href="https://leetcode.com/u/Zakwan177/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faCode} className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/mohammed__zakwan/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-zakwan-8a61b4329/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
          </div>
        </div>
        <p>Made by Zakwan</p>
        <div>
          <span>&copy; 2025 BudgetBuddy. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
export default Footer;