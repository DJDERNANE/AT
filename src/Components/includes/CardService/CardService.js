
import './CardService.css'
export default function CardService(props) {
    return (
        <div  className="card relative group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className='pb-8'>
            <h1 className='px-2 py-4 pr-8 text-xl'>
                    {props.title}
                </h1>
                <p className='px-2 pb-4 pr-10 text-sm'>
                    {props.desc}
                </p>
        </div>
        <div>
            <img src={props.img} />
        </div>
            
        </div>
    )
}