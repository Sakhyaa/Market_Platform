import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Cardscomp from './components/cardscomp';
import Cardscomp1 from './components/card1';
import Flipcard from './components/flipcard';
import Card2 from './components/card2';
import Card3 from './components/card3';
import Card4 from './components/card4';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Cardscomp 
         title="New Messages"
         imageurl="https://cdn-icons.flaticon.com/png/128/1306/premium/1306155.png?token=exp=1634816000~hmac=380e4bcd3c5f45ca30adffe2e27ea185"
         />
         <Card4 
         image="https://cdn-icons.flaticon.com/png/128/2936/premium/2936656.png?token=exp=1634823885~hmac=c2ee664dd932bf078d543fd933a36b1b"
         title="Saved jobs"
         count="0"
         />
        
         <div>
         <Flipcard
         title="Writing & Translation"
         imageurl="https://cdn-icons-png.flaticon.com/512/1170/1170170.png"
         />
         </div>

         <Card3
         profile="https://cdn-icons.flaticon.com/png/128/552/premium/552909.png?token=exp=1634820031~hmac=7b264707a0b69a1ab8da0c15a9ffe644"
         name="Navaneeth"
         job="WEB DEVELOPMENT"
         rating="5.0"
         start="1,000.00"
         queue="0"
         />
         <Cardscomp1 
           title="Post Earnings"
           imageurl="https://cdn-icons-png.flaticon.com/128/3749/3749784.png"
         />
          
         <Card2
         title="Video & Animation"
         imageurl="https://cdn-icons-png.flaticon.com/128/1705/1705398.png"
         />
        

        
     </div>

    </div>
  );
}

export default App;
