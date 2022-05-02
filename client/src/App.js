import { useQuery, gql } from '@apollo/client';
import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

const BUY_ORDERS = gql`
  query BuyOrders {
    buyOrders {
      limit
    }
  }
`;

const SELL_ORDERS = gql`
  query BuyOrders {
    sellOrders {
      limit
    }
  }
`;

function buildChartData(bd, sd) {
  const finalData = {}
  console.log(bd)
  for (const item in bd.buyOrders) {
    if (!(item.limit in finalData)) {
      finalData[item.limit] = {
        buyCount: 0,
        sellCount: 0
      }
    }
  }
  for (const item in sd.sellOrders) {
    if (!(item.limit in finalData)) {
      finalData[item.limit] = {
        buyCount: 0,
        sellCount: 0
      }
    }
  }
  return finalData
}


function App() {
  const { buyLoading, buyError, buyData } = useQuery(BUY_ORDERS);
  const { sellLoading, sellError, sellData } = useQuery(SELL_ORDERS);
  // setTimeout(()=>{
  //   console.log(buyData)
  //   console.log(buildChartData(buyData, sellData))
  // },1000)
  if (buyLoading || sellLoading) return <p>Loading...</p>;
  if (buyError || sellError) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify(sellData)}
      </header> 
    </div>
  );
}

export default App;
