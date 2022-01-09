
import {memo} from 'react'

const DescList=memo(({title, list})=>{

  return <section className='desc-list'>
    <h2>{title}</h2>
      { Object.keys(list).sort().map((item, i)=>{
        return <div key={i}>
          <h4 className='item-name'>{item}</h4>
          <p>{list[item]}</p>
        </div>
      })}
    </section>
  }
)
export default DescList