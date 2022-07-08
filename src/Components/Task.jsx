import { Box } from "./Box"
import { tasks } from "./work"
const Task = () => {

    return(
        <div>
            <section className="heading">
                <h3>Task</h3>
            </section>
            <section>
                {tasks && tasks.map((ele, index) => {
                    return <Box
                    key={ele.id}
                    name={ele.name}
                    label={ele.label}
                    author={ele.author}/>
                })}
            </section>
        </div>
    )
}
export {Task}
