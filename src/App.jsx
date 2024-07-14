import './App.scss'
import CapsuleCard from "./components/capsule-card/CapsuleCard.jsx";

const games = [
    {
        title: "Hogwarts Legacy",
        price: 59.99,
        discount: 60,
        tags: ['Magic', 'Fantasy', 'Open World', 'Singleplayer', 'Adventure'],
        reviews: {
            count: 195189,
            summary: "Very Positive"
        },
        media: {
            poster: "hogwarts-legacy-374x448.webp",
            video: "hogwarts-legacy-630x354.webm"
        }
    },
    {
        title: "The Last Of Us Part I",
        price: 59.99,
        discount: 0,
        tags: ['Shooter', 'Story Rich', 'Post-apocalyptic', 'Horror'],
        reviews: {
            count: 31084,
            summary: "Mostly Positive"
        },
        media: {
            poster: "the-last-of-us-374x448.webp",
            video: "the-last-of-us-630x354.webm"
        }
    },
    {
        title: "Star Wars Jedi: Survivor",
        price: 69.99,
        discount: 20,
        tags: ['Action', 'Adventure', 'Souls-like', 'Singleplayer'],
        reviews: {
            count: 49684,
            summary: "Mixed"
        },
        media: {
            poster: "star-wars-jedi-survivor-374x448.webp",
            video: "star-wars-jedi-survivor-630x354.webm"
        }
    }
];

function App() {
    let content = null;

    if (games.length > 0) {
        content = games.map((item, index) => <CapsuleCard key={index} data={item}/>);
    }

    return (
        <>
            {content}
        </>
    )
}

export default App
