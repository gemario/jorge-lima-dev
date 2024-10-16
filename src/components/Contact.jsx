import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export function Contact() {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.address 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <div className="flex justify-center items-center gap-2">
            <FaLocationDot />
            {CONTACT.address}
          </div>
        </motion.address>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
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
      </div>
    </div>
  )
}