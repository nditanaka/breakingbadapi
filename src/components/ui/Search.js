import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('')
    const onChange = (q) => {setText(q)
     getQuery(q)}
     return (
        <section className="search">
        <form action="">
            <input type="text"
             className="form-control"
             placeholder="Search characters" 
             id="" value={text} 
             onChange={(e)=> onChange(e.target.value)} autofocus/>
        </form>
            
        </section>
    )
}

export default Search
