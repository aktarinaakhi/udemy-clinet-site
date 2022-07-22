import './App.css';
import Banner from './components/Banner';
import BecomeAnInstructor from './components/BecomeAnInstructor';
import BoardSelectionOfCourses from './components/BoardSelectionOfCourses';
import Brands from './components/Brands';
import FeaturedTopicsByCategory from './components/FeaturedTopicsByCategory';
import StudentsAreViewing from './components/StudentsAreViewing';
import TopCategorys from './components/TopCategorys';
import Transform from './components/Transform';
import UdemyBusiness from './components/UdemyBusiness';
import Footer from './shared/Footer';
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
      <Brands />
      <UdemyBusiness />
      <Transform />
      <Footer />

    </div>
  );
}

export default App;
