import React, { useState } from 'react';
import './SideBar.css'
import swal from 'sweetalert';
import image from '../../images/ProfileImage.png';
import logo from '../../images/location-dot-solid.svg';

const SIdeBar = (props) => {
    const selectedItem = props.setItem;
    let totalTime = 0;
    for (let i = 0; i < selectedItem.length; i++) {
        const getSelectedItem = selectedItem[i];
        totalTime = totalTime + getSelectedItem.time;
    }
    const [breakTime = 0, setBreakTime] = useState();

    const button = (time) => {
        setBreakTime(time)
    }
    const Success = () => {
        swal("Good job!", "Your workout is done", "success");
    }
    return (
        <div className='m-3 pt-2 px-3 '>
            <div className='Bind'>
                <div className='ProfilePicture'>
                    <img src={image} style={{ width: "60px", marginRight: "10px" }} alt="" />
                </div>
                <div>
                    <h5><b>Nuzhut Tabassum</b> </h5>
                    <p><img src={logo} style={{ width: "10px", marginRight: "10px" }} alt="" />Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='d-flex w-100 card-bg'>
                <p>
                    <h4>
                        <b> Age&nbsp;&nbsp;&nbsp;&nbsp;Height&nbsp;&nbsp;&nbsp;&nbsp;Weight</b><br />
                    </h4>

                    <b className='Stext'>25</b>yrs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className='Stext'>5.3</b>fit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className='Stext'>55</b>kg
                </p>



            </div>
            <div className='time'>
                <h6 className='font-weight-bold'>Add a break</h6>
                <ul className='d-flex w-100 card-bg'>
                    <li onClick={() => button(10)}>10</li>
                    <li onClick={() => button(15)}>15</li>
                    <li onClick={() => button(20)}>20</li>
                    <li onClick={() => button(30)}>30</li>
                </ul>
            </div>

            <div className='details'>
                <h6 className='font-weight-bold'>Exercise Details</h6>
                <p className='w-100 card-bg mt-3'><span style={{ marginRight: "20px" }} className=' font-weight-bold'>Exercise time</span> <span className='font-weight-bold text-danger'>{totalTime} minutes</span></p>
                <p className='w-100 card-bg mt-3'><span style={{ marginRight: "37px" }} className=' font-weight-bold'>Break time</span> <span className='font-weight-bold text-danger'>{breakTime} minutes</span></p>
            </div>


            <div className="complete">
                <button onClick={Success} className='btn btn-success btn-sm font-weight-bold mt-2 py-3 w-100'> complete </button>
            </div>

        </div>
    );
};

export default SIdeBar;