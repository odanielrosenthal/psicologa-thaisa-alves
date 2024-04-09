export default function Services(props){
    return(
        <div className="px-6 bg-orange rounded-lg m-6 text-white py-4">
            <h2 className="pfMarlet text-2xl py-2 pl-6">{props.titleService}</h2>
            <div className="poppins-light pt-2 ">
                <img src="" alt="" />
                <p className="pr-4 pb-4 pl-6">{props.textService}</p>
            </div>
        </div>

    )
}