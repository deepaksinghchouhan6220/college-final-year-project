import Header from "./header/header.js"
import Categories from "./demo/categories.js"
import NewProducts from "./new_product/NewProducts.js"
import Landing_Img from "./landing_img/landing_img.js"
import Wooden from "./products/wooden/wooden.js"
import Contact from "./contact/contact.js"
import Footer from "./footer/footer.js"
import Signin from "./signin/signin.js"
import Signup from "./signup/signup.js"
import TabSection from "./tabSection/tabsection.js"
import Painting from "./products/painting/painting.js"
import Pottery from "./products/Pottery/pottery.js"
import { Route,Switch } from "react-router-dom"
import {Router} from "react-router"

function App() {
  return (
    <>
     
      
      <Header/>
     
             
       
      <Switch>
      <Route exact path='/' >
      <Landing_Img/>
      <Categories/>
      <NewProducts/>
      <TabSection />
      </Route>

      <Route exact path='/home' >
      <Landing_Img/>
      <Categories/>
      <NewProducts/>
      <TabSection />
      </Route>


      {/* <Route exact path='/home' component={Landing_Img} /> */}
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/wooden' component={Wooden} />
      <Route exact path='/pottery' component={Pottery} />
      <Route exact path='/painting' component={Painting} />
      </Switch>
     
      {/* <Painting /> */}
      {/* <Contact /> */}
     
      {/* <Pottery /> */}
      <Footer />
      {/* <Signin />
      <Signup /> */}
      
    </>
  );
}

export default App;
