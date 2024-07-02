

interface ExperienceLabelProps {
  from: string
  to?: string
  isCurrent?: boolean
}

const YearLabel = ({from, to, isCurrent}: ExperienceLabelProps) => {
return (
  <div className="flex justify-between ">
    <p>{from}</p>
    {isCurrent && <p>PRESENT</p>}
    {!isCurrent && <p>{to}</p>}
  </div>
)
}

export default YearLabel
