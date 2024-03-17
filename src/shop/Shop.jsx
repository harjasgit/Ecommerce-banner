import React from 'react'
import PageHeader from '../components/PageHeader'

const showResults = "Showing 01 - 12 of 139 Results"

const Shop = () => {
  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop"/>
      {/* shop page */}
      <div className='shop-page padding-tb'>
        <div className="container">
          <div className="row justify-content-center">
            <div className='col-lg-8 col-12'>
              <article>
                <div className='shop-title d-flex flex-wrap justify-content-between'>
                  <p>{showResults}</p>
                  <div>
                    
                  </div>
                </div>
              </article>
            </div>
            <div className='col-lg-4 col-12'>
              right side
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Shop