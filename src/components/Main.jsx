import './Main.css'
export default function Main(props) {
  return (
    <main>
        <hr />
        <hr />
        <img src={props.image} alt="" />
        <h1>{props.heading}</h1>
        <p>{props.para}</p>
        <hr />
        <hr />
    </main>

  )
}
