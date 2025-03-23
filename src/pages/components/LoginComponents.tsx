function LoginInput(props: any) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        props.setFormData((prev: any) => ({ ...prev, [name]: value }));
    }

    return (
        <>
            <label htmlFor={props.name}>{props.text}</label>
            <input
                name={props.name}
                type={props.type}
                value={props.formData[props.name]}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-200 rounded-full" placeholder={props.text}>
            </input>
        </>
    )
}

function LoginSubmit(props: any) {
    return (
        <input type="submit" className="bg-black text-white px-4 py-2 rounded-full font-bold text-center" value={props.children}>
            
        </input>
    )
}

function LoginError(props: any) {
    return (
        <span className="text-red-500">
            {props.children}
        </span>
    )
}

export { LoginInput, LoginSubmit, LoginError }