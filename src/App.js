import './App.css';
import Banner from './components/Banner';
import BecomeAnInstructor from './components/BecomeAnInstructor';
import BoardSelectionOfCourses from './components/BoardSelectionOfCourses';
import FeaturedTopicsByCategory from './components/FeaturedTopicsByCategory';
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
      <FeaturedTopicsByCategory />
      <BecomeAnInstructor />

    </div>
  );
}

export default App;
