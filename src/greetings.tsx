export const Greetings = () => {
  const name = 'Windel'
  const occupation = 'Software Engineer'

  //react fragment, allows us to return multiple elements without a wrapper element
  return <>
    <p> {name} Lorem ipsum dolor sit amet.</p>
    {/* {occupation === "Software Engineer" && <p>Occupation: Programmer</p>}
    {occupation === "Teacher" && <p>Occupation: Instructor</p>}
    {occupation === "Farmer" && <p>Occupation: Agriculturist</p>} */}

    {
      occupation === "Software Engineer" ?
        <p>Occupation: Programmer</p> :
        <p>Occupation: Agriculturist</p>
    }
  </>
}