import { useRef } from 'react'

export const SearchUserProfile = ({chooseGender}) => {
  const selectGenderRef = useRef()
  
  const handleChooseGender = (evt) => {
    chooseGender(selectGenderRef.current.value)
    evt.preventDefault()
  }
  
  return (
    <form className="input-group p-5" onSubmit={handleChooseGender}>
      <select
        ref={selectGenderRef}
        className="form-select"
        defaultValue="default"
        >
        <option value="default">Choose the user profile gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
      <button type="submit" className="btn btn-dark">Search</button>
    </form>
  )
}
