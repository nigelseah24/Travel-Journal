import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './data'

function App() {
  const cardData = data.map((item, index) => {
    return (
        <Card
            key={item.id}
            item={item}
            lastItem={index === data.length - 1}
        />
        )
    })
    return (
        <>
            <Header />
            {cardData}
        </>
        )
}

export default App
