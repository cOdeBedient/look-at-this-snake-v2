import './LevelForm.css'

export default function LevelForm() {
    return (
        <section>
            <label>
                <input name="level" type="radio"></input>Level 1 | 
            </label>
            <label>
                <input name="level" type="radio"></input>Level 2 | 
            </label>
            <label>
                <input name="level" type="radio"></input>Level 3 | 
            </label>
            <label>
                <input name="level" type="radio"></input>Level 4 | 
            </label>
        </section>
    )
}