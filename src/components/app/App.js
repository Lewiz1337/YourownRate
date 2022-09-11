import AppHeader from '../appHeader/appHeader'
import AppFooter from '../appFooter/AppFooter';
import Categories from '../categories/Categories';

import CategoryInfo from '../../categoryInfo/CategoryInfo';

import '../../style/button.scss';
import '../../style/style.scss';



function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Categories/>
      <CategoryInfo/>
      <AppFooter/>
    </div>
  );
}

export default App;
