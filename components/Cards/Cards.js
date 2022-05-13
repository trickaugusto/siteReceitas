import Link from 'next/link';

export default function Cards(props){
    return (
        <main>
            <figure className='recipe-card'>
            <Link href={props.link}>
                <a>
                <img className='recipe-picture' src={props.srcImg}/>
                </a>
            </Link>

            <div className='recipe-category'>{props.category}</div>
            <figcaption className='recipe-name'>{props.name}</figcaption>
            </figure>
        </main>
    )
}