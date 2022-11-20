function Card(props) {
    return (
      <section className='card'>
        <img src={require('../assets/' + props.img)} alt='Katie Zaferes' className='card-img'/>
        <div className='card-stats'>
          <img src={require('../assets/star.png')} alt='star' className='card-star'/>
          <span>{props.rating}</span>
          <span className='gray'>({props.reviewCount}) • </span>
          <span className='gray'>{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='bold'>From ${props.price}</span> / person</p>
      </section>
    );
}

export default Card;