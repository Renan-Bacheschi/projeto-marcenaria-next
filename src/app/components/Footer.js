const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <footer className="bg-emerald-500 text-white py-8">


            <div className="w-full px-8 flex justify-between items-center">

                <div>
                    <p>&copy; {currentYear} Marcenaria Menozzzzzzzi. Todos os direitos reservados.</p>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-lime-500 transition-colors">Facebook</a>
                    <a href="#" className="hover:text-lime-500 transition-colors">Instagram</a>
                    <a href="#" className="hover:text-lime-500">WhatsApp</a>
                </div>

            </div>



        </footer>
    );

}

export default Footer;