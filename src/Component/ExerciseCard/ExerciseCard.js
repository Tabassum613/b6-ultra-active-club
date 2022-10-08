import React from 'react';
import './ExerciseCard.css'


const ExerciseCard = (props) => {
    const { name, img, time, details } = props.Elements;
    return (

        <div className="col-md-4">
            <div className="box m-3 p-3">
                <div className="">

                    <div className="Image-area py-3">
                        <img src={img} alt="" style={{ width: "100%", height: "150px" }} />
                    </div>
                    <div className="content-area text-center">
                        <h5 className="text-center font-weight-bold">{name}</h5>
                        <p> {details}</p>
                        <p className='font-weight-bold'>Time <span className="text-danger">{time} minutes</span></p>
                        <p className="text-danger"><b>{ }</b></p>
                    </div>
                    <div className="button-area text-center">
                        <button className="btn btn-success font-weight-bold w-100" onClick={() => props.setButton(props.Elements)}> Add to list</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ExerciseCard;