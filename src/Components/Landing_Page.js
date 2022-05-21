import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Landing_Page() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
          navigate('/home');
        }
      }, []);
    return (
        <div className="md:container md:mx-auto">
            
        </div>
    )
}

export default Landing_Page
