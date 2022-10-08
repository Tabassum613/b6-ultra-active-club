import React, { useEffect, useState } from 'react';
import data from '../../Data/Exercise.json';
import './AllExercise.css';
import ExerciseCard from '../ExerciseCard/ExerciseCard'
import SIdeBar from '../SideBar/SIdeBar';


const AllExercise = () => {
    const [allExercise, setAllExercise] = useState([])
    useEffect(() => {
        setAllExercise(data)
    }, [])
    const [exercise, setExercise] = useState([]);
    const HandelBtn = ((selectedItem) => {
        const newList = [...exercise, selectedItem];
        setExercise(newList);
    });
    return (
        <div >

            {
                allExercise ? (
                    <div className='row' style={{ position: "relative" }}>
                        <div className='col-md-9'>
                            <div className="" style={{ padding: "50px 100px" }}>
                                <div className="row">
                                    {
                                        allExercise.map(item => <ExerciseCard Elements={item} key={item.id} setButton={HandelBtn}></ExerciseCard>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3' style={{
                            background: "white", position: "fixed", top: "70px"
                            , right: "0"
                        }}>
                            {
                                <SIdeBar setItem={exercise}></SIdeBar>
                            }
                        </div>
                    </div>
                ) : <span>Loading</span>
            }
        </div>
    );
};

export default AllExercise;