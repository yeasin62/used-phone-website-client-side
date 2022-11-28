import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AdvertisedCard from '../AdvertisedCard/AdvertisedCard';

const AdvertisedItems = () => {
    //const [advertiseItems, setAdvertiseItem] = useState([]);

    const {data : advertisedItems = [], refetch}= useQuery({
        queryKey: ['advertisedItems'],
        queryFn: async ()=> {
            const res = await fetch(`http://localhost:5000/advertisedItems`);
            const data = await res.json();
            return data;
        }
    })
    
    return (
        <div className='md:w-4/5 mx-auto my-20'>
            <h2 className='text-2xl font-bold text-center mb-8'>Advertisement</h2>
            <div className='gap-5 mx-auto grid grid-cols-4 justify-evenly'>
                {
                    advertisedItems?.map(advertisedItem => <AdvertisedCard key={advertisedItem._id} advertisedItem={advertisedItem}></AdvertisedCard>)
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;