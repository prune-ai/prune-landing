// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#18183B] text-white  flex justify-center py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
          {/* Logo and Social Icons Section */}
          <div className="mb-8 md:mb-0">
            <div className="mb-8">
              <Link href="/">
                <div className="flex items-center">
                  <span className="text-white text-2xl font-bold">
                    <Image 
                      src="/images/logo.png" 
                      alt="Prune Logo" 
                      width={120} 
                      height={40}
                      className="h-10 w-auto"
                    />
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <Link href="https://facebook.com" target='_blank' aria-label="Facebook">
                <div className="text-white hover:text-gray-300 transition duration-300">
                  <Facebook className="w-6 h-6" />
                </div>
              </Link>
              
              <Link href="https://x.com/prune_ai" target='_blank'  aria-label="Twitter">
                <div className="text-white hover:text-gray-300 transition duration-300">
                  <Twitter className="w-6 h-6" />
                </div>
              </Link>
              
              <Link href="https://www.linkedin.com/company/106867214/admin/dashboard/" target='_blank'  aria-label="LinkedIn">
                <div className="text-white hover:text-gray-300 transition duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
              </Link>
              
              <Link href="https://www.instagram.com/prune_co/" target='_blank'  aria-label="Instagram">
                <div className="text-white hover:text-gray-300 transition duration-300">
                  <Instagram className="w-6 h-6" />
                </div>
              </Link>
              
            
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 md:gap-2">
            <div>
              <Link href="https://phoenixpitchdeck.webflow.io/ " target="_blank">
                <h3 className="text-lg font-medium mb-4 hover:text-gray-300 transition duration-300">Issue</h3>
              </Link>
            </div>
            
            <div>
              <Link href="/">
                <h3 className="text-lg font-medium mb-4 hover:text-gray-300 transition duration-300">Tools</h3>
              </Link>
            </div>
            
            <div>
              <Link href="/team" >
                <h3 className="text-lg font-medium mb-4 hover:text-gray-300 transition duration-300">Team</h3>
              </Link>
            </div>
            
            <div>
              <Link href="https://pruneai.substack.com/" target="_blank">
                <h3 className="text-lg font-medium mb-4 hover:text-gray-300 transition duration-300">Resources</h3>
              </Link>
            </div>
          </div>

          <div className=''>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;