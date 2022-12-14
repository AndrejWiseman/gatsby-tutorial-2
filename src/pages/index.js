import * as React from "react"
import Layout from '../components/Layout'
import {StaticImage} from "gatsby-plugin-image"
import AllRecipes from '../components/AllRecipes'
import SEO from '../components/SEO'

export default function Home() {
  return (
      <Layout>
          <SEO title="Home" />
          <main className="page">
              <header className="hero">
                  <StaticImage
                      src="../assets/images/main.jpeg"
                      alt="slika"
                      className="hero-img"
                      placeholder="tracedSVG"
                      layout="fullWidth"
                  ></StaticImage>

                  <div className="hero-container">
                      <div className="hero-text">
                          <h1>Simply recipes</h1>
                          <h4>No fluf, just recipes</h4>
                      </div>
                  </div>
              </header>

              <AllRecipes />

          </main>


      </Layout>

  )
  }
