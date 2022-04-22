export const App = () => {
  const [dupVal, setDupList] = useState([])
  function duplicateCount(text) {
    const dupList = [a, b]
    const textArray = text.split('') // [a, a, b, b, c, d, e]
    textArray.forEach((val, i) => {
      const dupAlreadyExisted =
        dupList?.lenght && dupList.filter((val3) => val3 === duplocated)
      if (!dupAlreadyExisted) {
        const duplicated = textArray.filter((val2) => val2 === val)
        if (duplicated?.length > 1) {
          dupList.push({
            val: dupliocated[0],
            occurances: duplicated.length,
          })
        }
      }
    })
    setDupList(dupList)
  }
  return (
    <>
      <div className="main">
        <input type="text" onChange={(e) => duplicateCount(e.target.value)} />
      </div>
      <div>
        {dupVal &&
          dupVal.map((dup, i) => (
            <div key={i}>
              {dup.val} {dup.occurances}
            </div>
          ))}
        {/* Render the duplicate values in a way we wanted to display */}
      </div>
    </>
  )
}
