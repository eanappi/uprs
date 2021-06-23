import { ResultsUserProfile } from '../components/ResultsUserProfile'
import { SearchUserProfile } from '../components/SearchUserProfile'
import { useState, useEffect } from 'react'

export const Body = () => {
  const [gender, setGender] = useState()
  const [dataUsers, setDataUsers] = useState([])
  
  const chooseGender = (selectedGender) => {
    setGender(selectedGender)
  }

  useEffect( async () => {
    const dataUserProfileRaw = await fetch(`https://randomuser.me/api/?results=50&nat=es,us&gender=${gender}`)
    const dataUserProfile = await dataUserProfileRaw.json()
    
    setDataUsers(dataUserProfile)
  }, [gender])

  return (
    <div className="container">
      <SearchUserProfile chooseGender={chooseGender} />
      <ResultsUserProfile dataUsers={dataUsers} />
    </div>
  )
}
