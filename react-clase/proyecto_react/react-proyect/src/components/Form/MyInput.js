export default function MyFirstComponent({ type, placeholder, valor, funcion, name }) {
    return (
        <input className="myInput" name={name} type={type} placeholder={placeholder} value={valor} onChange={funcion} />
    );
}
