import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaXRay } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6'



export function Contact() {
  return (
    <div>
      <div className="border-t border-stone-900 pb-20">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col items-center justify-around sm:flex-row gap-5">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-center tracking-tighter"
          >
          <motion.address 
            className="my-4"
          >
            <div className="flex justify-center items-center gap-2">
              <FaLocationDot />
              {CONTACT.address}
            </div>
          </motion.address>
            <motion.p 
              className="my-4"
            >
              <div className="flex justify-center items-center gap-2">
                <FaPhoneAlt />
                {CONTACT.phoneNo}
              </div>
            </motion.p>
            <a 
              href="mailto:gmario.sh@gmail.com"  
              className="border-b"
            >
              <div className="flex justify-center items-center gap-2">
                <IoMdMail />
                {CONTACT.email}
              </div>
            </a>
          </motion.div>
        
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='m-8 flex items-center justify-center gap-4 text-2xl'
          >
            <a href='https://www.linkedin.com/in/jorgemarioo'
              target='_blank'
              rel='noopener noreferrer'
              arial-label='LinkedIn'
            >
              <FaLinkedin 
                title="LinkedIn"
                className="text-stone-400 hover:text-white duration-150"
              />
            </a>
            <a href='https://www.github.com/gemario'
              target='_blank'
              rel='noopener noreferrer'
              arial-label='GitHub'
            >
              <FaGithub
                title="GitHub" 
                className="text-stone-400 hover:text-white duration-150"
              />
            </a>
            <a href='https://www.instagram.com/jorgee.mario/'
              target='_blank'
              rel='noopener noreferrer'
              arial-label='Instagram'
            >
              <FaInstagram 
                title="Instagram"
                className="text-stone-400 hover:text-white duration-150"
              />
            </a>
            <a href='https://x.com/geemarioo'
              target='_blank'
              rel='noopener noreferrer'
              arial-label='x'
            >
              <FaSquareXTwitter 
                title="X"
                className="text-stone-400 hover:text-white duration-150"
              />
            </a>
          </motion.div>

        </div>
      </div>
      <footer className="flex items-center justify-center pb-8">
        <p className="text-stone-400 font-light text-sm">
          ©{new Date().getFullYear()} Jorge Lima. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}