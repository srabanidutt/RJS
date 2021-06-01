import './App.css';
import Button from './components/button'
function App() {
   var hArr=[["Hello"],["Hello","Hello"],["Hello","Hello","Hello"],["Hello","Hello","Hello","Hello"]]
    /*let i,j;
    for(i=1;i<=4;i++)
      for(j=1;j<=i;j++)
        hArr[i][j]="Hello"*/
      
  console.log(hArr);   
  return (
    <>
    <div className="dwidth">
      <table className="displayHello">
      {hArr.map((items, index) => {
        return (
          <tr key={index}>
            {items.map((subItems, sIndex) => {
              return <td key={sIndex} className="Hello"> {subItems} </td>;
            })}
          </tr>
        );
      })}
      </table>
      </div>
      
      <Button/>
    </>    
      
  );
}

export default App;
