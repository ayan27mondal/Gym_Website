import React, { useRef, useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const exercisesRef = useRef(null);

  // This function will be passed to SearchExercises
  const scrollToExercises = () => {
    if (exercisesRef.current) {
      exercisesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        scrollToExercises={scrollToExercises}
      />
      {/* Attach the ref here */}
      <div ref={exercisesRef}>
        <Exercises
          setExercises={setExercises}
          exercises={exercises}
          bodyPart={bodyPart}
          id='exercise'
        />
      </div>
    </Box>
  );
};

export default Home;
