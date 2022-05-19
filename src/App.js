import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/utilities/ScrollToTop'
import Navbar from './components/utilities/Navbar'
import Footer from './components/utilities/Footer'
import Homepage from './components/homepage/Homepage'
import Faq from './components/faq/Faq'
import Spinner from './components/utilities/Spinner'
import Contact from './components/contact/Contact'
import Program from './components/program-template/Program'
import Inquiries from './components/contact/Inquiries'
import Referrals from './components/contact/Referrals'
import axios from 'axios'

function App() {
  const [programs, setPrograms] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchPrograms();
  }, [])

  function fetchPrograms(){
    setIsLoading(true)
    axios.get('https://changing-ways-backend.herokuapp.com/api/programs').then(res => {
      setPrograms(res.data.data)
      setIsLoading(false)
    })
  }

  if ( isLoading ) return <Spinner />

  return (
    <Router>
      <ScrollToTop />
        <Navbar 
          programs={programs}
        />
          <Switch>
              <Route exact path ='/' 
                render={() => (
                  <Homepage
                    programs={programs}
                  />
                )}
              />
              <Route exact path='/program/:program/:id' component={Program}/>
              <Route exact path ='/faq' component={Faq}/>
              <Route exact path ='/about' component={Program}/>
              <Route exact path ='/contact' component={Contact}/>
              <Route exact path ='/inquiries' component={Inquiries}/>
              <Route exact path ='/referrals' component={Referrals}/>
            </Switch>
        <Footer />
    </Router>
  );
}

export default App;