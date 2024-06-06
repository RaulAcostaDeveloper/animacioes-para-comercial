import Image from "next/image"

export const Elemento1 = () => {
    return (
        <div className="Elemento1">
            <div className="picture">
                <div className="imgContainer">
                    <Image alt="image" src={'/icons/usuario2.png'} width={50} height={50}/>
                </div>
            </div>
            <div className="cajitasBox">
                <div className="cajita"></div>
                <div className="cajita"></div>
                <div className="cajita"></div>
            </div>
        </div>
    )
}