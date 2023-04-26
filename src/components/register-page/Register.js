import useFormRegister from "../../hooks/hooks-forms/useFormRegister"

export const Regtister = () => {
  const { value, setValue, changeValue, onSubmit } = useFormRegister()
    return (
        <section id="register-page" className="register">
        <form id="register-form" onSubmit={onSubmit}>
            <fieldset>
                <legend>Register Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="Email"  value={value.email} onChange={changeValue}/> 
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="Password"  value={value.password} onChange={changeValue}/>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="repeat-pass">Repeat Password</label>
                    <span className="input">
                        <input type="password" name="repass" id="repeat-pass" placeholder="Repeat Password"  value={value.repass} onChange={changeValue}/>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Register" />
            </fieldset>
        </form>
    </section>
    )
}