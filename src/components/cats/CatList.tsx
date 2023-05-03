const catImages = [
  'https://media.giphy.com/media/13CoXDiaCcCoyk/giphy-downsized.gif',
  'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
  'https://media.giphy.com/media/WXB88TeARFVvi/giphy.gif',
]

const CatList = () => {
  return (
    <ul className="list-group">
      {catImages.map((img, i) => (
        <li className="list-group-item" key={img}>
          <img src={img} width={'80'} height={'80'} alt={`Cat ${i}`} />
        </li>
      ))}
    </ul>
  )
}

export default CatList
