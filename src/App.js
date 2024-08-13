import logo from './logo.svg';
import './App.css';
import { useRef, useState} from 'react' ;


function App() {
  const inputRef = useRef(null) ;
  const resultRef = useRef(null) ;
  const [result, setResult] = useState(0) ;

  const tambah = (e) => {
    e.preventDefault() ;
    setResult((result) => result + Number(inputRef.current.value)) ;
  } ;
  
  const kurang = (e) => {
    e.preventDefault() ;
    setResult((result) => result - Number(inputRef.current.value)) ;
  } ;

  const bagi = (e) => {
      e.preventDefault() ;
      setResult((result) => result / Number(inputRef.current.value)) ;
  };

  const kali = (e) => {
    e.preventDefault() ;
    setResult((result) => result * Number(inputRef.current.value)) ;
  };

  const resetInput = (e) => {
    e.preventDefault() ;
    inputRef.current.value = 0 ;
  };


  const resetResult = (e) => {
    e.preventDefault() ;
    setResult((prevVal) => prevVal * 0) ;
  };

  return(
    <div className='App'>
      <div>
        <h1> Calculator Simple</h1>
      </div>
      <form>
        <p ref ={resultRef}>{result}</p>
          <div class="input-container">
            <input type="number" id="input" required="" ref={inputRef}/>

            <div class="underline"></div> 
          </div>
        <br />
        <button className='buttonx' onClick={tambah}>Tambah</button>
        <button className='buttonx' onClick={kurang}>Kurang</button>
        <button className='buttonx' onClick={kali}>Kali</button>
        <button className='buttonx' onClick={bagi}>Bagi</button>
        <button className='buttonx' onClick={resetResult}>Reset Hasil</button>
        <button className='buttonx' onClick={resetInput}>Reset Input</button>
      </form>
    </div>
  );
}

export default App;
