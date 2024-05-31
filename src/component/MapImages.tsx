import img1 from './../assets/map_1.png'
import img2 from './../assets/map_2.png'

function MapImages (){
    return(
        <div className="position-absolute d-flex justify-content-between translate-middle-y  overflow-hidden">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
        </div>
    )
}

export default MapImages;