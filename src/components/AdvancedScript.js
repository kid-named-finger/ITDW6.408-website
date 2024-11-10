import { useState } from 'react';
import Slideshow from './AutoSlideshow';
import SVGMap from './SVGMap';

function AdvancedScript() {
    return (
        <>
            <div className='container-fluid' style={{minHeight: '60vh'}}>
                <main class=" row bg bg-success" style={{minHeight: '80vh;'}}>
                    <div class="col-12 col-md-12">
                        <div class="row p-0 m-0">
                            <button class="col-6 col-md-12 btn btn-primary" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#slideshowform" aria-expanded="false" aria-controls="collapseExample">
                                Slide Show
                            </button>
                            <button class="col-6 col-md-12 btn btn-primary" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#mapform" aria-expanded="false" aria-controls="collapseExample">
                                SVG Map
                            </button>
                            <button class="col-6 col-md-12 btn btn-primary" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#addressform" aria-expanded="false" aria-controls="collapseExample">
                                Address Autocompletion
                            </button>
                            <button class="col-6 col-md-12 btn btn-primary" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#dropform" aria-expanded="false" aria-controls="collapseExample">
                                Drag and Drop
                            </button>
                        </div>
                    </div>

                    <div class="col-12 col-md-12">
                        <div>
                            <div class="collapse collapse mt-2" id="slideshowform">
                                <div class="col-12 col-md-12 card card-body bg-danger" style={{minHeight: '70vh'}}>
                                    <Slideshow/>
                                </div>
                            </div>
                            <div class="collapse collapse mt-2" id="mapform">
                                <div class="card card-body bg-primary" style={{minHeight: '70vh'}}>
                                    <SVGMap/>
                                </div>
                            </div>
                            <div class="collapse collapse mt-2" id="addressform">
                                <div class="card card-body bg-primary" style={{minHeight: '70vh'}}>
                                    <form class="row g-3" style={{color: 'white'}}>
                                        
                                    Address
                                        
                                    </form>
                                </div>
                            </div>
                            <div class="collapse collapse mt-2" id="dropform">
                                <div class="card card-body bg-primary" style={{minHeight: '70vh'}}>
                                    <form class="row g-3" style={{color: 'white'}}>
                                        
                                    Drag and drop
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default AdvancedScript;