import React from 'react';
import { DownloadIcon } from 'lucide-react';


const Download = () => {
    return (
        <div>
            <a href="/CV-Vaishakhi-patel-Frontend-developer.pdf" download>
                <button style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
                    <DownloadIcon color="white" size={20} />Resume
                </button>
            </a>
        </div>
    );
};

export default Download;
