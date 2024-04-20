import '../styles/Intro.css'

export default function Intro () {
    return (
        <div className="intro">
            <div className="greeting">
                <h2 > Hey, I am </h2>
                <h2 className="name"> Nathan Briers </h2>
                <h2 > A Junior Software Developer </h2>
                {/* <h3> passionate and aspiring software developer looking to kick-start my way into this exciting industry.
                     Please take the time to explore this page and discover more about my experiences</h3> */}
            </div>
            {/* <img className="image" src="https://i.ibb.co/7rHgqx5/CV-Pic-New.jpg" alt="A picture of me, Nathan Briers, with a light grey background" border="0" /> */}
        </div>
    )
}