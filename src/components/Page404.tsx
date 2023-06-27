import React from 'react'
import PageCard from './PageCard'

const Page404 = () => {
  return (
    <PageCard title={'Error 404: La Página no se ha encontrado'}>
      <div className='contenedor-gato '>
        <div className="container-cat">
          <div className="cat">
            <div className="head">
              <div className="ears">
                <div></div>
                <div></div>
              </div>
              <div className="face">
                <div className="eyes">
                  <div></div>
                  <div></div>
                </div>

                <div className="nose">
                  <div className="mustache">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="mustache">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="body">
              <div className="tail"></div>
              <div className="sleep">
              <div>z</div>
              <div>z</div>
              <div>z</div>
              <div>z</div>
              <div>z</div>
              <div>z</div>
            </div>
            </div>

           
          </div>
        </div>
      </div>
    </PageCard>
  )
}

export default Page404