import Link from 'next/link';
import Head from 'next/head';

export default function Header(props) {
    return (
        <header className='header'>
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="/styles/page.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <Link href="/">
                TreinaCook
            </Link>
        </header>
    )
}