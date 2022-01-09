
const InfoBox=({label, icon, data, alt})=>{

  return (
    <div className="info-box">
      <h3>{label}</h3>
      <img className="icon" src={icon} alt={alt}/>
      <div className='data-container'>
        {!Array.isArray(data) ? (
          <h2>{data}</h2>
        ) : (
          data.map((item, i) => <h2 key={i}>{item}</h2>)
        )}
      </div>
    </div>
  );
}

export default InfoBox