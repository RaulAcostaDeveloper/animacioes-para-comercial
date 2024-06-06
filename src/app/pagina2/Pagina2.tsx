import Image from "next/image"

export const Pagina2 = () => {
    return (
        <div className="pagina2">
            <img src="./images/pag2background.jpg" alt="" />
            <div className="menuIcon">
                <Image src={'/icons/menu.png'} alt=""  width={50} height={50}/>
            </div>
            <div className="imageLogo">
                <Image src={'/images/logoart.jpg'} alt=""  width={60} height={60}/>
            </div>
            <div className="textContainer">
                <div className="text">
                    Where creativity meets legacy: Explore the infinite expressions of modern art.
                </div>
            </div>
        </div>
    )
}