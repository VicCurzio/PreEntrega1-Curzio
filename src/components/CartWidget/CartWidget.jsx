import "./CartWidget.css"

const CartWidget = () => {
    const carrito = "https://img2.freepng.es/20190325/pb/kisspng-shopping-cart-scalable-vector-graphics-clip-art-car-park-system-finger-scan-cctv-folding-gate-5c989bbeee3ce3.4819941515535052149758.jpg"
    return (
        <div>
            <img className="carrito" src={carrito} alt="Carrito - Imagen" />
            <strong>5</strong>
        </div>
    )
}

export default CartWidget