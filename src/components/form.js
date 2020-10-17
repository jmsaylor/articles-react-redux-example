import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addArticle} from "../redux/actions";

function Form(props) {
    const [form, setForm] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setForm({[e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addArticle({title: form.title}));
        setForm({});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    onChange={handleChange}
                />
            </div>
            <button type="submit">SAVE</button>
        </form>
    );
}

export default Form;