import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/utilities/ScrollToTop'
import Navbar from './components/utilities/Navbar'
import Footer from './components/utilities/Footer'
import Homepage from './components/homepage/Homepage'
import Faq from './components/faq/Faq'
import Counselors from './components/counselors/Counselors'
import Contact from './components/contact/Contact'
import Program from './components/program-template/Program'
import Inquiries from './components/contact/Inquiries'
import Referrals from './components/contact/Referrals'

function App() {
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    fetchPrograms();
  }, [])

  function fetchPrograms(){
    fetch('http://localhost:1337/programs')
        .then(response => response.json())
        .then(data => setPrograms(data))
  }

  return (
    <Router>
      <ScrollToTop />
        <Navbar 
          programs={programs}
        />
          <Switch>
              <Route exact path ='/' 
                render={(props) => (
                  <Homepage
                    programs={programs}
                  />
                )}
              />
              <Route exact path='/program/:program/:id' component={Program}/>
              <Route exact path ='/faq' component={Faq}/>
              <Route exact path ='/counselors' component={Counselors}/>
              <Route exact path ='/contact' component={Contact}/>
              <Route exact path ='/inquiries' component={Inquiries}/>
              <Route exact path ='/referrals' component={Referrals}/>
            </Switch>
        <Footer />
    </Router>
  );
}

export default App;