import Image from "next/image"

export const Elemento5 = () => {
    return (
        <div className="Elemento5">
            <div className="insideBox">
                <div className="header">
                    <div className="box1">
                        12
                    </div>
                    <div className="box2">
                        About
                    </div>
                    <div className="box3">
                        <Image src={'/icons/information.png'} alt="information" width={10} height={10}/>
                    </div>
                </div>
                <div className="middleBox">
                    <div className="box1">
                        Weeks
                    </div>
                    <div className="box2">
                        Lorem ipsum, sit amet elit.
                         Quam nemo iusto ipsa. Et error 
                         repellat id modi ullam deleniti 
                         cupiate porro ad, iurem ipsum quidem 
                         accusantium, quo fugiat!
                    </div>
                </div>
                <div className="bottom">
                    <div className="botonsitos">
                        <button>
                            <Image src={'/icons/estrella.png'} alt="information" width={10} height={10}/>
                            4.9</button>
                        <button>2 Hours</button>
                    </div>
                    <div className="botonGrande">
                        <button>Share!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}