import './Index.scss'

export const Button = ({ text, icon, click}) => {
    return (
        <button className='btn' onClick={click}>{text}{icon}</button>
    )
}
export const Container = ({children}) =>{
    return(
        <div className='container'>
            {children}
        </div>
    )
}