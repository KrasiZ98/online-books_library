import { useParams } from "react-router-dom"
import useFormEdit from "../../hooks/hooks-forms/useFormEdit"

export const Edit = () => {
    const params = useParams();
    const  { value, setValue, changeValue, onSubmit } = useFormEdit(params.id)
    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" onSubmit={onSubmit}>
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p className="field">
                        <label for="title">Title</label>
                        <span className="input">
                            <input type="text" name="title" id="title"  value={value.title} onChange={changeValue}/>
                        </span>
                    </p>
                    <p className="field">
                        <label for="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description" value={value.description} onChange={changeValue}></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label for="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" value={value.imageUrl} onChange={changeValue} />
                        </span>
                    </p>
                    <p className="field">
                        <label for="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" value={value.type} onChange={changeValue}>
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="ClassNameic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section>
    )
}