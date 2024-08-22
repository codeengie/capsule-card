import './App.scss'
import CapsuleCard from './components/capsule-card/CapsuleCard.jsx';
import games from './data/games.jsx';
import user from './data/user.jsx';

function App() {
    let content = null;

    if (games.length > 0) {
        content = games.map(item => <CapsuleCard key={item.gid} gdata={item} udata={user}/>);
    }

    return (
        <>
            <div className="wrap">
                {content}
            </div>
        </>
    )
}

export default App
