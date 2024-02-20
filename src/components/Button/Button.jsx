export default Button = (children,...props) => {
    const response = <button {...props} >{children}</button>
    
    return response

}