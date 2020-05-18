import React, {useState} from 'react';

import FamousItem from './FamousItem';
import { getYoutubers } from '../data/youtuberData';

const Famouslist = () => {

    const [data, setData] = useState(getYoutubers());

    return ( 
        <div> 
            <div className="container-main">
            {data.map(each => <FamousItem key={each._id} title={each.title} id={each._id}/>)}
            </div>
        </div>
     );
}

 
export default Famouslist;