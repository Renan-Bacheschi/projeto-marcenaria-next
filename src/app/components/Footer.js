const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <footer className="bg-gray-800 text-white py-8">


            <div className="container mx-auto flex justify-between items-center">

                <div>
                    <p>&copy; {currentYear} Marcenaria Menozzi. Todos os direitos reservados.</p>
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