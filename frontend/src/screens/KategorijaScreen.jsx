import { Link, useParams } from "react-router-dom"
import NatragBtn from "../components/NatragBtn";

import Kartica from '../components/Kartica';
import kratkaM from '../icons/muskeFrizure/kratkaM.png';
import srednjaM from '../icons/muskeFrizure/srednjaM.png';
import dugaM from '../icons/muskeFrizure/dugaM.png';
import kratkaZ from '../icons/zenskeFrizure/kratkaZ.png';
import srednjaZ from '../icons/zenskeFrizure/srednjaZ.png';
import dugaZ from '../icons/zenskeFrizure/dugaZ.png';


const KategorijaScreen = () => {
    const params = useParams();

    return (
        <div className="body">
        <div className="naslov">
            <Link to='/'><NatragBtn className="ulijevo"/></Link>
            <h1>Odaberite veličinu vaše kose<hr className="crta" /></h1>
        </div>
        <div className="kartice">
            {params.id === "musko" &&  <Link to='/tretman/km'><Kartica imageURL={kratkaM} naslov="KRATKA KOSA"/></Link>}
            {params.id === "musko" &&  <Link to='/tretman/sm'><Kartica imageURL={srednjaM} naslov="SREDNJA KOSA"/></Link>}
            {params.id === "musko" &&  <Link to='/tretman/dm'><Kartica imageURL={dugaM} naslov="DUGA KOSA"/></Link>}

            {params.id === "zensko" &&  <Link to='/tretman/kz'><Kartica imageURL={kratkaZ} naslov="KRATKA KOSA"/></Link>}
            {params.id === "zensko" &&  <Link to='/tretman/sz'><Kartica imageURL={srednjaZ} naslov="SREDNJA KOSA"/></Link>}
            {params.id === "zensko" &&  <Link to='/tretman/dz'><Kartica imageURL={dugaZ} naslov="DUGA KOSA"/></Link>}   
        </div>
    </div>
    )
}

export default KategorijaScreen
