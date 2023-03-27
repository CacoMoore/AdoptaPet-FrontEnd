import InfoOne from "../components/infoOne";
import InfoTwo from "../components/infoTwo";

const Info = () => {

    return (
        <div
            style={{ borderRadius: '5px', minHeight: '100vh' }}
        >
         <div className="m-4">
           <InfoOne/> 
         </div>
         <div className="m-4">
           <InfoTwo/> 
         </div>
         

        </div>
    )
}
export default Info;