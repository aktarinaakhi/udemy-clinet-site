import './App.css';
import Banner from './components/Banner';
import BoardSelectionOfCourses from './components/BoardSelectionOfCourses';
import StudentsAreViewing from './components/StudentsAreViewing';
import TopCategorys from './components/TopCategorys';
import Navigation from './shared/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <BoardSelectionOfCourses />
      <StudentsAreViewing />
      <TopCategorys />

    </div>
  );
}

export default App;
