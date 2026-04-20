//  Components, Props and JSX in the React.
import Navbar from "./Components/Navbar";
import Main from './components/Main';
import Footer from './components/Footer';
function App(){
  return(
    <div>
      <h1>Components, Props and JSX in the React.</h1>
      <p>Components are the building blocks of a React application. They are reusable pieces of code that can be used to create complex user interfaces. Props (short for properties) are a way to pass data from a parent component to a child component. JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.</p>
      <hr />
      <Navbar/>
      <section>
        <Main heading="This is Demo One" para="I got the para 1." image='/Demo1.png'/>
        <Main heading="This is Demo Two" para="I got the para 2."/>
      </section>
      <Footer/>
    </div>
  )
}
export default App;