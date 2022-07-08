import {SiReact} from 'react-icons/si'
import {AiFillStar} from 'react-icons/ai'
import {BsPlus} from 'react-icons/bs'
import {ImAirplane} from 'react-icons/im'
const Navbar = () =>{
    return(
        <div>
            <section className="taskboard">
                <section className='logo' style={{color:'#61DBFB'}}>
                        <SiReact size={60} color='#61DBFB'/>
                        <h3 style={{fontSize:'1.6rem', fontWeight:'500'}}>React</h3>

                </section>
                <section className='text'>
                    <p className='name'>John Wick</p>
                    <p className='code'>Developer</p>
                </section>
            </section>

            {/* nosense section */}

            <section className='n-text'>
                <section className='n-1' >
                    <section>
                    <ImAirplane className='plane' size={67} color='aqua'/>
                    </section>
                    <section>
                        <h3>Analytics Dashboard</h3>
                        <p className='para'>A single place to view all the updates
                            from the dashboard and find some quest from it.
                        </p>
                    </section>
                </section>
                <div className='btns'>
                    <div className='btn-1'>
                        <AiFillStar className='star'/>
                    </div>
                    <div className='btn-2'>
                        <BsPlus className='plus'/>
                        <span>Create New Item</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export {Navbar}
