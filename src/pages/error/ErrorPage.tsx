import img404 from '../../assets/404.jpg'

const ErrorPage = () => {
    return (
        <>
            <button className={'btn'}>Back to Home page</button>
            <div className={'error-page'}>
                <img src={img404} alt="404" />
            </div>
        </>
    )
}

export default ErrorPage
