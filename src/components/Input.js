const Input = ({ handler }) => {

    const inputHandler = (value) => {
        handler(value)
    }

    return(
        <div className="input-container">
            <input type="text"
                   placeholder="Regio"
                   onChange={ (e) => inputHandler(e.target.value)}
            />
        </div>
    )

}

export default Input