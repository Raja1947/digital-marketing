
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import List from './component/List';

function App() {
  const data=[{
    id:"1",
    name:"raja",
    class:"a"
  },
  {
    id:'2',
    name:'sonu',
    class:'b'
  },
  {
    id:"11",
    name:"rdaja",
    class:"ab"
  },
  {
    id:'21',
    name:'saonu',
    class:'zb'
  }

]
  return (
   <>
   <Header/>
   <Home/>
   <Footer/>
   <List data={data}/>
   </>
  );
}

export default App;
