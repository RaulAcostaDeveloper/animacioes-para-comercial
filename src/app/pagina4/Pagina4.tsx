import Image from "next/image"

export const Pagina4 = () => {
    return (
        <div className="Pagina4">
            <div className="header">
                <div className="logoSpace">
                    <Image src={'/images/pag4Logo.jpg'} alt="logo pag 4" width={232} height={190}/>
                    <span>| DESIGNS</span>
                </div>
                <div className="button">
                    <button>Log in</button>
                </div>
            </div>
            
        </div>
    )
}