'use client'

const Header = () => {

    const opneHelpModal = () => {
        console.log("modal clicked");
    }
    
    return (
        <header className="sticky top-0 flex flex-row justify-around border border-b-gray-500">
            <h1>Nodal</h1>
            <button onClick={opneHelpModal}>Help</button>
        </header>
    );
}

export default Header;