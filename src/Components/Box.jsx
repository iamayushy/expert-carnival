const Box = ({name, label, author}) => {
    return (
    <div className="box">
        <section className="box-color">
        <section>
            <input type="checkbox" />
        </section>
        <section>
            <p className="name-text">{name} <span className="label"> {label}</span></p>
            <p>{author}</p>
        </section>
        </section>

    </div>
    )
}
export {Box}
