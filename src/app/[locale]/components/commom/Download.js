import React from 'react';
import { DownloadIcon } from 'lucide-react';


const Download = () => {
    return (
        <div>
            <a href="/CV-Vaishakhi-patel-Frontend-developer.pdf" download>
                <button className='flex justify-center items-center cursor-pointer'>
                    <DownloadIcon color="white" size={20} />
                    {/* <span  className='ps-1 text-white'>Resume</span>  */}
                </button>
            </a>
        </div>
    );
};

export default Download;
