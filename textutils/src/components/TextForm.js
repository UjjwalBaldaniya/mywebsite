import React, {useState} from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState('Enter text hear');

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Convert to Uppercase</button>
        </div>
    )
}
