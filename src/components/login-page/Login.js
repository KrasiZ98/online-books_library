import useFormLogin from "../../hooks/hooks-forms/useLoginForm"

export const Login = () => {
    const  {value, setValue, changeValue, onSubmit} = useFormLogin();

    return (
        <section id="login-page" className="login">
        <form id="login-form" onSubmit={onSubmit}>
            <fieldset>
                <legend>Login Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="Email" value={value.email} onChange={changeValue}/>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="Password" value={value.password} onChange={changeValue}/>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Login" />
            </fieldset>
        </form>
    </section>
    )
}