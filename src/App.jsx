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
            poster: "hogwarts-legacy.jpg",
            video: "hogwarts-legacy.webm"
        }
    },
    {
        title: "Aliens: Dark Descent",
        price: 29.99,
        discount: 0,
        tags: ['Strategy', 'Action', 'Tactical', 'RTS', 'Sci-fi', 'Aliens'],
        reviews: {
            count: 10174,
            summary: "Very Positive"
        },
        media: {
            poster: "aliens-dark-descent.jpg",
            video: "aliens-dark-descent.webm"
        }
    }
];

function App() {
    let content = null;

    if (games.length > 0) {
        content = games.map((item, index) => <CapsuleCard key={index} data={games[index]}/>);
    }

    return (
        <>
            {content}
        </>
    )
}

export default App
