import useFormCreate from "../../hooks/hooks-forms/useFormCreate"

export const Create = () => {
    const { value, setValue, changeValue, onSubmit } = useFormCreate();
    return (
        <section id="create-page" className="create">
        <form id="create-form" onSubmit={onSubmit}>
            <fieldset>
                <legend>Add new Book</legend>
                <p className="field">
                    <label htmlFor="title">Title</label>
                    <span className="input">
                        <input type="text" name="title" id="title" placeholder="Title" value={value.title} onChange={changeValue}/>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea name="description" id="description" placeholder="Description"  value={value.description} onChange={changeValue}></textarea>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Image"   value={value.imageUrl} onChange={changeValue}/>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="type">Type</label>
                    <span className="input">
                        <select id="type" name="type"  value={value.type} onChange={changeValue}>
                            <option value="Fiction">Fiction</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Clasic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Add Book" />
            </fieldset>
        </form>
    </section>
    )
}