function LoginSubmit(props: any) {
    return (
        <button type="button" className="bg-black text-white px-4 py-2 rounded-full font-bold mt-4 mb-32">{props.children}
        </button>
    )
}

export default LoginSubmit;