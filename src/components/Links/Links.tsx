import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Links() {
	return(
		<ul className="flex flex-col items-center gap-5">
			<li className="link flex items-center justify-center gap-3 rounded-2xl p-4 bg-white text-sky-500 font-bold hover:text-white hover:bg-sky-600 cursor-pointer">
				 <FaWhatsapp />
				<a href="#">Whatsapp</a>
			</li>

			<li className="link flex items-center justify-center gap-3 rounded-2xl p-4 bg-white text-sky-500 font-bold hover:text-white hover:bg-sky-600 cursor-pointer">
				<FaInstagram />
				<a href="#">Instagram</a>
			</li>

			<li className="link flex items-center justify-center gap-3 rounded-2xl p-4 bg-white text-sky-500 font-bold hover:text-white hover:bg-sky-600 cursor-pointer">
				<FaLinkedin />
				<a href="#">LinkedIn</a>
			</li>

			<li className="link flex items-center justify-center gap-3 rounded-2xl p-4 bg-white text-sky-500 font-bold hover:text-white hover:bg-sky-600 cursor-pointer">
				<FaGithub />
				<a href="#">Github</a>
			</li>
		</ul>
	)
}

export default Links;