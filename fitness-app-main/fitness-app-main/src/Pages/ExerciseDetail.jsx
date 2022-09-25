import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import { exerciseOptions, FetchData, YoutubeOptions } from '../utils/fetchData';
import Details from '../Components/Details';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercise from '../Components/SimilarExercise';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState([])
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    const FetchExerciseDetails = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'
       const exerciseVideosData = await FetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name} exercise`, YoutubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
      setExerciseDetail(exerciseDetailData)
       const targetMuscleExercisesData = await FetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await FetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    }
    FetchExerciseDetails()
  },[id])

  return (
    <div>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
       <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </div>
  )
}

export default ExerciseDetail