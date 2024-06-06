import Image from "next/image"

export const Footer = () => {
    return (
        <div className="Footer">
            <div className="imgContainer">
                <Image alt="redSocial" width={20} height={20} src={'/icons/1.png'}/>
            </div>
            <div className="imgContainer">
                <Image alt="redSocial" width={20} height={20} src={'/icons/2.png'}/>
            </div>
            <div className="imgContainer">
                <Image alt="redSocial" width={20} height={20} src={'/icons/3.png'}/>
            </div>
            <div className="imgContainer">
                <Image alt="redSocial" width={20} height={20} src={'/icons/4.png'}/>
            </div>
            <div className="imgContainer">
                <Image alt="redSocial" width={20} height={20} src={'/icons/5.png'}/>
            </div>
        </div>
    )
}