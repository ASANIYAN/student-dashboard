import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="mx-auto bg-white">
            <nav className='pt-6 py-8 md:px-10'>
                <div className='flex  justify-between flex-col sm:flex-row'>
                <p className=" text-black font-black text-3xl md:text-4xl pt-2">
                    Cita
                    <span className='text-green'>
                        del
                    </span>
                </p>

                    <div className='text-color1 text-lg font-semibold mt-4 md:mt-3'>
                    <Link to='/login' style={{cursor: 'pointer'}} className='bg-green hover:bg-white border-2 border-green hover:text-green text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 md:rounded-full'>Log In</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;