import { useState } from "react"

const Attendance = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeleted,setIsDeleted] = useState(false);

  return (
    <div>
      Attendance
    </div>
  )
}

export default Attendance

