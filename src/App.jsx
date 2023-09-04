import './App.css'
import data from "./assets/data"
import Card from "./components/Card"
import Header from "./components/Header"

function App() {
  const cards = data.map(item => {
    return (
      <Card
          key={item.id}
          {...item}
      />
    )
  })
  return (
    <div>
      <Header />
      <section className ="card-container">
        {cards}
      </section>
    </div>
  )
}

export default App
