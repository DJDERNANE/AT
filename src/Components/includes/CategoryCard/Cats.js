

import './Cats.css'
export default function Cats(props) {
    return (
        <div className="cat px-8 py-6  relative group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img src={props.img} alt='category' />
            <div className='mt-4'>
                <h1>{props.title}</h1>
                <p>Discover Our Service</p>
                <button className='py-2 mt-2'>See Startups</button>
            </div>
        </div>
    )
}