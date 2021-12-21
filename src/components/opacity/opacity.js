const Opacity = (props) => {
    return <div className='opacity-80 fixed w-full h-screen z-20 bg-black'>
        <button className="text-white" onClick={props.onClick}></button>
    </div>
}

export default Opacity