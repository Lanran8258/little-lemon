import Header from './Header.js';
import Title from './Title.js';
import Special from './Special.js';
import Footer from './Footer.js';
import Card from './Card.js';

function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Title />
      <Special />
      <Card />
      <Footer />  
    </div>
  );
}

export default Homepage;