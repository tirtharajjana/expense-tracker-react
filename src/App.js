import './App.css';
import AddTransection from './components/AddTransection';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransectionList from './components/TransectionList';
function App() {
  return (
    <div >
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransectionList />
        <AddTransection />
      </div>
    </div>
  );
}

export default App;
