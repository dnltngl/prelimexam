export default function Fruits(props) {
    return <>
        <h1>Things to Bring</h1>
        <h2 className={`${props.isgreen1? 'bg-green': ''} `}>My Strawhat.</h2>
        
        <h2 className={`${props.isgreen2? 'bg-green': ''} `}>Gum gum fruit</h2>

        <h2 className={`${props.ispink3? 'bg-pink': ''} `}>The Red vest</h2>
        
    </>
}