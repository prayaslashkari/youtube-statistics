import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import FamousItem from './FamousItem';
import { getYoutubers } from './youtuberData';

const Famouslist = ({onFamous}) => {

    const [data, setData] = useState(getYoutubers());

    return ( 
        <div> 
            <ul>
            {data.map(each => <FamousItem key={each._id} title={each.title} id={each._id}/>)}
            </ul>
        </div>
     );
}

 
export default Famouslist;