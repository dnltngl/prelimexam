export default function fruits(props) {
    return <>
        <h1>Things to Bring</h1>
        <h2>My Strawhat.</h2>
        <h2 className={`${props.isgreen21? 'bg-green': 'bg-pink'} ${props.isHidden? 'hidden':''}`}>Correct!</h2>
        <h2>Gum gum fruit</h2>
        <h2 className={`${props.isgreen2? 'bg-green': 'bg-pink'} ${props.isHidden? 'hidden':''}`}>Correct!</h2>
        <h2>The Red vest</h2>
        <h2 className={`${props.ispink3? 'bg-green': 'bg-pink'} ${props.isHidden? 'hidden':''}`}>Incorrect!</h2>
    </>
}