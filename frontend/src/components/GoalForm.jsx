import { useState } from "react"
import { useDispatch } from "react-redux"
import { createGoal } from "../features/goals/goalSlice"

function GoalForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()
    const onChange = e => setText(e.target.value)

    const onSubmit = e => {
        e.preventDefault()
        
        dispatch(createGoal(text))
    }
  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input type="text" name="text" id="text" placeholder="Please add a goal name" value={text} onChange={onChange} />
            </div>
            <div className="form-group">
                <button type="submit" className="btn">Submit</button>
            </div>
        </form>
    </section>
  )
}

export default GoalForm