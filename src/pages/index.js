import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import IntroSection from "../components/introSection"
// import ProjectSection from '../components/projectSection'
// import ServicesSection from '../components/servicesSection'
// import EventssSection from '../components/eventsSection'
// import ContactSection from '../components/contactSection'
//

export default ({ location }) => {

  const { pathname } = location
  return (
    <>
      <Layout current_path={pathname}>
        <SEO title="Accueil" pathname={pathname} />
        {/* <IntroSection />
        <ServicesSection />
        <ProjectSection />
        <EventssSection />
        <ContactSection /> */}
        <h1>hello world</h1>
      </Layout>
    </>
  )
}
